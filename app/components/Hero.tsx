"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full bg-[#FFFFFF] text-[#050505] overflow-hidden flex flex-col justify-center pt-12 pb-12"
    >
      {/* Texture & Grid (Keep existing code) */}
      <div className="absolute inset-0 z-40 pointer-events-none opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="container mx-auto h-full border-r border-l border-[#E5E5E5] relative">
          <div className="absolute left-1/2 md:left-1/3 top-0 bottom-0 w-px bg-[#E5E5E5]" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-[#E5E5E5]" />
        </div>
        <div className="absolute top-24 left-0 right-0 h-px bg-[#E5E5E5]" />
        <div className="absolute bottom-24 left-0 right-0 h-px bg-[#E5E5E5]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
        
        {/* UPDATED: JOB TITLE */}
        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="flex items-center gap-3 mb-4 md:mb-8"
        >
          <div className="h-1.5 w-1.5 bg-[#FF4D00]" />
          <span className="font-mono text-[10px] md:text-sm font-bold tracking-widest text-[#050505] uppercase">
            Machine Learning Engineer
          </span>
        </motion.div>

        {/* NAME BLOCK */}
        <div className="overflow-hidden">
          <motion.h1 
            style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? y1 : 0 }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16vw] md:text-[14vw] leading-[0.85] font-bold tracking-tighter text-[#050505]"
          >
            OBIDUR
          </motion.h1>
        </div>

        {/* DETAILS BLOCK */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
           className="w-full pl-4 border-l-2 border-[#FF4D00] my-6 md:my-8 md:ml-2 md:w-64"
        >
            <p className="font-mono text-[10px] md:text-xs leading-relaxed text-gray-500 uppercase">
              Deep Learning<br/>
              Pure Mathematics Bg.<br/>
              Computer Vision
            </p>
        </motion.div>

        {/* NAME BLOCK 2 */}
        <div className="overflow-hidden text-right md:text-left">
           <motion.h1 
              style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? y2 : 0 }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[16vw] md:text-[14vw] leading-[0.85] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#555] to-[#050505]"
           >
             RAHMAN
           </motion.h1>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 md:absolute md:bottom-32 md:right-12 z-20">
          <MagneticButton>
             <span className="flex items-center gap-4">
                VIEW INDEX <FiArrowRight />
             </span>
          </MagneticButton>
        </div>
      </div>

      {/* FOOTER DECOR */}
      <div className="absolute bottom-0 w-full border-t border-[#050505] bg-[#050505] text-white overflow-hidden py-2 md:py-3 z-30">
        <div className="flex justify-between px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest uppercase">
           <span>Sys. Optimized</span>
           <span className="hidden md:inline">Scroll Down</span>
        </div>
      </div>

      <div className="hidden md:block">
        <Crosshair position="top-24 left-1/3" />
        <Crosshair position="top-24 left-2/3" />
        <Crosshair position="bottom-24 left-1/3" />
        <Crosshair position="bottom-24 left-2/3" />
      </div>
    </section>
  );
}

// (Keep Crosshair and MagneticButton components as they were)
const Crosshair = ({ position }: { position: string }) => (
  <div className={`absolute ${position} -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none`}>
    <div className="relative h-4 w-4">
      <div className="absolute top-1/2 left-0 w-full h-px bg-[#FF4D00]" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-[#FF4D00]" />
    </div>
  </div>
);

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <a href="#projects" className="group inline-block relative px-8 py-4 bg-[#050505] text-white font-bold tracking-widest text-[10px] md:text-xs uppercase overflow-hidden hover:bg-[#FF4D00] transition-colors duration-300 w-full md:w-auto text-center">
            <span className="relative z-10">{children}</span>
        </a>
    )
}