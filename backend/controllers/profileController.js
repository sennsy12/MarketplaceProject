const User = require('../models/User');
const { catchAsync } = require('../utils/catchAsync');

exports.getProfile = catchAsync(async (req, res) => {
  const profile = await User.getProfileWithStats(req.params.userId || req.user.id);

  if (!profile) {
    return res.status(404).json({
      status: 'fail',
      message: 'User not found'
    });
  }

  res.status(200).json({
    status: 'success',
    data: profile
  });
});

exports.updateProfile = catchAsync(async (req, res) => {
  const updatedProfile = await User.updateProfile(req.user.id, req.body);

  res.status(200).json({
    status: 'success',
    data: updatedProfile
  });
});

exports.updateSettings = catchAsync(async (req, res) => {
  const settings = await User.updateSettings(req.user.id, req.body);

  res.status(200).json({
    status: 'success',
    data: settings
  });
});

exports.verifyUser = catchAsync(async (req, res) => {
  const verificationResult = await User.verifyUser(req.user.id, req.body);

  res.status(200).json({
    status: 'success',
    data: verificationResult
  });
}); 