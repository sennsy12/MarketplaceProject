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
        <h2 className="text-xl lg:text-2xl font-bold mb-6">My Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {mockListings.map(listing => (
            <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative pb-[60%]">
                <img 
                  src={listing.image} 
                  alt={listing.title} 
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-3 lg:p-4">
                <h3 className="font-semibold text-sm lg:text-base">{listing.title}</h3>
                <p className="text-teal-600 font-bold text-sm lg:text-base">{listing.price}</p>
                <span className={`inline-block px-2 py-1 rounded text-xs lg:text-sm ${
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
  