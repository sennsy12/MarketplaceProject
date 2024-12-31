const db = require('../config/database');
const { catchAsync } = require('../utils/catchAsync');

exports.searchListings = catchAsync(async (req, res) => {
  const {
    query,
    category,
    minPrice,
    maxPrice,
    condition,
    location,
    radius,
    sort,
    page = 1,
    limit = 20,
    ...filters
  } = req.query;

  let sqlQuery = `
    SELECT DISTINCT l.*,
           array_agg(DISTINCT li.image_url) as images,
           u.name as seller_name,
           u.avatar_url as seller_avatar,
           u.rating as seller_rating
    FROM listings l
    LEFT JOIN listing_images li ON li.listing_id = l.id
    JOIN users u ON l.seller_id = u.id
    WHERE l.status = 'active'
  `;

  const values = [];
  let valueCount = 1;

  if (query) {
    sqlQuery += ` AND (
      l.title ILIKE $${valueCount} 
      OR l.description ILIKE $${valueCount}
    )`;
    values.push(`%${query}%`);
    valueCount++;
  }

  if (category) {
    sqlQuery += ` AND (l.category_id = $${valueCount} OR l.subcategory_id = $${valueCount})`;
    values.push(category);
    valueCount++;
  }

  if (minPrice) {
    sqlQuery += ` AND l.price >= $${valueCount}`;
    values.push(minPrice);
    valueCount++;
  }

  if (maxPrice) {
    sqlQuery += ` AND l.price <= $${valueCount}`;
    values.push(maxPrice);
    valueCount++;
  }

  // Add category-specific filters
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      sqlQuery += ` AND l.${key} = $${valueCount}`;
      values.push(value);
      valueCount++;
    }
  });

  // Add location-based search if coordinates provided
  if (location && radius) {
    const [lat, lng] = location.split(',');
    sqlQuery += `
      AND (
        6371 * acos(
          cos(radians($${valueCount})) * 
          cos(radians(l.location_lat)) * 
          cos(radians(l.location_lng) - radians($${valueCount + 1})) + 
          sin(radians($${valueCount})) * 
          sin(radians(l.location_lat))
        ) <= $${valueCount + 2}
      )
    `;
    values.push(parseFloat(lat), parseFloat(lng), parseFloat(radius));
    valueCount += 3;
  }

  sqlQuery += ` GROUP BY l.id, u.id`;

  // Add sorting
  if (sort) {
    const [field, order] = sort.split(',');
    sqlQuery += ` ORDER BY l.${field} ${order.toUpperCase()}`;
  } else {
    sqlQuery += ` ORDER BY l.created_at DESC`;
  }

  // Add pagination
  sqlQuery += ` LIMIT $${valueCount} OFFSET $${valueCount + 1}`;
  values.push(limit, (page - 1) * limit);

  const result = await db.query(sqlQuery, values);

  res.status(200).json({
    status: 'success',
    results: result.rows.length,
    data: result.rows
  });
}); 