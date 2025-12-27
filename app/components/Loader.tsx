"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onLoaded }: { onLoaded: () => void }) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // TIMELINE:
    // 0.0s - 1.0s: Drawing Lines
    // 1.0s - 1.6s: Snap Rotation
    // 1.6s - 1.8s: Ignition (Color Fill)
    // 1.8s+:       Split Reveal
    
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onLoaded();
      }, 1000);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onLoaded]);

  // Premium easing curves
  const panelEase = [0.76, 0, 0.24, 1] as const; // Smooth "Expo"
  const snapEase = [0.68, -0.6, 0.32, 1.6] as const; // "Back Out" (Overshoot & Snap)

  return (
    <AnimatePresence>
      {!isComplete && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
          
          {/* --- TOP SHUTTER --- */}
          <motion.div
            initial={{ height: "50vh" }}
            exit={{ height: "0vh" }}
            transition={{ duration: 0.8, ease: panelEase }}
            className="absolute top-0 left-0 right-0 bg-white border-b border-[#E5E5E5] z-10 flex items-end justify-center"
          >
             {/* Noise Texture */}
             <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
          </motion.div>

          {/* --- BOTTOM SHUTTER --- */}
          <motion.div
            initial={{ height: "50vh" }}
            exit={{ height: "0vh" }}
            transition={{ duration: 0.8, ease: panelEase }}
            className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E5E5] z-10 flex items-start justify-center"
          >
             {/* Noise Texture */}
             <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
          </motion.div>

          {/* --- CENTER MECHANISM (Sits on top) --- */}
          <div className="relative z-50 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.5 }} // Shrink away fast on exit
                transition={{ duration: 0.3 }}
            >
                <svg 
                    width="120" 
                    height="120" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible"
                >
                    {/* 1. The "Ghost" Line (Structural Blueprint) */}
                    <motion.path
                        d="M50 15L85 80H15L50 15Z"
                        stroke="#E5E5E5"
                        strokeWidth="1"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, rotate: 0 }}
                        animate={{ pathLength: 1, rotate: 180 }}
                        transition={{ 
                            pathLength: { duration: 0.8, ease: "easeInOut" },
                            rotate: { duration: 0.8, ease: snapEase, delay: 0.8 } 
                        }}
                    />

                    {/* 2. The Main "Heavy" Line */}
                    <motion.path
                        d="M50 15L85 80H15L50 15Z"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        initial={{ 
                            pathLength: 0, 
                            stroke: "#050505",
                            rotate: 0 
                        }}
                        animate={{
                            pathLength: [0, 1, 1],
                            rotate: [0, 0, 180],
                            stroke: ["#050505", "#050505", "#FF4D00"], // Black -> Orange
                        }}
                        transition={{
                            duration: 1.8,
                            times: [0, 0.4, 1],
                            rotate: { duration: 0.8, ease: snapEase, delay: 0.8 }, // Snap logic
                            stroke: { delay: 1.5, duration: 0.1 } // Quick color switch
                        }}
                    />
                    
                    {/* 3. The "Ignition" Fill (Inner Glow) */}
                    <motion.path
                        d="M50 15L85 80H15L50 15Z"
                        fill="#FF4D00"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
                        transition={{ delay: 1.6, duration: 0.2 }}
                        style={{ transformOrigin: "center" }}
                    />
                </svg>
            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}