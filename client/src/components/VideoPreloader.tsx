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
    const totalDuration = 3000; // 3 segundos
    const intervalTime = 50; // Atualiza a cada 50ms
    const increment = 100 / (totalDuration / intervalTime);

    let progressInterval: NodeJS.Timeout;
    let isCompleted = false;

    // Inicia o carregamento do vídeo em segundo plano
    const video = document.createElement('video');
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    video.src = videoSrc;
    video.load();

    // Progresso com duração fixa de 3 segundos
    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (!isCompleted) {
            isCompleted = true;
            clearInterval(progressInterval);
            setTimeout(() => {
              handleLoadingComplete();
            }, 200);
          }
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => {
      isCompleted = true;
      clearInterval(progressInterval);
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