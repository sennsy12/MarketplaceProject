import { MapPin } from 'lucide-react';


const categories = [
  { id: 'electronics', name: 'Electronics', subcategories: ['Phones', 'Computers', 'Gaming', 'Audio'] },
  { id: 'vehicles', name: 'Vehicles', subcategories: ['Cars', 'Motorcycles', 'Boats', 'Parts'] },
  { id: 'property', name: 'Property', subcategories: ['Apartments', 'Houses', 'Rooms', 'Parking'] },
  { id: 'fashion', name: 'Fashion', subcategories: ['Clothing', 'Shoes', 'Accessories', 'Watches'] }
];

const conditions = ['New', 'Like New', 'Good', 'Fair', 'For Parts'];

const DetailsStep = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Item Details</h2>
        <p className="text-gray-500">Tell us about your item</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="What are you selling?"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <optgroup key={category.id} label={category.name}>
                  {category.subcategories.map(sub => (
                    <option key={sub} value={`${category.id}-${sub}`}>{sub}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select condition</option>
              {conditions.map(condition => (
                <option key={condition} value={condition}>{condition}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Add your location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default DetailsStep;