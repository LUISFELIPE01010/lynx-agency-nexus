import { useEffect, useState, useCallback } from 'react';

interface VideoPreloaderProps {
  onLoadingComplete: () => void;
  videoSrc: string;
}

const VideoPreloader = ({ onLoadingComplete, videoSrc }: VideoPreloaderProps) => {
  const [progress, setProgress] = useState(0);

  const handleLoadingComplete = useCallback(() => {
    onLoadingComplete();
  }, [onLoadingComplete]);

  useEffect(() => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.muted = true;
    video.playsInline = true;

    let progressInterval: NodeJS.Timeout;
    let isCompleted = false;

    const handleCanPlay = () => {
      if (isCompleted) return;
      isCompleted = true;
      clearInterval(progressInterval);
      setProgress(100);
      // Reduced timeout for faster perceived loading
      setTimeout(handleLoadingComplete, 200);
    };

    const handleLoadStart = () => {
      let currentProgress = 0;
      progressInterval = setInterval(() => {
        if (isCompleted) return;
        currentProgress += Math.random() * 20; // Increased increment
        if (currentProgress >= 85) {
          clearInterval(progressInterval);
          currentProgress = 85;
        }
        setProgress(Math.min(currentProgress, 85));
      }, 150); // Reduced interval
    };

    const handleError = () => {
      if (isCompleted) return;
      isCompleted = true;
      clearInterval(progressInterval);
      console.warn('Video preload failed, continuing anyway');
      handleLoadingComplete();
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('error', handleError);

    video.src = videoSrc;
    video.load();

    // Fallback timeout to prevent hanging
    const fallbackTimeout = setTimeout(() => {
      if (!isCompleted) {
        isCompleted = true;
        clearInterval(progressInterval);
        handleLoadingComplete();
      }
    }, 3000); // 3 second timeout

    return () => {
      isCompleted = true;
      clearInterval(progressInterval);
      clearTimeout(fallbackTimeout);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('error', handleError);
      video.src = '';
    };
  }, [videoSrc, handleLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
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
            Preparing Experience
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="mt-4 text-gray-400 text-sm">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default VideoPreloader;