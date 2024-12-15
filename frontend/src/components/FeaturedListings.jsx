import { useState } from 'react';
import { Heart, MapPin, Folder, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeaturedListings = () => {
  const navigate = useNavigate();
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [folders, setFolders] = useState([
    { id: 1, name: 'All Items' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Cars' }
  ]);
  const [newFolderName, setNewFolderName] = useState('');

  const listings = [
    {
      id: 1,
      title: "iPhone 13 Pro",
      price: "8999 kr",
      location: "Oslo",
      image: "/iphone-image.jpg",
      saved: false
    },
    {
      id: 2,
      title: "MacBook Pro M1",
      price: "12999 kr",
      location: "Bergen",
      image: "/macbook-image.jpg",
      saved: true
    },
    {
      id: 3,
      title: "PlayStation 5",
      price: "5499 kr",
      location: "Trondheim",
      image: "/ps5-image.jpg",
      saved: false
    },
    {
      id: 4,
      title: "Nintendo Switch OLED",
      price: "3499 kr",
      location: "Stavanger",
      image: "/switch-image.jpg",
      saved: false
    }
  ];

  const handleSave = (e, listing) => {
    e.stopPropagation();
    setSelectedListing(listing);
    setShowFolderModal(true);
  };

  const addToFolder = (folderId) => {
    //  folder logic here
    setShowFolderModal(false);
  };

  const createNewFolder = (e) => {
    e.preventDefault();
    if (newFolderName.trim()) {
      const newFolder = {
        id: folders.length + 1,
        name: newFolderName
      };
      setFolders([...folders, newFolder]);
      setNewFolderName('');
      addToFolder(newFolder.id);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <div 
            key={listing.id}
            className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
            onClick={() => navigate(`/listing/${listing.id}`)}
          >
            <div className="relative">
              <img 
                src={listing.image} 
                alt={listing.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button 
                className={`absolute top-3 right-3 p-2 rounded-full bg-white shadow-md
                  ${listing.saved ? 'text-red-500' : 'text-gray-400'}`}
                onClick={(e) => handleSave(e, listing)}
              >
                <Heart size={20} fill={listing.saved ? "currentColor" : "none"} />
              </button>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg group-hover:text-teal-600 transition-colors">
                {listing.title}
              </h3>
              <p className="text-teal-600 font-bold mt-2">{listing.price}</p>
              <div className="flex items-center gap-1 mt-2 text-gray-500">
                <MapPin size={16} />
                <span className="text-sm">{listing.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Folder Selection Modal */}
      {showFolderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Save to Folder</h2>
            <div className="space-y-2 mb-4">
              {folders.map(folder => (
                <button
                  key={folder.id}
                  onClick={() => addToFolder(folder.id)}
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  <Folder size={20} className="text-gray-400" />
                  <span>{folder.name}</span>
                </button>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <form onSubmit={createNewFolder}>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    placeholder="New folder name"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                  >
                    <Plus size={20} />
                    Create
                  </button>
                </div>
              </form>
            </div>

            <button
              onClick={() => setShowFolderModal(false)}
              className="mt-4 w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedListings;
