
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
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-start px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden touch-pan-y">
      {/* Optimized background video - preloaded by VideoPreloader */}
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/wallp.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ 
          objectFit: 'cover',
          willChange: 'transform'
        }}
        onLoadedData={() => {
          // Video is ready to play
          if (videoRef.current) {
            videoRef.current.play();
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#95A0A2]/15 to-black/90"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-28 px-2 sm:px-0">
        {/* Logo and Title aligned to left */}
        <div className="text-left mb-6 sm:mb-8">
          {/* Main Logo */}
          <div ref={logoRef} className="mb-4 sm:mb-6">
            <img 
              src="/LYNXx.png" 
              alt="Lynx Agency" 
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain opacity-90"
            />
          </div>

          <div className="text-left max-w-5xl space-y-3 sm:space-y-4">
            <p 
              ref={subtitleRef}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-space text-lynx-gray leading-none font-bold hero-title-zoom hover:scale-105 transition-transform duration-300 cursor-default tracking-tight"
            >
              {t('heroSubtitle1')}
            </p>

            <p 
              ref={subtitleRef}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-space text-white leading-none font-bold hero-title-zoom hover:scale-105 transition-transform duration-300 cursor-default tracking-tight"
            >
              {t('heroSubtitle2')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-space font-semibold rounded-lg hover:bg-lynx-gray transition-all duration-300 hover:scale-105 hover:shadow-xl btn-glow text-sm sm:text-base touch-manipulation"
              >
                <span className="relative z-10">{t('exploreWork')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-lynx-gray rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <a 
                href="https://wa.me/17329276563"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-lynx-gray text-lynx-gray font-space font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 hover:scale-105 btn-glow text-sm sm:text-base text-center touch-manipulation"
              >
                {t('startProject')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={arrowRef}
        onClick={scrollToNext}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer group"
      >
        <div className="p-4 rounded-full border border-lynx-gray/30 group-hover:border-white transition-all duration-300 group-hover:bg-white/5">
          <ArrowDown className="text-lynx-gray group-hover:text-white w-6 h-6 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
