import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            gsap.to('.loading-screen', {
              opacity: 0,
              duration: 0.5,
              ease: 'power2.out',
              onComplete: onLoadingComplete
            });
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <div className="w-16 h-16 border-2 border-white/20 rounded-full animate-spin">
          <div className="w-4 h-4 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-white/80 text-sm font-space">
        Carregando... {Math.round(progress)}%
      </p>
    </div>
  );
};

export default LoadingScreen;