"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiChevronDown,
  FiGithub,
  FiBarChart2,
} from "react-icons/fi";

// --- DATA (Using your real research/projects) ---
const projectsData = [
  {
    title: "EduPredict: Admission Forecasting",
    category: "Machine Learning",
    subtitle:
      "A supervised learning system built on 15K+ admission records. Implemented feature engineering and SHAP-based explainability to support transparent decision-making.",
    tags: ["Python", "XGBoost", "Scikit-learn", "SHAP"],
    link: "https://github.com/Ashfinn",
  },
  {
    title: "EcoHealth: Disease ML Forecasting",
    category: "Predictive Modeling",
    subtitle:
      "Analyzed environmental correlates of diarrheal disease. Utilized time-series forecasting to predict outbreaks based on climate data, aiding local health resource allocation.",
    tags: ["Pandas", "Time-Series", "Matplotlib", "StatsModels"],
    link: "https://github.com/Ashfinn",
  },
  {
    title: "VisionEdge: Plant Disease Detection",
    category: "Computer Vision",
    subtitle:
      "Optimized CNN architecture for edge devices. Reduced model size by 60% while maintaining high classification accuracy for real-time agricultural monitoring.",
    tags: ["TensorFlow Lite", "Keras", "OpenCV", "Edge AI"],
    link: "https://github.com/Ashfinn",
  },
  {
    title: "Hybrid Transformers vs CNNs",
    category: "Deep Learning Research",
    subtitle:
      "Comparative analysis of hybrid transformer architectures against standard CNNs in CPU-constrained environments. Published benchmarks on inference latency vs accuracy.",
    tags: ["PyTorch", "Transformers", "Research", "Benchmarks"],
    link: "https://github.com/Ashfinn",
  },
  {
    title: "Interactive Math Platform",
    category: "Full Stack Data App",
    subtitle:
      "A Next.js based platform visualizing complex mathematical concepts. Demonstrates ability to deploy and visualize data models in a modern web stack.",
    tags: ["Next.js", "TypeScript", "D3.js", "Vercel"],
    link: "https://obidur.vercel.app",
  },
];

// --- STABLE GHOST SCRAMBLE ---
const ScrambleText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "XYZ0123456789!@#";
  useEffect(() => {
    const start = () => {
      let i = 0;
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((l, idx) =>
              l === " "
                ? " "
                : idx < i
                  ? text[idx]
                  : chars[Math.floor(Math.random() * chars.length)],
            )
            .join(""),
        );
        if (i >= text.length) clearInterval(intervalRef.current!);
        i += 1;
      }, 20);
    };
    start();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="opacity-0">{text}</span>
      <span className="absolute inset-0">{displayText}</span>
    </span>
  );
};

// --- VISUAL COMPONENT ---
const ProjectVisual = ({ title }: { title: string }) => {
  const hash = title
    .split("")
    .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
  const c1 = `hsl(${Math.abs(hash) % 360}, 60%, 15%)`;
  const c2 = `hsl(${Math.abs(hash >> 2) % 360}, 60%, 5%)`;
  return (
    <div className="absolute inset-0 w-full h-full bg-[#0a0a0a]">
      <div
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
    </div>
  );
};

const ProjectsSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  // Default to first project
  const activeProject = activeId
    ? projectsData.find((p) => p.title === activeId)
    : projectsData[0];

  return (
    <section
      id="projects"
      className="relative w-full bg-[#050505] text-white min-h-screen lg:h-screen flex flex-col justify-center py-20 lg:py-0 -mt-2 z-20"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
      <div className="w-full max-w-[95rem] mx-auto px-6 md:px-12 lg:pl-32 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center h-full">
        {/* LEFT: List */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center relative z-20">
          <div className="mb-10 lg:mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-cyan-500" />
              <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase">
                03 // Case Studies
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black leading-none tracking-tight text-white uppercase">
              Selected Works
            </h2>
          </div>

          <div className="flex flex-col w-full">
            {projectsData.map((project, index) => {
              const isActive =
                activeId === project.title ||
                (activeProject?.title === project.title &&
                  activeId === null &&
                  index === 0);
              return (
                <div
                  key={project.title}
                  className="relative border-b border-white/10 last:border-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeListBg"
                      className="absolute inset-0 bg-white/5 border-l-4 border-cyan-500 hidden lg:block"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <div
                    onMouseEnter={() => setActiveId(project.title)}
                    onClick={() =>
                      setActiveId(
                        activeId === project.title ? null : project.title,
                      )
                    }
                    className={`relative z-10 flex items-start lg:items-center justify-between py-5 px-4 cursor-pointer transition-all duration-300 group ${isActive ? "lg:pl-6" : "lg:hover:pl-6"}`}
                  >
                    <div className="flex items-start gap-4 w-full pr-4">
                      <span
                        className={`font-mono text-xs pt-1 shrink-0 transition-colors ${isActive ? "text-cyan-400" : "text-gray-600"}`}
                      >
                        0{index + 1}
                      </span>
                      {/* Added whitespace-normal to allow text wrapping on list */}
                      <h3
                        className={`text-lg lg:text-xl font-bold uppercase tracking-tight leading-tight transition-colors whitespace-normal ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <FiArrowUpRight
                      className={`hidden lg:block text-xl transition-all duration-300 shrink-0 ${isActive ? "opacity-100 translate-x-0 text-cyan-500" : "opacity-0 -translate-x-2"}`}
                    />
                    <FiChevronDown
                      className={`lg:hidden text-lg transition-transform duration-300 shrink-0 ${isActive ? "rotate-180 text-cyan-500" : "text-gray-600"}`}
                    />
                  </div>

                  {/* Mobile Details */}
                  <AnimatePresence>
                    {activeId === project.title && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="lg:hidden overflow-hidden bg-white/5"
                      >
                        <div className="p-5 border-l-2 border-cyan-500/30 ml-[1px]">
                          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            {project.subtitle}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-black border border-white/10 text-[10px] font-mono text-gray-500"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.link}
                            className="flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-widest hover:text-white"
                          >
                            View Analysis <FiArrowUpRight />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <div className="mt-8 pl-4">
              <a
                href="https://github.com/Ashfinn"
                target="_blank"
                className="inline-flex items-center gap-2 text-[10px] font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-cyan-500 pb-1"
              >
                [ View All Repositories ]
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Preview Card */}
        <div className="hidden lg:flex w-7/12 h-[65vh] min-h-[550px] items-center justify-center">
          <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden shadow-2xl flex flex-col">
            <div className="h-8 border-b border-white/10 bg-white/5 flex items-center justify-between px-3 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                Model_Preview
              </div>
            </div>
            <div className="relative flex-1 p-8 md:p-10 flex flex-col justify-between overflow-hidden">
              <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.div
                    key={activeProject.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 z-0"
                  >
                    <ProjectVisual title={activeProject.title} />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.div
                    key={activeProject.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 h-full flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-auto">
                      <div className="px-3 py-1 bg-black/40 backdrop-blur border border-white/10 rounded-full flex items-center gap-2">
                        <FiBarChart2 className="text-cyan-400 text-xs" />
                        <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                          {activeProject.category}
                        </span>
                      </div>
                      <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[10px] font-mono text-green-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        VALIDATED
                      </div>
                    </div>
                    <div className="my-auto py-8">
                      {/* ADDED break-words and reduced font size slightly to prevent cut off on huge titles */}
                      <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1] drop-shadow-2xl mb-6 break-words whitespace-normal">
                        <ScrambleText text={activeProject.title} />
                      </h3>
                      <div className="p-5 bg-black/50 backdrop-blur-md border-l-2 border-cyan-500">
                        <p className="text-gray-200 leading-relaxed font-light text-sm md:text-base">
                          {activeProject.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end justify-between mt-auto pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-black/60 border border-white/10 text-[10px] font-mono text-gray-400 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 shrink-0">
                        <a
                          href="https://github.com/Ashfinn"
                          className="w-10 h-10 flex items-center justify-center border border-white/20 bg-black/40 hover:bg-white/10 transition-colors text-white"
                        >
                          <FiGithub />
                        </a>
                        <a
                          href={activeProject.link}
                          target="_blank"
                          className="h-10 px-6 flex items-center justify-center bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs font-mono uppercase tracking-widest transition-colors"
                        >
                          View Analysis
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
