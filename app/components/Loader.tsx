"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onLoaded: () => void;
}

export default function Loader({ onLoaded }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Fast loading - 1.2 seconds total
    const duration = 1200;
    const interval = 16; // 60fps
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const easedProgress = 1 - Math.pow(1 - current / steps, 2);
      setProgress(Math.min(easedProgress * 100, 100));

      if (current >= steps) {
        clearInterval(timer);
        setIsComplete(true);
        setTimeout(() => {
          document.body.style.overflow = "";
          onLoaded();
        }, 200);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
                <motion.path
                  d="M50 10L90 85H10L50 10Z"
                  stroke="#050505"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <motion.path
                  d="M50 10L90 85H10L50 10Z"
                  fill="#FF4D00"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: progress > 80 ? 1 : 0 }}
                  transition={{ duration: 0.15 }}
                />
              </svg>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-32 sm:w-40">
              <div className="h-[2px] bg-gray-200 overflow-hidden">
                <motion.div
                  className="h-full bg-[#FF4D00]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.05 }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">Loading</span>
                <span className="font-mono text-[9px] text-gray-600">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}