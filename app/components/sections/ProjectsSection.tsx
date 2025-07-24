// app/components/sections/ProjectsSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjectsData } from '../lib/data'; // Adjust import path as needed
import { Project } from '../lib/types'; // Adjust import path as needed

// ProjectEntry component adapted for a dark theme
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
      className="border-b border-neutral-800 py-6" // CHANGED: border-neutral-800
    >
      {/* Animated left border on hover */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-cyan-300 scale-y-0 origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-100" /> {/* CHANGED: bg-cyan-300 */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 items-center pl-4 md:pl-8">
        <div className="md:col-span-4">
          <h4 className="font-sans text-lg font-bold text-white">{item.title}</h4> {/* CHANGED: text-white */}
          <p className="text-sm text-neutral-400 mt-1">{item.subtitle}</p> {/* CHANGED: text-neutral-400 */}
        </div>

        <div className="md:col-span-5">
          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-transparent text-neutral-300 font-mono text-xs border border-neutral-700 transition-colors duration-300 group-hover:border-cyan-300/50 group-hover:text-cyan-300"> {/* CHANGED: colors */}
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 flex justify-start md:justify-end">
          {item.link ? (
            <div className="font-mono text-xs text-cyan-300 tracking-wider flex items-center gap-2"> {/* CHANGED: text-cyan-300 */}
              <span>VIEW_DETAILS</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          ) : (
            <span className="font-mono text-xs text-neutral-500 tracking-wider">IN_PROGRESS</span> // CHANGED: text-neutral-500
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
      className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-black" // CHANGED: bg-black
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
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"> {/* CHANGED: text-white */}
            PROJECT_ARCHIVE
          </h2>
          <div className="mt-4 w-32 h-px bg-cyan-300" /> {/* CHANGED: bg-cyan-300 */}
          <p className="mt-6 text-neutral-400 max-w-2xl text-base lg:text-lg"> {/* CHANGED: text-neutral-400 */}
            A curated collection of my technical projects. Select a directory to filter the archive.
          </p>
        </motion.header>

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
                  ? 'bg-cyan-300 text-black border-cyan-300' // CHANGED: Active state
                  : 'bg-transparent text-neutral-300 border-neutral-700 hover:border-cyan-300/50 hover:text-cyan-300'}` // CHANGED: Inactive state
              }
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              {`// ${allProjectsData[cat].title.toUpperCase()}`}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="min-h-[300px] border-t border-neutral-800" // CHANGED: border-neutral-800
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