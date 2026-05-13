'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onLoaded: () => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function Loader({ onLoaded }: LoaderProps) {
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 2;
      });
    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onLoaded}>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                backgroundSize: '100px 100px'
              }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-12">
            {/* Main Title Center */}
            <div className="flex flex-col items-center">
              <div className="overflow-hidden mb-8">
                <motion.h2
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease }}
                  className="text-2xl sm:text-4xl md:text-5xl font-light text-white uppercase tracking-tighter leading-none"
                  style={{ fontFamily: '\'Georgia\', serif' }}
                >
                  Obidur Rahman<span className="text-[#FF4D00]">.</span>
                </motion.h2>
              </div>
              
              <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-white/40"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </div>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/10" />
          <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/10" />
          <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/10" />
          <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
