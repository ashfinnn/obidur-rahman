"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useTransform,
} from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { ScrambleText } from "./ui/ScrambleText";

// Define Parallax strength for depth effect
const PARALLAX_STRENGTH = 15; // Increased slightly for more impact

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  // 1. Setup Motion Values (Mouse Tracking)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Spotlight Gradient (Hardware-accelerated)
  // **FIX: Increased size from 650px to 800px and made it slightly less opaque (0.08)**
  const spotlight = useMotionTemplate`radial-gradient(800px circle at ${smoothX}px ${smoothY}px, rgba(14, 165, 233, 0.08), transparent 85%)`;

// 4. Parallax Transforms for Text Depth
  const nameParallaxX = useTransform(smoothX, (x) => {
    if (!rootRef.current) return 0;
    return -(x / rootRef.current.offsetWidth - 0.5) * PARALLAX_STRENGTH;
  });
  const nameParallaxY = useTransform(smoothY, (y) => {
    if (!rootRef.current) return 0;
    return -(y / rootRef.current.offsetHeight - 0.5) * PARALLAX_STRENGTH;
  });
  // 5. Mouse Move Handler
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      
      const { left, top } = el.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={rootRef}
      // FIX: Changed min-h-screen to h-screen to ensure a consistent height, and adjusted padding.
      className="relative h-screen flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden px-4 sm:px-6 selection:bg-cyan-500/30"
    >
      {/* 1. Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* 2. Darker Vignette/Ambient Shadow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#050505_100%)] z-0 pointer-events-none"/>

      {/* 3. Spotlight Layer */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: spotlight }}
      />

      {/* FIX: Increased max-w from 4xl to 5xl to give content more horizontal room */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-10 py-24 sm:py-32"> 
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-cyan-950/40 to-cyan-950/10 border border-cyan-500/20 rounded-full text-xs font-mono text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            AVAILABLE FOR WORK
          </div>
        </motion.div>

        {/* Main Heading - With Parallax Depth */}
        <motion.h1 
            style={{ x: nameParallaxX, y: nameParallaxY }}
            // FIX: Increased font size for desktop (lg:text-9xl)
            className="text-6xl sm:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tight [text-shadow:0_0_20px_rgba(255,255,255,0.05)]"
        >
          {/* First Name - Bolder, Brighter */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block overflow-hidden"
          >
            <ScrambleText text="OBIDUR" className="text-white" />
          </motion.div>

          {/* Last Name - Subtler, Depth Effect */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block mt-2 sm:mt-3 overflow-hidden"
          >
            <span className="text-gray-500/80">
              <ScrambleText text="RAHMAN" />
            </span>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="inline-block text-cyan-400"
            >
              .
            </motion.span>
          </motion.div>
        </motion.h1>

        {/* Description - Increased max-w for wider reading space */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          // FIX: Increased max-w for description text
          className="text-gray-400 max-w-2xl font-mono text-sm sm:text-base leading-relaxed mt-4" 
        >
          Architecting scalable intelligence — building robust models with{" "}
          <span className="text-gray-200 font-semibold border-b border-gray-700 pb-0.5">Python</span>,{" "}
          <span className="text-cyan-400 font-semibold border-b border-cyan-500/30 pb-0.5">PyTorch</span>, 
          and production-ready pipelines.
        </motion.p>

        {/* Buttons - Increased top margin */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-8" 
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-gray-100 text-black font-bold font-mono text-xs tracking-wider overflow-hidden shadow-lg hover:shadow-cyan-400/30 transition-shadow"
          >
            <span className="relative z-10 flex items-center">
              VIEW WORK 
              <motion.span 
                initial={{ x: -2 }}
                animate={{ x: 0 }}
                transition={{ repeat: Infinity, duration: 0.8, repeatType: 'reverse' }}
                className="ml-2"
              >
                &rarr;
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </a>

          <a
            href="#contact"
            className="group border border-white/10 px-8 py-3.5 text-xs font-mono text-white hover:bg-white/5 transition-colors shadow-lg hover:border-cyan-400/40"
          >
            <span className="flex items-center">
              CONTACT ME
              <FiMail className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </span>
          </a>
        </motion.div>

        {/* Socials - Increased top margin */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex items-center gap-8 mt-16" 
        >
          <SocialLink href="#" icon={<FiGithub size={24} />} label="GitHub" />
          <SocialLink href="#" icon={<FiLinkedin size={24} />} label="LinkedIn" />
        </motion.div>

        {/* Separator Line */}
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }} // Slightly wider line
            transition={{ delay: 0.9, duration: 0.8 }}
            className="h-px bg-cyan-400/50 mt-10" // Increased top margin
        />

      </div>
      {/* Scroll Indicator at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 z-10 text-gray-500 animate-bounce"
      >
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  );
}

// Helper component for cleaner JSX and consistent styling
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-500 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

// We need to re-import FiArrowDown at the top since it was used in the previous version
import { FiArrowDown } from "react-icons/fi";