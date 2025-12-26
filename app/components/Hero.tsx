"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FiArrowRight, FiCornerRightDown } from "react-icons/fi";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax: Text moves at different speeds for depth
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  // Live Time
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    const timer = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] w-full bg-[#FFFFFF] text-[#050505] overflow-hidden flex flex-col pt-24 pb-8"
    >
      {/* 1. TEXTURE: Subtle Print Grain Overlay */}
      <div className="absolute inset-0 z-40 pointer-events-none opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

      {/* 2. GRID SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Vertical Columns */}
        <div className="container mx-auto h-full border-r border-[#E5E5E5] border-l border-[#E5E5E5] relative">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-[#E5E5E5]" />
          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-[#E5E5E5]" />
        </div>
        {/* Horizontal Rows */}
        <div className="absolute top-24 left-0 right-0 h-px bg-[#E5E5E5]" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#E5E5E5]" />
        <div className="absolute bottom-24 left-0 right-0 h-px bg-[#E5E5E5]" />
      </div>

      {/* 3. HEADER METADATA (Fixed Absolute) */}
      <div className="absolute top-6 w-full z-50 px-6 md:px-12 flex justify-between items-start font-mono text-[10px] md:text-xs tracking-widest text-[#050505]/60 uppercase">
        <div className="flex flex-col">
          <span className="text-[#FF4D00]">● LIVE_FEED</span>
          <span>{time} UTC+1</span>
        </div>
        <div className="text-right hidden md:block">
          <span>LAT: 51.5074° N</span><br/>
          <span>LNG: 0.1278° W</span>
        </div>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        
        {/* TYPOGRAPHY COMPOSITION */}
        <div className="relative mix-blend-darken">
          {/* Top Label */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="flex items-center gap-3 mb-4 md:mb-8"
          >
            <div className="h-2 w-2 bg-[#FF4D00]" />
            <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-[#050505]">
              FULL STACK MACHINE LEARNING
            </span>
          </motion.div>

          {/* Massive First Name */}
          <div className="overflow-hidden">
            <motion.h1 
              style={{ y: y1 }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-[#050505]"
            >
              OBIDUR
            </motion.h1>
          </div>

          {/* Indented Last Name + Decorator */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mt-2 md:mt-0">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="hidden md:block w-48 mt-8 pl-2 border-l-2 border-[#FF4D00]"
             >
                <p className="font-mono text-xs leading-tight text-gray-500">
                  SPECIALIZED IN:<br/>
                  NEURAL ARCHITECTURE<br/>
                  SCALABLE SYSTEMS<br/>
                  DATA ENGINEERING
                </p>
             </motion.div>

             <div className="overflow-hidden relative">
                <motion.h1 
                   style={{ y: y2 }}
                   initial={{ y: "100%" }}
                   animate={{ y: 0 }}
                   transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                   className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#555] to-[#050505] text-right"
                >
                  RAHMAN
                </motion.h1>
                {/* Decoration: Tiny 'Trade Mark' style text */}
                <span className="absolute top-4 right-0 md:-right-8 text-xs md:text-lg font-mono text-[#FF4D00] font-bold">
                  (01)
                </span>
             </div>
          </div>
        </div>

        {/* CTA AREA */}
        <div className="absolute bottom-32 md:bottom-48 left-6 md:left-12 z-20">
          <MagneticButton>
             <span className="flex items-center gap-4">
                INDEX <FiArrowRight />
             </span>
          </MagneticButton>
        </div>

      </div>

      {/* 5. MARQUEE FOOTER (Infinite Scroll) */}
      <div className="absolute bottom-0 w-full border-t border-[#050505] bg-[#050505] text-white overflow-hidden py-3">
        <motion.div 
          className="flex whitespace-nowrap font-mono text-sm tracking-[0.2em]"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {Array(8).fill(" • AVAILABLE FOR COMMISSIONS • SYSTEM OPTIMIZATION • MODEL DEPLOYMENT").map((t, i) => (
             <span key={i} className="mx-4">{t}</span>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative Crosshairs in corners */}
      <Crosshair position="top-24 left-1/3" />
      <Crosshair position="top-24 left-2/3" />
      <Crosshair position="bottom-24 left-1/3" />
      <Crosshair position="bottom-24 left-2/3" />

    </section>
  );
}

// --- MICRO COMPONENTS ---

const Crosshair = ({ position }: { position: string }) => (
  <div className={`absolute ${position} -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none`}>
    <div className="relative h-4 w-4">
      <div className="absolute top-1/2 left-0 w-full h-px bg-[#FF4D00]" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-[#FF4D00]" />
    </div>
  </div>
);

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
    // Basic magnetic implementation could be added here
    return (
        <button className="group relative px-8 py-4 bg-[#050505] text-white font-bold tracking-widest text-xs uppercase overflow-hidden hover:bg-[#FF4D00] transition-colors duration-300">
            <span className="relative z-10">{children}</span>
        </button>
    )
}