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
      
      // Configure video for optimal loading
      video.muted = true;
      video.playsInline = true;
      video.preload = 'none';
      
      const loadAndPlay = async () => {
        try {
          // Load video progressively
          video.src = videoSrc;
          video.load();
          
          // Wait for sufficient data
          await new Promise<void>((resolve, reject) => {
            video.addEventListener('canplaythrough', () => resolve(), { once: true });
            video.addEventListener('error', reject, { once: true });
            
            // Timeout after 3 seconds
            setTimeout(() => reject(new Error('Video load timeout')), 3000);
          });
          
          await video.play();
          setVideoReady(true);
        } catch (error) {
          console.log('Video failed to load, using poster image');
        }
      };

      // Use intersection observer to load only when visible
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            loadAndPlay();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(video);
      return () => observer.disconnect();
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