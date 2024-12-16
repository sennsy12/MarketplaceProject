import { useParams, Link } from 'react-router-dom'; 
import { useState } from 'react';
import { subcategories } from '../data/mockData';
import { ArrowRight, Layout, Grid, ListFilter } from 'lucide-react';

const CategoryPage = () => {
    const { categoryId } = useParams();
    const [viewMode, setViewMode] = useState('grid');

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Categories</h1>
                <div className="flex items-center justify-between">
                    <p className="text-gray-600">
                        {subcategories[categoryId]?.length || 0} subcategories available
                    </p>
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-teal-100 text-teal-600' : 'text-gray-400 hover:bg-gray-100'}`}
                        >
                            <Grid size={20} />
                        </button>
                        <button 
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-teal-100 text-teal-600' : 'text-gray-400 hover:bg-gray-100'}`}
                        >
                            <Layout size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid/List View */}
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4' : 'space-y-4'}`}>
                {subcategories[categoryId]?.map(sub => (
                    <Link 
                        key={sub.id}
                        to={`/category/${categoryId}/${sub.id}`}
                        className={`group relative overflow-hidden ${{
                            grid: 'bg-gradient-to-br from-white to-gray-50 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300',
                            list: 'bg-white rounded-lg shadow-md hover:shadow-lg flex items-center',
                        }[viewMode]}`}
                    >
                        <div className={`${viewMode === 'grid' ? 'p-4' : 'p-4 flex-1 flex items-center'}`}>
                            <div className="flex items-center justify-between mb-2">
                                <div className="w-10 h-10 bg-gradient-to-tr from-teal-500 to-teal-200 rounded-lg flex items-center justify-center">
                                    <ListFilter className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                                    {sub.count} listings
                                </span>
                            </div>
                            
                            <h2 className="text-md font-semibold text-gray-900 mb-1 group-hover:text-teal-600">
                                {sub.name}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Browse all listings in {sub.name}
                            </p>

                            <div className="flex items-center mt-2 text-teal-600 font-medium">
                                View Listings
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Empty State */}
            {(!subcategories[categoryId] || subcategories[categoryId].length === 0) && (
                <div className="text-center py-12">
                    <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Layout className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No subcategories found</h3>
                    <p className="text-gray-500">This category doesn't have any subcategories yet.</p>
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
