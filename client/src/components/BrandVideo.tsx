import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BrandVideo = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      // Start playing immediately when loaded
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    };

    const handleCanPlay = () => {
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{ position: 'sticky', top: 0 }}
    >
      {/* Fixed Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/Brand..mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ 
            objectFit: 'cover',
            filter: 'brightness(0.8) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
      </div>
    </section>
  );
};

export default BrandVideo;