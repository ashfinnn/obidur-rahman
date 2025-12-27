"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiAward, FiMapPin, FiCalendar } from "react-icons/fi";

const TIMELINE = [
  {
    type: "work",
    id: "01",
    role: "R&D ENGINEER",
    company: "NorthAxis",
    date: "2024 — Present",
    location: "Chattogram",
    tags: ["Product Strategy", "Python", "Market Analysis"],
    desc: "Bridging the gap between market requirements and engineering feasibility. Driving feature development through rigorous competitive analysis and optimizing internal research workflows."
  },
  {
    type: "award",
    id: "02",
    role: "BEST PRESENTER",
    company: "Intl. Math Conference",
    date: "DEC 2024",
    location: "University of Chittagong",
    tags: ["Deep Learning", "CNN", "Optimization"],
    desc: "Awarded 1st Place for paper presentation on CPU-Constrained Deep Learning. Demonstrated hybrid CNN architectures on CPU to a panel of international mathematicians."
  },
  {
    type: "education",
    id: "03",
    role: "B.S. MATHEMATICS",
    company: "University of Chittagong",
    date: "2022 — Present",
    location: "Chattogram",
    tags: ["Abstract Algebra", "Linear Optimization"],
    desc: "Specialization in Abstract Algebra & Linear Optimization. Applying pure math theories to algorithmic problem solving and computational logic."
  }
];

export default function ExperienceSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="experience" className="bg-white text-[#050505] w-full py-24 md:py-32 relative">
      
      {/* --- BACKGROUND GRID (Fixed) --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="container mx-auto h-full border-l border-r border-[#E5E5E5] relative">
            <div className="absolute top-0 bottom-0 left-[20%] w-px bg-[#E5E5E5] hidden md:block" />
            <div className="absolute top-0 bottom-0 right-[20%] w-px bg-[#E5E5E5] hidden md:block" />
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-0 max-w-7xl relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row items-end justify-between px-6 md:px-12 mb-20">
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-4"
                >
                    <span className="w-1.5 h-1.5 bg-[#FF4D00]" />
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500">
                        Section_03 / History
                    </span>
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85]"
                >
                    Career<br/>Log
                </motion.h2>
            </div>
        </div>

        {/* --- THE BLUEPRINT LIST --- */}
        <div className="border-t border-[#050505]">
            {TIMELINE.map((item, i) => (
                <ExperienceRow 
                    key={i} 
                    data={item} 
                    isHovered={hovered === item.id}
                    setHovered={setHovered}
                />
            ))}
        </div>

      </div>
    </section>
  );
}

const ExperienceRow = ({ data, isHovered, setHovered }: any) => {
    const isAward = data.type === "award";

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(data.id)}
            onMouseLeave={() => setHovered(null)}
            className={`
                relative group border-b border-[#050505] transition-all duration-300 overflow-hidden
                ${isAward ? 'bg-[#050505] text-white hover:bg-[#0a0a0a]' : 'bg-white hover:bg-gray-50'}
            `}
        >
            {/* CROSSHAIR DECORATION (Top Left) */}
            <div className="absolute top-[-5px] left-[-5px] w-3 h-3 border-r border-b border-[#050505] z-20" />
            
            {/* AWARD BACKGROUND TEXTURE */}
            {isAward && (
                <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
            )}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0 min-h-[200px]">
                
                {/* COL 1: ID & TYPE (Width: 20%) */}
                <div className={`md:col-span-3 p-6 md:p-10 flex flex-col justify-between md:border-r ${isAward ? 'border-gray-800' : 'border-[#E5E5E5]'}`}>
                    <div className="flex items-center gap-2">
                        <span className={`font-mono text-xs tracking-widest ${isAward ? 'text-[#FF4D00]' : 'text-gray-400'}`}>
                            {data.id}
                        </span>
                        {isAward && <FiAward className="text-[#FF4D00]" />}
                    </div>
                    
                    <div className="mt-4 md:mt-0">
                         {/* Pill Badge for Dates */}
                         <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full text-[10px] font-mono tracking-wide uppercase
                            ${isAward ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-500'}
                         `}>
                             <div className={`w-1 h-1 rounded-full ${isAward ? 'bg-[#FF4D00] animate-pulse' : 'bg-green-500'}`} />
                             {data.date}
                         </div>
                    </div>
                </div>

                {/* COL 2: MAIN INFO (Width: 50%) */}
                <div className="md:col-span-6 p-6 md:p-10 flex flex-col justify-center relative">
                    
                    {/* Role */}
                    <h3 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-2 transition-colors duration-300 ${!isAward && isHovered ? 'text-[#FF4D00]' : ''}`}>
                        {data.role}
                    </h3>
                    
                    {/* Company & Location */}
                    <div className={`flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.15em] ${isAward ? 'text-gray-400' : 'text-gray-500'}`}>
                        <span>@ {data.company}</span>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <span className="flex items-center gap-1">
                            <FiMapPin /> {data.location}
                        </span>
                    </div>

                    {/* Tech Stack (Visible on Hover for Desktop, always on mobile) */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {data.tags.map((tag: string, i: number) => (
                            <span 
                                key={i}
                                className={`text-[9px] uppercase font-bold px-1.5 py-0.5 border ${isAward ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-400'}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* COL 3: DESCRIPTION & ACTION (Width: 30%) */}
                <div className={`md:col-span-3 p-6 md:p-10 flex flex-col justify-between md:border-l ${isAward ? 'border-gray-800' : 'border-[#E5E5E5]'}`}>
                    <p className={`text-xs md:text-sm leading-relaxed ${isAward ? 'text-gray-400' : 'text-gray-500'}`}>
                        {data.desc}
                    </p>

                    <div className="flex justify-end mt-6 md:mt-0">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-10 h-10 flex items-center justify-center border transition-colors duration-300
                                ${isAward 
                                    ? 'border-gray-700 text-[#FF4D00] hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00]' 
                                    : 'border-gray-200 text-gray-400 hover:border-[#050505] hover:text-[#050505]'}
                            `}
                        >
                            <FiArrowUpRight size={18} />
                        </motion.button>
                    </div>
                </div>

            </div>

            {/* --- HOVER BORDER EFFECT (Animated Bracket) --- */}
            {/* Left Bracket */}
            <motion.div 
                className="absolute top-0 bottom-0 left-0 w-1 bg-[#FF4D00]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isHovered && !isAward ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            />
            
        </motion.div>
    )
}