
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';
import logoPng from '@/logop.png';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import OptimizedImage from './OptimizedImage';

const Hero = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { getParallaxTransform, getZoomTransform } = useScrollAnimations({
    parallaxSpeed: 0.3,
    zoomSpeed: 0.05
  });

  // Optimized video loading with immediate playback and aggressive preloading
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Configure for immediate autoplay with aggressive preloading
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.preload = 'auto';
      video.defaultMuted = true;
      
      // Force video to start loading immediately
      video.load();
      
      // Set initial opacity to prevent gray flash
      setVideoLoaded(true);
      
      // Multiple event handlers for reliability
      const handleCanPlay = async () => {
        try {
          await video.play();
        } catch (error) {
          video.muted = true;
          try {
            await video.play();
          } catch (retryError) {
            console.log('Video autoplay blocked, will play on user interaction');
          }
        }
      };
      
      const handleLoadedData = () => {
        video.play().catch(() => {
          video.muted = true;
          video.play();
        });
      };
      
      const handleLoadStart = () => {
        // Ensure video starts from beginning
        video.currentTime = 0;
      };
      
      // Add event listeners
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('loadedmetadata', () => {
        video.currentTime = 0;
      });
      
      // Immediate play attempt
      const immediatePlayTimeout = setTimeout(() => {
        if (video.readyState >= 1) {
          handleCanPlay();
        }
      }, 50);
      
      // Secondary attempt
      const secondaryPlayTimeout = setTimeout(() => {
        if (video.readyState >= 2) {
          handleCanPlay();
        }
      }, 200);
      
      return () => {
        clearTimeout(immediatePlayTimeout);
        clearTimeout(secondaryPlayTimeout);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('loadstart', handleLoadStart);
      };
    }
  }, []);

  useEffect(() => {
    // Fast, lightweight animations with null checks
    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }

    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.2 }
      );
    }

    if (arrowRef.current) {
      gsap.fromTo(arrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.4 }
      );

      // Subtle floating animation for arrow
      gsap.to(arrowRef.current, {
        y: -8,
        duration: 1.5,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden touch-pan-y bg-black">
      {/* Black background fallback - always visible */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Ultra-optimized background video */}
      <video 
        ref={videoRef}
        className="absolute w-full h-full object-cover opacity-100"
        src="/fundonew.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controls={false}
        style={{ 
          objectFit: 'cover',
          objectPosition: 'center',
          willChange: 'transform',
          WebkitTransform: 'translate3d(0,0,0)',
          transform: 'translate3d(0,0,0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          WebkitPerspective: 1000,
          perspective: 1000,
          backgroundColor: '#000000'
        }}
        onLoadedData={() => {
          setVideoLoaded(true);
        }}
        onCanPlay={() => {
          setVideoLoaded(true);
        }}
        onLoadStart={() => {
          // Força o vídeo a começar do início
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        }}
        onError={(e) => {
          console.log('Video loading error, using fallback');
          setVideoLoaded(false);
        }}
      />
      
      {/* Optimized gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#95A0A2]/15 to-black/90 pointer-events-none"></div>

      {/* Main content container - responsive and centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center items-start text-left py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Logo and Title - responsive layout */}
        <div className="flex flex-col items-start justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 w-full">
          {/* Main Logo - fully responsive sizes */}
          <div ref={logoRef} className="flex justify-start w-full">
            <img 
              src="/LYNXx.png" 
              alt="Lynx Agency" 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 object-contain opacity-90 max-w-full h-auto"
            />
          </div>

          {/* Title and subtitle - fully responsive */}
          <div className="text-left w-full max-w-none lg:max-w-5xl space-y-4 sm:space-y-6 md:space-y-8">
            <p 
              ref={subtitleRef}
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-space text-lynx-gray leading-tight font-bold hero-title-zoom hover:scale-105 transition-transform duration-300 cursor-default tracking-tight"
            >
              {t('heroSubtitle1')}
            </p>

            <p 
              ref={subtitleRef}
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-space text-white leading-tight font-bold hero-title-zoom hover:scale-105 transition-transform duration-300 cursor-default tracking-tight"
            >
              {t('heroSubtitle2')}
            </p>

            {/* Buttons - fully responsive */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8 sm:pt-10 md:pt-12 justify-start items-stretch sm:items-start w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative w-full sm:flex-1 min-w-0 px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-white text-black font-space font-semibold rounded-lg hover:bg-lynx-gray transition-all duration-300 hover:scale-105 hover:shadow-xl btn-glow text-sm sm:text-base md:text-lg touch-manipulation"
              >
                <span className="relative z-10">{t('exploreWork')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-lynx-gray rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <a 
                href="https://wa.me/17329276563"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:flex-1 min-w-0 px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 border-2 border-lynx-gray text-lynx-gray font-space font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 hover:scale-105 btn-glow text-sm sm:text-base md:text-lg text-center touch-manipulation"
              >
                {t('startProject')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll arrow - fully responsive positioning */}
      <div 
        ref={arrowRef}
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer group z-20"
      >
        <div className="p-3 sm:p-4 md:p-5 rounded-full border border-lynx-gray/30 group-hover:border-white transition-all duration-300 group-hover:bg-white/5 backdrop-blur-sm">
          <ArrowDown className="text-lynx-gray group-hover:text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
