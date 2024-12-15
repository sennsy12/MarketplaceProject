import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-teal-400">About MarketPlace</Link></li>
              <li><Link to="/careers" className="hover:text-teal-400">Careers</Link></li>
              <li><Link to="/press" className="hover:text-teal-400">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-teal-400">Help Center</Link></li>
              <li><Link to="/safety" className="hover:text-teal-400">Safety Center</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-teal-400">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-teal-400">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-teal-400">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="hover:text-teal-400">Facebook</Link>
              <Link to="https://twitter.com" className="hover:text-teal-400">Twitter</Link>
              <Link to="https://instagram.com" className="hover:text-teal-400">Instagram</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2024 MarketPlace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
