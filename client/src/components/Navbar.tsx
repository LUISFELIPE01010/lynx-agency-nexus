import { Link, useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();

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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 py-1 sm:py-2 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 flex-1 justify-center">
          <Link
            to="/"
            onClick={() => {
              if (location === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="text-white hover:text-lynx-gray menu-item font-space text-sm sm:text-sm md:text-base transition-colors duration-300 flex items-center"
          >
            {t('home')}
          </Link>
          <Link 
            to="/gallery"
            className="text-white hover:text-lynx-gray menu-item font-space text-sm sm:text-sm md:text-base transition-colors duration-300 flex items-center"
          >
            {t('gallery')}
          </Link>
          <Link
            to="/"
            onClick={() => {
              if (location === '/') {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                // Navigate to home and then scroll to contact after a brief delay
                setTimeout(() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="text-white hover:text-lynx-gray menu-item font-space text-sm sm:text-sm md:text-base transition-colors duration-300 flex items-center"
          >
            Contact
          </Link>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setLanguage('en')}
            className={`text-sm sm:text-base font-medium transition-colors duration-300 flex items-center ${
              language === 'en' ? 'text-white' : 'text-lynx-gray hover:text-white'
            }`}
          >
            EN
          </button>
          <span className="text-lynx-gray text-sm sm:text-base flex items-center">|</span>
          <button
            onClick={() => setLanguage('pt')}
            className={`text-sm sm:text-base font-medium transition-colors duration-300 flex items-center ${
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