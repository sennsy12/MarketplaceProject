import { Search, Bell, Heart, MessageSquare, PlusCircle, User, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchDropdown from '../components/SearchDropdown';
import ProfileDropdown from '../components/ProfileDropdown';
const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };
  

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 
              onClick={() => navigate('/')} 
              className="text-2xl font-bold text-teal-600 cursor-pointer"
            >
              MarketPlace
            </h1>
            <button 
              onClick={() => navigate('/new-listing')}
              className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              <PlusCircle size={20} />
              <span>New Listing</span>
            </button>
          </div>
          
          <div className="relative flex-1 mx-12">
            <input
              type="text"
              placeholder="Search..."
              onFocus={() => setShowSearch(true)}
              onBlur={() => setTimeout(() => setShowSearch(false), 200)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            <SearchDropdown isVisible={showSearch} />
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/favorites')}
              className="text-gray-600 hover:text-teal-600 relative"
            >
              <Heart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </button>
            <button 
              onClick={() => navigate('/messages')}
              className="text-gray-600 hover:text-teal-600 relative"
            >
              <MessageSquare size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
            </button>
            <button 
              onClick={() => navigate('/notifications')}
              className="text-gray-600 hover:text-teal-600"
            >
              <Bell size={24} />
            </button>
            {user ? (
  <div className="relative">
    <button 
      onClick={() => setShowProfileDropdown(!showProfileDropdown)}
      className="flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700"
    >
      <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white">
        {user.name.charAt(0)}
      </div>
      <span>{user.name}</span>
    </button>
    <ProfileDropdown 
      isVisible={showProfileDropdown} 
      onClose={() => setShowProfileDropdown(false)}
      onLogout={handleLogout}
    />
  </div>
) : (
  <button 
    onClick={() => navigate('/login')}
    className="flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700"
  >
    <User size={24} />
    Login/Register
  </button>
)}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;