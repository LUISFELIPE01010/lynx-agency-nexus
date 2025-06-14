
import React, { useEffect, useRef, useState } from 'react';

interface UseTextRevealOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  animationType?: 'fade' | 'slide-up' | 'scale' | 'blur';
}

export const useTextReveal = (options: UseTextRevealOptions = {}) => {
  const {
    threshold = 0.2,
    rootMargin = '50px',
    staggerDelay = 0.03,
    animationType = 'slide-up'
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return {
    elementRef,
    isVisible,
    staggerDelay,
    animationType
  };
};

// Enhanced TextReveal component with character animation
interface TextRevealProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p';
  className?: string;
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  animationType?: 'fade' | 'slide-up' | 'scale' | 'blur';
  splitWords?: boolean;
}

export const TextReveal = ({ 
  children, 
  as: Component = 'div', 
  className = '', 
  threshold,
  rootMargin,
  staggerDelay = 0.05,
  animationType = 'slide-up',
  splitWords = true
}: TextRevealProps) => {
  const { elementRef, isVisible } = useTextReveal({ threshold, rootMargin, staggerDelay, animationType });

  // Split text into words or characters for animation
  const processText = (text: string) => {
    if (!splitWords) return [text];
    
    return text.split(' ').map((word, wordIndex) => ({
      word: word + ' ',
      index: wordIndex
    }));
  };

  const getAnimationClasses = (index: number) => {
    const baseClasses = 'inline-block transition-all duration-700 ease-out';
    const delay = `${index * staggerDelay}s`;
    
    switch (animationType) {
      case 'fade':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'slide-up':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
      case 'scale':
        return `${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`;
      case 'blur':
        return `${baseClasses} ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`;
      default:
        return baseClasses;
    }
  };

  const getAnimationStyle = (index: number) => ({
    transitionDelay: isVisible ? `${index * staggerDelay}s` : '0s'
  });

  const renderAnimatedText = (content: React.ReactNode): React.ReactNode => {
    if (typeof content === 'string') {
      const words = processText(content);
      return words.map((wordData, index) => (
        <span
          key={index}
          className={getAnimationClasses(index)}
          style={getAnimationStyle(index)}
        >
          {wordData.word}
        </span>
      ));
    }
    
    return content;
  };

  return React.createElement(
    Component,
    {
      ref: elementRef,
      className,
    },
    renderAnimatedText(children)
  );
};

// Advanced title reveal component for section headers
interface SectionTitleRevealProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const SectionTitleReveal = ({ 
  children, 
  className = '',
  level = 2
}: SectionTitleRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  const processTitle = (text: string) => {
    return text.split(' ').map((word, wordIndex) => {
      const letters = word.split('').map((char, charIndex) => (
        <span
          key={`${wordIndex}-${charIndex}`}
          className={`inline-block transition-all duration-500 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0 rotate-0' 
              : 'opacity-0 translate-y-4 rotate-2'
          }`}
          style={{
            transitionDelay: isVisible ? `${(wordIndex * 3 + charIndex) * 0.02}s` : '0s'
          }}
        >
          {char}
        </span>
      ));

      return (
        <span key={wordIndex} className="inline-block mr-2">
          {letters}
        </span>
      );
    });
  };

  const renderContent = () => {
    if (typeof children === 'string') {
      return processTitle(children);
    }
    return children;
  };

  return React.createElement(
    Component,
    {
      ref: titleRef,
      className: `${className} ${isVisible ? 'animate-in' : ''}`
    },
    renderContent()
  );
};
