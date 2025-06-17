import { useRef, useEffect, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  poster?: string;
  priority?: boolean;
  onLoadedData?: () => void;
  onCanPlay?: () => void;
  onError?: (e: any) => void;
  style?: React.CSSProperties;
}

const OptimizedVideo = ({
  src,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  preload = 'metadata',
  poster,
  priority = false,
  onLoadedData,
  onCanPlay,
  onError,
  style = {},
  ...props
}: OptimizedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!videoRef.current || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoadedData = () => {
    setHasLoaded(true);
    onLoadedData?.();
  };

  const handleCanPlay = () => {
    onCanPlay?.();
  };

  const handleError = (e: any) => {
    console.warn('Video loading error:', e);
    onError?.(e);
  };

  // Load video immediately if priority, or when intersecting
  const shouldLoad = priority || isIntersecting;

  const optimizedStyle: React.CSSProperties = {
    ...style,
    willChange: autoPlay ? 'transform' : 'auto',
    transform: 'translate3d(0,0,0)'
  };

  return (
    <video
      ref={videoRef}
      className={className}
      src={shouldLoad ? src : undefined}
      autoPlay={shouldLoad && autoPlay}
      muted
      loop={loop}
      playsInline={playsInline}
      preload={shouldLoad ? preload : 'none'}
      poster={poster}
      onLoadedData={handleLoadedData}
      onCanPlay={handleCanPlay}
      onError={handleError}
      style={optimizedStyle}
      disablePictureInPicture
      controls={false}
      {...props}
    />
  );
};

export default OptimizedVideo;