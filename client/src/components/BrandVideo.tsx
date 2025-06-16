import { useLanguage } from '../contexts/LanguageContext';
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import LazyVideo from './LazyVideo';

const BrandVideo = () => {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollTrigger({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="relative bg-black">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      {/* Video container */}
      <div className="relative w-full h-screen">
        <LazyVideo
          className="w-full h-full object-cover"
          src="/Brand..mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
        
        {/* Light dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Text section below video */}
      <div className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            ref={elementRef}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space font-bold text-white leading-tight tracking-wide transition-opacity duration-1000 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="block mb-2 sm:mb-4">
              {t('brandVideoTitle1')}
            </span>
            <span className="block text-lynx-gray">
              {t('brandVideoTitle2')}
            </span>
          </h2>

          {/* Decorative line */}
          <div className="mt-8 sm:mt-12 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default BrandVideo;