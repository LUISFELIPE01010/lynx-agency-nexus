import { useEffect, useRef, useState } from 'react';

interface UseTextRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useTextReveal = (options: UseTextRevealOptions = {}) => {
  const {
    threshold = 0.3,
    rootMargin = '0px'
  } = options;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    const handleScroll = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on element position
      const elementCenter = elementTop + elementHeight / 2;
      const windowCenter = windowHeight / 2;
      
      // Distance from center of viewport
      const distanceFromCenter = Math.abs(elementCenter - windowCenter);
      const maxDistance = windowHeight / 2 + elementHeight / 2;
      
      // Calculate progress (0 = at center, 1 = at edge)
      const progress = Math.min(distanceFromCenter / maxDistance, 1);
      
      setScrollProgress(progress);
    };

    observer.observe(element);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin]);

  // Calculate opacity and scale based on scroll progress
  const opacity = isInView ? Math.max(0.3, 1 - scrollProgress * 0.7) : 1;
  const scale = isInView ? Math.max(0.95, 1 + scrollProgress * 0.1) : 1;

  return {
    elementRef,
    style: {
      opacity,
      transform: `scale(${scale})`,
      transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
    },
    isInView,
    scrollProgress
  };
};

// Component wrapper for easy use
interface TextRevealProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p';
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const TextReveal = ({ 
  children, 
  as: Component = 'div', 
  className = '', 
  threshold,
  rootMargin 
}: TextRevealProps) => {
  const { elementRef, style } = useTextReveal({ threshold, rootMargin });

  return React.createElement(
    Component,
    {
      ref: elementRef,
      className,
      style,
    },
    children
  );
};