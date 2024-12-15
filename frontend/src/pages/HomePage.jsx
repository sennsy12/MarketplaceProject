
import Categories from '../components/Categories';
import FeaturedListings from '../components/FeaturedListings';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Categories />
      <main className="flex-grow max-w-7xl mx-auto px-4 ">
        <section className="mb-12 mt-8">
          <h2 className="text-2xl font-bold mb-6">Featured Listings</h2>
          <FeaturedListings />
        </section>
        <section className="mb-12 mt-8">
          <h2 className="text-2xl font-bold mb-12">Recommended For You</h2>
          <FeaturedListings />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
