import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-12 py-6 flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center"
        >
          <img 
            src="/LYNXx.png" 
            alt="Lynx Agency" 
            className="w-20 h-20 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </Link>
        
        <div className="flex items-center gap-12 mr-8">
          <Link 
            to="/"
            className="text-white hover:text-lynx-gray transition-colors duration-300 font-space text-lg"
          >
            Home
          </Link>
          <Link 
            to="/gallery"
            className="text-white hover:text-lynx-gray transition-colors duration-300 font-space text-lg"
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;