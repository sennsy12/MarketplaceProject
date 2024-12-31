const db = require('../config/database');
const { catchAsync } = require('../utils/catchAsync');

exports.getListingStatistics = catchAsync(async (req, res) => {
  const query = `
    SELECT 
      l.id,
      l.views,
      COUNT(DISTINCT f.user_id) as favorite_count,
      COUNT(DISTINCT m.id) as message_count,
      (
        SELECT COUNT(*)
        FROM listing_views
        WHERE listing_id = l.id
        AND created_at >= NOW() - INTERVAL '24 HOURS'
      ) as views_last_24h
    FROM listings l
    LEFT JOIN favorites f ON f.listing_id = l.id
    LEFT JOIN messages m ON m.listing_id = l.id
    WHERE l.id = $1
    GROUP BY l.id
  `;

  const result = await db.query(query, [req.params.listingId]);

  res.status(200).json({
    status: 'success',
    data: result.rows[0]
  });
});

exports.getCategoryStatistics = catchAsync(async (req, res) => {
  const query = `
    SELECT 
      c.id,
      c.name,
      COUNT(l.id) as total_listings,
      AVG(l.price) as avg_price,
      COUNT(DISTINCT l.seller_id) as unique_sellers,
      COUNT(CASE WHEN l.status = 'sold' THEN 1 END) as sold_count
    FROM categories c
    LEFT JOIN listings l ON l.category_id = c.id
    WHERE c.id = $1
    GROUP BY c.id
  `;

  const result = await db.query(query, [req.params.categoryId]);

  res.status(200).json({
    status: 'success',
    data: result.rows[0]
  });
});

exports.getUserStatistics = catchAsync(async (req, res) => {
  const query = `
    SELECT 
      u.id,
      COUNT(l.id) as total_listings,
      COUNT(CASE WHEN l.status = 'active' THEN 1 END) as active_listings,
      COUNT(CASE WHEN l.status = 'sold' THEN 1 END) as sold_listings,
      AVG(r.rating) as avg_rating,
      COUNT(DISTINCT r.id) as review_count,
      COUNT(DISTINCT f.listing_id) as total_favorites_received
    FROM users u
    LEFT JOIN listings l ON l.seller_id = u.id
    LEFT JOIN reviews r ON r.reviewed_user_id = u.id
    LEFT JOIN favorites f ON f.listing_id = l.id
    WHERE u.id = $1
    GROUP BY u.id
  `;

  const result = await db.query(query, [req.params.userId]);

  res.status(200).json({
    status: 'success',
    data: result.rows[0]
  });
}); 