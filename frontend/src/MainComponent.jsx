import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/Header';
import Footer from './assets/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import NewListingPage from './pages/NewListingPage';
import MessagesPage from './pages/MessagesPage';
import FavoritesPage from './pages/FavoritesPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NotificationsPage from './pages/NotificationsPage';
import AboutPage from './pages/footer/AboutPage';
import CareersPage from './pages/footer/CareersPage';
import PressPage from './pages/footer/PressPage';
import HelpCenterPage from './pages/footer/HelpCenterPage';
import SafetyCenterPage from './pages/footer/SafetyCenterPage';
import TermsPage from './pages/footer/TermsPage';
import PrivacyPage from './pages/footer/PrivacyPage';
import CookiePage from './pages/footer/CookiePage';
import ContactPage from './pages/footer/ContactPage';
import CategoryPage from './pages/CategoryPage';
import SubCategoryPage from './pages/SubCategoryPage';
const MainComponent = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
  <Route path="/category/:categoryId/:subcategoryId" element={<SubCategoryPage />} />
            <Route path="/listing/:id" element={<ProductDetailPage />} />
            <Route path="/new-listing" element={<NewListingPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
<Route path="/profile/listings" element={<ProfilePage />} />
<Route path="/profile/favorites" element={<ProfilePage />} />
<Route path="/profile/reviews" element={<ProfilePage />} />
<Route path="/profile/settings" element={<ProfilePage />} />
<Route path="/notifications" element={<NotificationsPage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/careers" element={<CareersPage />} />
<Route path="/press" element={<PressPage />} />
<Route path="/help" element={<HelpCenterPage />} />
<Route path="/safety" element={<SafetyCenterPage />} />
<Route path="/terms" element={<TermsPage />} />
<Route path="/privacy" element={<PrivacyPage />} />
<Route path="/cookies" element={<CookiePage />} />
<Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default MainComponent;

