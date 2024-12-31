import { useNavigate } from 'react-router-dom';

const ProfileFavorites = () => {
  const navigate = useNavigate();
  
  const mockFavorites = [
    {
      id: 1,
      title: "MacBook Pro",
      price: "$1299",
      seller: "Jane Doe",
      image: "https://picsum.photos/200/200"
    },
    {
      id: 2,
      title: "iPhone 13",
      price: "$799",
      seller: "John Smith",
      image: "https://picsum.photos/200/200"
    }
  ];

  const handleListingClick = (id) => {
    navigate(`/listing/${id}`);
  };

  return (
    <div>
      <h2 className="text-xl lg:text-2xl font-bold mb-6">My Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {mockFavorites.map(item => (
          <div 
            key={item.id} 
            onClick={() => handleListingClick(item.id)}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="relative pb-[60%]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-3 lg:p-4">
              <h3 className="font-semibold text-sm lg:text-base">{item.title}</h3>
              <p className="text-teal-600 font-bold text-sm lg:text-base">{item.price}</p>
              <p className="text-gray-500 text-sm">Seller: {item.seller}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileFavorites;
  