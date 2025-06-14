
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const BrandMessage = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { isVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-black text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-wide transition-all duration-1500 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-12 scale-95'
          }`}
          style={{ 
            transitionDelay: isVisible ? '0.2s' : '0s',
            filter: isVisible ? 'blur(0px)' : 'blur(2px)'
          }}
        >
          <span className="block opacity-90 hover:opacity-100 transition-opacity duration-300">
            More than brands,
          </span>
          <span 
            className={`block text-lynx-gray mt-2 hover:text-white transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-90'
            }`}
            style={{ 
              transitionDelay: isVisible ? '0.6s' : '0s',
              filter: isVisible ? 'blur(0px)' : 'blur(3px)'
            }}
          >
            we create movements.
          </span>
        </h2>
        
        {/* Decorative Line */}
        <div 
          className={`mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 ${
            isVisible 
              ? 'opacity-60 scale-x-100' 
              : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: isVisible ? '1s' : '0s' }}
        />
        
        {/* Subtitle */}
        <p 
          className={`mt-6 text-lg sm:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed transition-all duration-1200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            transitionDelay: isVisible ? '1.2s' : '0s',
            filter: isVisible ? 'blur(0px)' : 'blur(1px)'
          }}
        >
          {t('brandMovementSubtitle') || 'Every brand has a story. We craft narratives that resonate, inspire, and transform audiences into communities.'}
        </p>
      </div>
    </section>
  );
};

export default BrandMessage;
