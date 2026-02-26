"use client";

import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiZap,
  FiCode,
  FiLayers,
  FiSmartphone,
  FiArrowUpRight,
} from "react-icons/fi";

const PROJECT = {
  title: "This Portfolio",
  subtitle: "The site you're viewing right now",
  year: "2024",
  desc: "A brutalist, high-performance portfolio built to showcase ML research and engineering work. Clean typography, smooth interactions, and optimal performance across all devices.",
  link: "https://obidur.vercel.app",
  github: "https://github.com/ashfinnn/obidur-rahman",
  features: [
    { icon: FiZap, title: "100 Lighthouse", desc: "Perfect performance score" },
    { icon: FiCode, title: "TypeScript", desc: "Fully type-safe codebase" },
    { icon: FiLayers, title: "Framer Motion", desc: "Smooth animations" },
    { icon: FiSmartphone, title: "Responsive", desc: "All screen sizes" },
  ],
  tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
};

const fast = { duration: 0.3, ease: easeInOut };

export default function ProjectsSection() {
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
            Selected
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">
              Work
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-[2px] bg-[#050505] origin-left"
          />
        </motion.div>

        {/* Main Container */}
        <div className="border border-[#050505] bg-white shadow-xl">
          {/* Project Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#050505]">
            {/* Title & Year */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={fast}
              className="lg:col-span-8 p-5 sm:p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#050505]"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-[#050505]" />
                  <span className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
                    Featured Project
                  </span>
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest">
                  / {PROJECT.year}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-2">
                {PROJECT.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500">
                {PROJECT.subtitle}
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...fast, delay: 0.1 }}
              className="lg:col-span-4 grid grid-cols-2"
            >
              <a
                href={PROJECT.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 sm:p-6 border-r border-[#050505] hover:bg-[#050505] hover:text-white transition-colors duration-300 group"
              >
                <FiExternalLink
                  size={20}
                  className="mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
                  Live Site
                </span>
              </a>
              <a
                href={PROJECT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 sm:p-6 hover:bg-[#050505] hover:text-white transition-colors duration-300 group"
              >
                <FiGithub
                  size={20}
                  className="mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
                  Source
                </span>
              </a>
            </motion.div>
          </div>

          {/* Description Row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...fast, delay: 0.1 }}
            className="p-5 sm:p-6 md:p-8 lg:p-10 border-b border-[#050505]"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
              {PROJECT.desc}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#050505]">
            {PROJECT.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...fast, delay: i * 0.05 }}
                className={`p-4 sm:p-6 md:p-8 flex flex-col group hover:bg-[#050505] hover:text-white transition-colors duration-300 cursor-default ${
                  i < PROJECT.features.length - 1
                    ? "border-r border-[#050505]"
                    : ""
                } ${i < 2 ? "border-b md:border-b-0 border-[#050505]" : ""}`}
              >
                <div className="p-2 sm:p-3 bg-[#F4F4F5] border border-[#E5E5E5] w-fit mb-3 sm:mb-4 group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  <feature.icon
                    size={18}
                    className="text-[#050505] transition-colors"
                  />
                </div>
                <h4 className="font-bold text-sm sm:text-base mb-1">
                  {feature.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...fast, delay: 0.2 }}
            className="p-5 sm:p-6 md:p-8 border-b border-[#050505] flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
          >
            <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest shrink-0">
              Built with:
            </span>
            <div className="flex flex-wrap gap-2">
              {PROJECT.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.03 }}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-[#F4F4F5] border border-[#E5E5E5] font-mono text-[10px] sm:text-xs text-gray-600 hover:border-[#050505] hover:bg-[#050505] hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* GitHub CTA Row */}
          <motion.a
            href="https://github.com/Ashfinnn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...fast, delay: 0.2 }}
            className="flex items-center justify-between p-5 sm:p-6 md:p-8 hover:bg-[#050505] hover:text-white transition-colors duration-300 group"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <FiGithub size={20} />
              <div>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest">
                  View All Projects on GitHub
                </span>
                <p className="text-[10px] sm:text-xs text-gray-500 group-hover:text-gray-300 mt-0.5">
                  Explore more repositories and contributions
                </p>
              </div>
            </div>
            <FiArrowUpRight
              size={20}
              className="text-gray-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}