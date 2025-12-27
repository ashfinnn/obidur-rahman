"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiAward, FiBriefcase, FiMapPin } from "react-icons/fi";

const TIMELINE = [
  {
    type: "work",
    id: "northaxis",
    role: "RESEARCH AND DEVELOPMENT ENGINEER",
    company: "NorthAxis",
    date: "Dec 2024 - Present",
    location: "Chattogram",
    desc: [
        "Bridging the gap between market requirements and engineering feasibility.",
        "Driving feature development through rigorous competitive analysis.",
        "Optimizing internal research workflows to reduce dev lead time."
    ]
  },
  {
    type: "award",
    id: "award",
    role: "BEST PRESENTER",
    company: "24th International Math Conference",
    date: "Dec 2024",
    location: "University of Chittagong",
    desc: [
        "Awarded 1st Place for paper presentation on CPU-Constrained Deep Learning.",
        "Demonstrated hybrid CNN architectures on CPU to a panel of international mathematicians."
    ]
  },
  {
    type: "education",
    id: "uni",
    role: "B.S. MATHEMATICS",
    company: "University of Chittagong",
    date: "2022 - Present",
    location: "Chattogram",
    desc: [
        "Specialization in Abstract Algebra & Linear Optimization.",
        "Applying pure math theories to algorithmic problem solving."
    ]
  }
];

export default function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="bg-[#F4F4F5] text-[#050505] w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl">
        
        {/* Header with detailed meta */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-2 border-[#FF4D00] pl-6">
            <div>
                <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-gray-500 mb-2 block">
                    Professional History
                </span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.85]">
                    Timeline &<br/>Milestones
                </h2>
            </div>
            <div className="hidden md:block font-mono text-[10px] text-gray-400 text-right">
                SCROLL TO INSPECT <br/> HOVER FOR DETAILS
            </div>
        </div>

        {/* The List Layout with Focus Effect */}
        <div 
            className="border-t border-[#050505] group/list"
            onMouseLeave={() => setHoveredId(null)}
        >
            {TIMELINE.map((item, i) => (
                <TimelineRow 
                    key={i} 
                    data={item} 
                    index={i} 
                    hoveredId={hoveredId}
                    setHoveredId={setHoveredId}
                />
            ))}
        </div>
      </div>
    </section>
  );
}

const TimelineRow = ({ data, index, hoveredId, setHoveredId }: any) => {
    const isAward = data.type === 'award';
    const isHovered = hoveredId === data.id;
    const isDimmed = hoveredId !== null && hoveredId !== data.id;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredId(data.id)}
            className={`
                relative border-b border-[#050505] transition-all duration-500 ease-out
                ${isDimmed ? 'opacity-30 blur-[1px]' : 'opacity-100 blur-0'}
                ${isAward ? 'bg-[#050505] text-white my-6 md:-mx-6 md:px-6 border-none shadow-2xl scale-[1.01] z-10 rounded-sm' : 'bg-white hover:bg-gray-50'}
            `}
        >
            {/* Matte Grain Texture for Award Card */}
            {isAward && (
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            )}

            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[220px]">
                
                {/* Column 1: Meta Data */}
                <div className={`md:col-span-3 p-6 md:p-10 flex flex-col justify-between border-b md:border-b-0 ${!isAward && 'md:border-r border-[#050505]'}`}>
                     <div className={`font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 ${isAward ? 'text-[#FF4D00]' : 'text-gray-400'}`}>
                        {isAward ? <FiAward size={14}/> : <span>0{index + 1}</span>}
                        <span>— {data.type}</span>
                     </div>
                     <div className={`font-mono text-[10px] uppercase tracking-widest flex flex-col gap-1.5 ${isAward ? 'text-gray-400' : 'text-gray-500'}`}>
                        <span className="flex items-center gap-2"><FiBriefcase size={12}/> {data.date}</span>
                        <span className="flex items-center gap-2"><FiMapPin size={12}/> {data.location}</span>
                    </div>
                </div>

                {/* Column 2: Role & Company */}
                <div className={`md:col-span-4 p-6 md:p-10 flex flex-col justify-center border-b md:border-b-0 ${!isAward && 'md:border-r border-[#050505]'}`}>
                    <h3 className={`text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-3 ${isHovered && !isAward ? 'text-[#FF4D00]' : ''} transition-colors duration-300`}>
                        {data.role}
                    </h3>
                    <span className={`font-mono text-xs uppercase tracking-widest ${isAward ? 'text-gray-400' : 'text-gray-500'}`}>
                        at {data.company}
                    </span>
                </div>

                {/* Column 3: Description */}
                <div className="md:col-span-5 p-6 md:p-10 flex flex-col justify-center relative">
                    <ul className="space-y-3">
                        {data.desc.map((line: string, l: number) => (
                            <li key={l} className="flex items-start gap-3">
                                <span className={`mt-2 h-1 w-1 rounded-full flex-shrink-0 ${isAward ? 'bg-[#FF4D00]' : 'bg-[#050505]'}`} />
                                <span className={`text-sm md:text-[15px] font-medium leading-relaxed ${isAward ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {line}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Arrow Interaction */}
                    {!isAward && (
                        <div className={`absolute top-6 right-6 transition-transform duration-500 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                            <FiArrowUpRight className="text-3xl text-[#FF4D00]" />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}