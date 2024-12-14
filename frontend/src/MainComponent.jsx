import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/Header';
import Footer from './assets/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import NewListingPage from './pages/NewListingPage';
import MessagesPage from './pages/MessagesPage';
import FavoritesPage from './pages/FavoritesPage';


const MainComponent = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listing/:id" element={<ProductDetailPage />} />
            <Route path="/new-listing" element={<NewListingPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default MainComponent;

