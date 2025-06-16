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
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={shouldLoad ? 'metadata' : 'none'}
      onLoadedData={onLoadedData}
      onCanPlay={onCanPlay}
      onError={onError}
      style={videoStyle}
      disablePictureInPicture
      controls={false}
    />
  );
};

export default LazyVideo;