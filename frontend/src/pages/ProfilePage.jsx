import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Settings, User, Heart, Package, Star } from 'lucide-react';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileListings from '../components/profile/ProfileListings';
import ProfileFavorites from '../components/profile/ProfileFavorites';
import ProfileReviews from '../components/profile/ProfileReviews';
import ProfileSettings from '../components/profile/ProfileSettings';

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  const tabs = [
    { icon: <User size={20} />, label: 'Profile', path: '/profile' },
    { icon: <Package size={20} />, label: 'My Listings', path: '/profile/listings' },
    { icon: <Heart size={20} />, label: 'Favorites', path: '/profile/favorites' },
    { icon: <Star size={20} />, label: 'Reviews', path: '/profile/reviews' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/profile/settings' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-4 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - now responsive */}
        <div className="w-full lg:w-64">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl lg:text-2xl font-bold lg:mb-4">
                {user.name.charAt(0)}
              </div>
              <div className="lg:text-center">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow grid grid-cols-2 lg:grid-cols-1">
            {tabs.map((tab) => (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className={`px-4 py-3 flex items-center gap-3 hover:bg-gray-50 ${
                  location.pathname === tab.path ? 'text-teal-600 bg-gray-50' : 'text-gray-700'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white rounded-lg shadow p-4 lg:p-6">
          {location.pathname === '/profile' && <ProfileInfo />}
          {location.pathname === '/profile/listings' && <ProfileListings />}
          {location.pathname === '/profile/favorites' && <ProfileFavorites />}
          {location.pathname === '/profile/reviews' && <ProfileReviews />}
          {location.pathname === '/profile/settings' && <ProfileSettings />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
