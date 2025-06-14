import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const BrandVideo = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { isVisible } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '-10% 0px -10% 0px'
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && !isPlaying) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Handle autoplay restrictions
        video.muted = true;
        video.play().then(() => setIsPlaying(true));
      });
    } else if (!isVisible && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
  }, [isVisible, isPlaying]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fixed Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/Brand..mp4"
          muted
          loop
          playsInline
          preload="metadata"
          style={{ 
            objectFit: 'cover',
            filter: 'brightness(0.7) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-wide">
            <span className="block opacity-90 hover:opacity-100 transition-opacity duration-300">
              More than brands,
            </span>
            <span className="block text-lynx-gray mt-2 hover:text-white transition-colors duration-500">
              we create movements.
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
          
          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            {t('brandMovementSubtitle') || 'Every brand has a story. We craft narratives that resonate, inspire, and transform audiences into communities.'}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
};

export default BrandVideo;