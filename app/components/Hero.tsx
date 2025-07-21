// app/components/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, easeOut } from 'framer-motion';
import Link from 'next/link';
import HeroBackground from './HeroBackground';

const Hero = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    // Time logic is unchanged
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setTime(`DHK ${timeString}`);
    };
    updateTime();
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  const rightClusterVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut, delay: 0.8 } },
  };

  const bottomElementVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 1.2 } },
  };

  return (
    <section className="min-h-screen flex items-center relative p-4 sm:p-6 lg:p-8 overflow-hidden">
      <HeroBackground />

      {/* 1. Main content container with integrated corner brackets */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto p-8 sm:p-10 lg:p-12 
                   before:content-[''] before:absolute before:w-8 before:h-8 before:border-l before:border-t before:border-black/50 before:top-0 before:left-0
                   after:content-[''] after:absolute after:w-8 after:h-8 after:border-r after:border-t after:border-black/50 after:top-0 after:right-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div 
          className="relative
                     before:content-[''] before:absolute before:w-8 before:h-8 before:border-l before:border-b before:border-black/50 before:bottom-0 before:left-0
                     after:content-[''] after:absolute after:w-8 after:h-8 after:border-r after:border-b after:border-black/50 after:bottom-0 after:right-0"
        >
          {/* Asymmetrical grid for content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Side Content Block */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div variants={itemVariants} className="flex items-center gap-3 text-sm" role="status">
                  <div className="w-3 h-3 bg-green-500 status-pulse"></div>
                  <span className="font-mono tracking-wider text-black font-medium">SYSTEM.STATUS: OPERATIONAL</span>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <span className="font-mono tracking-wider text-gray-500">{time}</span>
              </motion.div>

              <div className="space-y-4">
                  <motion.h1 variants={itemVariants} className="font-sans text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none text-black">
                      OBIDUR<br />RAHMAN
                  </motion.h1>
                  <motion.div variants={itemVariants} className="h-12 overflow-hidden">
                      <div className="animate-text-slide">
                          <p className="font-mono text-xl md:text-2xl lg:text-3xl h-12 flex items-center text-gray-700">{'// MATHEMATICIAN'}</p>
                          <p className="font-mono text-xl md:text-2xl lg:text-3xl h-12 flex items-center text-gray-700">{'// DATA SCIENTIST'}</p>
                          <p className="font-mono text-xl md:text-2xl lg:text-3xl h-12 flex items-center text-gray-700">{'// DEVELOPER'}</p>
                          <p className="font-mono text-xl md:text-2xl lg:text-3xl h-12 flex items-center text-gray-700">{'// INNOVATOR'}</p>
                      </div>
                  </motion.div>
              </div>

              <motion.div variants={itemVariants} className="max-w-xl">
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      BSc Mathematics student passionate about the intersection of pure mathematics,
                      computational sciences, and artificial intelligence. Transforming complex problems
                      into elegant solutions.
                  </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <Link href="#projects" aria-label="Explore my work" className="px-6 py-3 bg-black text-white font-mono text-sm tracking-wider hover:bg-gray-800 transition-all border border-black">
                      [ EXPLORE_WORK ]
                  </Link>
                  <a href="mailto:obidur.shawal@gmail.com" aria-label="Contact me" className="px-6 py-3 border border-gray-400 text-black font-mono text-sm tracking-wider hover:bg-black hover:text-white transition-all">
                      [ INITIATE_CONTACT ]
                  </a>
              </motion.div>
            </div>
            
            {/* Right Side "Data Cluster" */}
            <motion.div className="hidden lg:flex flex-col items-start gap-4 self-center" variants={rightClusterVariants}>
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-black/30 to-transparent"></div>
              <p className="font-mono text-xs text-gray-400 tracking-widest">[//SYSTEM_GRID: ONLINE]</p>
              <p className="font-mono text-xs text-gray-400 tracking-widest">[//PARALLAX_MODULE: ACTIVE]</p>
              <p className="font-mono text-xs text-gray-400 tracking-widest">[//GEO_SIG: 23.8°N, 90.4°E]</p>
              <div className="w-px h-24 bg-gradient-to-t from-transparent via-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-6 right-1/2 translate-x-1/2 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center gap-2"
        variants={bottomElementVariants}
      >
        <span className="font-mono text-xs text-black/50">[SCROLL_DOWN]</span>
        <svg className="w-4 h-4 text-black/60 animate-pulse-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;