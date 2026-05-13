"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiBook } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    /**
     * STICKY WRAPPER — this is the key to the card-stack effect.
     * The parent in page.jsx must NOT have overflow:hidden so sticky works.
     * Height is 100vh; the About card sits below and scrolls over this.
     */
    <div className="h-[80vh] w-full">
      <section className="relative h-full w-full bg-black overflow-hidden flex flex-col justify-center text-white">
        {/* Background GIF & Gradients */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.gif"
            alt="Background"
            fill
            className="object-cover opacity-70 mix-blend-overlay"
            priority
            unoptimized
          />
          {/* Colorful overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/60 to-[#FF4D00]/20" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF4D00]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          className="relative z-10 container mx-auto px-6 sm:px-12 md:px-24 flex flex-col lg:flex-row lg:items-center justify-between gap-12"
        >
          {/* Main Text Block */}
          <div className="max-w-3xl">
            <motion.h1
              variants={item}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] tracking-tight"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              <span className="italic text-white">Machine Learning Engineer</span> —
              with a focus on{" "}
              <span className="text-white/70">Deep Learning</span>,{" "}
              <span className="text-white/70">Computer Vision</span> and{" "}
              <span className="text-white/70">Model Compression</span>.
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-8 flex items-center gap-4"
            >
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-white/50">
                Obidur Rahman
              </span>
              <div className="h-[1px] w-12 bg-white/20" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#FF4D00]">
                Available for Research
              </span>
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            variants={item}
            className="flex flex-col gap-6 lg:items-end"
          >
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-[#FF4D00]" />
              <a
                href="mailto:obidur.shawal@gmail.com"
                className="font-mono text-sm tracking-widest hover:text-[#FF4D00] transition-colors"
              >
                obidur.shawal@gmail.com
              </a>
            </div>

            <div className="flex gap-6 mt-4">
              <a
                href="https://github.com/Ashfinn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/obidur-rahman-shawal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://www.researchgate.net/profile/Obidur-Rahman-3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <FiBook size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.4em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown className="text-[#FF4D00]" size={20} />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}