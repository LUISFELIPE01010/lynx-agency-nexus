import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Much faster loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onLoadComplete?.();
          }, 100);
          return 100;
        }
        return prev + Math.random() * 25;
      });
    }, 50);

    // Fallback: complete loading after 800ms
    const fallback = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        onLoadComplete?.();
      }, 100);
    }, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(fallback);
    };
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <div className="text-center">
        {/* Loading bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gray-600 to-white rounded-full transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;