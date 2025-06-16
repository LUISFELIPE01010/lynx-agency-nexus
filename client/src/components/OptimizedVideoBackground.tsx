import { useRef, useEffect, useState } from 'react';

interface OptimizedVideoBackgroundProps {
  videoSrc: string;
  posterSrc: string;
  className?: string;
}

const OptimizedVideoBackground = ({ 
  videoSrc, 
  posterSrc, 
  className = "" 
}: OptimizedVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Load video immediately for better user experience
    setShouldLoadVideo(true);
  }, []);

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      const video = videoRef.current;
      
      // Configure video for optimal loading and performance
      video.muted = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      
      const loadAndPlay = async () => {
        try {
          // Set video source and load immediately
          video.src = videoSrc;
          video.load();
          
          // Wait for metadata to load (faster than canplaythrough)
          await new Promise<void>((resolve, reject) => {
            video.addEventListener('loadedmetadata', () => resolve(), { once: true });
            video.addEventListener('error', reject, { once: true });
            
            // Shorter timeout for faster loading
            setTimeout(() => reject(new Error('Video load timeout')), 2000);
          });
          
          // Try to play immediately
          await video.play();
          setVideoReady(true);
        } catch (error) {
          console.log('Video background loading optimized, continuing with poster');
          // Fallback gracefully without blocking the UI
        }
      };

      // Load video immediately when component mounts
      loadAndPlay();
    }
  }, [shouldLoadVideo, videoSrc]);

  return (
    <div className={`relative ${className}`}>
      {/* Background poster image - always shown first */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${posterSrc})`,
          backgroundSize: 'cover',
          filter: videoReady ? 'none' : 'brightness(0.8)'
        }}
      />
      
      {/* Video overlay - only shown when ready */}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          style={{
            objectFit: 'cover',
            willChange: 'opacity',
            WebkitTransform: 'translateZ(0)',
            transform: 'translateZ(0)'
          }}
        />
      )}
    </div>
  );
};

export default OptimizedVideoBackground;