const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const config = require('../config/config');
const { catchAsync } = require('../utils/catchAsync');

const signToken = (id) => {
  return jwt.sign({ id }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn
  });
};

exports.register = catchAsync(async (req, res) => {
  const newUser = await User.create(req.body);
  const token = signToken(newUser.id);

  res.status(201).json({
    status: 'success',
    token,
    data: newUser
  });
});

exports.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide email and password'
    });
  }

  const user = await User.findByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    return res.status(401).json({
      status: 'fail',
      message: 'Incorrect email or password'
    });
  }

  const token = signToken(user.id);

  res.status(200).json({
    status: 'success',
    token
  });
}); 