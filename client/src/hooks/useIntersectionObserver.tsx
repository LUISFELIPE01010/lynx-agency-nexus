
import { useState, useRef, useEffect, useCallback } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const { threshold = 0.1, rootMargin = '30px', triggerOnce = false } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { isVisible, elementRef };
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationType?: string;
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({ 
  children, 
  animationType = 'fade-in',
  delay = 0,
  className = ''
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && !isVisible) {
      if (delay > 0) {
        setTimeout(() => {
          setIsVisible(true);
        }, delay * 1000);
      } else {
        setIsVisible(true);
      }
    }
  }, [delay, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection,
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      observer.disconnect();
    };
  }, [handleIntersection]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-800 ease-out ${className}`;
    
    switch (animationType) {
      case 'fade-in':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
      case 'slide-in-left':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`;
      case 'slide-in-right':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`;
      case 'slide-in-up':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`;
      case 'scale-in':
        return `${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
      default:
        return baseClasses;
    }
  };

  return (
    <div 
      ref={sectionRef}
      className={getAnimationClasses()}
    >
      {children}
    </div>
  );
};
