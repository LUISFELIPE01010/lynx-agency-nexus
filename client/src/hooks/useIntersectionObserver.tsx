import { useEffect, useRef, useState } from 'react';

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

// Helper component for animated sections
export const AnimatedSection = ({ 
  children, 
  className = '', 
  animationType = 'fade-in',
  delay = 0 
}: {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'fade-in-fast' | 'scale-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-up' | 'rotate-in';
  delay?: number;
}) => {
  const { ref, isVisible } = useIntersectionObserver();

  const delayClass = delay > 0 ? `stagger-${Math.min(delay, 6)}` : '';

  return (
    <div 
      ref={ref}
      className={`${animationType} ${delayClass} ${isVisible ? 'animate-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};