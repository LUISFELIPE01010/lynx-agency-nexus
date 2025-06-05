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
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between text-[14px] font-normal">
        <div></div>
        
        <div className="flex items-center gap-8 text-center">
          <Link 
            to="/"
            className="text-white hover:text-lynx-gray transition-colors duration-300 font-space text-sm"
          >
            Home
          </Link>
          <Link 
            to="/gallery"
            className="text-white hover:text-lynx-gray transition-colors duration-300 font-space text-sm"
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;