import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
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
        rootMargin: '30px' // Reduced rootMargin for better performance
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

  const delayClass = delay > 0 ? `stagger-${Math.min(delay, 6)}` : '';

  return (
    <div 
      ref={sectionRef}
      className={`${animationType} ${delayClass} ${isVisible ? 'animate-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};