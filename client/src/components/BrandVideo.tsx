
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
      
      // Calculate progress based on how much the section has been scrolled through
      // When section top reaches 0 (fully in view), start the animation
      const scrolledPastTop = Math.max(0, -rect.top);
      const maxScroll = windowHeight * 0.8; // Allow 80% of screen height for animation
      const progress = Math.max(0, Math.min(1, scrolledPastTop / maxScroll));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video scaling: grows from small to full size
  const videoScale = 0.7 + (scrollProgress * 0.3); // 0.7 to 1.0
  const videoOpacity = Math.min(1, scrollProgress * 2);

  // Text reveal: starts after video animation (after 70% progress)
  const textStartProgress = 0.7;
  const textProgress = scrollProgress > textStartProgress 
    ? (scrollProgress - textStartProgress) / (1 - textStartProgress)
    : 0;

  const textOpacity = Math.min(1, textProgress * 2);
  const textTransform = Math.max(0, (1 - textProgress) * 60);

  // Background overlay that appears with text
  const overlayOpacity = Math.min(0.5, textProgress * 0.5);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}
    >
      {/* Video container */}
      <div 
        className="absolute inset-0 w-full h-full flex items-center justify-center"
      >
        <div 
          className="relative overflow-hidden w-full h-full"
          style={{ 
            transform: `scale(${videoScale})`,
            transition: scrollProgress < 0.5 ? 'transform 0.1s ease-out' : 'none',
            opacity: videoOpacity,
            borderRadius: scrollProgress < 0.3 ? '20px' : '0px'
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
          
          {/* Progressive dark overlay for text readability */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"
            style={{ opacity: overlayOpacity }}
          />
        </div>

        {/* Text overlay that appears over the fixed video */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6 lg:px-8"
          style={{ 
            opacity: textOpacity,
            transform: `translateY(${textTransform}px)`,
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <div className="text-center max-w-4xl">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space font-bold leading-tight tracking-wide">
              <span className="block opacity-90 hover:opacity-100 transition-opacity duration-300">
                More than brands,
              </span>
              <span className="block text-lynx-gray mt-2 hover:text-white transition-colors duration-500">
                we create movements.
              </span>
            </h2>
            
            {/* Decorative line */}
            <div 
              className="mt-6 sm:mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent"
              style={{ 
                opacity: textOpacity * 0.6,
                transform: `scaleX(${textProgress})`,
                transition: 'opacity 1s ease-out, transform 1s ease-out'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Invisible spacer to create scroll distance */}
      <div 
        className="absolute top-full w-full"
        style={{ height: '100vh' }}
      />
    </section>
  );
};

export default BrandVideo;
