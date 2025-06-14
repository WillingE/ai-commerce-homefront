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
              <a href="https://www.linkedin.com/company/homywork-inc/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-apple-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
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
