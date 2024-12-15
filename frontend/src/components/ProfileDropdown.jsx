import { Settings, User, Heart, Package, Star, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = ({ isVisible, onClose }) => {
  const navigate = useNavigate();

  if (!isVisible) return null;

  const menuItems = [
    { icon: <User size={20} />, label: 'My Profile', path: '/profile' },
    { icon: <Package size={20} />, label: 'My Listings', path: '/profile/listings' },
    { icon: <Heart size={20} />, label: 'My Favorites', path: '/profile/favorites' },
    { icon: <Star size={20} />, label: 'My Reviews', path: '/profile/reviews' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/profile/settings' },
  ];

  return (
    <div className="absolute right-0 top-12 w-56 bg-white rounded-lg shadow-lg border py-2">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            navigate(item.path);
            onClose();
          }}
          className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50 text-gray-700"
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
      <hr className="my-2" />
      <button
        onClick={() => {
          localStorage.removeItem('user');
          window.location.reload();
        }}
        className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50 text-red-600"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default ProfileDropdown;
