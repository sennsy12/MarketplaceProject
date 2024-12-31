const Notification = require('../models/Notification');
const { catchAsync } = require('../utils/catchAsync');

exports.getNotifications = catchAsync(async (req, res) => {
  const notifications = await Notification.findByUser(req.user.id);

  res.status(200).json({
    status: 'success',
    results: notifications.length,
    data: notifications
  });
});

exports.markAsRead = catchAsync(async (req, res) => {
  const notification = await Notification.markAsRead(req.params.id, req.user.id);

  if (!notification) {
    return res.status(404).json({
      status: 'fail',
      message: 'Notification not found'
    });
  }

  res.status(200).json({
    status: 'success',
    data: notification
  });
});

exports.deleteNotification = catchAsync(async (req, res) => {
  const result = await Notification.delete(req.params.id, req.user.id);

  if (!result) {
    return res.status(404).json({
      status: 'fail',
      message: 'Notification not found'
    });
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
}); 