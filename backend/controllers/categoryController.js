const Category = require('../models/Category');
const { catchAsync } = require('../utils/catchAsync');

exports.getAllCategories = catchAsync(async (req, res) => {
  const categories = await Category.findAll();

  res.status(200).json({
    status: 'success',
    results: categories.length,
    data: categories
  });
});

exports.getCategory = catchAsync(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(404).json({
      status: 'fail',
      message: 'Category not found'
    });
  }

  res.status(200).json({
    status: 'success',
    data: category
  });
});

exports.createCategory = catchAsync(async (req, res) => {
  const category = await Category.create(req.body);

  res.status(201).json({
    status: 'success',
    data: category
  });
}); 