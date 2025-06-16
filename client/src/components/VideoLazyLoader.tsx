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
    if (isInView && videoRef.current) {
      const video = videoRef.current;
      
      // Optimize video settings for performance
      video.muted = true;
      video.playsInline = true;
      video.preload = 'metadata';
      
      const handleCanPlay = async () => {
        try {
          await video.play();
          setIsLoaded(true);
          onVideoReady?.();
        } catch (error) {
          console.log('Video autoplay failed, will play on user interaction');
        }
      };

      const handleLoadedMetadata = () => {
        // Set quality based on device performance
        const connection = (navigator as any).connection;
        if (connection && connection.effectiveType === 'slow-2g') {
          video.style.display = 'none';
        }
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      // Start loading the video
      video.load();

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
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