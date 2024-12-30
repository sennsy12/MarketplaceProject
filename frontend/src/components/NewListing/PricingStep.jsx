

const PricingStep = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Pricing & Delivery</h2>
        <p className="text-gray-500">Set your price and delivery options</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
          <div className="relative">
            <span className="absolute left-4 top-2 text-gray-500">kr</span>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="0"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Delivery Options</label>
          <div className="space-y-3">
            {Object.entries(formData.shippingOptions).map(([option, enabled]) => (
              <label key={option} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={() => toggleShippingOption(option)}
                  className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                />
                <div>
                  <div className="font-medium capitalize">{option}</div>
                  <div className="text-sm text-gray-500">
                    {option === 'pickup' && 'Buyer picks up from your location'}
                    {option === 'delivery' && 'You deliver to the buyer'}
                    {option === 'shipping' && 'Ship to buyer\'s address'}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default PricingStep;