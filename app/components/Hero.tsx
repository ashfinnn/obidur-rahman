"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Fast stagger animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full bg-[#FFFFFF] text-[#050505] overflow-hidden flex flex-col justify-center py-16 md:py-12"
    >
      {/* Texture */}
      <div className="absolute inset-0 z-40 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply hidden md:block" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="container mx-auto h-full border-r border-l border-[#E5E5E5] relative">
          <div className="absolute left-1/2 md:left-1/3 top-0 bottom-0 w-px bg-[#E5E5E5]" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-[#E5E5E5]" />
        </div>
        <div className="absolute top-24 left-0 right-0 h-px bg-[#E5E5E5]" />
        <div className="absolute bottom-24 left-0 right-0 h-px bg-[#E5E5E5]" />
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-center h-full"
      >
        
        {/* Job Title */}
        <motion.div variants={item} className="flex items-center gap-3 mb-4 md:mb-8">
          <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-[#FF4D00]" />
          <span className="font-mono text-[9px] sm:text-[10px] md:text-sm font-bold tracking-widest text-[#050505] uppercase">
            Machine Learning Engineer
          </span>
        </motion.div>

        {/* OBIDUR */}
        <div className="overflow-hidden">
          <motion.h1 
            variants={item}
            style={isMounted && !isMobile ? { y: y1 } : undefined}
            className="text-[15vw] sm:text-[14vw] md:text-[12vw] lg:text-[14vw] leading-[0.85] font-bold tracking-tighter text-[#050505]"
          >
            OBIDUR
          </motion.h1>
        </div>

        {/* Details */}
        <motion.div 
          variants={item}
          className="w-full pl-4 border-l-2 border-[#FF4D00] my-4 sm:my-6 md:my-8 md:ml-2 md:w-64"
        >
          <p className="font-mono text-[9px] sm:text-[10px] md:text-xs leading-relaxed text-gray-500 uppercase">
            Deep Learning<br/>
            Pure Mathematics Bg.<br/>
            Computer Vision
          </p>
        </motion.div>

        {/* RAHMAN */}
        <div className="overflow-hidden text-right md:text-left">
          <motion.h1 
            variants={item}
            style={isMounted && !isMobile ? { y: y2 } : undefined}
            className="text-[15vw] sm:text-[14vw] md:text-[12vw] lg:text-[14vw] leading-[0.85] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#555] to-[#050505]"
          >
            RAHMAN
          </motion.h1>
        </div>

        {/* CTAs */}
        <motion.div 
          variants={item}
          className="mt-8 sm:mt-10 md:mt-16 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <a 
            href="#research"
            className="group inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-[#050505] text-white font-bold tracking-widest text-[10px] sm:text-xs uppercase hover:bg-[#FF4D00] transition-colors duration-200 w-full sm:w-auto"
          >
            <span>VIEW RESEARCH</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <a 
              href="https://github.com/Ashfinn" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 border border-[#E5E5E5] hover:border-[#050505] hover:bg-[#050505] hover:text-white transition-all duration-200"
            >
              <FiGithub size={16} />
              <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/obidur-rahman-shawal" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 border border-[#E5E5E5] hover:border-[#050505] hover:bg-[#050505] hover:text-white transition-all duration-200"
            >
              <FiLinkedin size={16} />
              <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        style={isMounted && !isMobile ? { opacity } : undefined}
        className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-[#FF4D00]" size={16} />
        </motion.div>
      </motion.div>

      {/* Footer Bar */}
      <motion.div 
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="absolute bottom-0 w-full border-t border-[#050505] bg-[#050505] text-white py-2 md:py-3 z-30"
      >
        <div className="flex justify-between px-4 sm:px-6 md:px-12 font-mono text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase">
          <span>Sys. Optimized</span>
          <span className="hidden sm:inline">University of Chittagong</span>
          <span className="sm:hidden">UCG</span>
        </div>
      </motion.div>

      {/* Crosshairs - Desktop */}
      {isMounted && !isMobile && (
        <>
          <Crosshair position="top-24 left-1/3" />
          <Crosshair position="top-24 left-2/3" />
          <Crosshair position="bottom-24 left-1/3" />
          <Crosshair position="bottom-24 left-2/3" />
        </>
      )}
    </section>
  );
}

const Crosshair = ({ position }: { position: string }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.2 }}
    className={`absolute ${position} -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none`}
  >
    <div className="relative h-4 w-4">
      <div className="absolute top-1/2 left-0 w-full h-px bg-[#FF4D00]" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-[#FF4D00]" />
    </div>
  </motion.div>
);