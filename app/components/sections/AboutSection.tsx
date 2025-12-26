"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiPython, SiPytorch, SiDocker, SiNextdotjs, SiTypescript,
  SiKubernetes, SiScikitlearn, SiPostgresql, SiFastapi, SiTensorflow
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
    <section id="about" className="bg-[#F4F4F5] text-[#050505] w-full py-24 md:py-32 border-b border-[#E5E5E5]">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl">
        
        {/* SECTION HEADER: Swiss Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 mb-20 border-t border-[#050505] pt-8">
          <div className="md:col-span-3">
             <span className="font-mono text-xs tracking-widest text-[#FF4D00] uppercase">
               (002) — Profile
             </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
              Architecting Intelligence <br/>
              <span className="text-[#999]">From Data to Deployment</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-sm md:text-base font-medium leading-relaxed max-w-sm">
                   I operate at the intersection of applied mathematics and systems engineering. My goal is to demystify black-box models by building robust, observable pipelines.
                </p>
                <div className="flex flex-col justify-end">
                    <a href="#contact" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border-b border-[#050505] pb-1 w-fit hover:text-[#FF4D00] hover:border-[#FF4D00] transition-colors">
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
                />
                <InfoCard 
                   icon={<FiDatabase size={24} />} 
                   title="DATA INFRA"
                   desc="Building ETL pipelines and vector databases. scalable storage solutions with SQL & NoSQL."
                   bordered
                />
                <InfoCard 
                   icon={<FiLayout size={24} />} 
                   title="FULL STACK"
                   desc="Creating intuitive interfaces for complex models using Next.js, React, and FastAPI."
                />
            </div>

            {/* Row 2: The Tech Stack Inventory */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                {TECH_DATA.map((tech, i) => (
                    <TechItem key={tech.id} data={tech} index={i} />
                ))}
            </div>

            {/* Row 3: Stats Ticker */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#050505] divide-x divide-[#050505]">
                <StatItem label="EXP" value="03 YRS" />
                <StatItem label="PROJECTS" value="24+" />
                <StatItem label="STACK" value="FULL" />
                <StatItem label="STATUS" value="OPEN" highlight />
            </div>
        </div>

      </div>
    </section>
  );
}

// --- SUB COMPONENTS ---

const InfoCard = ({ icon, title, desc, bordered }: any) => (
    <div className={`p-8 md:p-10 flex flex-col justify-between h-64 group hover:bg-[#050505] hover:text-white transition-colors duration-300 ${bordered ? 'md:border-x border-[#050505]' : ''}`}>
        <div className="text-[#FF4D00] group-hover:text-white transition-colors mb-6">
            {icon}
        </div>
        <div>
            <h3 className="font-mono text-xs font-bold tracking-widest mb-3 uppercase">{title}</h3>
            <p className="text-sm font-medium opacity-80 leading-relaxed">{desc}</p>
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
            className="aspect-square border-r border-[#050505] border-b md:border-b-0 last:border-r-0 flex flex-col items-center justify-center relative group cursor-crosshair overflow-hidden"
        >
            {/* Background Hover Inversion */}
            <div className="absolute inset-0 bg-[#050505] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            
            <div className="relative z-10 flex flex-col items-center">
                <data.icon size={28} className="mb-4 text-[#050505] group-hover:text-white transition-colors duration-300" />
                <span className="font-mono text-[10px] font-bold tracking-widest text-[#050505] group-hover:text-[#FF4D00] transition-colors duration-300 uppercase">
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

const StatItem = ({ label, value, highlight }: any) => (
    <div className={`p-6 flex flex-col items-center justify-center ${highlight ? 'bg-[#FF4D00] text-white' : 'bg-white text-[#050505]'}`}>
        <span className={`font-mono text-[10px] tracking-widest mb-1 ${highlight ? 'text-black/60' : 'text-gray-400'}`}>
            {label}
        </span>
        <span className="text-2xl font-bold tracking-tighter">
            {value}
        </span>
    </div>
)