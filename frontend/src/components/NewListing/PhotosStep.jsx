import { useCallback } from 'react';
import { Upload, Star, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';


const PhotosStep = ({ images, setImages, ...props }) => {
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

  const setPrimaryImage = (index) => {
    setImages(prev => prev.map((img, i) => ({
      ...img,
      isPrimary: i === index
    })));
  };

    const calculateDropAreaColSpan = () => {
        if(images.length === 0){
           return 'col-span-2 sm:col-span-4'
        } else if(images.length < 3){
             return 'col-span-1 sm:col-span-2'
        }
        return ''
     };


  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Add Photos</h2>
        <p className="text-gray-500">Add up to 8 photos of your item. First photo will be the cover.</p>
      </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {images.map((img, index) => (
                <div key={index} className="relative aspect-square group">
                    <img
                        src={img.preview}
                        alt={`Upload ${index + 1}`}
                        className={`w-full h-full object-cover rounded-lg ${
                            img.isPrimary ? 'ring-2 ring-teal-500' : ''
                        }`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                        <button
                            type="button"
                            onClick={() => setPrimaryImage(index)}
                            className="p-1.5 bg-white rounded-full hover:bg-teal-50"
                        >
                            <Star size={16} className={img.isPrimary ? 'text-teal-500' : 'text-gray-500'} />
                        </button>
                        <button
                            type="button"
                            onClick={() => setImages(images.filter((_, i) => i !== index))}
                            className="p-1.5 bg-white rounded-full hover:bg-red-50"
                        >
                            <X size={16} className="text-red-500" />
                        </button>
                    </div>
                </div>
            ))}


        {images.length < 8 && (
                <div {...getRootProps()}  className={`cursor-pointer  ${calculateDropAreaColSpan()}`}>
            <div
              className={`aspect-square border-2 border-dashed rounded-lg flex flex-col items-center justify-center
                ${isDragActive ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-500'}`}>
                <input {...getInputProps()} />
              <Upload size={24} className="text-gray-400 mb-2" />
              <span className="text-sm text-gray-500">
                {isDragActive ? 'Drop here' : 'Drag & Drop or Click'}
              </span>
            </div>
          </div>
        )}
            </div>
    </div>
  );
};


export default PhotosStep;