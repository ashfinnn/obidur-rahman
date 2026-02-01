"use client";

import { useEffect, useState } from "react";
import { motion, easeInOut } from "framer-motion";
import Image from "next/image";
import {
  SiPython, SiPytorch, SiTensorflow, SiNextdotjs, SiTypescript,
  SiNumpy, SiPandas, SiScikitlearn, SiGit, SiFastapi, SiOpencv, SiScipy
} from "react-icons/si";
import { FiCpu, FiActivity, FiLayout, FiCornerDownRight, FiBook } from "react-icons/fi";

const TECH_DATA = [
  { id: "01", name: "Python", icon: SiPython },
  { id: "02", name: "PyTorch", icon: SiPytorch },
  { id: "03", name: "OpenCV", icon: SiOpencv },
  { id: "04", name: "TensorFlow", icon: SiTensorflow },
  { id: "05", name: "NumPy", icon: SiNumpy },
  { id: "06", name: "SciPy", icon: SiScipy },
  { id: "07", name: "Next.js", icon: SiNextdotjs },
  { id: "08", name: "TypeScript", icon: SiTypescript },
  { id: "09", name: "FastAPI", icon: SiFastapi },
  { id: "10", name: "Pandas", icon: SiPandas },
  { id: "11", name: "Sklearn", icon: SiScikitlearn },
  { id: "12", name: "Git", icon: SiGit },
];

const fast = { duration: 0.3, ease: easeInOut };
const stagger = {
  visible: { staggerChildren: 0.03 },
  hidden: { staggerChildren: 0 }
};

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="bg-[#F4F4F5] text-[#050505] w-full py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={fast}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-4 sm:mb-6">
            Architecting<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Intelligence</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-[2px] bg-[#050505] origin-left" 
          />
        </motion.div>

        {/* Main Grid Container */}
        <div className="border border-[#050505] bg-white shadow-xl">

          {/* Row 1: Photo + Bio */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#050505]">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={fast}
              className="md:col-span-4 aspect-[4/5] md:aspect-auto md:min-h-[400px] lg:min-h-[500px] border-b md:border-b-0 md:border-r border-[#050505] relative overflow-hidden group"
            >
              <Image
                src="/me.png"
                alt="Obidur Rahman"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
                className="absolute bottom-0 left-0 right-0 bg-[#050505] z-10"
              />
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] font-bold text-white bg-black/60 px-1.5 sm:px-2 py-0.5 sm:py-1 backdrop-blur-sm uppercase tracking-wider">
                  Available
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...fast, delay: 0.1 }}
              className="md:col-span-8 p-5 sm:p-6 md:p-10 lg:p-16 flex flex-col justify-center"
            >
              <div className="relative mb-4 sm:mb-6">
                <span className="absolute -left-2 sm:-left-4 md:-left-6 -top-2 sm:-top-4 text-4xl sm:text-5xl md:text-6xl text-gray-200 font-serif hidden sm:inline">&ldquo;</span>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed text-[#050505] relative z-10">
                  I am a mathematician turned engineer. While many focus on just making models work, 
                  I focus on making them <span className="italic text-[#FF4D00] font-medium">efficient</span>.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-12 border-t border-gray-100 pt-4 sm:pt-6">
                <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 font-medium leading-relaxed lg:max-w-sm">
                  My background in <strong className="text-[#050505]">pure mathematics</strong> gives me a different lens on AI. 
                  I don&apos;t just import libraries; I understand the linear algebra underneath.
                </p>
                <div className="flex flex-col justify-between">
                  <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 font-medium leading-relaxed lg:max-w-sm mb-4">
                    Currently researching efficient vision models and working as an <strong className="text-[#050505]">R&D Engineer at NorthAxis</strong>.
                  </p>
                  <a 
                    href="/resume.pdf"
                    target="_blank"
                    className="group inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest border-b-2 border-[#050505] pb-1 w-fit hover:text-[#FF4D00] hover:border-[#FF4D00] transition-colors duration-200"
                  >
                    Download CV
                    <FiCornerDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b border-[#050505]">
            <InfoCard
              icon={<FiCpu size={20} />}
              title="Deep Learning"
              desc="Custom architectures for computer vision using CNNs and Vision Transformers."
              className="border-b sm:border-b md:border-b-0 sm:border-r border-[#050505]"
            />
            <InfoCard
              icon={<FiActivity size={20} />}
              title="Optimization"
              desc="Quantization, pruning, and distillation for efficient CPU inference."
              className="border-b md:border-b-0 md:border-r border-[#050505]"
            />
            <InfoCard
              icon={<FiBook size={20} />}
              title="Math ML"
              desc="Applying linear algebra and abstract algebra to neural network theory."
              className="border-b sm:border-b-0 sm:border-r border-[#050505]"
            />
            <InfoCard
              icon={<FiLayout size={20} />}
              title="Engineering"
              desc="High-performance inference APIs with FastAPI and modern web tech."
            />
          </div>

          {/* Row 3: Tech Stack - DESKTOP VIEW (Grid) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="hidden md:grid grid-cols-12"
          >
            {TECH_DATA.map((tech, i) => (
              <TechItem key={tech.id} data={tech} index={i} isMobile={isMobile} />
            ))}
          </motion.div>

          {/* Row 3: Tech Stack - MOBILE VIEW (Infinite Marquee) */}
          <div className="md:hidden overflow-hidden relative w-full h-[80px] bg-white">
            <motion.div 
              className="flex absolute left-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            >
              {/* Duplicate the array twice to create a seamless loop */}
              {[...TECH_DATA, ...TECH_DATA].map((tech, i) => (
                <div key={`${tech.id}-${i}`} className="w-[80px] h-[80px] border-r border-[#E5E5E5] flex flex-col items-center justify-center shrink-0">
                  <tech.icon size={20} className="mb-2 text-[#050505]" />
                  <span className="font-mono text-[8px] font-bold tracking-widest text-gray-500 uppercase">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

const InfoCard = ({ icon, title, desc, className = "" }: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={fast}
    className={`p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[180px] md:min-h-[220px] group hover:bg-[#050505] hover:text-white transition-colors duration-300 cursor-default ${className}`}
  >
    <div className="text-[#FF4D00] group-hover:text-white transition-colors duration-200 mb-3 sm:mb-4">
      {icon}
    </div>
    <div>
      <h3 className="font-mono text-[10px] sm:text-xs font-bold tracking-widest mb-2 uppercase group-hover:text-[#FF4D00] transition-colors duration-200">
        {title}
      </h3>
      <p className="text-[10px] sm:text-xs font-medium opacity-70 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const TechItem = ({ data, index, isMobile }: {
  data: { id: string; name: string; icon: React.ComponentType<{ size?: number; className?: string }> };
  index: number;
  isMobile: boolean;
}) => {
  const Icon = data.icon;
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } }
      }}
      className="aspect-square border-r last:border-r-0 border-[#E5E5E5] flex flex-col items-center justify-center relative group cursor-crosshair hover:bg-[#050505] transition-colors duration-200"
    >
      <Icon 
        size={24} 
        className="mb-2 text-[#050505] group-hover:text-white transition-colors duration-200" 
      />
      <span className="font-mono text-[8px] font-bold tracking-widest text-gray-500 group-hover:text-[#FF4D00] transition-colors duration-200 uppercase text-center px-1">
        {data.name}
      </span>
    </motion.div>
  );
};