import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Bell,
  Heart,
  MessageSquare,
  PlusCircle,
  User,
  LogOut,
  Menu,
  X,
  Package,
  Star,
  Settings,
  Plus,
  Home
} from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import SearchDropdown from '../components/SearchDropdown';
import ProfileDropdown from '../components/ProfileDropdown';

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
  const [user, setUser] = useState(null);
    const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
   const [showMobileSearch, setShowMobileSearch] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
    
      // Protected Routes list.
    const protectedRoutes = [
       '/favorites',
       '/messages',
        '/notifications',
        '/new-listing',
          '/profile',
        '/profile/listings',
        '/profile/favorites',
         '/profile/reviews',
          '/profile/settings',
   ]

    
      useEffect(() => {
    const loggedUser = localStorage.getItem('user');
        if (loggedUser) {
       setUser(JSON.parse(loggedUser));
         }
      }, []);


    useEffect(() => {
    const handleClickOutside = (event) => {
          if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
         setShowMobileMenu(false);
             }
    };

    document.addEventListener('mousedown', handleClickOutside);
        return () => {
         document.removeEventListener('mousedown', handleClickOutside);
          };
      }, []);

   const handleLogout = () => {
    localStorage.removeItem('user');
        setUser(null);
       navigate('/');
     };


  const MobileMenuNavigation = (path) => {
        if(!user && protectedRoutes.includes(path)) {
             navigate('/login');
            setShowMobileMenu(false)
         } else{
                navigate(path);
             setShowMobileMenu(false);
      
         }
  };
  

    const handleNavigation = (path) => {
    if(!user && protectedRoutes.includes(path)){
         navigate('/login');
     }
     else {
        navigate(path)
     }

};

const MobileMenu = () => (
        <div ref={mobileMenuRef} className="absolute top-full left-0 w-full bg-white shadow-lg border-t lg:hidden">
      <div className="p-4">
            <div className="space-y-6">
                 {user ? (
                        <>
                             <div className="flex items-center gap-3 px-4 py-3">
                                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white">
                        {user.name.charAt(0)}
                      </div>
                        <div>
                               <div className="font-medium">{user.name}</div>
                           <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                    </div>
                       <div className="border-t pt-2">
                        <div className="space-y-2">
                           <button 
                         onClick={() =>  MobileMenuNavigation('/favorites')}
                             className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 rounded-lg"
                              >
                          <div className="flex items-center gap-3">
                             <Heart size={20} />
                               <span>Favorites</span>
                         </div>
                           <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                               2
                       </span>
                    </button>
                             <button
                       onClick={() => MobileMenuNavigation('/messages')}
                            className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 rounded-lg"
                       >
                            <div className="flex items-center gap-3">
                          <MessageSquare size={20} />
                         <span>Messages</span>
                               </div>
                        <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            4
                        </span>
                           </button>

                     <button
                           onClick={() => MobileMenuNavigation('/notifications')}
                       className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 rounded-lg"
                               >
                       <div className="flex items-center gap-3">
                           <Bell size={20} />
                        <span>Notifications</span>
                              </div>
                       <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                           3
                        </span>
                       </button>
                            </div>
                       </div>

                        <div className="border-t pt-2">
                          <div className="space-y-2">
                             <button 
                             onClick={() => MobileMenuNavigation('/profile')}
                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                            >
                             <User size={20} />
                                <span>Profile</span>
                             </button>
                           
                          <button
                              onClick={() => MobileMenuNavigation('/profile/listings')}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                         >
                           <Package size={20} />
                            <span>My Listings</span>
                           </button>

                            <button
                             onClick={() => MobileMenuNavigation('/profile/favorites')}
                           className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                           >
                              <Heart size={20} />
                         <span>Favorites</span>
                          </button>

                            <button
                           onClick={() => MobileMenuNavigation('/profile/reviews')}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                             >
                             <Star size={20} />
                           <span>Reviews</span>
                           </button>
                         
                              <button
                            onClick={() => MobileMenuNavigation('/profile/settings')}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                               >
                              <Settings size={20} />
                                 <span>Settings</span>
                                </button>

                         <div className="border-t mt-2 pt-2">
                                 <button
                                    onClick={() => {
                                           handleLogout();
                                    setShowMobileMenu(false);
                            }}
                               className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-red-600"
                           >
                                     <LogOut size={20} />
                         <span>Sign out</span>
                        </button>
                      </div>
                            </div>
                       </div>
                   </>
                    ) : (
                     <button
                        onClick={() => MobileMenuNavigation('/login')}
                     className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                       >
                    <User size={20} />
                    <span>Login/Register</span>
                   </button>
               )}
                <div className="border-t pt-4">
                   <button
                       onClick={() =>  handleNavigation('/new-listing')}
                   className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white px-4 py-3 rounded-lg"
                       >
                        <PlusCircle size={20} />
                      New Listing
                    </button>
                     </div>
                </div>
           </div>
       </div>
      );

    return (
        <>
              <header className="bg-white shadow-sm sticky top-0 z-40">
             <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                            <h1
                                onClick={() => navigate('/')}
                           className="text-xl lg:text-2xl font-bold text-teal-600 cursor-pointer"
                            >
                             MarketPlace
                            </h1>
                    </div>

                     <div className="flex items-center gap-4">
                     <button
                          onClick={() => setShowMobileSearch(true)}
                         className="lg:hidden"
                                 >
                                   <Search size={24} />
                          </button>

                                <button
                            className="lg:hidden"
                             onClick={() => setShowMobileMenu(!showMobileMenu)}
                                  >
                            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
                             </button>
                     </div>

                     <div className="hidden lg:flex items-center gap-8 flex-1">
                          <button
                              onClick={() =>  handleNavigation('/new-listing')}
                           className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
                          >
                              <PlusCircle size={20} />
                             <span>New Listing</span>
                            </button>
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
                                  onClick={() => handleNavigation('/favorites')}
                                 className="text-gray-600 hover:text-teal-600 relative"
                                    >
                            <Heart size={24} />
                          
                             </button>
                         <button
                         onClick={() => handleNavigation('/messages')}
                           className="text-gray-600 hover:text-teal-600 relative"
                              >
                           <MessageSquare size={24} />
                              
                       </button>
                           <button
                                onClick={() => handleNavigation('/notifications')}
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
            </div>
            </header>

                <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50">
                  <div className="flex justify-around items-center h-16">
                       <Link
                    onClick={()=>navigate('/')}
                       to="/"
                           className="flex flex-col items-center justify-center text-gray-600 hover:text-teal-600"
                         >
                    <Home size={24} />
                        <span className="text-xs mt-1">Home</span>
                       </Link>
                  
                         <Link
                          to="/favorites"
                       onClick={() =>  handleNavigation('/favorites')}
                        className="flex flex-col items-center justify-center text-gray-600 hover:text-teal-600"
                           >
                           <Heart size={24} />
                      <span className="text-xs mt-1">Favorites</span>
                        </Link>
                    
                           <Link
                          to="/new-listing"
                           className="flex flex-col items-center justify-center -mt-5"
                          onClick={() =>  handleNavigation('/new-listing')}
                          >
                        <div className="bg-teal-600 text-white p-3 rounded-full shadow-lg">
                                   <Plus size={24} />
                             </div>
                           <span className="text-xs mt-1">Sell</span>
                          </Link>

                      <Link
                         onClick={() =>  handleNavigation('/messages')}
                        to="/messages"
                            className="flex flex-col items-center justify-center text-gray-600 hover:text-teal-600 relative"
                              >
                        <MessageSquare size={24} />
                              <span className="text-xs mt-1">Messages</span>
                           </Link>
                   <button
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        className="flex flex-col items-center justify-center text-gray-600 hover:text-teal-600"
                          >
                          <User size={24} />
                          <span className="text-xs mt-1">Menu</span>
                       </button>
                       </div>
              </div>
        
            <style jsx global>{`
               @media (max-width: 1024px) {
            main {
                padding-bottom: 5rem !important;
             }
                }
          `}</style>

             {showMobileMenu && (
             <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
           <div className="absolute right-0 top-0 bottom-0 w-3/5 bg-white shadow-xl">
             <div className="p-4">
                   <button
                           onClick={() => setShowMobileMenu(false)}
                           className="absolute right-4 top-4"
                       >
                     <X size={24} />
                  </button>

                      <div className="mt-8 space-y-6">
                          {user ? (
                            <>
                                 <div className="flex items-center gap-3 px-4 py-3">
                              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white">
                             {user.name.charAt(0)}
                             </div>
                           <div>
                                   <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                                </div>

                        <div className="border-t pt-2">
                                <div className="space-y-2">
                                <button
                                onClick={() => {
                             MobileMenuNavigation('/favorites');

                             }}
                              className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 rounded-lg"
                              >
                              <div className="flex items-center gap-3">
                           <Heart size={20} />
                           <span>Favorites</span>
                                  </div>
                         <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                  2
                         </span>
                             </button>

                             <button
                            onClick={() => {
                             MobileMenuNavigation('/messages');

                                  }}
                            className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 rounded-lg"
                               >
                         <div className="flex items-center gap-3">
                             <MessageSquare size={20} />
                         <span>Messages</span>
                              </div>
                              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            4
                         </span>
                               </button>
                            <button
                                   onClick={() => {
                                         MobileMenuNavigation('/notifications');

                                     }}
                              className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 rounded-lg"
                                >
                            <div className="flex items-center gap-3">
                             <Bell size={20} />
                            <span>Notifications</span>
                             </div>
                                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                     3
                          </span>
                             </button>
                         </div>
                    </div>
                                 <div className="border-t pt-2">
                           <div className="space-y-2">
                              <button
                                 onClick={() => {
                            MobileMenuNavigation('/profile');
                                     }}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                                >
                            <User size={20} />
                                 <span>Profile</span>
                              </button>

                              <button
                                 onClick={() => {
                             MobileMenuNavigation('/profile/listings');
                            }}
                           className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                               >
                             <Package size={20} />
                              <span>My Listings</span>
                           </button>
                       
                          <button
                          onClick={() => {
                        MobileMenuNavigation('/profile/favorites');

                            }}
                                 className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                                 >
                                   <Heart size={20} />
                                <span>Favorites</span>
                          </button>
                   
                              <button
                                  onClick={() => {
                                         MobileMenuNavigation('/profile/reviews');

                            }}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                                  >
                            <Star size={20} />
                           <span>Reviews</span>
                         </button>

                              <button
                            onClick={() => {
                            MobileMenuNavigation('/profile/settings');

                            }}
                                   className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                                   >
                                  <Settings size={20} />
                              <span>Settings</span>
                           </button>
                         <div className="border-t mt-2 pt-2">
                         <button
                           onClick={() => {
                                     handleLogout();
                           setShowMobileMenu(false);
                               }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-red-600"
                                  >
                            <LogOut size={20} />
                              <span>Sign out</span>
                            </button>
                             </div>
                            </div>
                       </div>
                    </>
                       ) : (
                            <button
                                  onClick={() => {
                              MobileMenuNavigation('/login');
                             }}
                             className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg"
                               >
                              <User size={20} />
                          <span>Login/Register</span>
                                 </button>
                            )}
                      </div>
                 </div>
            </div>
     </div>
 )}
     </>
  );
};
export default Header;