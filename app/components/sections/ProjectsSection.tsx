"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiCornerDownRight } from "react-icons/fi";

const PROJECTS = [
  {
    id: "01",
    title: "THIS PORTFOLIO",
    category: "Frontend Architecture",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    link: "https://obidur.vercel.app",
  },
  {
    id: "02",
    title: "CLIMATE ML",
    category: "Research Systems",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "03",
    title: "RAG ENGINE",
    category: "LLM Infrastructure",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "04",
    title: "VISION STACK",
    category: "Computer Vision",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<
    null | (typeof PROJECTS)[0]
  >(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    damping: 28,
    stiffness: 180,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    damping: 28,
    stiffness: 180,
    mass: 0.5,
  });

  return (
    <section className="bg-white text-[#111] w-full min-h-screen flex flex-col">
      
      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <div className="px-6 sm:px-12 md:px-24 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1.5 w-1.5 bg-[#FF4D00]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#999]">
              Selected Works & Case Studies
            </span>
          </div>

          <h2 
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light tracking-tighter leading-[0.85] uppercase mb-12"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Projects<span className="text-[#FF4D00]">.</span>
          </h2>
        </motion.div>
      </div>

      {/* ── PROJECTS LIST ─────────────────────────────────────────────────── */}
      <div className="w-full border-t border-[#E8E8E8]">
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease }}
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
            onMouseMove={(e) => {
              mouseX.set(e.clientX - 220);
              mouseY.set(e.clientY - 140);
            }}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 px-6 sm:px-12 md:px-24 border-b border-[#E8E8E8] transition-colors hover:bg-[#FAFAFA]"
          >
            <div className="flex items-center gap-8 md:gap-16">
              <span className="font-mono text-[10px] text-[#999] pt-2">[{project.id}]</span>
              <div>
                <h3 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none text-[#111] group-hover:text-[#FF4D00] transition-colors"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {project.title}
                </h3>
                <div className="mt-4 flex items-center gap-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#999]">{project.category}</span>
                  <span className="w-1 h-1 bg-[#E8E8E8] rounded-full" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#999]">{project.year}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0 flex items-center gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#999] opacity-0 group-hover:opacity-100 transition-opacity">View Case Study</span>
              <div className="w-12 h-12 border border-[#E8E8E8] flex items-center justify-center group-hover:bg-[#111] group-hover:text-white transition-all">
                <FiArrowUpRight size={20} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <div className="w-full p-10 flex justify-between items-center bg-white">
         <div className="flex gap-10 font-mono text-[8px] uppercase tracking-[0.4em] text-[#999]">
            <span>Total Projects: {PROJECTS.length}</span>
            <span className="hidden sm:block">Filter: All Works</span>
         </div>
         <div className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#999]">
            Hover for Preview
         </div>
      </div>

      {/* FLOATING IMAGE PREVIEW */}
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{
          opacity: activeProject ? 1 : 0,
          scale: activeProject ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease }}
        className="fixed top-0 left-0 z-[100] hidden xl:block w-[400px] h-[250px] overflow-hidden pointer-events-none shadow-2xl border border-[#E8E8E8] bg-white"
      >
        {activeProject && (
          <motion.img
            key={activeProject.image}
            src={activeProject.image}
            alt={activeProject.title}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease }}
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
    </section>
  );
}