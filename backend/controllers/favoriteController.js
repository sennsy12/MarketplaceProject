const db = require('../config/database');
const { catchAsync } = require('../utils/catchAsync');

exports.getFavorites = catchAsync(async (req, res) => {
  const query = `
    SELECT l.*, 
           array_agg(li.image_url) as images,
           u.name as seller_name,
           u.avatar_url as seller_avatar
    FROM favorites f
    JOIN listings l ON f.listing_id = l.id
    JOIN users u ON l.seller_id = u.id
    LEFT JOIN listing_images li ON li.listing_id = l.id
    WHERE f.user_id = $1
    GROUP BY l.id, u.id
    ORDER BY f.created_at DESC
  `;

  const result = await db.query(query, [req.user.id]);

  res.status(200).json({
    status: 'success',
    results: result.rows.length,
    data: result.rows
  });
});

exports.addFavorite = catchAsync(async (req, res) => {
  const query = `
    INSERT INTO favorites (user_id, listing_id)
    VALUES ($1, $2)
    RETURNING *
  `;

  const result = await db.query(query, [req.user.id, req.params.listingId]);

  res.status(201).json({
    status: 'success',
    data: result.rows[0]
  });
});

exports.removeFavorite = catchAsync(async (req, res) => {
  const query = `
    DELETE FROM favorites
    WHERE user_id = $1 AND listing_id = $2
    RETURNING *
  `;

  const result = await db.query(query, [req.user.id, req.params.listingId]);

  if (!result.rows[0]) {
    return res.status(404).json({
      status: 'fail',
      message: 'Favorite not found'
    });
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
}); 