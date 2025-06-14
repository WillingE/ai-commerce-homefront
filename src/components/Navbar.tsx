
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const login = () => {
    if (window.location.port === '8000') {
      window.location.href = 'https://homywork.com:8000/PublishLogin'
    } else {
      window.location.href = 'https://homywork.com/PublishLogin'
    }
  }
  return <header className="w-full border-b bg-white sticky top-0 z-50 opacity-90">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-semibold text-apple-gray-800">Homywork</Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`text-base ${location.pathname === '/' ? 'text-apple-blue font-medium' : 'text-apple-gray-600'}`}>
            Home
          </Link>
          <Link to="/product" className={`text-base ${location.pathname === '/product' ? 'text-apple-blue font-medium' : 'text-apple-gray-600'}`}>
            Product
          </Link>
          <Link to="/case-study" className={`text-base ${location.pathname === '/case-study' ? 'text-apple-blue font-medium' : 'text-apple-gray-600'}`}>
            Case Study
          </Link>
          <Link to="/pricing" className={`text-base ${location.pathname === '/pricing' ? 'text-apple-blue font-medium' : 'text-apple-gray-600'}`}>
            Pricing
          </Link>
          <Link to="/about" className={`text-base ${location.pathname === '/about' ? 'text-apple-blue font-medium' : 'text-apple-gray-600'}`}>
            About
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={login} className="hidden md:inline-flex">
            Login
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>;
};

export default Navbar;
