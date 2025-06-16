
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
  const { getParallaxTransform, getZoomTransform } = useScrollAnimations({
    parallaxSpeed: 0.3,
    zoomSpeed: 0.05
  });

  // Video is already preloaded by VideoPreloader, so just ensure it plays
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Video should be ready to play since it was preloaded
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
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
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden touch-pan-y">
      {/* Optimized background video - preloaded by VideoPreloader */}
      <video 
        ref={videoRef}
        className="absolute w-full h-[120%] object-cover"
        src="/wallp.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ 
          objectFit: 'cover',
          willChange: 'transform',
          top: '-10%'
        }}
        onLoadedData={() => {
          // Video is ready to play
          if (videoRef.current) {
            videoRef.current.play();
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#95A0A2]/15 to-black/90"></div>

      {/* Main content container - left aligned with more compact spacing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center items-start text-left min-h-[60vh] py-4 pt-6 sm:pt-8 md:pt-10">
        {/* Logo and Title - left aligned layout */}
        <div className="flex flex-col items-start justify-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Main Logo - smaller responsive sizes */}
          <div ref={logoRef} className="flex justify-start">
            <img 
              src="/LYNXx.png" 
              alt="Lynx Agency" 
              className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain opacity-90"
            />
          </div>

          {/* Title and subtitle - left aligned with reduced sizes */}
          <div className="text-left max-w-4xl space-y-3 sm:space-y-4 px-0">
            <p 
              ref={subtitleRef}
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-space text-lynx-gray leading-tight font-bold hero-title-zoom hover:scale-105 transition-transform duration-300 cursor-default tracking-tight"
            >
              {t('heroSubtitle1')}
            </p>

            <p 
              ref={subtitleRef}
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-space text-white leading-tight font-bold hero-title-zoom hover:scale-105 transition-transform duration-300 cursor-default tracking-tight"
            >
              {t('heroSubtitle2')}
            </p>

            {/* Buttons - smaller and left aligned */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 justify-start items-start w-full max-w-lg">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative w-full sm:w-auto min-w-[180px] px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-space font-semibold rounded-lg hover:bg-lynx-gray transition-all duration-300 hover:scale-105 hover:shadow-xl btn-glow text-sm sm:text-base touch-manipulation"
              >
                <span className="relative z-10">{t('exploreWork')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-lynx-gray rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <a 
                href="https://wa.me/17329276563"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto min-w-[180px] px-6 py-3 sm:px-8 sm:py-4 border-2 border-lynx-gray text-lynx-gray font-space font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 hover:scale-105 btn-glow text-sm sm:text-base text-center touch-manipulation"
              >
                {t('startProject')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll arrow - positioned higher for better visibility */}
      <div 
        ref={arrowRef}
        onClick={scrollToNext}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer group z-20"
      >
        <div className="p-3 sm:p-4 rounded-full border border-lynx-gray/30 group-hover:border-white transition-all duration-300 group-hover:bg-white/5">
          <ArrowDown className="text-lynx-gray group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
