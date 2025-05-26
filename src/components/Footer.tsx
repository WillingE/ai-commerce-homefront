import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-apple-gray-800 text-white">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Homywork</h3>
            <p className="text-apple-gray-400 mb-4">
              The future of AI-powered cross-border e-commerce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-apple-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/product#studio-features" className="text-apple-gray-400 hover:text-white">AI Studio</Link></li>
              <li><Link to="/product#listing-manager" className="text-apple-gray-400 hover:text-white">Listing Manager</Link></li>
              <li><Link to="/product#ai-knowledge" className="text-apple-gray-400 hover:text-white">AI Knowledge</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-apple-gray-400 hover:text-white">About</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-apple-gray-700 mt-12 pt-8 text-center text-apple-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Homywork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
