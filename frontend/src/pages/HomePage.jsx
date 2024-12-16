import Categories from '../components/Categories';
import FeaturedListings from '../components/FeaturedListings';
import { listings } from '../data/mockData';

const HomePage = () => {
  // Get the first 20 listings for featured section
  const featuredListings = listings.slice(0, 20);
  
  // Get different 20 listings for recommended section
  const recommendedListings = listings.slice(20, 40);

  return (
    <div className="min-h-screen flex flex-col">
      <Categories />
      <main className="flex-grow max-w-7xl mx-auto px-4">
        <section className="mb-12 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Listings</h2>
            <span className="text-teal-600">Showing top 20 listings</span>
          </div>
          <FeaturedListings listings={featuredListings} />
        </section>
        
        <section className="mb-12 mt-8">
          <h2 className="text-2xl font-bold mb-12">Recommended For You</h2>
          <FeaturedListings listings={recommendedListings} />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
