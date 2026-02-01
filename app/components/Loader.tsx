"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onLoaded: () => void;
}

export default function Loader({ onLoaded }: LoaderProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // 1.8s total load time for the "computation" to feel finished
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        document.body.style.overflow = "";
        onLoaded();
      }, 500); 
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onLoaded]);

  // The grid indices for a 3x3 matrix
  // 0 1 2
  // 3 4 5
  // 6 7 8
  const squares = Array.from({ length: 9 });

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#F4F4F5] flex items-center justify-center"
          exit={{ 
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" } 
          }}
        >
          {/* Container for the Matrix */}
          <motion.div 
            className="grid grid-cols-3 gap-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 0, transition: { duration: 0.3, ease: "backIn" } }}
            transition={{ duration: 0.3 }}
          >
            {squares.map((_, i) => {
              // Calculate diagonal index (x + y) to create a wave effect
              // Row 0: 0, 1, 2
              // Row 1: 1, 2, 3
              // Row 2: 2, 3, 4
              const row = Math.floor(i / 3);
              const col = i % 3;
              const diagonalIndex = row + col;
              
              const isCenter = i === 4;

              return (
                <motion.div
                  key={i}
                  className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${
                    isCenter ? "bg-[#FF4D00]" : "bg-[#050505]"
                  }`}
                  // The Computation Animation
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.85, 1, 0.85],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    // Stagger based on diagonal index for "Wave" effect
                    delay: diagonalIndex * 0.15, 
                  }}
                />
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}