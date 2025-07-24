// app/components/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, easeOut } from 'framer-motion';
import Link from 'next/link';
import HeroBackground from './HeroBackground';
import { HudBox } from './ui/HudBox';

// +++ NEW: Reusable Button Component for consistency +++
type ButtonProps = {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  isExternal?: boolean;
};

const Button = ({ href, variant = 'primary', children, isExternal = false }: ButtonProps) => {
  const baseClasses = "px-6 py-3 font-mono text-sm tracking-wider transition-all duration-300 border";

  const styles = {
    primary: 'bg-black text-white border-black hover:bg-gray-800',
    secondary: 'bg-transparent text-black border-gray-400 hover:bg-black hover:text-white',
  };

  const Component = isExternal ? 'a' : Link;

  return (
    <Component
      href={href}
      className={`${baseClasses} ${styles[variant]}`}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </Component>
  );
};

const Hero = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setTime(`CTG ${timeString}`);
    };
    updateTime();
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  // --- Variants are perfect, no changes needed ---
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } };
  const rightClusterVariants = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut, delay: 0.8 } } };
  const bottomElementVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: 1.2 } } };

  return (
    <section className="min-h-screen flex items-center relative p-4 sm:p-6 lg:p-8 overflow-hidden">
      <HeroBackground />

      <HudBox
        className="z-10 w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        bracketClassName="border-black/30" // IMPROVEMENT: Slightly softer brackets
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-3 text-sm" role="status">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-mono tracking-wider text-black font-medium">SYSTEM.STATUS: OPERATIONAL</span>
              <div className="w-px h-4 bg-gray-300"></div>
              <span className="font-mono tracking-wider text-gray-500" aria-live="polite">{time}</span> {/* ACCESSIBILITY: Aria-live for time */}
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
                  <p className="font-mono text-xl md:text-2xl lg:text-3xl h-12 flex items-center text-gray-700">{'// MATHEMATICIAN'}</p>
                </div>
              </motion.div>
            </div>

            <motion.p variants={itemVariants} className="max-w-xl text-gray-600 leading-relaxed text-base lg:text-lg">
              BSc Mathematics student passionate about the intersection of pure mathematics,
              computational sciences, and artificial intelligence. Transforming complex problems
              into elegant solutions.
            </motion.p>

            {/* +++ REFACTORED: Using the new Button component for cleaner code +++ */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button href="/resume.pdf" isExternal>
                [ CHECK RESUME ]
              </Button>
              <Button href="mailto:obidur.shawal@gmail.com" variant="secondary" isExternal>
                [ INITIATE_CONTACT ]
              </Button>
            </motion.div>
          </div>

          {/* +++ IMPROVEMENT: Enhanced data cluster with a blinking cursor effect +++ */}
          <motion.div className="hidden lg:flex flex-col items-start gap-4 self-center" variants={rightClusterVariants}>
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-black/30 to-transparent"></div>
            <p className="font-mono text-xs text-gray-400 tracking-widest">[//SYSTEM_GRID: ONLINE]</p>
            <p className="font-mono text-xs text-gray-400 tracking-widest">[//PARALLAX_MODULE: ACTIVE]</p>
            <div className='flex items-center gap-1.5'>
              <p className="font-mono text-xs text-gray-400 tracking-widest">[//GEO_SIG: 23.8°N, 90.4°E]</p>
              <div className="w-1.5 h-3 bg-gray-400 animate-pulse"></div> {/* Blinking cursor */}
            </div>
            <div className="w-px h-24 bg-gradient-to-t from-transparent via-black/30 to-transparent"></div>
          </motion.div>
        </div>
      </HudBox>

      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" variants={bottomElementVariants}>
        <span className="font-mono text-xs text-black/50">[SCROLL_DOWN]</span>
        <svg
          className="w-4 h-4 text-black/60 animate-pulse-arrow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;