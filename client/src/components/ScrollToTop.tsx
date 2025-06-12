
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 text-white group-hover:text-lynx-gray transition-colors duration-300" />
    </button>
  );
};

export default ScrollToTop;
