import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 4000; // 4 segundos
    const intervalTime = 50; // Atualiza a cada 50ms
    const increment = 100 / (totalDuration / intervalTime);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onLoadingComplete();
          }, 300);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <div className="text-center">
        <div className="w-80 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white mt-6 text-sm font-space tracking-wider">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;