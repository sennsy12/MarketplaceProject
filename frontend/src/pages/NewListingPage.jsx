import { useState, useCallback } from 'react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import PhotosStep from '../components/NewListing/PhotosStep';
import DetailsStep from '../components/NewListing/DetailsStep';
import DescriptionStep from '../components/NewListing/DescriptionStep';
import PricingStep from '../components/NewListing/PricingStep';
import PreviewStep from '../components/NewListing/PreviewStep';

const NewListingPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
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
  
    const steps = [
      { number: 1, title: 'Upload Photos', description: 'Add photos (e.g., front view, angle shots)' },
      { number: 2, title: 'Item Details', description: 'Provide the information (e.g., brand, color)' },
      { number: 3, title: 'Item Description', description: 'Describe its features and usage (e.g., condition and what makes it special)' },
      { number: 4, title: 'Pricing and Delivery Options', description: 'Setup the Price (e.g., pick up, meet-up or shipping options)' },
      { number: 5, title: 'Preview Listing', description: 'See a summary before listing it (e.g., everything at one spot)' }
    ];
  
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
        isPrimary: images.length === 0 
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
  
    const StepIndicator = () => (
      <div className="mb-8">
        <div className="flex items-center justify-between w-full">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div 
                className={`flex flex-col items-center ${
                  index !== steps.length - 1 ? 'w-full' : ''
                }`}
              >
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${currentStep > step.number ? 'bg-teal-600 text-white' : 
                    currentStep === step.number ? 'bg-teal-100 text-teal-600 border-2 border-teal-600' : 
                    'bg-gray-100 text-gray-400'}
                `}>
                  {currentStep > step.number ? (
                    <Check size={20} />
                  ) : (
                    <span className="font-bold text-base">{step.number}</span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col items-center mt-2 text-center">
                  <span className="text-sm font-medium">{step.title}</span>
                  <span className="text-xs text-gray-500">{step.description}</span>
                </div>
              </div>
              {index !== steps.length - 1 && (
                <div className={`w-full h-1 ${
                  currentStep > step.number + 1 ? 'bg-teal-600' : 
                  currentStep > step.number ? 'bg-teal-200' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  
    const renderStepContent = () => {
      switch (currentStep) {
        case 1:
          return <PhotosStep images={images} setImages={setImages} {...getRootProps() }getInputProps={getInputProps} isDragActive={isDragActive} />;
        case 2:
          return <DetailsStep formData={formData} setFormData={setFormData} categories={categories} conditions={conditions}/>;
        case 3:
          return <DescriptionStep formData={formData} setFormData={setFormData} currentTag={currentTag} setCurrentTag={setCurrentTag} addTag={addTag} removeTag={removeTag} />;
        case 4:
          return <PricingStep formData={formData} setFormData={setFormData} toggleShippingOption={toggleShippingOption}/>;
        case 5:
          return <PreviewStep formData={formData} images={images} />;
        default:
          return null;
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <StepIndicator />
            
            <div className="mb-8">
              {renderStepContent()}
            </div>
  
            <div className="flex justify-between pt-6 border-t">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  <ChevronLeft size={20} />
                  Back
                </button>
              )}
              
              <button
                onClick={() => {
                  if (currentStep === steps.length) {
                    // Submit form
                    console.log('Submit form', formData);
                  } else {
                    setCurrentStep(prev => prev + 1);
                  }
                }}
                className="ml-auto flex items-center gap-2 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                {currentStep === steps.length ? 'Post Listing' : (
                  <>
                    Next
                    <ChevronRight size={20} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default NewListingPage;