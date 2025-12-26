"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiPlus, FiMinus } from "react-icons/fi";

const PROJECTS = [
  {
    id: "001",
    title: "LEAF DISEASE DETECTOR",
    category: "CV / PYTORCH",
    year: "2024",
    src: "/efficient.png",
    desc: "Real-time plant disease classification achieving 98.5% accuracy. Optimized for edge deployment.",
    link: "https://ashfinnn.github.io/efficient-leaf-disease",
    github: "https://github.com/ashfinnn/efficient-leaf-disease",
  },
  {
    id: "002",
    title: "GEOMETRIC DILUTION",
    category: "RESEARCH",
    year: "2024",
    src: "/geom.png",
    desc: "Mathematical framework demonstrating SMOTE limitations in high-dimensional Euclidean spaces.",
    link: "https://ashfinnn.github.io/geometric-dilution",
    github: "https://github.com/ashfinnn/geometric-dilution",
  },
  {
    id: "003",
    title: "PORTFOLIO V1",
    category: "WEB ARCH",
    year: "2024",
    src: "/port.png",
    desc: "WCAG 2.1 AA compliant portfolio with high-performance 3D interactions and strict typing.",
    link: "https://obidur.vercel.app",
    github: "https://github.com/ashfinnn/obidur-rahman",
  },
];

export default function Projects() {
  // Desktop State
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  // Mobile State (Accordion ID)
  const [openMobileId, setOpenMobileId] = useState<string | null>(null);

  return (
    <section className="bg-white text-[#050505] w-full min-h-screen relative pb-12">
      {/* Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container mx-auto h-full border-r border-l border-[#E5E5E5] relative hidden md:block">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#E5E5E5]" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-12 pt-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-[#050505] pb-4">
          <div>
            <span className="font-mono text-[10px] md:text-xs tracking-widest text-[#FF4D00] uppercase block mb-2">
              (003) — Selected Works
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85]">
              Project<br />Index
            </h2>
          </div>
        </div>

        {/* --- DESKTOP LAYOUT (> md) --- */}
        <div className="hidden md:flex h-[600px] border border-[#050505]">
          {/* List */}
          <div className="w-1/2 border-r border-[#050505] overflow-y-auto scrollbar-none bg-white">
            {PROJECTS.map((project, index) => (
              <div 
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`
                   group p-8 border-b border-[#050505] cursor-pointer transition-all duration-300
                   ${activeProject.id === project.id ? 'bg-[#050505] text-white' : 'bg-white hover:bg-gray-50'}
                `}
              >
                <div className="flex justify-between items-center">
                    <span className="font-mono text-xs opacity-50">0{index + 1}</span>
                    <FiArrowUpRight className={`opacity-0 group-hover:opacity-100 transition-opacity ${activeProject.id === project.id ? 'opacity-100 text-[#FF4D00]' : ''}`} />
                </div>
                <h3 className="text-3xl font-bold mt-2 tracking-tight">{project.title}</h3>
                <span className="font-mono text-[10px] tracking-widest mt-2 block opacity-70">{project.category}</span>
              </div>
            ))}
          </div>

          {/* Preview */}
          <div className="w-1/2 relative bg-[#F4F4F5] p-8 flex flex-col">
             <div className="relative flex-1 border border-[#050505] bg-white overflow-hidden group">
                 <AnimatePresence mode="wait">
                    <motion.img 
                        key={activeProject.id}
                        src={activeProject.src}
                        initial={{ scale: 1.1, filter: "blur(10px)" }}
                        animate={{ scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                    />
                 </AnimatePresence>
                 {/* Links Overlay */}
                 <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <a href={activeProject.link} target="_blank" className="px-6 py-3 bg-[#FF4D00] text-white font-mono text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors">
                        Live Demo
                     </a>
                     <a href={activeProject.github} target="_blank" className="p-3 bg-white text-black hover:bg-[#FF4D00] hover:text-white transition-colors">
                        <FiGithub size={20} />
                     </a>
                 </div>
             </div>
             <div className="pt-6">
                <p className="font-medium text-sm leading-relaxed max-w-md">{activeProject.desc}</p>
             </div>
          </div>
        </div>

        {/* --- MOBILE LAYOUT (< md) --- */}
        <div className="md:hidden flex flex-col border-t border-[#050505]">
          {PROJECTS.map((project, index) => {
             const isOpen = openMobileId === project.id;
             return (
               <div key={project.id} className="border-b border-[#050505] bg-white">
                  <button 
                    onClick={() => setOpenMobileId(isOpen ? null : project.id)}
                    className="w-full py-6 flex justify-between items-center text-left"
                  >
                     <div>
                        <span className="font-mono text-[10px] text-[#FF4D00] mb-1 block">0{index + 1}</span>
                        <h3 className="text-2xl font-bold tracking-tight uppercase leading-none">{project.title}</h3>
                     </div>
                     <div className="text-xl">
                        {isOpen ? <FiMinus /> : <FiPlus />}
                     </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pb-6 pt-2">
                                <div className="aspect-video w-full border border-[#050505] mb-4 overflow-hidden relative">
                                    <img src={project.src} className="object-cover w-full h-full" alt={project.title} />
                                </div>
                                <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
                                <div className="flex gap-3">
                                    <a href={project.link} className="flex-1 py-3 bg-[#050505] text-white text-center font-mono text-xs uppercase">Live</a>
                                    <a href={project.github} className="px-4 py-3 border border-[#050505] flex items-center justify-center"><FiGithub /></a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                  </AnimatePresence>
               </div>
             )
          })}
        </div>

      </div>
    </section>
  );
}