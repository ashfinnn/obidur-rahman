// app/components/sections/ProjectsSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjectsData } from '../lib/data'; // Adjust import path as needed
import { Project } from '../lib/types'; // Adjust import path as needed

// 1. Redesigned Project "Card" to look like a file/dossier entry
const ProjectEntry = ({ item }: { item: Project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="group relative border-b border-gray-200 py-6"
    >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 items-center">
            {/* Project Title and Subtitle */}
            <div className="md:col-span-4">
                <h4 className="font-sans text-lg font-bold text-black transition-colors duration-300 group-hover:text-gray-600">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
            </div>

            {/* Tags */}
            <div className="md:col-span-5">
                <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 font-mono text-xs border border-gray-200">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Link */}
            <div className="md:col-span-3 flex justify-start md:justify-end">
                {item.link ? (
                    <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-black tracking-wider flex items-center gap-2"
                    >
                        <span>VIEW_DETAILS</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                ) : (
                    <span className="font-mono text-xs text-gray-400 tracking-wider">IN_PROGRESS</span>
                )}
            </div>
        </div>
    </motion.div>
);

const ProjectsSection = () => {
    // Default to the first category
    const categories = Object.keys(allProjectsData) as Array<keyof typeof allProjectsData>;
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof allProjectsData>(categories[0]);

    return (
        <motion.section
            className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
            <div className="max-w-7xl mx-auto">
                {/* 2. Thematic Header */}
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

                {/* 3. Refined Filter Buttons */}
                <motion.div 
                    className="flex flex-wrap gap-2 mb-12"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                >
                    {categories.map(cat => (
                        <motion.button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 font-mono text-xs tracking-wider border transition-colors duration-300
                                ${selectedCategory === cat 
                                    ? 'bg-black text-white border-black' 
                                    : 'bg-transparent text-black border-gray-300 hover:border-black'}`
                            }
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        >
                            {`// ${allProjectsData[cat].title.toUpperCase()}`}
                        </motion.button>
                    ))}
                </motion.div>

                {/* 4. Project Display as a List/Table */}
                <motion.div 
                    className="min-h-[300px] border-t border-gray-200"
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
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