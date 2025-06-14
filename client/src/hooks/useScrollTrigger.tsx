import { useEffect, useRef, useState } from 'react';

interface UseScrollTriggerOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationType?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-up' | 'scale-in';
  delay?: number;
}

export const useScrollTrigger = (options: UseScrollTriggerOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true,
    animationType = 'fade-in',
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 100);
          
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay]);

  const animationClass = isVisible ? `animate-${animationType}` : 'opacity-0';

  return {
    elementRef,
    isVisible,
    animationClass,
  };
};

interface ScrollTriggerWrapperProps {
  children: React.ReactNode;
  animationType?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-up' | 'scale-in';
  delay?: number;
  className?: string;
  threshold?: number;
}

export const ScrollTriggerWrapper = ({
  children,
  animationType = 'fade-in',
  delay = 0,
  className = '',
  threshold = 0.1,
}: ScrollTriggerWrapperProps) => {
  const { elementRef, animationClass } = useScrollTrigger({
    animationType,
    delay,
    threshold,
  });

  return (
    <div ref={elementRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
};

export default useScrollTrigger;