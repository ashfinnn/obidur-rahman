"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- CONFIGURATION ---
// You can change this to "#FF4D00" (Orange) if you prefer the Swiss accent
const ACCENT_COLOR = "#06b6d4"; // Cyan-500
const LOADER_DURATION = 1.5; // Seconds for the reveal animation

const LOG_MESSAGES = [
  "INITIALIZING KERNEL...",
  "MOUNTING VDOM...",
  "LOADING ASSETS...",
  "RESOLVING DEPENDENCIES...",
  "HYDRATING INTERFACE...",
  "SYSTEM OPTIMIZATION...",
  "READY."
];

export default function Loader({ onLoaded }: { onLoaded: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [logIndex, setLogIndex] = useState(0);

  // --- PROGRESS LOGIC ---
  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    let timeoutId: NodeJS.Timeout;

    const updateProgress = () => {
      if (currentProgress >= 100) {
        setIsComplete(true);
        // Unlock scroll and notify parent after animation finishes
        setTimeout(() => {
          document.body.style.overflow = "";
          onLoaded();
        }, 800); 
        return;
      }

      // Simulation: Fast start, pause in middle, fast end
      let jump, delay;
      if (currentProgress < 30) {
        jump = Math.random() * 10 + 5;
        delay = Math.random() * 50;
      } else if (currentProgress < 70) {
        jump = Math.random() * 2; // Slow down
        delay = Math.random() * 150 + 50;
      } else {
        jump = Math.random() * 15 + 10; // Speed up
        delay = Math.random() * 30;
      }

      currentProgress = Math.min(currentProgress + jump, 100);
      setProgress(currentProgress);
      
      // Update logs based on progress chunks
      const totalLogs = LOG_MESSAGES.length;
      const newLogIndex = Math.floor((currentProgress / 100) * (totalLogs - 1));
      setLogIndex(newLogIndex);

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
            y: "-100%", // Curtain effect: Slide UP
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1], // "Heavy Door" bezier curve
            },
          }}
          className="fixed inset-0 z-[9999] bg-[#050505] text-white flex flex-col justify-between p-6 md:p-12 font-mono cursor-wait"
        >
          {/* --- BACKGROUND TEXTURE --- */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          {/* --- GRID LINES --- */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
             <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-white" />
             <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-white" />
             <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
          </div>

          {/* --- TOP BAR --- */}
          <div className="relative z-10 flex justify-between items-start text-[10px] md:text-xs tracking-widest text-white/50 uppercase">
             <div className="flex flex-col gap-1">
                <span className="text-white flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                   BOOT_SEQUENCE // V.1.0
                </span>
                <span>LATENCY: 14ms</span>
             </div>
             <div className="text-right">
                <span>MEM: 4096MB</span>
                <br />
                <span>CPU: 8 CORES</span>
             </div>
          </div>

          {/* --- CENTER CONTENT --- */}
          <div className="relative z-10 flex items-center justify-center h-full">
             <div className="relative flex items-center gap-4 md:gap-8">
                
                {/* The Counter */}
                <div className="relative">
                   <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                      {Math.floor(progress).toString().padStart(3, '0')}
                   </h1>
                   <span className="absolute -top-2 -right-4 md:-right-6 text-xl md:text-2xl text-cyan-500">%</span>
                </div>

                {/* Vertical Progress Bar */}
                <div className="h-24 md:h-32 w-[2px] bg-white/10 relative overflow-hidden">
                   <motion.div 
                      className="absolute bottom-0 left-0 w-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                      initial={{ height: "0%" }}
                      animate={{ height: `${progress}%` }}
                      transition={{ ease: "linear", duration: 0.1 }}
                   />
                </div>

             </div>
          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="relative z-10 flex justify-between items-end w-full">
             
             {/* Log Output */}
             <div className="flex flex-col justify-end h-12 overflow-hidden">
                <div className="flex items-center gap-2 text-xs md:text-sm text-cyan-500 font-bold">
                   <span>&gt;</span>
                   <span>{LOG_MESSAGES[logIndex]}</span>
                   <motion.span 
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="w-2 h-4 bg-cyan-500"
                   />
                </div>
             </div>

             {/* Signature */}
             <div className="text-right text-[10px] md:text-xs text-white/40 tracking-widest uppercase hidden md:block">
                <span>OBIDUR RAHMAN</span><br/>
                <span>SYSTEM ARCHITECT</span>
             </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}