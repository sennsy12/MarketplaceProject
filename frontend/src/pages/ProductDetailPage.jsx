import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MapPin, User, Heart, MessageSquare, Clock } from 'lucide-react';
import { listings } from '../data/mockData';

const ProductDetailPage = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const productListing = listings.find(item => item.id === parseInt(id));
    if (productListing) {
      setListing(productListing);
      setSelectedImage(0);
    }
  }, [id]);

  const handleMessageClick = () => {
    navigate('/messages', { 
      state: { 
        productId: listing.id,
        sellerId: listing.seller.id,
        productTitle: listing.title,
        productImage: listing.image,
        sellerName: listing.seller.name,
        productPrice: `${listing.price} ${listing.currency}`
      } 
    });
  };

  if (!listing) return null;

 
  const allImages = [listing.image, ...listing.images];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image Display */}
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={allImages[selectedImage]}
                alt={listing.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : allImages.length - 1))}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                >
                  ←
                </button>
                <button
                  onClick={() => setSelectedImage((prev) => (prev < allImages.length - 1 ? prev + 1 : 0))}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                >
                  →
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-w-1 aspect-h-1 ${
                    selectedImage === index ? 'ring-2 ring-teal-500' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt={`${listing.title} view ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">{listing.title}</h1>
              <button 
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2 rounded-full ${isSaved ? 'text-red-500' : 'text-gray-400'}`}
              >
                <Heart size={24} fill={isSaved ? "currentColor" : "none"} />
              </button>
            </div>

            <p className="text-2xl font-bold text-teal-600">{listing.price} {listing.currency}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={20} />
                <span>{listing.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={20} />
                <span>Posted 2 days ago</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <h2 className="font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{listing.description}</p>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{listing.seller.name}</h3>
                  <p className="text-gray-600">Member since {listing.seller.memberSince}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleMessageClick}
                className="flex-1 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Message Seller
              </button>
              <button className="flex-1 border border-teal-600 text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition">
                Show Phone Number
              </button>
            </div>

            <div className="border-t pt-4">
              <h2 className="font-semibold mb-4">Location</h2>
              <div className="h-64 bg-gray-200 rounded-lg">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  Map will be displayed here
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;
