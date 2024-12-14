import { useState } from 'react';
import { Heart, MapPin, Folder, Plus, MoreVertical } from 'lucide-react';

const FavoritesPage = () => {
  const [folders, setFolders] = useState([
    { id: 1, name: 'All Items', default: true },
    { id: 2, name: 'Electronics', default: false },
    { id: 3, name: 'Cars', default: false }
  ]);
  const [selectedFolder, setSelectedFolder] = useState(1);
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "iPhone 13 Pro",
      price: "8999 kr",
      location: "Oslo",
      image: "/iphone-image.jpg",
      date: "2 days ago",
      folderId: 2
    },
    {
      id: 2,
      title: "MacBook Pro M1",
      price: "12999 kr",
      location: "Bergen",
      image: "/macbook-image.jpg",
      date: "1 week ago",
      folderId: 2
    }
  ]);

  const createNewFolder = (e) => {
    e.preventDefault();
    if (newFolderName.trim()) {
      setFolders([...folders, {
        id: folders.length + 1,
        name: newFolderName,
        default: false
      }]);
      setNewFolderName('');
      setShowNewFolder(false);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const filteredFavorites = selectedFolder === 1 
    ? favorites 
    : favorites.filter(item => item.folderId === selectedFolder);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Favorites</h1>
        <button
          onClick={() => setShowNewFolder(true)}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700"
        >
          <Plus size={20} />
          <span>New Folder</span>
        </button>
      </div>

      {/* Folders Navigation */}
      <div className="mb-8">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {folders.map(folder => (
            <button
              key={folder.id}
              onClick={() => setSelectedFolder(folder.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap
                ${selectedFolder === folder.id 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              <Folder size={16} />
              <span>{folder.name}</span>
              {!folder.default && (
                <span className="ml-2 text-sm">
                  {favorites.filter(item => item.folderId === folder.id).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* New Folder Modal */}
      {showNewFolder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Create New Folder</h2>
            <form onSubmit={createNewFolder}>
              <input
                type="text"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Folder name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewFolder(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Favorites Grid */}
      {filteredFavorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFavorites.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button 
                    onClick={() => removeFromFavorites(item.id)}
                    className="p-2 rounded-full bg-white shadow-md text-red-500 hover:bg-red-50"
                  >
                    <Heart size={20} fill="currentColor" />
                  </button>
                  <button className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-50">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-teal-600 font-bold mt-2">{item.price}</p>
                <div className="flex items-center justify-between mt-2 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Heart size={48} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">No favorites in this folder</h2>
          <p className="text-gray-500">Save some items to see them here</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
