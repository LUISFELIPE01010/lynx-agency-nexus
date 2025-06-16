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
    const minDuration = 2000; // Mínimo de 2 segundos
    const maxDuration = 4000; // Máximo de 4 segundos
    const intervalTime = 50; // Atualiza a cada 50ms
    
    let progressInterval: NodeJS.Timeout;
    let isCompleted = false;
    let videoReady = false;
    let minTimeReached = false;
    let currentProgress = 0;

    // Carrega o vídeo do Hero em segundo plano
    const heroVideo = document.createElement('video');
    heroVideo.preload = 'auto';
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    heroVideo.loop = true;
    heroVideo.src = '/fundonew.mp4'; // Vídeo do Hero
    
    // Também carrega o vídeo passado como prop
    const extraVideo = document.createElement('video');
    extraVideo.preload = 'auto';
    extraVideo.muted = true;
    extraVideo.playsInline = true;
    extraVideo.src = videoSrc;

    const checkVideoReady = () => {
      if (heroVideo.readyState >= 3) { // HAVE_FUTURE_DATA
        videoReady = true;
        tryComplete();
      }
    };

    const tryComplete = () => {
      if (videoReady && minTimeReached && currentProgress >= 100 && !isCompleted) {
        isCompleted = true;
        clearInterval(progressInterval);
        // Força o vídeo do Hero a começar do início
        heroVideo.currentTime = 0;
        setTimeout(() => {
          handleLoadingComplete();
        }, 200);
      }
    };

    // Event listeners para o vídeo do Hero
    heroVideo.addEventListener('canplaythrough', checkVideoReady);
    heroVideo.addEventListener('loadeddata', checkVideoReady);
    heroVideo.addEventListener('canplay', checkVideoReady);
    
    // Inicia o carregamento
    heroVideo.load();
    extraVideo.load();

    // Timer para tempo mínimo
    const minTimeTimer = setTimeout(() => {
      minTimeReached = true;
      tryComplete();
    }, minDuration);

    // Timer para tempo máximo (fallback)
    const maxTimeTimer = setTimeout(() => {
      if (!isCompleted) {
        videoReady = true;
        minTimeReached = true;
        currentProgress = 100;
        tryComplete();
      }
    }, maxDuration);

    // Progresso visual
    const baseIncrement = 100 / (minDuration / intervalTime);
    
    progressInterval = setInterval(() => {
      setProgress(prev => {
        currentProgress = Math.min(prev + baseIncrement, 100);
        
        if (currentProgress >= 100) {
          tryComplete();
        }
        
        return currentProgress;
      });
    }, intervalTime);

    return () => {
      isCompleted = true;
      clearInterval(progressInterval);
      clearTimeout(minTimeTimer);
      clearTimeout(maxTimeTimer);
      heroVideo.removeEventListener('canplaythrough', checkVideoReady);
      heroVideo.removeEventListener('loadeddata', checkVideoReady);
      heroVideo.removeEventListener('canplay', checkVideoReady);
      heroVideo.src = '';
      extraVideo.src = '';
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