"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiZap, FiCode, FiLayers, FiSmartphone } from "react-icons/fi";

const PROJECT = {
  title: "This Portfolio",
  subtitle: "The site you're viewing right now",
  year: "2024",
  desc: "A brutalist, high-performance portfolio built to showcase ML research and engineering work. Clean typography, smooth interactions, and optimal performance across all devices.",
  link: "https://obidur.vercel.app",
  github: "https://github.com/ashfinnn/obidur-rahman",
  features: [
    { icon: FiZap, title: "100 Lighthouse", desc: "Perfect score" },
    { icon: FiCode, title: "TypeScript", desc: "Type-safe" },
    { icon: FiLayers, title: "Framer Motion", desc: "Animations" },
    { icon: FiSmartphone, title: "Responsive", desc: "All devices" },
  ],
  tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
};

export default function ProjectsSection() {
  return (
    <section className="bg-white text-[#050505] w-full py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-4 sm:mb-6">
            Selected<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Work</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[2px] bg-[#050505] origin-left" 
          />
        </motion.div>

        {/* Project Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-[#050505] bg-[#FAFAFA]"
        >
          
          {/* Project Header */}
          <div className="p-4 sm:p-6 md:p-8 border-b border-[#050505] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 bg-[#FF4D00]" 
                />
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                  {PROJECT.year}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tight">
                {PROJECT.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mt-1">{PROJECT.subtitle}</p>
            </div>
            
            {/* Links */}
            <div className="flex gap-2 sm:gap-3">
              <motion.a 
                href={PROJECT.link} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-[#050505] text-white font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:bg-[#FF4D00] transition-colors"
              >
                <FiExternalLink size={14} />
                <span className="hidden sm:inline">Live Site</span>
              </motion.a>
              <motion.a 
                href={PROJECT.github} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 sm:w-12 border border-[#050505] hover:bg-[#050505] hover:text-white transition-colors"
              >
                <FiGithub size={18} />
              </motion.a>
            </div>
          </div>

          {/* Description */}
          <div className="p-4 sm:p-6 md:p-8 border-b border-[#E5E5E5]">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
              {PROJECT.desc}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#E5E5E5]">
            {PROJECT.features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ backgroundColor: "#ffffff" }}
                className={`p-4 sm:p-6 flex flex-col items-center text-center transition-colors group ${
                  i < PROJECT.features.length - 1 ? 'border-r border-[#E5E5E5]' : ''
                }`}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-2 sm:p-3 bg-white border border-[#E5E5E5] mb-2 sm:mb-3 group-hover:border-[#050505] group-hover:bg-[#050505] transition-colors"
                >
                  <feature.icon className="text-[#FF4D00] group-hover:text-white transition-colors" size={18} />
                </motion.div>
                <h4 className="font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">{feature.title}</h4>
                <p className="text-[10px] sm:text-xs text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="p-4 sm:p-6 md:p-8 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mr-1 sm:mr-2">Built with:</span>
            {PROJECT.tech.map((tech, i) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-[#E5E5E5] font-mono text-[10px] sm:text-xs text-gray-600 hover:border-[#050505] transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* More Projects Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <p className="text-xs sm:text-sm text-gray-400">
            More projects coming soon. Check my{" "}
            <a 
              href="https://github.com/Ashfinn" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF4D00] hover:underline"
            >
              GitHub
            </a>
            {" "}for other work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}