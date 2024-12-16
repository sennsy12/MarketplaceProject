import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { listings, subcategories } from '../data/mockData';
import { Heart, MapPin, Filter } from 'lucide-react';
import FilterSidebar from '../components/filters/FilterSidebar';

const SubCategoryPage = () => {
    const navigate = useNavigate();
    const { categoryId, subcategoryId } = useParams();
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [filteredListings, setFilteredListings] = useState([]);
    const [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        const filtered = listings.filter(listing => 
            listing.category === parseInt(categoryId) &&
            listing.subcategory === subcategoryId
        );
        setFilteredListings(filtered);
    }, [categoryId, subcategoryId]);

    const handleFilterChange = (filters) => {
        let filtered = listings.filter(listing => 
            listing.category === parseInt(categoryId) &&
            listing.subcategory === subcategoryId
        );

        // Apply filters based on the received filter object
        setFilteredListings(filtered);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">
                    {subcategories[categoryId]?.find(sub => sub.id === subcategoryId)?.name}
                </h1>
                <p className="text-gray-600">{filteredListings.length} listings available</p>
            </div>

            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                {/* Mobile Filter Button */}
                <button
                    className="lg:hidden w-full flex items-center justify-center gap-2 px-4 py-2 mb-4 bg-white border rounded-lg"
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                    <Filter size={20} />
                    Show Filters
                </button>

                {/* Filters Sidebar */}
                <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block lg:col-span-1`}>
                    <FilterSidebar 
                        categoryId={categoryId}
                        onFilterChange={handleFilterChange}
                    />
                </div>

                {/* Listings Grid */}
                <div className="lg:col-span-3">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Latest Listings</h2>
                        <select 
                            className="border rounded-md px-4 py-2"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="newest">Sort by: Newest</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredListings.map((listing) => (
                            <div 
                                key={listing.id} 
                                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                                onClick={() => navigate(`/listing/${listing.id}`)}
                            >
                                <div className="relative">
                                    <img 
                                        src={listing.image} 
                                        alt={listing.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <button 
                                        className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Heart size={20} className="text-gray-400" />
                                    </button>
                                </div>
                                
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{listing.title}</h3>
                                    <p className="text-teal-600 font-bold mt-2">
                                        {listing.price} {listing.currency}
                                    </p>
                                    <div className="flex items-center gap-1 mt-2 text-gray-500">
                                        <MapPin size={16} />
                                        <span className="text-sm">{listing.location}</span>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-500">
                                        Condition: {listing.condition}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryPage;
