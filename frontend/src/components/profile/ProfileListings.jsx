const ProfileListings = () => {
    const mockListings = [
      {
        id: 1,
        title: "Vintage Camera",
        price: "$299",
        image: "https://picsum.photos/200/200",
        status: "active"
      },
      {
        id: 2,
        title: "Mountain Bike",
        price: "$899",
        image: "https://picsum.photos/200/200",
        status: "sold"
      },
      {
        id: 3,
        title: "Gaming Console",
        price: "$499",
        image: "https://picsum.photos/200/200",
        status: "active"
      }
    ];
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">My Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockListings.map(listing => (
            <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{listing.title}</h3>
                <p className="text-teal-600 font-bold">{listing.price}</p>
                <span className={`inline-block px-2 py-1 rounded text-sm ${
                  listing.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {listing.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProfileListings;
  