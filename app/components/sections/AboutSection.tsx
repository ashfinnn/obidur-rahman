"use client";

import { motion } from "framer-motion";
import {
  SiPython, SiPytorch, SiDocker, SiNextdotjs, SiTypescript,
  SiKubernetes, SiPostgresql, SiTensorflow
} from "react-icons/si";
import { FiCornerDownRight, FiCpu, FiDatabase, FiLayout } from "react-icons/fi";

const TECH_DATA = [
  { id: "01", name: "PYTHON", icon: SiPython, cat: "LANG" },
  { id: "02", name: "PYTORCH", icon: SiPytorch, cat: "ML" },
  { id: "03", name: "TENSORFLOW", icon: SiTensorflow, cat: "ML" },
  { id: "04", name: "DOCKER", icon: SiDocker, cat: "OPS" },
  { id: "05", name: "KUBERNETES", icon: SiKubernetes, cat: "OPS" },
  { id: "06", name: "NEXT.JS", icon: SiNextdotjs, cat: "WEB" },
  { id: "07", name: "TYPESCRIPT", icon: SiTypescript, cat: "WEB" },
  { id: "08", name: "POSTGRES", icon: SiPostgresql, cat: "DB" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#F4F4F5] text-[#050505] w-full py-20 md:py-32 border-b border-[#E5E5E5]">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 mb-12 md:mb-20 border-t border-[#050505] pt-8">
          <div className="md:col-span-9">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase mb-6 md:mb-8 leading-[0.9]">
              Architecting Intelligence <br/>
              <span className="text-[#999]">From Data to Deployment</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-end">
                    <a href="#contact" className="inline-flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest border-b border-[#050505] pb-1 w-fit hover:text-[#FF4D00] hover:border-[#FF4D00] transition-colors">
                        Download CV <FiCornerDownRight />
                    </a>
                </div>
            </div>
          </div>
        </div>

        {/* THE "SPEC SHEET" GRID */}
        <div className="border border-[#050505] bg-white">
            
            {/* Row 1: The Narrative Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#050505]">
                <InfoCard 
                   icon={<FiCpu size={24} />} 
                   title="MACHINE LEARNING"
                   desc="Designing custom architectures using PyTorch and TensorFlow. Focusing on NLP and Computer Vision."
                   className="border-b md:border-b-0 md:border-r border-[#050505]"
                />
                <InfoCard 
                   icon={<FiDatabase size={24} />} 
                   title="DATA INFRA"
                   desc="Building ETL pipelines and vector databases. Scalable storage solutions with SQL & NoSQL."
                   className="border-b md:border-b-0 md:border-r border-[#050505]"
                />
                <InfoCard 
                   icon={<FiLayout size={24} />} 
                   title="FULL STACK"
                   desc="Creating intuitive interfaces for complex models using Next.js, React, and FastAPI."
                />
            </div>

            {/* Row 2: The Tech Stack Inventory */}
            {/* Stats Removed, this is now the bottom row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                {TECH_DATA.map((tech, i) => (
                    <TechItem key={tech.id} data={tech} index={i} />
                ))}
            </div>

        </div>

      </div>
    </section>
  );
}

// --- SUB COMPONENTS ---

const InfoCard = ({ icon, title, desc, className = "" }: any) => (
    <div className={`p-6 md:p-10 flex flex-col justify-between h-56 md:h-64 group hover:bg-[#050505] hover:text-white transition-colors duration-300 ${className}`}>
        <div className="text-[#FF4D00] group-hover:text-white transition-colors mb-6">
            {icon}
        </div>
        <div>
            <h3 className="font-mono text-[10px] md:text-xs font-bold tracking-widest mb-3 uppercase">{title}</h3>
            <p className="text-xs md:text-sm font-medium opacity-80 leading-relaxed">{desc}</p>
        </div>
    </div>
)

const TechItem = ({ data, index }: any) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="aspect-square border-r border-b border-[#050505] md:border-b-0 flex flex-col items-center justify-center relative group cursor-crosshair overflow-hidden"
        >
            {/* Background Hover Inversion */}
            <div className="absolute inset-0 bg-[#050505] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            
            <div className="relative z-10 flex flex-col items-center">
                <data.icon size={24} className="mb-3 md:mb-4 text-[#050505] group-hover:text-white transition-colors duration-300" />
                <span className="font-mono text-[8px] md:text-[10px] font-bold tracking-widest text-[#050505] group-hover:text-[#FF4D00] transition-colors duration-300 uppercase">
                    {data.name}
                </span>
            </div>

            {/* Tiny ID Number */}
            <span className="absolute top-2 left-2 font-mono text-[8px] text-gray-400 group-hover:text-[#333]">
                {data.id}
            </span>
        </motion.div>
    )
}