"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiGithub,
  FiExternalLink,
  FiLayers,
} from "react-icons/fi";

// --- 1. REAL PROJECT DATA ---
const projects = [
  {
    id: "01",
    title: "Efficient Leaf Disease",
    category: "Computer Vision",
    tags: ["TensorFlow", "MobileNetV2", "Edge AI"],
    color: "#10b981", // Green
    desc: "Developed a lightweight deep learning model for real-time classification of plant leaf diseases. Optimized for edge devices with minimal computational footprint.",
    link: "https://github.com/ashfinnn/efficient-leaf-disease",
    github: "https://github.com/ashfinnn/efficient-leaf-disease",
    year: "2024",
    stats: { views: "2.1K", stars: "45" },
  },
  {
    id: "02",
    title: "Geometric Dilution",
    category: "Theoretical Research",
    tags: ["Python", "Mathematics", "SMOTE"],
    color: "#06b6d4", // Cyan
    desc: "A novel theoretical framework proving why SMOTE fails in high-dimensional spaces using measure theory. Includes rigorous statistical validation on 5 datasets.",
    link: "https://github.com/ashfinnn/geometric-dilution",
    github: "https://github.com/ashfinnn/geometric-dilution",
    year: "2023",
    stats: { views: "1.5K", stars: "32" },
  },
  {
    id: "03",
    title: "Portfolio V2",
    category: "Full Stack Engineering",
    tags: ["Next.js 14", "TypeScript", "Framer Motion"],
    color: "#8b5cf6", // Purple
    desc: "A high-performance, interactive portfolio built with the latest Next.js features. Implements advanced animations, responsive design, and optimized accessibility.",
    link: "https://obidur.vercel.app",
    github: "https://github.com/ashfinnn/obidur-rahman",
    year: "2024",
    stats: { views: "890", stars: "12" },
  },
];

// --- 2. PREVIEW CARD (ABSTRACT VISUAL) ---
// Since we don't have real screenshots hosted, we use a generated abstract art
// based on the project color. This looks cleaner than broken images.
const ProjectPreview = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Abstract Gradient Orb */}
      <div
        className="w-[150%] h-[150%] rounded-full blur-[120px] opacity-40 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: project.color }}
      />

      {/* Icon Centerpiece */}
      <div className="absolute inset-0 flex items-center justify-center">
        <FiLayers className="text-9xl text-white/10 scale-150" />
      </div>

      {/* Live Preview Badge */}
      <div className="absolute top-6 left-6 z-20">
        <div className="px-4 py-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full font-mono text-xs text-white shadow-2xl flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          LIVE_PREVIEW
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleMobileActive = (id: string) => {
    setMobileActive(mobileActive === id ? null : id);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-[#050505] text-white py-24 lg:py-0 lg:h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:pl-32 flex flex-col lg:flex-row gap-16 h-full lg:h-[80vh]">
        {/* LEFT: The List */}
        <div className="lg:w-5/12 flex flex-col justify-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-3 block">
              03 // Case Studies
            </span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Works
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col border-t border-white/10">
            {projects.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-white/10"
              >
                {/* Header (Clickable on Mobile) */}
                <button
                  className={`group py-6 cursor-pointer relative w-full text-left transition-colors ${
                    activeProject.id === p.id
                      ? "bg-white/5 lg:bg-transparent"
                      : "hover:bg-white/[0.02]"
                  }`}
                  onMouseEnter={() => setActiveProject(p)}
                  onClick={() => toggleMobileActive(p.id)}
                >
                  <div className="flex items-center justify-between relative z-10 px-2">
                    <div className="flex items-center gap-6">
                      <span
                        className={`font-mono text-xs transition-colors ${
                          activeProject.id === p.id
                            ? "text-cyan-500"
                            : "text-gray-600 group-hover:text-cyan-500"
                        }`}
                      >
                        {p.id}
                      </span>
                      <h3
                        className={`text-xl md:text-3xl font-bold uppercase transition-colors ${
                          activeProject.id === p.id
                            ? "text-cyan-400"
                            : "text-white group-hover:text-cyan-400"
                        }`}
                      >
                        {p.title}
                      </h3>
                    </div>

                    <div className="text-gray-500 group-hover:text-white transition-colors flex-shrink-0">
                      <FiArrowUpRight className="hidden lg:block text-2xl" />
                      <FiChevronDown
                        className={`lg:hidden text-xl transition-transform duration-300 ${
                          mobileActive === p.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Active Line (Desktop) */}
                  {activeProject.id === p.id && (
                    <motion.div
                      layoutId="activeProjectLine"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 hidden lg:block"
                    />
                  )}
                </button>

                {/* Mobile Accordion Content */}
                <AnimatePresence>
                  {mobileActive === p.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="lg:hidden overflow-hidden bg-white/5"
                    >
                      <div className="p-6 border-l-2 border-cyan-500 ml-1">
                        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                          {p.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-black border border-white/10 text-[10px] font-mono text-gray-400 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={p.link}
                            target="_blank"
                            className="text-xs font-bold text-cyan-400 uppercase flex items-center gap-2"
                          >
                            View Project <FiArrowUpRight />
                          </a>
                          <a
                            href={p.github}
                            target="_blank"
                            className="text-xs font-bold text-gray-400 uppercase flex items-center gap-2"
                          >
                            Source Code <FiGithub />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="https://github.com/Ashfinn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-cyan-500 pb-1"
            >
              [ VIEW FULL ARCHIVE → ]
            </a>
          </motion.div>
        </div>

        {/* RIGHT: The Fixed Preview (Desktop Only) */}
        <div className="hidden lg:flex lg:w-7/12 items-center justify-center pl-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full aspect-[4/3] border border-white/20 rounded-xl overflow-hidden bg-[#0a0a0a] shadow-2xl"
          >
            {/* Window Chrome */}
            <div className="absolute top-0 left-0 w-full h-10 bg-black/80 border-b border-white/10 flex items-center px-4 gap-2 z-20 backdrop-blur-md">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="ml-auto font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                {activeProject.category}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 pt-10"
              >
                <ProjectPreview project={activeProject} />

                {/* Floating Info Box */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-8 left-8 right-8 p-6 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl"
                >
                  <p className="text-gray-300 font-light text-base mb-4 leading-relaxed">
                    {activeProject.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-mono uppercase text-cyan-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-4">
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                      <span>{activeProject.year}</span>
                      <span>//</span>
                      <span>{activeProject.stats.stars} Stars</span>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={activeProject.link}
                        target="_blank"
                        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-xs font-bold text-white uppercase tracking-wider transition-colors flex items-center gap-2"
                      >
                        View Project <FiExternalLink />
                      </a>
                      <a
                        href={activeProject.github}
                        target="_blank"
                        className="px-4 py-2 border border-white/20 hover:bg-white/10 rounded text-xs font-bold text-gray-300 uppercase tracking-wider transition-colors flex items-center gap-2"
                      >
                        <FiGithub />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
