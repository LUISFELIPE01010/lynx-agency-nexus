import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  webpSrc?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  webpSrc, 
  loading = 'lazy',
  sizes,
  priority = false 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (!isInView) {
    return (
      <div 
        ref={imgRef}
        className={`bg-[#95A0A2]/10 animate-pulse ${className}`}
        style={{ minHeight: '200px' }}
      />
    );
  }

  return (
    <picture>
      {webpSrc && (
        <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading={loading}
        sizes={sizes}
        onLoad={handleLoad}
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;