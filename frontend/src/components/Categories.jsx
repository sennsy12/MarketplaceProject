import React from 'react';
import { Laptop, Car, Home, Shirt, Trees } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/mockData';

const CategoryIcons = {
    'Electronics': <Laptop />,
    'Vehicles': <Car />,
    'Property': <Home />,
    'Fashion': <Shirt />,
    'Home & Garden': <Trees />
};

const Categories = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white">
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
                            onClick={() => navigate(`/category/${category.id}`)}
                        >
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-3xl mb-4">
                                {CategoryIcons[category.name]}
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
