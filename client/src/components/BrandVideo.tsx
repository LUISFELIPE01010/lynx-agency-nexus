import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BrandVideo = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress for the sticky effect
      const scrollStart = 0;
      const scrollEnd = windowHeight * 1.5; // Extended scroll distance
      const currentScroll = Math.max(0, -rect.top);
      const progress = Math.max(0, Math.min(1, currentScroll / scrollEnd));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation phases based on scroll progress
  const videoOpacity = Math.min(1, scrollProgress * 3); // Video fades in quickly
  const textOpacity = scrollProgress > 0.6 ? Math.min(1, (scrollProgress - 0.6) * 2.5) : 0; // Text appears later
  const textTransform = Math.max(0, (1 - scrollProgress) * 80); // Text slides up

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative h-screen overflow-hidden"
        style={{ 
          position: 'sticky', 
          top: 0,
          zIndex: 10
        }}
      >
        {/* Video Background with reveal effect */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            opacity: videoOpacity,
            transform: `scale(${1 + (1 - videoOpacity) * 0.1})`,
            transition: scrollProgress === 0 ? 'none' : 'opacity 0.1s ease-out, transform 0.1s ease-out'
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/Brand..mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ 
              objectFit: 'cover',
              filter: 'brightness(0.7) contrast(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Text overlay that appears over the video */}
        <div 
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{ 
            opacity: textOpacity,
            transform: `translateY(${textTransform}px)`,
            transition: scrollProgress < 0.6 ? 'none' : 'opacity 0.2s ease-out, transform 0.2s ease-out'
          }}
        >
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-wide">
              <span className="block opacity-90 hover:opacity-100 transition-opacity duration-300">
                More than brands,
              </span>
              <span className="block text-lynx-gray mt-2 hover:text-white transition-colors duration-500">
                we create movements.
              </span>
            </h2>
            
            {/* Decorative Line */}
            <div 
              className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"
              style={{ 
                opacity: textOpacity * 0.6,
                transform: `scaleX(${textOpacity})`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
              }}
            />
            
            {/* Subtitle */}
            <p 
              className="mt-6 text-lg sm:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
              style={{ 
                opacity: textOpacity * 0.8,
                transition: 'opacity 0.3s ease-out 0.2s'
              }}
            >
              {t('brandMovementSubtitle') || 'Every brand has a story. We craft narratives that resonate, inspire, and transform audiences into communities.'}
            </p>
          </div>
        </div>
      </section>
      
      {/* Spacer to create scrollable distance */}
      <div className="h-screen" />
    </>
  );
};

export default BrandVideo;