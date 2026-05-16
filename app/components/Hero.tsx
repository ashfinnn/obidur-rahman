'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { FiGithub, FiLinkedin, FiBook } from 'react-icons/fi';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    /**
     * STICKY WRAPPER: this is the key to the card-stack effect.
     * The parent in page.jsx must NOT have overflow:hidden so sticky works.
     * Height is 100vh; the About card sits below and scrolls over this.
     */
    <div className="h-[80vh] w-full">
      <section className="relative h-full w-full bg-black overflow-hidden flex flex-col justify-center text-white">
        {/* Background Video & Gradients */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-overlay"
          >
            <source src="/bg.webm" type="video/webm" />
          </video>
          {/* Colorful overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/60 to-[#FF4D00]/20" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF4D00]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isMounted ? 'visible' : 'hidden'}
          className="relative z-10 container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col lg:flex-row lg:items-center justify-between gap-10 md:gap-12"
        >
          {/* Main Text Block */}
          <div className="max-w-4xl">
            <motion.h1
              variants={item}
              className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.15] tracking-tight"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              <span className="italic text-white">Machine Learning Engineer</span>,
              with a focus on{' '}
              <span className="text-white/70">Deep Learning</span>,{' '}
              <span className="text-white/70">Computer Vision</span> and{' '}
              <span className="text-white/70">Model Compression</span>.
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-6 md:mt-8 flex items-center gap-4"
            >
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-white/50">
                Obidur Rahman
              </span>
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            variants={item}
            className="flex flex-col gap-6 lg:items-end mt-4 lg:mt-0"
          >
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FF4D00]" />
              <a
                href="mailto:obidur.shawal@gmail.com"
                className="font-mono text-xs md:text-sm tracking-widest hover:text-[#FF4D00] transition-colors"
              >
                obidur.shawal@gmail.com
              </a>
            </div>

            <div className="flex gap-5 md:gap-6">
              <a
                href="https://github.com/Ashfinnn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <FiGithub size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/obidur-rahman-shawal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <FiLinkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Obidur-Rahman-3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <FiBook size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
