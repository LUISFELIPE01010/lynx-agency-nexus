import { useRef, useEffect, useState } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  priority?: boolean;
  onLoadedData?: () => void;
  onCanPlay?: () => void;
  onError?: (e: any) => void;
  style?: React.CSSProperties;
}

const LazyVideo = ({
  src,
  className = '',
  poster,
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  priority = false,
  onLoadedData,
  onCanPlay,
  onError,
  style = {},
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    if (priority || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [priority, shouldLoad]);

  // Mobile autoplay fix
  useEffect(() => {
    if (!shouldLoad || !autoPlay) return;

    const handleVideoPlay = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Video autoplay prevented, user interaction required');
        }
      }
    };

    const handleUserInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(console.log);
      }
    };

    // Try to play video immediately
    handleVideoPlay();

    // Add event listeners for user interaction
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('click', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [shouldLoad, autoPlay]);

  const videoStyle: React.CSSProperties = {
    ...style,
    transform: 'translate3d(0,0,0)',
    willChange: 'transform'
  };

  return (
    <video
      ref={videoRef}
      className={className}
      src={shouldLoad ? src : undefined}
      poster={poster}
      autoPlay={shouldLoad && autoPlay}
      muted={true}
      loop={loop}
      playsInline={playsInline}
      preload={shouldLoad ? 'metadata' : 'none'}
      onLoadedData={onLoadedData}
      onCanPlay={onCanPlay}
      onLoadedMetadata={() => {
        if (videoRef.current && autoPlay) {
          videoRef.current.play().catch(e => console.log('Mobile autoplay requires user interaction'));
        }
      }}
      onError={onError}
      style={videoStyle}
      disablePictureInPicture={true}
      controls={false}
    />
  );
};

export default LazyVideo;