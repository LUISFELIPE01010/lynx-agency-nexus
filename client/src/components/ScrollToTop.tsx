import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ScrollToTop = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
        aria-label={t('backToTop')}
        title={t('backToTop')}
      >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;