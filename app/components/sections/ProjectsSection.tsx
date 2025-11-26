'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjectsData } from '../lib/data'; // Keep your existing data import
import { FiArrowUpRight, FiFolder } from 'react-icons/fi';

const ProjectsSection = () => {
    const [filter, setFilter] = useState('all');

    const allProjects = useMemo(() => {
        if(!allProjectsData) return [];
        return Object.values(allProjectsData).flatMap(cat =>
            cat.items.map(item => ({ ...item, category: cat.title }))
        );
    }, []);

    const categories = useMemo(() => {
        if(!allProjectsData) return ['all'];
        return ['all', ...Object.values(allProjectsData).map(cat => cat.title)];
    }, []);

    const filteredProjects = filter === 'all' 
        ? allProjects 
        : allProjects.filter(project => project.category === filter);

    return (
        <section id="projects" data-theme="dark" className="relative  bg-[#000000] py-24 md:py-32 min-h-full">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-10" 
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
            />

            <div className="max-w-[90rem] mx-auto px-6 md:px-12 md:pl-32 relative z-10">
                
                {/* Header & Filter Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
                    <div>
                        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                            03 // Selected Works
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black mt-2 leading-none">
                            PROJECT<br/><span className="text-gray-600">ARCHIVE</span>
                        </h2>
                    </div>

                    {/* Big Pill Filters */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-3 text-xs font-mono uppercase tracking-wider border rounded-full transition-all duration-300
                                    ${filter === cat 
                                        ? 'bg-cyan-500 border-cyan-500 text-black font-bold'
                                        : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.a
                                key={project.title}
                                href={project.link || '#'}
                                target="_blank"
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group relative bg-[#111] border border-white/10 p-8 hover:border-cyan-500/50 transition-colors duration-500 flex flex-col h-[400px]"
                            >
                                {/* Folder Tab visual */}
                                <div className="absolute top-0 left-0 w-24 h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-500">
                                        <FiFolder size={20} />
                                    </div>
                                    <FiArrowUpRight className="text-gray-600 group-hover:text-cyan-500 transition-colors" size={24} />
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                                        {project.subtitle}
                                    </p>
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                    {project.tags.slice(0,3).map(tag => (
                                        <span key={tag} className="text-[10px] font-mono text-gray-500 bg-black px-2 py-1 border border-white/10 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;