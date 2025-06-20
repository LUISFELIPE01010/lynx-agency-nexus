import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const Hero = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const subtitleRef1 = useRef<HTMLParagraphElement>(null);
  const subtitleRef2 = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const { getParallaxTransform, getZoomTransform } = useScrollAnimations({
    parallaxSpeed: 0.3,
    zoomSpeed: 0.05
  });

  useEffect(() => {
    // Detecta se é Safari
    const detectSafari = () => {
      const userAgent = navigator.userAgent;
      const isSafariBrowser = /Safari/.test(userAgent) && !/Chrome/.test(userAgent) && !/Chromium/.test(userAgent);
      setIsSafari(isSafariBrowser);
    };

    detectSafari();

    // Só executa lógica do vídeo se não for Safari
    if (!isSafari) {
      const video = videoRef.current;
      if (!video) return;

      video.muted = true;
      video.playsInline = true;

      const playVideo = () => {
        video.play().catch(() => {
          // Se autoplay falhar, espera o primeiro toque do usuário para tentar dar play de novo
          const onTouchStart = () => {
            video.play();
            window.removeEventListener('touchstart', onTouchStart);
          };
          window.addEventListener('touchstart', onTouchStart);
        });
      };

      playVideo();
    }

    // Animações GSAP
    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }

    if (subtitleRef1.current) {
      gsap.fromTo(subtitleRef1.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.2 }
      );
    }

    if (subtitleRef2.current) {
      gsap.fromTo(subtitleRef2.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.4 }
      );
    }

    if (arrowRef.current) {
      gsap.fromTo(arrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.4 }
      );

      gsap.to(arrowRef.current, {
        y: -8,
        duration: 1.5,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      });
    }

    // Cleanup no event listener para toque
    return () => {
      window.removeEventListener('touchstart', () => {});
    };
  }, [isSafari]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden touch-pan-y bg-black">
      <div className="absolute inset-0 bg-black"></div>

      {isSafari ? (
        <img 
          className="absolute w-full h-full object-cover opacity-100"
          src="/safari.gif"
          alt="Safari Background Animation"
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
          onLoad={() => { console.log('Safari GIF loaded'); setVideoLoaded(true); }}
        />
      ) : (
        <video 
          ref={videoRef}
          className="absolute w-full h-full object-cover opacity-100"
          src="/fundonew.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          disablePictureInPicture
          onLoadedMetadata={() => { console.log('Hero video metadata loaded'); }}
          onCanPlay={() => { console.log('Hero video ready for playback'); setVideoLoaded(true); }}
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
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#95A0A2]/15 to-black/90 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-start items-start text-left pt-4 sm:pt-6 md:pt-8 lg:pt-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="flex flex-col items-start justify-start space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 w-full">
          <div ref={logoRef} className="flex justify-start w-full pt-1 sm:pt-2 md:pt-3">
            <img 
              src="/LYNXx.png" 
              alt="Lynx Agency" 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 object-contain opacity-90 max-w-full h-auto"
            />
          </div>

          <div className="text-left w-full max-w-none lg:max-w-5xl space-y-4 sm:space-y-6 md:space-y-8">
            <p 
              ref={subtitleRef1}
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-space text-lynx-gray leading-tight font-bold hero-title-zoom hover:scale-105 transition-transform duration-300 cursor-default tracking-tight"
            >
              {t('heroSubtitle1')}
            </p>

            <p 
              ref={subtitleRef2}
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-space text-white leading-tight font-bold hero-title-zoom hover:scale-105 transition-transform duration-300 cursor-default tracking-tight"
            >
              {t('heroSubtitle2')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 md:pt-10 justify-start items-stretch sm:items-start w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative w-full sm:flex-1 min-w-0 px-5 py-3 sm:px-6 sm:py-3 md:px-7 md:py-4 bg-white text-black font-space font-semibold rounded-lg hover:bg-lynx-gray transition-all duration-300 hover:scale-105 hover:shadow-xl btn-glow text-xs sm:text-sm md:text-base touch-manipulation"
              >
                <span className="relative z-10">{t('exploreWork')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-lynx-gray rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <a 
                href="https://wa.me/17329276563"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:flex-1 min-w-0 px-5 py-3 sm:px-6 sm:py-3 md:px-7 md:py-4 border-2 border-lynx-gray text-lynx-gray font-space font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 hover:scale-105 btn-glow text-xs sm:text-sm md:text-base text-center touch-manipulation"
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
