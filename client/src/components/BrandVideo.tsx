
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
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Calculate scroll progress when section is in view
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale based on scroll progress
  const scale = 0.3 + (scrollProgress * 0.7); // Starts at 30%, grows to 100%
  const opacity = Math.min(1, scrollProgress * 2); // Fade in effect

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
      style={{ position: 'sticky', top: 0 }}
    >
      {/* Video Container with Dynamic Scaling */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div 
          className="relative overflow-hidden rounded-lg"
          style={{ 
            transform: `scale(${scale})`,
            transition: 'transform 0.1s ease-out',
            width: '90%',
            height: '80%',
            opacity: opacity
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
              filter: 'brightness(0.8) contrast(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
        </div>
      </div>

      {/* Text Overlay */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <h2 
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space font-bold text-center leading-tight"
          style={{ 
            opacity: Math.max(0, scrollProgress - 0.3),
            transform: `translateY(${Math.max(0, (1 - scrollProgress) * 50)}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }}
        >
          More than brands,<br />
          <span className="text-lynx-gray">we create movements.</span>
        </h2>
      </div>
    </section>
  );
};

export default BrandVideo;
