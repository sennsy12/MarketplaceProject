import { useState } from 'react';
import { X } from 'lucide-react';


const DescriptionStep = ({ formData, setFormData }) => {
  const [currentTag, setCurrentTag] = useState('');

  const handleChange = (e) => {
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

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-500">Describe your item in detail</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Tell buyers about your item's features, condition, and why it's great."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {formData.tags.map(tag => (
              <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                {tag}
                <button type="button" onClick={() => removeTag(tag)}>
                  <X size={14} className="text-gray-500 hover:text-red-500" />
                </button>
              </span>
            ))}
          </div>
          <form onSubmit={addTag} className="flex">
            <input
              type="text"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Add relevant tags"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};



export default DescriptionStep;