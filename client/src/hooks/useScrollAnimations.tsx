import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationsOptions {
  threshold?: number;
  rootMargin?: string;
  parallaxSpeed?: number;
  zoomSpeed?: number;
}

export const useScrollAnimations = (options: UseScrollAnimationsOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  
  const {
    threshold = 0.1,
    rootMargin = '0px',
    parallaxSpeed = 0.5,
    zoomSpeed = 0.1
  } = options;

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin]);

  const getParallaxTransform = (offset: number = 0) => {
    if (!elementRef.current) return {};
    
    const rect = elementRef.current.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const parallaxOffset = (scrollY - elementTop + offset) * parallaxSpeed;
    
    return {
      transform: `translateY(${parallaxOffset}px)`,
    };
  };

  const getZoomTransform = () => {
    if (!elementRef.current) return {};
    
    const rect = elementRef.current.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const progress = Math.min(Math.max((scrollY - elementTop + window.innerHeight) / window.innerHeight, 0), 1);
    const scale = 1 + (progress * zoomSpeed);
    
    return {
      transform: `scale(${scale})`,
    };
  };

  return {
    elementRef,
    isVisible,
    scrollY,
    getParallaxTransform,
    getZoomTransform,
  };
};

// Component wrapper for scroll animations
export const ScrollAnimatedSection = ({ 
  children, 
  className = '', 
  animationType = 'fade',
  ...options 
}: {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade' | 'parallax' | 'zoom' | 'slide-up';
} & UseScrollAnimationsOptions) => {
  const { elementRef, isVisible, getParallaxTransform, getZoomTransform } = useScrollAnimations(options);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-700 ease-out ${className}`;
    
    switch (animationType) {
      case 'fade':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
      case 'slide-up':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`;
      case 'parallax':
        return `${baseClasses} opacity-100`;
      case 'zoom':
        return `${baseClasses} opacity-100`;
      default:
        return baseClasses;
    }
  };

  const getAnimationStyles = () => {
    switch (animationType) {
      case 'parallax':
        return getParallaxTransform();
      case 'zoom':
        return getZoomTransform();
      default:
        return {};
    }
  };

  return (
    <div
      ref={elementRef}
      className={getAnimationClasses()}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
};