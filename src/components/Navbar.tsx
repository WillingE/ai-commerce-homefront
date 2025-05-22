
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-apple-gray-800">AI Commerce</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-apple-gray-500 hover:text-apple-gray-800 px-3 py-2 text-sm font-medium">
              Studio
            </Link>
            <Link to="/" className="text-apple-gray-500 hover:text-apple-gray-800 px-3 py-2 text-sm font-medium">
              Listing Manager
            </Link>
            <Link to="/" className="text-apple-gray-500 hover:text-apple-gray-800 px-3 py-2 text-sm font-medium">
              AI Knowledge
            </Link>
            <Link to="/" className="text-apple-gray-500 hover:text-apple-gray-800 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center">
            <Button
              variant="default"
              className="rounded-full bg-apple-blue hover:bg-blue-600 text-white px-5"
            >
              Try Free
            </Button>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-apple-gray-600 hover:text-apple-gray-800"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link to="/" className="block px-3 py-2 text-base font-medium text-apple-gray-700 hover:text-apple-gray-900">
            Studio
          </Link>
          <Link to="/" className="block px-3 py-2 text-base font-medium text-apple-gray-700 hover:text-apple-gray-900">
            Listing Manager
          </Link>
          <Link to="/" className="block px-3 py-2 text-base font-medium text-apple-gray-700 hover:text-apple-gray-900">
            AI Knowledge
          </Link>
          <Link to="/" className="block px-3 py-2 text-base font-medium text-apple-gray-700 hover:text-apple-gray-900">
            Pricing
          </Link>
          <Button
            variant="default"
            className="w-full mt-4 rounded-full bg-apple-blue hover:bg-blue-600 text-white"
          >
            Try Free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
