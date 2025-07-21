'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CornerBracket = ({ position }: { position: string }) => {
    // This component is correct and does not need changes
    const baseClasses = 'absolute w-8 h-8';
    const borderClasses = 'border-neutral-700';
    let positionClasses = '';
    let origins = { x: 0.5, y: 0.5 };

    switch (position) {
        case 'top-left':
            positionClasses = 'top-4 left-4 border-l-2 border-t-2';
            origins = { x: 0, y: 0 };
            break;
        case 'top-right':
            positionClasses = 'top-4 right-4 border-r-2 border-t-2';
            origins = { x: 1, y: 0 };
            break;
        case 'bottom-left':
            positionClasses = 'bottom-4 left-4 border-l-2 border-b-2';
            origins = { x: 0, y: 1 };
            break;
        case 'bottom-right':
            positionClasses = 'bottom-4 right-4 border-r-2 border-b-2';
            origins = { x: 1, y: 1 };
            break;
    }

    return (
        <motion.div
            className={`${baseClasses} ${positionClasses} ${borderClasses}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            style={{ transformOrigin: `${origins.x * 100}% ${origins.y * 100}%` }}
        />
    );
};


const Loader = ({ onLoaded }: { onLoaded: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentSystem, setCurrentSystem] = useState(0);

  const systems = [
    'INITIATING_SYSTEM_BOOT...',
    'CALIBRATING_NEURAL_INTERFACE...',
    'COMPILING_SHADERS...',
    'ESTABLISHING_GRID_CONNECTION...',
    'SYSTEM_READY'
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            document.body.style.overflow = '';
            onLoaded(); // Signal to the parent component that loading is done
          }, 500); // Wait for fade out animation
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 50);

    const systemInterval = setInterval(() => {
      setCurrentSystem(prev => (prev + 1) % (systems.length - 1));
    }, 700);

    return () => {
      clearInterval(progressInterval);
      clearInterval(systemInterval);
    };
  }, [onLoaded, systems.length]);

  useEffect(() => {
    if (progress >= 100) {
      setCurrentSystem(systems.length - 1);
    }
  }, [progress, systems.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`fixed inset-0 bg-black z-[100] flex items-center justify-center ${
        progress >= 100 ? 'pointer-events-none' : ''
      }`}
    >
      <CornerBracket position="top-left" />
      <CornerBracket position="top-right" />
      <CornerBracket position="bottom-left" />
      <CornerBracket position="bottom-right" />
      
      <div className="absolute top-6 left-6 font-mono text-xs text-neutral-500">SYS_LOAD::v3.0</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-neutral-500">{new Date().getFullYear()}</div>
      <div className="absolute bottom-6 left-6 font-mono text-xs text-neutral-500">[OBIDUR.RAHMAN]</div>
      <div className="absolute bottom-6 right-6 font-mono text-xs text-neutral-500 flex items-center gap-2">
        STATUS: <span className="text-cyan-300">ACTIVE</span>
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      </div>

      <motion.div
        animate={{ scale: progress >= 100 ? 0.9 : 1, opacity: progress >= 100 ? 0 : 1 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
        className="text-center w-full max-w-sm sm:max-w-md px-4"
      >
        <div className="w-full h-px bg-neutral-800">
          <div
            className="h-full bg-cyan-300 transition-all duration-150 ease-linear shadow-[0_0_10px_0px] shadow-cyan-300/50"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 flex justify-between font-mono text-xs text-neutral-300 h-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSystem}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {systems[currentSystem]}
            </motion.span>
          </AnimatePresence>
          <span>{Math.floor(progress)}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// THE FIX IS HERE: Add the missing export statement.
export default Loader;