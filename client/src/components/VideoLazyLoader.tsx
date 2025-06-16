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
      
      // Detect connection speed and adjust loading strategy
      const connection = (navigator as any).connection;
      const isSlowConnection = connection && 
        (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
      
      if (isSlowConnection) {
        // Skip video loading on slow connections
        setIsLoaded(false);
        return;
      }
      
      // Optimize video settings for performance
      video.muted = true;
      video.playsInline = true;
      video.preload = 'none';
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      
      // Progressive loading - load minimal data first
      const loadVideo = async () => {
        try {
          // Load only metadata first
          video.preload = 'metadata';
          video.load();
          
          // Wait for metadata to be loaded
          await new Promise((resolve) => {
            video.addEventListener('loadedmetadata', resolve, { once: true });
          });
          
          // Set video to start position
          video.currentTime = 0;
          
          // Now load enough data to start playing
          video.preload = 'auto';
          
          // Wait for enough data to play
          await new Promise((resolve) => {
            video.addEventListener('canplay', resolve, { once: true });
          });
          
          // Try to play the video
          await video.play();
          setIsLoaded(true);
          onVideoReady?.();
          
        } catch (error) {
          console.log('Video loading optimized for slow connection');
          // Fallback: just show poster
        }
      };
      
      // Use requestIdleCallback for non-blocking loading
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => loadVideo());
      } else {
        setTimeout(loadVideo, 100);
      }
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