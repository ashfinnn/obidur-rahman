"use client";

import { motion } from "framer-motion";
import {
  SiPython, SiPytorch, SiDocker, SiNextdotjs, SiTypescript,
  SiCplusplus, SiFlask, SiNumpy
} from "react-icons/si";
import { FiCpu, FiActivity, FiLayout, FiCornerDownRight, FiUser } from "react-icons/fi";

const TECH_DATA = [
  { id: "01", name: "PYTHON", icon: SiPython },
  { id: "02", name: "PYTORCH", icon: SiPytorch },
  { id: "03", name: "C++", icon: SiCplusplus },
  { id: "04", name: "DOCKER", icon: SiDocker },
  { id: "05", name: "NUMPY", icon: SiNumpy },
  { id: "06", name: "NEXT.JS", icon: SiNextdotjs },
  { id: "07", name: "TYPESCRIPT", icon: SiTypescript },
  { id: "08", name: "FLASK", icon: SiFlask },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F4F4F5] text-[#050505] w-full pt-24 md:pt-40 pb-0 border-b border-[#E5E5E5]">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl">
        
        {/* HEADLINE */}
        <div className="mb-16 border-t border-[#050505] pt-8">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.8]">
              Architecting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Intelligence</span>
            </h2>
        </div>

        {/* --- THE HYBRID GRID SYSTEM --- */}
        <div className="border border-[#050505] bg-white shadow-xl">
            
            {/* ROW 1: The Human Element */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#050505]">
                
                {/* 1. PHOTO MODULE (Cinematic Reveal) */}
                <div className="md:col-span-4 aspect-[4/5] md:aspect-auto border-b md:border-b-0 md:border-r border-[#050505] relative overflow-hidden group">
                     {/* The Image */}
                     {/* Replace src with your actual photo */}
                     <img 
                        src="\me.png" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                        alt="Obidur Rahman"
                     />

                     {/* The "Shutter" Curtain Animation */}
                     <motion.div 
                        initial={{ height: "100%" }}
                        whileInView={{ height: "0%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 bg-[#050505] z-10"
                     />

                     {/* Status Indicator */}
                     <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="font-mono text-[9px] font-bold text-white bg-black/50 px-1 py-0.5 backdrop-blur-sm uppercase">Available for Research</span>
                     </div>
                </div>

                {/* 2. BIOGRAPHY MODULE */}
                <div className="md:col-span-8 p-8 md:p-16 flex flex-col justify-center">
                    {/* Editorial "Drop Cap" Effect */}
                    <div className="relative">
                        <span className="absolute -left-6 -top-6 text-6xl text-gray-200 font-serif">“</span>
                        <p className="text-xl md:text-3xl font-serif leading-relaxed mb-8 text-[#050505]">
                           I am a mathematician turned engineer. While many focus on just making models work, I focus on making them <span className="italic text-[#FF4D00] font-medium">efficient</span>.
                        </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-gray-100 pt-8">
                        <p className="text-sm md:text-[15px] text-gray-600 font-medium leading-relaxed max-w-sm">
                            My background in pure mathematics gives me a different lens on AI. I don't just import libraries; I understand the linear algebra underneath.
                        </p>
                        <div className="flex flex-col justify-between">
                            <p className="text-sm md:text-[15px] text-gray-600 font-medium leading-relaxed max-w-sm mb-4">
                                Currently researching product capabilities at NorthAxis and building deep learning architectures for constrained hardware.
                            </p>
                            <a href="#contact" className="group inline-flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest border-b border-[#050505] pb-1 w-fit hover:text-[#FF4D00] hover:border-[#FF4D00] transition-colors">
                                Download CV 
                                <FiCornerDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ROW 2: Focus Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#050505]">
                <InfoCard 
                   icon={<FiCpu size={24} />} 
                   title="MACHINE LEARNING"
                   desc="Designing custom architectures using PyTorch and C++. Focusing on NLP and Computer Vision."
                   className="border-b md:border-b-0 md:border-r border-[#050505]"
                />
                <InfoCard 
                   icon={<FiActivity size={24} />} 
                   title="MODEL OPTIMIZATION"
                   desc="Ensuring reliable inference on limited hardware (CPU-constrained). Quantization & latency reduction."
                   className="border-b md:border-b-0 md:border-r border-[#050505]"
                />
                <InfoCard 
                   icon={<FiLayout size={24} />} 
                   title="FULL STACK"
                   desc="Creating intuitive interfaces for complex models using Next.js and Flask."
                />
            </div>

            {/* ROW 3: Tech Stack */}
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

// --- SUB-COMPONENTS (Polished) ---

const InfoCard = ({ icon, title, desc, className = "" }: any) => (
    <div className={`p-8 md:p-10 flex flex-col justify-between h-56 md:h-64 group hover:bg-[#050505] hover:text-white transition-colors duration-500 ease-out ${className}`}>
        <div className="text-[#FF4D00] group-hover:text-white transition-colors mb-6 transform group-hover:scale-110 duration-500 origin-left">
            {icon}
        </div>
        <div>
            <h3 className="font-mono text-[10px] md:text-xs font-bold tracking-widest mb-3 uppercase group-hover:text-[#FF4D00] transition-colors">{title}</h3>
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
            {/* The "Curtain" Effect on Hover */}
            <div className="absolute inset-0 bg-[#050505] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            
            <div className="relative z-10 flex flex-col items-center">
                <data.icon size={28} className="mb-4 text-[#050505] group-hover:text-white transition-colors duration-300" />
                <span className="font-mono text-[9px] font-bold tracking-widest text-[#050505] group-hover:text-[#FF4D00] transition-colors duration-300 uppercase">
                    {data.name}
                </span>
            </div>
        </motion.div>
    )
}