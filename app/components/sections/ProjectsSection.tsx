'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjectsData } from '../lib/data';
import { FiArrowUpRight, FiCode } from 'react-icons/fi';

const ProjectsSection = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    // Flatten data and grab only the TOP 5 to ensure it fits one screen
    const featuredProjects = useMemo(() => {
        if(!allProjectsData) return [];
        const flat = Object.values(allProjectsData).flatMap(cat => 
            cat.items.map(item => ({...item, category: cat.title}))
        );
        return flat.slice(0, 5);
    }, []);

    // Default to first project if none hovered
    const activeProject = activeId 
        ? featuredProjects.find(p => p.title === activeId) 
        : featuredProjects[0];

    return (
        <section id="projects" className="h-full w-full bg-[#050505] text-white overflow-hidden flex flex-col justify-center relative">
            
            {/* Background Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
            
            {/* Main Container - Centered Vertically */}
            <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 md:pl-32 flex flex-col md:flex-row gap-8 md:gap-16 items-center h-full max-h-[900px] py-12">
                
                {/* LEFT COLUMN: Project Menu */}
                <div className="w-full md:w-5/12 flex flex-col justify-center relative z-20">
                    <div className="mb-8">
                         <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase">03 // Selected Works</span>
                         <h2 className="text-4xl md:text-6xl font-black mt-2 leading-none tracking-tight text-white">
                            PROJECTS
                         </h2>
                    </div>

                    {/* The List */}
                    <div className="flex flex-col">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                onMouseEnter={() => setActiveId(project.title)}
                                className="group relative cursor-pointer border-b border-white/10"
                            >
                                <div className={`flex items-center justify-between py-4 transition-all duration-300
                                    ${activeProject?.title === project.title ? 'pl-4 border-l-4 border-cyan-500 bg-white/5' : 'pl-0 border-l-0 hover:pl-2'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`font-mono text-xs transition-colors ${activeProject?.title === project.title ? 'text-cyan-500' : 'text-gray-600'}`}>
                                            0{index + 1}
                                        </span>
                                        <h3 className={`text-lg md:text-xl font-bold uppercase tracking-tight transition-colors ${activeProject?.title === project.title ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                            {project.title}
                                        </h3>
                                    </div>
                                    
                                    {/* Arrow Icon - Only visible on active */}
                                    <FiArrowUpRight className={`text-xl transition-all duration-300 
                                        ${activeProject?.title === project.title ? 'opacity-100 translate-x-0 text-cyan-500' : 'opacity-0 -translate-x-2'}`} 
                                    />
                                </div>
                            </motion.div>
                        ))}
                        
                        <div className="mt-6">
                            <a href="#" className="text-[10px] font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
                                [ View Full Archive ]
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: The Preview Card (Desktop Only) */}
                <div className="hidden md:flex w-7/12 h-full max-h-[500px] flex-col justify-center relative">
                    {/* Static Border Frame */}
                    <div className="absolute inset-0 border border-white/10 bg-[#0a0a0a]">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-500" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-500" />
                    </div>

                    <AnimatePresence mode="wait">
                        {activeProject && (
                            <motion.div 
                                key={activeProject.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="relative z-10 p-10 h-full flex flex-col justify-between"
                            >
                                {/* Top Meta */}
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                        <FiCode className="text-cyan-500" />
                                        <span className="font-mono text-xs text-gray-300 uppercase">{activeProject.category}</span>
                                    </div>
                                    <div className="font-mono text-[10px] text-gray-600">STATUS: DEPLOYED</div>
                                </div>

                                {/* Middle Description */}
                                <div className="max-w-lg">
                                    <h4 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                                        {activeProject.title}
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed text-sm border-l-2 border-cyan-900 pl-4">
                                        {activeProject.subtitle}
                                    </p>
                                </div>

                                {/* Bottom Tags & Action */}
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {activeProject.tags.slice(0,5).map((tag: string) => (
                                            <span key={tag} className="px-2 py-1 bg-black border border-white/10 text-[10px] font-mono text-gray-500">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <a 
                                        href={activeProject.link || '#'} 
                                        target="_blank"
                                        className="inline-flex items-center justify-center w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm font-mono uppercase tracking-widest transition-colors"
                                    >
                                        Launch Project
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;