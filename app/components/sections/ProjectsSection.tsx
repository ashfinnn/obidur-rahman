// app/components/sections/ProjectsSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjectsData } from '../lib/data'; // Adjust import path as needed
import { Project } from '../lib/types'; // Adjust import path as needed

// 1. IMPROVEMENT: The ProjectEntry is now a self-contained, interactive row link.
const ProjectEntry = ({ item }: { item: Project }) => (
  <Link
    href={item.link || '#'}
    target={item.link ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className={`group relative block transition-colors ${!item.link ? 'cursor-default' : ''}`}
    aria-disabled={!item.link}
    onClick={(e) => !item.link && e.preventDefault()}
  >
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="border-b border-gray-200 py-6"
    >
      {/* 2. IMPROVEMENT: Animated left border on hover for a "selection" effect */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-black scale-y-0 transform-origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-100" />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 items-center pl-4 md:pl-8">
        {/* Project Title and Subtitle */}
        <div className="md:col-span-4">
          <h4 className="font-sans text-lg font-bold text-black">{item.title}</h4>
          <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
        </div>

        {/* 3. IMPROVEMENT: Sharper, wireframe-style tags */}
        <div className="md:col-span-5">
          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-transparent text-gray-600 font-mono text-xs border border-gray-300 transition-colors duration-300 group-hover:border-gray-500">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Link / Status */}
        <div className="md:col-span-3 flex justify-start md:justify-end">
          {item.link ? (
            <div className="font-mono text-xs text-black tracking-wider flex items-center gap-2">
              <span>VIEW_DETAILS</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          ) : (
            <span className="font-mono text-xs text-gray-400 tracking-wider">IN_PROGRESS</span>
          )}
        </div>
      </div>
    </motion.div>
  </Link>
);

const ProjectsSection = () => {
    const categories = Object.keys(allProjectsData) as Array<keyof typeof allProjectsData>;
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof allProjectsData>(categories[0]);

    return (
        <motion.section
            id="projects"
            className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.header 
                    className="mb-12 md:mb-16"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                    <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black">
                        PROJECT_ARCHIVE
                    </h2>
                    <div className="mt-4 w-32 h-px bg-black" />
                    <p className="mt-6 text-gray-600 max-w-2xl text-base lg:text-lg">
                        A curated collection of my technical projects. Select a directory to filter the archive.
                    </p>
                </motion.header>

                {/* 4. IMPROVEMENT: Sharper, more decisive filter buttons */}
                <motion.div 
                    className="flex flex-wrap gap-2 mb-12"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                >
                    {categories.map(cat => (
                        <motion.button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 font-mono text-xs tracking-wider border transition-colors duration-200
                                ${selectedCategory === cat 
                                    ? 'bg-black text-white border-black' 
                                    : 'bg-transparent text-black border-gray-300 hover:border-black hover:bg-gray-50'}`
                            }
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        >
                            {`// ${allProjectsData[cat].title.toUpperCase()}`}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div 
                    className="min-h-[300px] border-t border-gray-200"
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.2 } }}
                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        >
                            {allProjectsData[selectedCategory].items.map(item => (
                                <ProjectEntry key={item.title} item={item} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;