import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`} style={{ 
      margin: 0, 
      padding: 0, 
      top: 0,
      paddingTop: 'env(safe-area-inset-top, 0px)'
    }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-center text-xs sm:text-sm font-normal relative">
        <div className="flex items-center gap-6 sm:gap-12 absolute left-1/2" style={{ transform: 'translateX(calc(-50% + 6px))' }}>
          <Link 
            to="/"
            className="text-white hover:text-lynx-gray transition-colors duration-300 font-space text-xs sm:text-sm"
          >
            {t('home')}
          </Link>
          <Link 
            to="/gallery"
            className="text-white hover:text-lynx-gray transition-colors duration-300 font-space text-xs sm:text-sm"
          >
            {t('gallery')}
          </Link>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-lynx-gray transition-colors duration-300 font-space text-xs sm:text-sm"
          >
            Contact
          </button>
        </div>
        
        <div className="absolute right-0 flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setLanguage('en')}
            className={`text-xs sm:text-sm transition-colors duration-300 ${
              language === 'en' ? 'text-white' : 'text-lynx-gray hover:text-white'
            }`}
          >
            EN
          </button>
          <span className="text-lynx-gray text-xs sm:text-sm">|</span>
          <button
            onClick={() => setLanguage('pt')}
            className={`text-xs sm:text-sm transition-colors duration-300 ${
              language === 'pt' ? 'text-white' : 'text-lynx-gray hover:text-white'
            }`}
          >
            PT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;