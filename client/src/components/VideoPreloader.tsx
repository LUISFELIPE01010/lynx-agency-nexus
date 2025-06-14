import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface VideoPreloaderProps {
  onLoadingComplete: () => void;
  videoSrc: string;
}

const VideoPreloader = ({ onLoadingComplete, videoSrc }: VideoPreloaderProps) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration;
        if (duration > 0) {
          const progress = (bufferedEnd / duration) * 100;
          setLoadingProgress(Math.min(progress, 100));
        }
      }
    };

    const handleCanPlayThrough = () => {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(onLoadingComplete, 500);
      }, 300);
    };

    const handleLoadedData = () => {
      handleProgress();
    };

    video.addEventListener('progress', handleProgress);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleLoadedData);

    // Start loading
    video.load();

    return () => {
      video.removeEventListener('progress', handleProgress);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [onLoadingComplete, videoSrc]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <video
        ref={videoRef}
        src={videoSrc}
        preload="auto"
        muted
        className="hidden"
      />
      
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/LYNXx.png" 
            alt="Lynx Agency" 
            className="w-20 h-20 mx-auto opacity-90"
          />
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h2 className="text-white text-xl font-light mb-2">
            {t('loading') || 'Loading'}
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="mt-4 text-gray-400 text-sm">
          {Math.round(loadingProgress)}%
        </div>
      </div>

      {/* Fade out animation */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />
    </div>
  );
};

export default VideoPreloader;