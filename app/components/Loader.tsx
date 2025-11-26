'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoaded }: { onLoaded: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    document.body.style.overflow = 'hidden';

    const timeouts: NodeJS.Timeout[] = [];
    
    const advanceProgress = (current: number) => {
      if (current >= 100) {
        setTimeout(() => {
            // Delay the actual unmount to allow the exit animation to play
            setTimeout(() => {
                document.body.style.overflow = '';
                onLoaded();
            }, 800);
        }, 200);
        return;
      }

      // Non-linear loading logic (Realism)
      const jump = current < 30 ? Math.random() * 10 + 5 : current < 80 ? Math.random() * 5 : Math.random() * 15 + 5;
      const delay = current < 30 ? Math.random() * 100 : current < 80 ? Math.random() * 300 + 50 : Math.random() * 50;
      
      const next = Math.min(current + jump, 100);
      
      timeouts.push(setTimeout(() => {
        setProgress(next);
        advanceProgress(next);
      }, delay));
    };

    advanceProgress(0);

    return () => timeouts.forEach(clearTimeout);
  }, [onLoaded]);

  return (
    <AnimatePresence mode="wait">
      {progress <= 100 && ( // Logic handles unmounting via parent usually, but this handles internal state
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#050505] text-white overflow-hidden flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
                     backgroundSize: '50px 50px' 
                 }} 
            />

            <div className="relative w-full max-w-[90vw] md:max-w-3xl h-[60vh] flex items-center justify-center">
                
                {/* LEFT COLUMN: Details */}
                <div className="absolute left-0 h-full flex flex-col justify-between py-4 hidden md:flex">
                    <div className="text-[10px] font-mono text-gray-500 tracking-widest">
                        SYSTEM CHECK<br/>
                        INITIALIZING...
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 tracking-widest">
                        {dimension.width} x {dimension.height}
                    </div>
                </div>

                {/* CENTER: Vertical Progress & Number */}
                <div className="flex items-center gap-8 md:gap-12">
                    
                    {/* The Vertical Line (The core request) */}
                    <div className="h-[300px] w-[1px] bg-gray-800 relative overflow-hidden">
                        <motion.div 
                            className="absolute bottom-0 left-0 w-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                            initial={{ height: "0%" }}
                            animate={{ height: `${progress}%` }}
                            transition={{ ease: "linear", duration: 0.1 }}
                        />
                    </div>

                    {/* The Massive Number */}
                    <div className="relative">
                         <motion.h1 
                            className="text-8xl md:text-[10rem] font-bold leading-none tracking-tighter tabular-nums"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                         >
                            {Math.floor(progress)}
                         </motion.h1>
                         <span className="absolute -top-4 -right-4 md:top-4 md:-right-8 text-sm md:text-xl font-mono text-gray-500">
                            %
                         </span>
                    </div>
                </div>

                {/* RIGHT COLUMN: Details */}
                <div className="absolute right-0 h-full flex flex-col justify-between py-4 items-end hidden md:flex">
                    <div className="text-[10px] font-mono text-gray-500 tracking-widest text-right">
                        EST. {new Date().getFullYear()}<br/>
                        DHAKA, BD
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-gray-500 tracking-widest">ONLINE</span>
                    </div>
                </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;