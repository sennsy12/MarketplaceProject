const validator = require('validator');

exports.validateListing = (req, res, next) => {
  const { title, description, price, category_id, condition } = req.body;
  const errors = [];

  if (!title || title.length > 100) {
    errors.push('Title is required and must be less than 100 characters');
  }

  if (!description) {
    errors.push('Description is required');
  }

  if (!price || isNaN(price) || price <= 0) {
    errors.push('Valid price is required');
  }

  if (!category_id) {
    errors.push('Category is required');
  }

  if (!condition || !['new', 'like-new', 'good', 'fair', 'poor'].includes(condition)) {
    errors.push('Valid condition is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      status: 'fail',
      message: 'Validation error',
      errors
    });
  }

  next();
};

exports.validateUser = (req, res, next) => {
  const { email, password, name } = req.body;
  const errors = [];

  if (!email || !validator.isEmail(email)) {
    errors.push('Valid email is required');
  }

  if (!password || password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (!name || name.length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      status: 'fail',
      message: 'Validation error',
      errors
    });
  }

  next();
}; 