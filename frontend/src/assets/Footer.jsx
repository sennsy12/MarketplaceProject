const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-400">About MarketPlace</a></li>
                <li><a href="#" className="hover:text-teal-400">Careers</a></li>
                <li><a href="#" className="hover:text-teal-400">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-400">Help Center</a></li>
                <li><a href="#" className="hover:text-teal-400">Safety Center</a></li>
                <li><a href="#" className="hover:text-teal-400">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-400">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-teal-400">Facebook</a>
                <a href="#" className="hover:text-teal-400">Twitter</a>
                <a href="#" className="hover:text-teal-400">Instagram</a>
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
  