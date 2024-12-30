import { MapPin } from 'lucide-react';


const PreviewStep = ({ formData, images }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Preview Your Listing</h2>
        <p className="text-gray-500">Review your listing before posting</p>
      </div>

      <div className="space-y-6">
        {/* Images Preview */}
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <img 
            src={images.find(img => img.isPrimary)?.preview} 
            alt="Primary"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Basic Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{formData.title}</h3>
          <p className="text-3xl font-bold text-teal-600">kr {formData.price}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{formData.condition}</span>
            <span>•</span>
            <span>{formData.category}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <MapPin size={18} />
            <span>{formData.location}</span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <h4 className="font-semibold">Description</h4>
          <p className="whitespace-pre-wrap">{formData.description}</p>
        </div>

        {/* Tags */}
        {formData.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {formData.tags.map(tag => (
              <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Delivery Options */}
        <div className="space-y-2">
          <h4 className="font-semibold">Delivery Options</h4>
          <div className="space-y-1">
            {Object.entries(formData.shippingOptions)
              .filter(([_, enabled]) => enabled)
              .map(([option]) => (
                <div key={option} className="text-sm text-gray-600 capitalize">
                  ✓ {option}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};


export default PreviewStep;