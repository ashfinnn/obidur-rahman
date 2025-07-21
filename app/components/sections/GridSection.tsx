// app/components/sections/GridSection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Data remains the same.
interface GridItemProps {
  id: string;
  number: string;
  title: string;
  href: string;
  lines: string[];
  ctaText: string;
}

const gridItems: GridItemProps[] = [
  {
    id: 'about-card',
    number: '01',
    title: 'ABOUT_ME',
    href: '#about',
    lines: ['MATHEMATICS_FOUNDATION', 'DATA_SCIENCE_PASSION', 'CONTINUOUS_LEARNING'],
    ctaText: 'READ_BIO',
  },
  {
    id: 'skills-card',
    number: '02',
    title: 'SKILL_MATRIX',
    href: '#skills',
    lines: ['TECHNICAL_EXPERTISE', 'PROGRAMMING_MASTERY', 'TOOL_PROFICIENCY'],
    ctaText: 'VIEW_TECH',
  },
  {
    id: 'projects-card',
    number: '03',
    title: 'PROJECT_ARCHIVE',
    href: '#projects',
    lines: ['INNOVATIVE_SOLUTIONS', 'REAL_WORLD_IMPACT', 'CODE_EXCELLENCE'],
    ctaText: 'EXPLORE_WORK',
  },
  {
    id: 'contact-card',
    number: '04',
    title: 'CONTACT_PROTOCOL',
    href: '#contact',
    lines: ['COLLABORATION_READY', 'GLOBAL_NETWORK', 'INITIATE_CONTACT'],
    ctaText: 'GET_IN_TOUCH',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 10 },
  },
};

const GridSection = () => {
  return (
    <motion.section 
      id="grid-section"
      className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-black"
      aria-labelledby="grid-title"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-20">
          <motion.h2
            id="grid-title"
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            variants={itemVariants}
          >
            SYSTEM_NAVIGATION
          </motion.h2>
          <motion.div
            // UPDATED: Using a vibrant accent color for the underline
            className="mt-4 w-32 h-px bg-cyan-300"
            variants={itemVariants}
            role="presentation"
          />
          <motion.p
            className="mt-6 text-gray-400 max-w-2xl text-base lg:text-lg"
            variants={itemVariants}
          >
            Interface with the core sections of this portfolio. Each module provides access to a distinct dataset of my professional journey.
          </motion.p>
        </header>

        <motion.nav 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" // Increased gap for better spacing with lift effect
          aria-label="Page Sections"
          variants={containerVariants}
        >
          {gridItems.map((item) => (
            <GridCard key={item.id} {...item} />
          ))}
        </motion.nav>
      </div>
    </motion.section>
  );
};

// IMPROVED: GridCard completely enhanced with more interactive elements and polish.
const GridCard = ({ number, title, href, lines, ctaText }: GridItemProps) => {
  return (
    // NEW: Added whileHover and whileTap for interactive feedback
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link
        href={href}
        className="group relative block h-full bg-gray-900/50 p-6 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-300 backdrop-blur-sm"
        aria-label={`Navigate to ${title.toLowerCase().replace('_', ' ')} section`}
      >
        {/* NEW: Decorative corner brackets for HUD aesthetic */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-700 transition-colors duration-300 group-hover:border-cyan-300"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gray-700 transition-colors duration-300 group-hover:border-cyan-300"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gray-700 transition-colors duration-300 group-hover:border-cyan-300"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-700 transition-colors duration-300 group-hover:border-cyan-300"></div>
        
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-gray-400">
              <span>[SECT_{number}]</span>
              {/* UPDATED: Arrow now slides in from the left on hover */}
              <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-cyan-300">→</span>
            </div>
            <div className="mt-4 w-full h-px bg-gray-800" role="presentation" />
          </div>

          <div className="space-y-4 my-8">
            <h3 className="font-mono text-xl font-bold text-gray-100">{title}</h3>
            <div className="font-mono text-xs text-gray-400 leading-relaxed">
              {lines.map((line, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-gray-600">■</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UPDATED: CTA is more interactive on hover */}
          <div className="font-mono text-xs text-gray-300 tracking-wider transition-colors duration-300 group-hover:text-cyan-300">
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">{`> ${ctaText}`}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default GridSection;