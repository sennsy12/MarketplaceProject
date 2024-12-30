import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { subcategories } from '../data/mockData';
import { ArrowRight, Layout, Grid, ListFilter, Package } from 'lucide-react'; // Import Package Icon

const CategoryPage = () => {
    const { categoryId } = useParams();
    const [viewMode, setViewMode] = useState('grid');

    const currentSubcategories = subcategories[categoryId] || [];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="mb-8 flex justify-between items-center">
                <h1 className="text-3xl font-semibold text-gray-900">
                    Browse Categories
                </h1>

               {currentSubcategories.length > 0 &&  
                <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                        {currentSubcategories.length} subcategories
                    </span>
                    <div className="flex items-center space-x-2 rounded-md border border-gray-200 overflow-hidden">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`px-3 py-2 text-sm rounded-l-md focus:outline-none ${
                                viewMode === 'grid'
                                    ? 'bg-teal-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                           <Grid size={18}/>
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`px-3 py-2 text-sm rounded-r-md focus:outline-none ${
                                viewMode === 'list'
                                    ? 'bg-teal-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            <Layout size={18}/>
                        </button>
                    </div>
                </div>
                }
            </div>

            {/* Subcategories Grid/List */}
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}`}>
                {currentSubcategories.map((sub) => (
                  <Link 
                        key={sub.id}
                        to={`/category/${categoryId}/${sub.id}`}
                        className={`group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ${
                            viewMode === 'list' ? 'flex items-center p-4' : 'p-4'
                            
                        }`}
                    >
                            {/* Icon and Count (Top of card) */}
                            {viewMode === 'grid' && <div className="flex items-center justify-between mb-3">
                                <div className="w-10 h-10 bg-gradient-to-tr from-teal-500 to-teal-200 rounded-lg flex items-center justify-center">
                                    <ListFilter className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                                    {sub.count} listings
                                </span>
                            </div>}

                        
                        {/* Content of card */}
                        
                        <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                            {viewMode === 'list' && <div className="w-10 h-10 bg-gradient-to-tr from-teal-500 to-teal-200 rounded-lg flex items-center justify-center mr-4">
                                 <ListFilter className="w-5 h-5 text-white" />
                             </div>}
                             <h2 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 mb-1">
                                    {sub.name}
                                </h2>
                             {viewMode === 'grid' &&   <p className="text-sm text-gray-500 mb-2">
                                    Browse all listings in {sub.name}
                                </p>}
                             {viewMode === 'list' && <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full mb-2 flex items-center text-sm ">
                                    {sub.count} listings
                                </span> }
                           <div className="flex items-center mt-2 text-teal-600 font-medium">
                                View Listings
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                           </div>
                        </div>
                   
                </Link>
                ))}
            </div>

           {/* Empty State */}
           {currentSubcategories.length === 0 && (
                <div className="text-center py-12">
                      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <Package className="w-10 h-10 text-gray-400" />
                        </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No subcategories found</h3>
                    <p className="text-gray-500">This category doesn't have any subcategories yet.</p>
                </div>
            )}
        </div>
    );
};

export default CategoryPage;