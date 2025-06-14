import { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BrandVideo = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <section className="relative bg-black">
      {/* Video container */}
      <div className="relative w-full h-screen">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/Brand..mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Text section below video */}
      <div className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space font-bold text-white leading-tight tracking-wide">
            <span className="block mb-2 sm:mb-4">
              More than brands,
            </span>
            <span className="block text-lynx-gray">
              we create movements.
            </span>
          </h2>

          {/* Decorative line */}
          <div className="mt-8 sm:mt-12 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default BrandVideo;