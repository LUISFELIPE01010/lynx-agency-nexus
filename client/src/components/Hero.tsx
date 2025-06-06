
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';
import logoPng from '@/logop.png';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

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
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/lovable-uploads/0d403c09-120c-4221-af4a-d5006bd4513e.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/80"></div>
      
      
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-lynx-gray/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Logo and Title aligned to left */}
        <div className="text-left mb-8 sm:mb-16">
          {/* Main Logo */}
          <div ref={logoRef} className="mb-8 sm:mb-12">
            <img 
              src="/LYNXx.png" 
              alt="Lynx Agency" 
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain opacity-90"
            />
          </div>
          
          <div className="text-left max-w-4xl">
            <p 
              ref={subtitleRef}
              className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-inter text-lynx-gray mb-2 sm:mb-4 leading-tight font-light"
            >
              {t('heroSubtitle1')}
            </p>
            
            <p 
              ref={subtitleRef}
              className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-inter text-white mb-8 sm:mb-16 leading-tight font-light"
            >
              {t('heroSubtitle2')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-white text-black font-space font-semibold rounded-lg hover:bg-lynx-gray transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">{t('exploreWork')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-lynx-gray rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <a 
                href="https://wa.me/17329276563"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 border border-lynx-gray text-lynx-gray font-space font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-500 hover:scale-105"
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
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer group"
      >
        <div className="p-4 rounded-full border border-lynx-gray/30 group-hover:border-white transition-all duration-300 group-hover:bg-white/5">
          <ArrowDown className="text-lynx-gray group-hover:text-white w-6 h-6 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
