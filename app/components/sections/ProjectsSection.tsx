"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiLayers,
} from "react-icons/fi";

const projects = [
  {
    id: "01",
    title: "Efficient Leaf Disease",
    category: "Computer Vision",
    color: "#10b981",
    desc: "Lightweight deep learning model for real-time plant disease classification. Optimized for edge devices.",
    link: "https://github.com/ashfinnn/efficient-leaf-disease",
    github: "https://github.com/ashfinnn/efficient-leaf-disease",
  },
  {
    id: "02",
    title: "Geometric Dilution",
    category: "Theoretical Research",
    color: "#06b6d4",
    desc: "Theoretical framework proving SMOTE limitations in high-dimensional spaces. Validated on 5 datasets.",
    link: "https://github.com/ashfinnn/geometric-dilution",
    github: "https://github.com/ashfinnn/geometric-dilution",
  },
  {
    id: "03",
    title: "Portfolio V2",
    category: "Full Stack Eng",
    color: "#8b5cf6",
    desc: "High-performance portfolio with advanced animations and optimized accessibility.",
    link: "https://obidur.vercel.app",
    github: "https://github.com/ashfinnn/obidur-rahman",
  },
];

// Abstract Visual
const ProjectPreview = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div
        className="w-[150%] h-[150%] rounded-full blur-[120px] opacity-40 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: project.color }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <FiLayers className="text-9xl text-white/10 scale-150" />
      </div>
      <div className="absolute bottom-6 left-6 z-20 max-w-xs">
        <p className="text-sm text-white/80 font-light leading-relaxed drop-shadow-md">
          {project.desc}
        </p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#050505] text-white py-24 lg:py-0 lg:h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:pl-32 flex flex-col lg:flex-row gap-16 h-full lg:h-[80vh]">
        {/* LEFT: The List (Expanded Vertical Spacing) */}
        <div className="lg:w-6/12 flex flex-col justify-center relative z-20">
          <div className="mb-16">
            <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-3 block">
              03 // Case Studies
            </span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
              Selected Works
            </h2>
          </div>

          <div className="flex flex-col">
            {projects.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative border-t border-white/10 last:border-b"
                onMouseEnter={() => {
                  setActiveProject(p);
                  setHovered(p.id);
                }}
                onMouseLeave={() => setHovered(null)}
              >
                <a
                  href={p.link}
                  target="_blank"
                  className="block py-10 lg:py-12 w-full"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-8 lg:gap-12">
                      <span
                        className={`font-mono text-sm transition-colors duration-300 ${hovered === p.id ? "text-cyan-400" : "text-gray-600"}`}
                      >
                        {p.id}
                      </span>
                      <h3
                        className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${hovered === p.id ? "text-white" : "text-gray-400"}`}
                      >
                        {p.title}
                      </h3>
                    </div>
                    <span className="hidden md:block font-mono text-xs text-gray-600 uppercase tracking-widest">
                      {p.category}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="https://github.com/Ashfinn"
              target="_blank"
              className="text-xs font-mono text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-cyan-500 pb-1"
            >
              [ VIEW ALL PROJECTS ]
            </a>
          </div>
        </div>

        {/* RIGHT: The Fixed Preview (Desktop Only) */}
        <div className="hidden lg:flex lg:w-6/12 items-center justify-center pl-12">
          <motion.div
            layoutId="previewCard"
            className="relative w-full aspect-[4/3] border border-white/20 rounded-sm overflow-hidden bg-[#0a0a0a] shadow-2xl"
          >
            {/* Window Chrome */}
            <div className="absolute top-0 left-0 w-full h-10 bg-black/80 border-b border-white/10 flex items-center px-4 gap-2 z-20 backdrop-blur-md">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="ml-auto font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                Preview
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pt-10"
              >
                <ProjectPreview project={activeProject} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
