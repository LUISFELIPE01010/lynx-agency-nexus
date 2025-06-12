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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-8 md:gap-12 flex-1 justify-center">
          <Link 
            to="/"
            className="text-white hover:text-lynx-gray menu-item font-space text-xs sm:text-sm md:text-base transition-colors duration-300"
          >
            {t('home')}
          </Link>
          <Link 
            to="/gallery"
            className="text-white hover:text-lynx-gray menu-item font-space text-xs sm:text-sm md:text-base transition-colors duration-300"
          >
            {t('gallery')}
          </Link>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-lynx-gray menu-item font-space text-xs sm:text-sm md:text-base transition-colors duration-300"
          >
            Contact
          </button>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => setLanguage('en')}
            className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
              language === 'en' ? 'text-white' : 'text-lynx-gray hover:text-white'
            }`}
          >
            EN
          </button>
          <span className="text-lynx-gray text-sm sm:text-base">|</span>
          <button
            onClick={() => setLanguage('pt')}
            className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
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