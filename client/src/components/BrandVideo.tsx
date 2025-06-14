
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

  // Calculate scale and opacity based on scroll progress
  const videoScale = 0.6 + (scrollProgress * 0.4); // Starts at 60%, grows to 100%
  const videoOpacity = Math.min(1, scrollProgress * 1.5); // Video appears quickly
  
  // Text appears only after video is fully visible (after 70% scroll)
  const textOpacity = scrollProgress > 0.7 ? (scrollProgress - 0.7) / 0.3 : 0;
  const textTransform = scrollProgress > 0.7 ? 0 : 30;

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{ 
        position: 'sticky', 
        top: 0,
        background: 'linear-gradient(to bottom, #000000, #1a1a1a)'
      }}
    >
      {/* Video Container with Dynamic Scaling */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div 
          className="relative overflow-hidden"
          style={{ 
            transform: `scale(${videoScale})`,
            transition: 'transform 0.2s ease-out',
            width: '100%',
            height: '100%',
            opacity: videoOpacity,
            borderRadius: scrollProgress > 0.3 ? '0px' : '20px'
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
              filter: 'brightness(0.9) contrast(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>
      </div>

      {/* Text Overlay - Appears after video is fully visible */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <h2 
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space font-bold text-center leading-tight"
          style={{ 
            opacity: textOpacity,
            transform: `translateY(${textTransform}px)`,
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
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
