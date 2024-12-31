const Review = require('../models/Review');
const { catchAsync } = require('../utils/catchAsync');

exports.getUserReviews = catchAsync(async (req, res) => {
  const reviews = await Review.findByUser(req.params.userId);

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: reviews
  });
});

exports.createReview = catchAsync(async (req, res) => {
  const reviewData = {
    ...req.body,
    reviewer_id: req.user.id
  };

  const review = await Review.create(reviewData);

  res.status(201).json({
    status: 'success',
    data: review
  });
});

exports.updateReview = catchAsync(async (req, res) => {
  const review = await Review.update(req.params.id, req.user.id, req.body);

  if (!review) {
    return res.status(404).json({
      status: 'fail',
      message: 'Review not found or unauthorized'
    });
  }

  res.status(200).json({
    status: 'success',
    data: review
  });
});

exports.deleteReview = catchAsync(async (req, res) => {
  const result = await Review.delete(req.params.id, req.user.id);

  if (!result) {
    return res.status(404).json({
      status: 'fail',
      message: 'Review not found or unauthorized'
    });
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
}); 