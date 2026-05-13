"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiCornerDownRight } from "react-icons/fi";

const PROJECTS = [
  {
    id: "01",
    title: "CPU-CONSTRAINED VISION",
    category: "Computer Vision & Research",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    link: "/research/cpu-constrained-vision",
  },
  {
    id: "02",
    title: "SATELLITE ANALYSIS",
    category: "Remote Sensing / ML",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "03",
    title: "BIO-MEDICAL IMAGING",
    category: "Healthcare Technology",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "04",
    title: "NORTHAXIS AI R&D",
    category: "Systems Engineering",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

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
    <section className="relative bg-white text-[#111] w-full min-h-screen flex flex-col overflow-hidden">
      
      {/* ── Subtle Grain Overlay ───────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center pt-20 md:pt-28 pb-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-7">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="h-[1.5px] w-8 bg-[#FF4D00]" 
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#999]">
              Case Studies
            </span>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="h-[1.5px] w-8 bg-[#FF4D00]" 
            />
          </div>

          <h2 
            className="text-xl md:text-2xl tracking-[0.4em] uppercase text-[#111]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Selected Projects<span className="text-[#FF4D00]">.</span>
          </h2>
        </motion.div>
      </div>

      {/* ── Full-width divider ───────────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-[#E8E8E8]" />

      {/* ── PROJECTS LIST ─────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full">
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
            onMouseMove={(e) => {
              mouseX.set(e.clientX - 220);
              mouseY.set(e.clientY - 140);
            }}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 px-8 md:px-10 lg:px-14 border-b border-[#E8E8E8] transition-colors hover:bg-[#FAFAFA]"
          >
            <div className="flex items-center gap-6 md:gap-12">
              <span className="font-mono text-[9px] text-[#bbb] tracking-widest uppercase">[{project.id}]</span>
              <div>
                <h3 
                  className="text-2xl md:text-3xl tracking-tight leading-tight text-[#111] group-hover:text-[#FF4D00] transition-colors"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  {project.title}
                </h3>
                <div className="mt-2 flex items-center gap-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#999]">{project.category}</span>
                  <span className="w-1 h-1 bg-[#E8E8E8] rounded-full" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#999]">{project.year}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-0 flex items-center gap-5">
              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#bbb] opacity-0 group-hover:opacity-100 transition-opacity">View Case Study</span>
              <div className="w-10 h-10 border border-[#E8E8E8] flex items-center justify-center group-hover:bg-[#111] group-hover:text-white transition-all">
                <FiArrowUpRight size={16} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full px-8 md:px-10 lg:px-14 py-8 flex justify-between items-center bg-white border-t border-[#E8E8E8]">
         <div className="flex gap-10 font-mono text-[8px] uppercase tracking-[0.4em] text-[#bbb]">
            <span>Vol. {PROJECTS.length}</span>
            <span className="hidden sm:block">Index: Primary</span>
         </div>
         <div className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#bbb]">
            2023—2025 Archive
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