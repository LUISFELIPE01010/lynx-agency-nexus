import { useEffect, useRef, useState } from 'react';

interface VideoLazyLoaderProps {
  src: string;
  poster?: string;
  className?: string;
  onVideoReady?: () => void;
}

const VideoLazyLoader = ({ src, poster, className, onVideoReady }: VideoLazyLoaderProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      setIsLoaded(true);
      onVideoReady?.();
    }
  }, [isInView, onVideoReady]);

  return (
    <div className="relative w-full h-full">
      {/* Background image shown while video loads */}
      {poster && !isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
      
      {/* Video element */}
      <video
        ref={videoRef}
        className={`${className} transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        src={isInView ? src : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        poster={poster}
        style={{
          objectFit: 'cover',
          willChange: 'transform',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)'
        }}
      />
    </div>
  );
};

export default VideoLazyLoader;