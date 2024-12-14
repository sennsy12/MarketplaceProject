import { useState } from 'react';
import { MapPin, User, Heart, MessageSquare, Clock } from 'lucide-react';


const ProductDetailPage = () => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/product-main-image.jpg"
                alt="Product"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((img) => (
                <img
                  key={img}
                  src={`/product-image-${img}.jpg`}
                  alt={`Product view ${img}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">iPhone 13 Pro - 256GB</h1>
              <button 
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2 rounded-full ${isSaved ? 'text-red-500' : 'text-gray-400'}`}
              >
                <Heart size={24} fill={isSaved ? "currentColor" : "none"} />
              </button>
            </div>

            <p className="text-2xl font-bold text-teal-600">8999 kr</p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={20} />
                <span>Oslo, Norway</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={20} />
                <span>Posted 2 days ago</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <h2 className="font-semibold mb-2">Description</h2>
              <p className="text-gray-600">
                Excellent condition iPhone 13 Pro with 256GB storage. 
                Includes original box and all accessories. 
                Battery health at 92%. No scratches or dents.
              </p>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-gray-600">Member since 2022</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition">
                <MessageSquare className="inline-block mr-2" size={20} />
                Message Seller
              </button>
              <button className="flex-1 border border-teal-600 text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition">
                Show Phone Number
              </button>
            </div>

            <div className="border-t pt-4">
              <h2 className="font-semibold mb-4">Location</h2>
              <div className="h-64 bg-gray-200 rounded-lg">
                {/* Integrate your map component here */}
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
