// app/components/sections/GridSection.tsx
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

// 1. Data updated for the new design. No more gradient classes.
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
    transition: { type: "spring" as const, stiffness: 100, damping: 10 },
  },
};

const GridSection = () => {
  return (
    <motion.section 
      id="grid-section"
      className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-white"
      aria-labelledby="grid-title"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 2. Header updated for the new theme */}
        <header className="mb-16 md:mb-20">
          <motion.h2
            id="grid-title"
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black"
            variants={itemVariants}
          >
            SYSTEM_NAVIGATION
          </motion.h2>
          <motion.div
            className="mt-4 w-32 h-px bg-black"
            variants={itemVariants}
            role="presentation"
          />
          <motion.p
            className="mt-6 text-gray-600 max-w-2xl text-base lg:text-lg"
            variants={itemVariants}
          >
            Interface with the core sections of this portfolio. Each module provides access to a distinct dataset of my professional journey.
          </motion.p>
        </header>

        {/* 3. Grid uses motion variants for staggered animation */}
        <motion.nav 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" 
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

// 4. GridCard component completely redesigned for the HUD aesthetic
const GridCard = ({ number, title, href, lines, ctaText }: GridItemProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Link
        href={href}
        className="group relative block h-full border border-gray-200 p-6 transition-colors duration-300 hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        aria-label={`Navigate to ${title.toLowerCase().replace('_', ' ')} section`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Top section of the card */}
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-gray-400">
              <span>[SECT_{number}]</span>
              <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">→</span>
            </div>
            <div className="mt-4 w-full h-px bg-gray-200 transition-colors duration-300 group-hover:bg-black" role="presentation" />
          </div>

          {/* Middle section with title and lines */}
          <div className="space-y-4 my-8">
            <h3 className="font-mono text-xl font-bold text-black">{title}</h3>
            <div className="font-mono text-xs text-gray-500 leading-relaxed">
              {lines.map((line, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-gray-300">■</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section with CTA */}
          <div className="font-mono text-xs text-black tracking-wider">
            <span>{`> ${ctaText}`}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default GridSection;