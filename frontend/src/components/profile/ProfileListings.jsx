import { useNavigate } from 'react-router-dom';
import { Eye, TrendingUp } from 'lucide-react';
import { listings } from '../../data/mockData';

const ProfileListings = () => {
  const navigate = useNavigate();
  
  const userListings = listings.slice(0, 3); //  first 3 listings for demo

  return (
    <div>
      <h2 className="text-xl lg:text-2xl font-bold mb-6">My Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {userListings.map(listing => (
          <div 
            key={listing.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden group"
          >
            <div 
              onClick={() => navigate(`/listing/${listing.id}`)}
              className="relative pb-[60%] cursor-pointer"
            >
              <img 
                src={listing.image} 
                alt={listing.title} 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-3 lg:p-4">
              <h3 
                onClick={() => navigate(`/listing/${listing.id}`)}
                className="font-semibold text-sm lg:text-base cursor-pointer hover:text-teal-600"
              >
                {listing.title}
              </h3>
              <p className="text-teal-600 font-bold text-sm lg:text-base">
                {listing.price} {listing.currency}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="inline-block px-2 py-1 rounded text-xs lg:text-sm bg-green-100 text-green-800">
                  Active
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/listing/${listing.id}/statistics`)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    title="View Statistics"
                  >
                    <TrendingUp size={18} />
                  </button>
                  <button
                    onClick={() => navigate(`/listing/${listing.id}`)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    title="View Listing"
                  >
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileListings;
  