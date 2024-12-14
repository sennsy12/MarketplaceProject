import { useState, useCallback } from 'react';
import { Upload, MapPin, Plus, X, Camera, Package, DollarSign,Star } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const NewListingPage = () => {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    condition: '',
    price: '',
    description: '',
    location: '',
    tags: [],
    shippingOptions: {
      pickup: true,
      delivery: false,
      shipping: false
    }
  });
  const [currentTag, setCurrentTag] = useState('');

  const categories = [
    { id: 'electronics', name: 'Electronics', subcategories: ['Phones', 'Computers', 'Gaming', 'Audio'] },
    { id: 'vehicles', name: 'Vehicles', subcategories: ['Cars', 'Motorcycles', 'Boats', 'Parts'] },
    { id: 'property', name: 'Property', subcategories: ['Apartments', 'Houses', 'Rooms', 'Parking'] },
    { id: 'fashion', name: 'Fashion', subcategories: ['Clothing', 'Shoes', 'Accessories', 'Watches'] }
  ];

  const conditions = ['New', 'Like New', 'Good', 'Fair', 'For Parts'];

  const onDrop = useCallback(acceptedFiles => {
    const newImages = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      isPrimary: images.length === 0 // First image is primary
    }));
    setImages(prev => [...prev, ...newImages]);
  }, [images]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 8
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addTag = (e) => {
    e.preventDefault();
    if (currentTag && !formData.tags.includes(currentTag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const setPrimaryImage = (index) => {
    setImages(prev => prev.map((img, i) => ({
      ...img,
      isPrimary: i === index
    })));
  };

  const toggleShippingOption = (option) => {
    setFormData(prev => ({
      ...prev,
      shippingOptions: {
        ...prev.shippingOptions,
        [option]: !prev.shippingOptions[option]
      }
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Create New Listing</h1>
      
      <form className="space-y-8">
        {/* Images Upload */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Camera size={20} />
            Photos
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div key={index} className="relative aspect-square group">
                <img 
                  src={img.preview} 
                  alt={`Upload ${index + 1}`} 
                  className={`w-full h-full object-cover rounded-lg ${img.isPrimary ? 'ring-2 ring-teal-500' : ''}`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPrimaryImage(index)}
                    className="p-1 bg-white rounded-full hover:bg-teal-50"
                    title="Set as primary"
                  >
                    <Star size={16} className={img.isPrimary ? 'text-teal-500' : 'text-gray-500'} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setImages(images.filter((_, i) => i !== index))}
                    className="p-1 bg-white rounded-full hover:bg-red-50"
                  >
                    <X size={16} className="text-red-500" />
                  </button>
                </div>
              </div>
            ))}
            {images.length < 8 && (
              <div {...getRootProps()} className="cursor-pointer">
                <div className={`aspect-square border-2 border-dashed rounded-lg flex flex-col items-center justify-center
                  ${isDragActive ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-500'}`}>
                  <input {...getInputProps()} />
                  <Upload size={24} className="text-gray-400" />
                  <span className="text-sm text-gray-500 mt-2">
                    {isDragActive ? 'Drop here' : 'Add Photos'}
                  </span>
                </div>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500">First image will be the cover (max 8 images)</p>
        </section>

        {/* Basic Information */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Package size={20} />
            Basic Information
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="What are you selling?"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
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

            <div className="space-y-2">
              <label className="block font-medium">Condition</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select condition</option>
                {conditions.map(condition => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Price</label>
              <div className="relative">
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 pl-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="0"
                />
                <DollarSign className="absolute left-2 top-2.5 text-gray-400" size={20} />
                <span className="absolute right-4 top-2 text-gray-500">kr</span>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Description</h2>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Describe your item in detail..."
          />
        </section>

        {/* Tags */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map(tag => (
              <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                {tag}
                <button type="button" onClick={() => removeTag(tag)}>
                  <X size={14} className="text-gray-500 hover:text-red-500" />
                </button>
              </span>
            ))}
            <form onSubmit={addTag} className="flex">
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                className="px-3 py-1 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Add a tag"
              />
              <button
                type="submit"
                className="bg-teal-500 text-white px-3 py-1 rounded-r-full hover:bg-teal-600"
              >
                <Plus size={20} />
              </button>
            </form>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Delivery Options</h2>
          <div className="space-y-2">
            {Object.entries(formData.shippingOptions).map(([option, enabled]) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={() => toggleShippingOption(option)}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                />
                <span className="capitalize">{option}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <MapPin size={20} />
            Location
          </h2>
          <div className="relative">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Add your location"
            />
            <MapPin className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </section>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
        >
          Post Listing
        </button>
      </form>
    </div>
  );
};

export default NewListingPage;
