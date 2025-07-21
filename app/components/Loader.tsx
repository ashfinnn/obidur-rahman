// app/components/Loader.tsx
'use client';

import { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentSystem, setCurrentSystem] = useState(0);

  // 1. Updated system messages for consistency
  const systems = [
    'INITIATING_SYSTEM_BOOT...',
    'CALIBRATING_NEURAL_INTERFACE...',
    'COMPILING_SHADERS...',
    'ESTABLISHING_GRID_CONNECTION...',
    'SYSTEM_READY'
  ];
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // This hook manages the loading progress and text cycling.
    // The timing logic is good, so we'll keep it.
    
    // Prevent scrolling while loader is active
    document.body.style.overflow = 'hidden';

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Complete loading, fade out, and re-enable scroll
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = '';
          }, 400);
          return 100;
        }
        // Smooth but fast progress
        return prev + Math.random() * 3;
      });
    }, 50);

    const systemInterval = setInterval(() => {
      setCurrentSystem(prev => (prev + 1) % (systems.length - 1));
    }, 700);

    return () => {
      clearInterval(progressInterval);
      clearInterval(systemInterval);
      if (!loading) {
        document.body.style.overflow = '';
      }
    };
  }, []);

  // Update to final message when complete
  useEffect(() => {
    if (progress >= 100) {
      setCurrentSystem(systems.length - 1);
    }
  }, [progress]);

  if (!loading && progress >= 100) return null;

  return (
    // 2. Main container with fade-out transition
    <div 
      className={`fixed inset-0 bg-white z-[100] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        progress >= 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* 3. Sharp corner brackets for a HUD frame */}
      <div className="absolute w-8 h-8 top-4 left-4 border-l border-t border-gray-300"></div>
      <div className="absolute w-8 h-8 top-4 right-4 border-r border-t border-gray-300"></div>
      <div className="absolute w-8 h-8 bottom-4 left-4 border-l border-b border-gray-300"></div>
      <div className="absolute w-8 h-8 bottom-4 right-4 border-r border-b border-gray-300"></div>
      
      {/* 4. Thematic corner text */}
      <div className="absolute top-6 left-6 font-mono text-xs text-gray-400">SYS_LOAD::v3.0</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-gray-400">{new Date().getFullYear()}</div>
      <div className="absolute bottom-6 left-6 font-mono text-xs text-gray-400">[OBIDUR.RAHMAN]</div>
      <div className="absolute bottom-6 right-6 font-mono text-xs text-gray-400">STATUS: <span className="text-black">LOADING</span></div>

      {/* Central content */}
      <div className="text-center w-full max-w-sm sm:max-w-md px-4">
        {/* Progress Bar */}
        <div className="w-full h-px bg-gray-200">
          <div
            className="h-full bg-black transition-all duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Status Line */}
        <div className="mt-4 flex justify-between font-mono text-xs text-black">
          <span>{systems[currentSystem]}</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;