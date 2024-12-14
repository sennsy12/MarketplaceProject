import React from 'react';
import { Laptop, Car, Home, Shirt, Trees, Dumbbell, Gamepad, Book, Dog, Wrench } from 'lucide-react';

const Categories = () => {
    const categories = [
        { id: 1, name: 'Electronics', count: '2,534', icon: <Laptop /> },
        { id: 2, name: 'Vehicles', count: '1,232', icon: <Car /> },
        { id: 3, name: 'Property', count: '843', icon: <Home /> },
        { id: 4, name: 'Fashion', count: '3,144', icon: <Shirt /> },
        { id: 5, name: 'Home & Garden', count: '1,732', icon: <Trees /> },
        { id: 6, name: 'Sports', count: '932', icon: <Dumbbell /> },
        { id: 7, name: 'Toys & Games', count: '632', icon: <Gamepad /> },
        { id: 8, name: 'Books', count: '1,123', icon: <Book /> },
        { id: 9, name: 'Pets', count: '445', icon: <Dog /> },
        { id: 10, name: 'Services', count: '766', icon: <Wrench /> }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-8">
            <div className="sticky top-0 bg-white shadow-sm z-10">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">Browse Categories</h2>
                    <input
                        type="text"
                        placeholder="Search categories..."
                        className="border rounded-md px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-3xl mb-4">
                                {category.icon}
                            </div>
                            <div className="text-center">
                                <span className="text-lg font-semibold text-gray-800 group-hover:text-teal-600">
                                    {category.name}
                                </span>
                                <div className="text-sm text-gray-500 mt-1">
                                    {category.count} items
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
