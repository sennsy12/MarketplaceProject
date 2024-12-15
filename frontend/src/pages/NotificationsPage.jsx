import { Star, Heart, DollarSign, Package, MessageSquare } from 'lucide-react';

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: 'review',
      icon: <Star className="text-yellow-500" size={20} />,
      title: 'New Review Received',
      message: 'John Doe left you a 5-star review for iPhone 13',
      time: '2 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'price',
      icon: <DollarSign className="text-green-500" size={20} />,
      title: 'Price Drop Alert',
      message: 'MacBook Pro M1 price dropped by $200',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'sold',
      icon: <Heart className="text-red-500" size={20} />,
      title: 'Favorite Item Sold',
      message: 'The PlayStation 5 from your wishlist has been sold',
      time: '3 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'listing',
      icon: <Package className="text-blue-500" size={20} />,
      title: 'New Similar Listing',
      message: 'New Nintendo Switch listing matches your search',
      time: '5 hours ago',
      read: true
    },
    {
      id: 5,
      type: 'message',
      icon: <MessageSquare className="text-teal-500" size={20} />,
      title: 'New Message',
      message: 'Sarah responded to your offer on Camera Lens',
      time: '1 day ago',
      read: true
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <div className="bg-white rounded-lg shadow">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start gap-4 p-4 border-b last:border-0 hover:bg-gray-50 transition-colors ${
              !notification.read ? 'bg-teal-50' : ''
            }`}
          >
            <div className="p-2 bg-white rounded-full shadow-sm">
              {notification.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{notification.title}</h3>
              <p className="text-gray-600">{notification.message}</p>
              <span className="text-sm text-gray-500">{notification.time}</span>
            </div>
            {!notification.read && (
              <span className="w-2 h-2 bg-teal-500 rounded-full mt-2"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
