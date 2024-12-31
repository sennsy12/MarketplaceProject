const Message = require('../models/Message');
const { catchAsync } = require('../utils/catchAsync');

exports.getConversations = catchAsync(async (req, res) => {
  const conversations = await Message.findConversations(req.user.id);

  res.status(200).json({
    status: 'success',
    results: conversations.length,
    data: conversations
  });
});

exports.getMessages = catchAsync(async (req, res) => {
  const { otherUserId, listingId } = req.params;
  const messages = await Message.findMessages(req.user.id, otherUserId, listingId);

  res.status(200).json({
    status: 'success',
    results: messages.length,
    data: messages
  });
});

exports.sendMessage = catchAsync(async (req, res) => {
  const messageData = {
    sender_id: req.user.id,
    receiver_id: req.params.receiverId,
    listing_id: req.params.listingId,
    content: req.body.content
  };

  const message = await Message.create(messageData);

  res.status(201).json({
    status: 'success',
    data: message
  });
});

exports.markAsRead = catchAsync(async (req, res) => {
  const { messageIds } = req.body;
  const messages = await Message.markAsRead(messageIds, req.user.id);

  res.status(200).json({
    status: 'success',
    data: messages
  });
});

exports.getUnreadCount = catchAsync(async (req, res) => {
  const count = await Message.getUnreadCount(req.user.id);

  res.status(200).json({
    status: 'success',
    data: { count }
  });
}); 