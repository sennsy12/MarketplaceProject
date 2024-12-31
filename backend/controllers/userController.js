const User = require('../models/User');
const { catchAsync } = require('../utils/catchAsync');

exports.getProfile = catchAsync(async (req, res) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    status: 'success',
    data: user
  });
});

exports.updateProfile = catchAsync(async (req, res) => {
  const updatedUser = await User.updateProfile(req.user.id, req.body);

  res.status(200).json({
    status: 'success',
    data: updatedUser
  });
});

exports.getUserListings = catchAsync(async (req, res) => {
  const query = `
    SELECT l.*, array_agg(li.image_url) as images
    FROM listings l
    LEFT JOIN listing_images li ON li.listing_id = l.id
    WHERE l.seller_id = $1
    GROUP BY l.id
    ORDER BY l.created_at DESC
  `;
  
  const result = await db.query(query, [req.user.id]);

  res.status(200).json({
    status: 'success',
    results: result.rows.length,
    data: result.rows
  });
}); 