'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoaded }: { onLoaded: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Smooth random progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Slow down as we get closer to 100
        const remaining = 100 - prev;
        const jump = Math.random() * (remaining / 5) + 0.5;
        
        if (prev + jump >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + jump;
      });
    }, 100);

    // Force finish logic
    const timeout = setTimeout(() => {
        setProgress(100);
    }, 2500); // Max load time 2.5s

    return () => {
        clearInterval(interval);
        clearTimeout(timeout);
    };
  }, []);

  // Trigger onLoaded when progress hits 100
  useEffect(() => {
    if (progress === 100) {
        setTimeout(() => {
            document.body.style.overflow = '';
            onLoaded();
        }, 800); // Wait for exit animation
    }
  }, [progress, onLoaded]);

  return (
    <motion.div
        className="fixed inset-0 z-[9999] bg-[#050505] text-white flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.4 } }}
    >
        {/* The Split Shutter Effect */}
        <motion.div 
            className="absolute inset-0 bg-[#050505] z-20"
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            style={{ originY: 0.5 }} // Splits from center vertically
        >
             {/* Background Scanline Texture */}
             <div className="absolute inset-0 opacity-10" 
                style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)', backgroundSize: '100% 4px' }} 
             />
             
             {/* CONTENT */}
             <div className="relative h-full w-full flex flex-col items-center justify-center">
                
                {/* Vertical Line Container */}
                <div className="relative h-[40vh] w-[1px] bg-gray-800 overflow-hidden mb-8">
                    {/* Filling Bar */}
                    <motion.div 
                        className="absolute bottom-0 left-0 w-full bg-cyan-500 box-shadow-[0_0_20px_cyan]"
                        style={{ height: `${progress}%` }}
                    />
                </div>

                {/* Percentage & Data */}
                <div className="flex flex-col items-center gap-2 font-mono">
                    <div className="text-4xl font-bold tabular-nums tracking-tighter">
                        {Math.floor(progress).toString().padStart(3, '0')}
                    </div>
                    <div className="text-[10px] text-gray-500 tracking-[0.2em] animate-pulse">
                        LOADING_MODULES
                    </div>
                </div>

                {/* Corner Brackets */}
                <div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-gray-600 hidden md:block" />
                <div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-gray-600 hidden md:block" />
             </div>
        </motion.div>
    </motion.div>
  );
};

export default Loader;