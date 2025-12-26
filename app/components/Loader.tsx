"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onLoaded }: { onLoaded: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    let timeoutId: NodeJS.Timeout;

    const updateProgress = () => {
      if (currentProgress >= 100) {
        setIsComplete(true);
        setTimeout(() => {
          document.body.style.overflow = "";
          onLoaded();
        }, 500);
        return;
      }

      // Simulation: Fast start, pause, snap finish
      let jump, delay;
      if (currentProgress < 30) {
        jump = Math.random() * 10 + 5;
        delay = Math.random() * 30;
      } else if (currentProgress < 70) {
        jump = Math.random() * 2; 
        delay = Math.random() * 100 + 50;
      } else {
        jump = Math.random() * 20 + 10; 
        delay = Math.random() * 20;
      }

      currentProgress = Math.min(currentProgress + jump, 100);
      setProgress(currentProgress);

      timeoutId = setTimeout(updateProgress, delay);
    };

    updateProgress();

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "";
    };
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%", // Slides UP like a heavy shutter
            transition: {
              duration: 0.8,
              ease: [0.87, 0, 0.13, 1], // Custom "Heavy" Ease
            },
          }}
          className="fixed inset-0 z-[9999] bg-white text-[#050505] flex flex-col justify-between p-6 md:p-12 overflow-hidden cursor-wait"
        >
          {/* --- BACKGROUND TEXTURE --- */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

          {/* --- GRID LINES (Matching Hero) --- */}
          <div className="absolute inset-0 pointer-events-none z-0">
             <div className="container mx-auto h-full border-r border-l border-[#E5E5E5] relative">
                 <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#E5E5E5] hidden md:block" />
             </div>
             <div className="absolute top-1/2 left-0 right-0 h-px bg-[#E5E5E5]" />
          </div>

          {/* --- TOP BAR --- */}
          <div className="relative z-10 flex justify-between items-start font-mono text-[10px] md:text-xs tracking-widest uppercase">
             <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-[#FF4D00]" />
                   SYSTEM_INIT
                </span>
                <span className="text-gray-400">LOADING_ASSETS...</span>
             </div>
             <div className="text-right">
                <span>{new Date().getFullYear()}</span>
             </div>
          </div>

          {/* --- CENTER CONTENT --- */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
             
             {/* The Number */}
             <div className="relative overflow-hidden">
                <h1 className="text-[20vw] font-bold leading-none tracking-tighter tabular-nums text-[#050505]">
                   {Math.floor(progress)}
                </h1>
                {/* Overlay Text effect */}
                <div className="absolute inset-0 bg-white/50 mix-blend-overlay" />
             </div>

             {/* Progress Bar */}
             <div className="w-64 md:w-96 h-1 bg-[#E5E5E5] mt-8 relative overflow-hidden">
                <motion.div 
                   className="absolute top-0 left-0 h-full bg-[#FF4D00]"
                   initial={{ width: "0%" }}
                   animate={{ width: `${progress}%` }}
                   transition={{ ease: "linear", duration: 0.1 }}
                />
             </div>
             
             <div className="mt-2 font-mono text-[10px] tracking-widest text-[#FF4D00]">
                 PROCESSING
             </div>

          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="relative z-10 flex justify-between items-end w-full font-mono text-[10px] md:text-xs tracking-widest uppercase">
             <div>
                OBIDUR RAHMAN
             </div>
             <div className="text-right text-gray-400">
                PLEASE WAIT
             </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}