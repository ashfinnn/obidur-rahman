"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allProjectsData } from "../lib/data";
import {
  FiArrowUpRight,
  FiCode,
  FiChevronDown,
  FiGithub,
} from "react-icons/fi";

// --- ABSTRACT VISUAL BACKGROUND (Static & Clean) ---
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

  const featuredProjects = useMemo(() => {
    if (!allProjectsData) return [];
    const flat = Object.values(allProjectsData).flatMap((cat) =>
      cat.items.map((item) => ({ ...item, category: cat.title })),
    );
    return flat.slice(0, 5);
  }, []);

  const activeProject = activeId
    ? featuredProjects.find((p) => p.title === activeId)
    : featuredProjects[0];

  return (
    <section
      id="projects"
      // -mt-2 overlaps the previous section to kill the white line gap
      // z-20 ensures it sits on top of the previous section's bottom edge
      className="relative w-full bg-[#050505] text-white min-h-screen lg:h-screen flex flex-col justify-center py-20 lg:py-0 -mt-2 z-20"
    >
      {/* Optional: Top Border to define the start of the dark section */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      {/* Main Content Wrapper */}
      <div className="w-full max-w-[95rem] mx-auto px-6 md:px-12 lg:pl-32 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center h-full">
        {/* LEFT COLUMN: Project List */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center relative z-20">
          <div className="mb-10 lg:mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-cyan-500" />
              <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase">
                03 // Selected Works
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black leading-none tracking-tight text-white uppercase">
              Projects
            </h2>
          </div>

          <div className="flex flex-col w-full">
            {featuredProjects.map((project, index) => {
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
                  {/* Highlight Background (Desktop) */}
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
                    className={`relative z-10 flex items-center justify-between py-5 px-4 cursor-pointer transition-all duration-300 group
                                        ${isActive ? "lg:pl-6" : "lg:hover:pl-6"}`}
                  >
                    {/* Title Container */}
                    <div className="flex items-start gap-4 w-full pr-4">
                      <span
                        className={`font-mono text-xs pt-1 shrink-0 transition-colors ${isActive ? "text-cyan-400" : "text-gray-600"}`}
                      >
                        0{index + 1}
                      </span>
                      <h3
                        className={`text-lg lg:text-xl font-bold uppercase tracking-tight leading-tight transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Icons */}
                    <FiArrowUpRight
                      className={`hidden lg:block text-xl transition-all duration-300 shrink-0 ${isActive ? "opacity-100 translate-x-0 text-cyan-500" : "opacity-0 -translate-x-2"}`}
                    />
                    <FiChevronDown
                      className={`lg:hidden text-lg transition-transform duration-300 shrink-0 ${isActive ? "rotate-180 text-cyan-500" : "text-gray-600"}`}
                    />
                  </div>

                  {/* Mobile Accordion */}
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
                            {project.tags.slice(0, 3).map((tag: string) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-black border border-white/10 text-[10px] font-mono text-gray-500"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.link || "#"}
                            className="flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-widest hover:text-white"
                          >
                            Launch <FiArrowUpRight />
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
                href="#"
                className="inline-flex items-center gap-2 text-[10px] font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-cyan-500 pb-1"
              >
                [ View Full Archive ]
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Preview Card (Desktop) */}
        <div className="hidden lg:flex w-7/12 h-[65vh] min-h-[550px] items-center justify-center">
          <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden shadow-2xl flex flex-col">
            {/* Window Chrome */}
            <div className="h-8 border-b border-white/10 bg-white/5 flex items-center justify-between px-3 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                System_Preview
              </div>
            </div>

            {/* Content Area */}
            <div className="relative flex-1 p-8 md:p-10 flex flex-col justify-between overflow-hidden">
              {/* Dynamic Background */}
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

              {/* Project Info */}
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
                    {/* Top Tags */}
                    <div className="flex justify-between items-start mb-auto">
                      <div className="px-3 py-1 bg-black/40 backdrop-blur border border-white/10 rounded-full flex items-center gap-2">
                        <FiCode className="text-cyan-400 text-xs" />
                        <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                          {activeProject.category}
                        </span>
                      </div>
                      <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[10px] font-mono text-green-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        DEPLOYED
                      </div>
                    </div>

                    {/* Main Content - Middle */}
                    <div className="my-auto py-8">
                      {/*
                                            Using break-words to handle massive titles.
                                            Removed truncate.
                                            Adjusted font size slightly to accommodate larger strings.
                                        */}
                      <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1] drop-shadow-2xl mb-6 break-words">
                        {activeProject.title}
                      </h3>

                      <div className="p-5 bg-black/50 backdrop-blur-md border-l-2 border-cyan-500">
                        <p className="text-gray-200 leading-relaxed font-light text-sm md:text-base">
                          {activeProject.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Actions */}
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
                          href="#"
                          className="w-10 h-10 flex items-center justify-center border border-white/20 bg-black/40 hover:bg-white/10 transition-colors text-white"
                        >
                          <FiGithub />
                        </a>
                        <a
                          href={activeProject.link || "#"}
                          target="_blank"
                          className="h-10 px-6 flex items-center justify-center bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs font-mono uppercase tracking-widest transition-colors"
                        >
                          Open Project
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
