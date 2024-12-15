const ProfileFavorites = () => {
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
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">My Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockFavorites.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-teal-600 font-bold">{item.price}</p>
                <p className="text-gray-500">Seller: {item.seller}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProfileFavorites;
  