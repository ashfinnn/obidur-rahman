// app/components/Loader.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onLoaded }: { onLoaded: () => void }) {
  const [isComplete, setIsComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    document.body.style.overflow = "hidden";

    // Mobile: 1.2s load, Desktop: 2s load
    const loadTime = window.innerWidth < 768 ? 1200 : 2000;
    const exitDelay = window.innerWidth < 768 ? 400 : 1000;

    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onLoaded();
      }, exitDelay);
    }, loadTime);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onLoaded]);

  const panelEase = [0.76, 0, 0.24, 1] as const;
  const snapEase = [0.68, -0.6, 0.32, 1.6] as const;

  return (
    <AnimatePresence>
      {!isComplete && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
          
          {/* SHUTTERS - Only on desktop */}
          {!isMobile && (
            <>
              <motion.div
                initial={{ height: "50vh" }}
                exit={{ height: "0vh" }}
                transition={{ duration: 0.8, ease: panelEase }}
                className="absolute top-0 left-0 right-0 bg-white border-b border-[#E5E5E5] z-10"
              >
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
              </motion.div>

              <motion.div
                initial={{ height: "50vh" }}
                exit={{ height: "0vh" }}
                transition={{ duration: 0.8, ease: panelEase }}
                className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E5E5] z-10"
              >
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
              </motion.div>
            </>
          )}

          {/* LOGO */}
          <div className="relative z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: isMobile ? 0.8 : 0.5 }}
              transition={{ duration: isMobile ? 0.2 : 0.3 }}
            >
              <svg 
                width={isMobile ? "80" : "120"}
                height={isMobile ? "80" : "120"}
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
              >
                {/* Desktop: Full 3-stage animation */}
                {/* Mobile: Simple draw + color */}
                {!isMobile && (
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
                )}

                <motion.path
                  d="M50 15L85 80H15L50 15Z"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  initial={{ 
                    pathLength: 0, 
                    stroke: "#050505",
                    rotate: 0 
                  }}
                  animate={isMobile ? {
                    // Mobile: Simple draw
                    pathLength: 1,
                    stroke: "#FF4D00",
                  } : {
                    // Desktop: Full sequence
                    pathLength: [0, 1, 1],
                    rotate: [0, 0, 180],
                    stroke: ["#050505", "#050505", "#FF4D00"],
                  }}
                  transition={isMobile ? {
                    duration: 0.8,
                  } : {
                    duration: 1.8,
                    times: [0, 0.4, 1],
                    rotate: { duration: 0.8, ease: snapEase, delay: 0.8 },
                    stroke: { delay: 1.5, duration: 0.1 }
                  }}
                />
                
                {/* Fill - Desktop only */}
                {!isMobile && (
                  <motion.path
                    d="M50 15L85 80H15L50 15Z"
                    fill="#FF4D00"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 1], scale: [0.9, 1] }}
                    transition={{ delay: 1.6, duration: 0.2 }}
                    style={{ transformOrigin: "center" }}
                  />
                )}
              </svg>
            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}