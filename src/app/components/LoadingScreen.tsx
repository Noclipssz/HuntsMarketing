import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${!isVisible ? 'hidden' : ''}`}>
      <div className="text-center space-y-8">
        {/* Logo with Pulse Animation */}
        <div className="animate-pulse">
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="45" r="30" fill="#FF8C00" />
            <circle cx="42" cy="40" r="4" fill="#0A0A0A" />
            <circle cx="58" cy="40" r="4" fill="#0A0A0A" />
            <path
              d="M 40 50 Q 50 55 60 50"
              stroke="#0A0A0A"
              strokeWidth="2"
              fill="none"
            />
            <ellipse cx="35" cy="60" rx="8" ry="12" fill="#FFB84D" />
            <ellipse cx="65" cy="60" rx="8" ry="12" fill="#FFB84D" />
          </svg>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="font-[--font-display] font-bold text-2xl text-[#FF8C00] uppercase tracking-wider">
            HUNTS
          </h2>
          <p className="font-[--font-body] text-sm text-[#E8E8E8] tracking-widest">
            Criando movimentos...
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-[#1A1A1A] mx-auto overflow-hidden">
          <div className="h-full bg-[#FF8C00] animate-[loading_1.5s_ease-in-out]" 
               style={{
                 animation: 'loading 1.5s ease-in-out',
               }} 
          />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
