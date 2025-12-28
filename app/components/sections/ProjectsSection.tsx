"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLayout, FiArrowUpRight, FiCpu } from "react-icons/fi";

const PROJECTS = [
  {
    id: "01",
    title: "Portfolio Architecture",
    subtitle: "Web Engineering",
    year: "2024",
    tech: ["Next.js 14", "TypeScript", "Motion"],
    desc: "A high-performance brutalist design system. Features momentum scrolling (Lenis), strict TypeScript typing, and a component-driven architecture scoring 100/100 on Lighthouse performance metrics.",
    link: "https://obidur.vercel.app",
    github: "https://github.com/ashfinnn/obidur-rahman",
    src: "/port.png",       // Static Image
    gif: "/port-demo.gif",  // YOUR GIF HERE
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#F4F4F5] text-[#050505] w-full py-24 border-t border-[#E5E5E5] mb-24">

      <div className="container mx-auto px-4 md:px-12 max-w-7xl">

        {/* HEADER (Standardized) */}
        <div className="mb-12">
          <span className="font-mono text-xs font-bold tracking-widest text-[#FF4D00] uppercase mb-4 block">
            System Builds
          </span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
            Selected <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200">Works</span>
          </h2>
          {/* The Line Under Headline */}
          <div className="w-full h-[2px] bg-[#050505]" />
        </div>

        {/* --- THE MASTER GRID (Matches Research/About) --- */}
        <div className="border-x border-b border-[#050505] bg-white shadow-xl">

          {PROJECTS.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 group border-b border-[#050505] last:border-b-0">

              {/* COL 1: CONTENT (Left - 5 Cols) */}
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#050505] relative bg-white z-10">

                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-2 w-2 bg-[#FF4D00]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#FF4D00] transition-colors">
                      Index 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 border border-[#E5E5E5] text-[10px] font-mono font-bold uppercase text-gray-500 bg-gray-50">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-gray-600 font-medium border-l-2 border-[#050505] pl-4">
                    {project.desc}
                  </p>
                </div>

                <div className="flex gap-4 mt-12">
                  <a href={project.link} target="_blank" className="flex-1 bg-[#050505] text-white py-4 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-[#FF4D00] transition-colors text-center flex items-center justify-center gap-2">
                    Live System <FiArrowUpRight size={14} />
                  </a>
                  <a href={project.github} target="_blank" className="w-16 flex items-center justify-center border border-[#050505] text-[#050505] hover:bg-[#050505] hover:text-white transition-colors">
                    <FiGithub size={18} />
                  </a>
                </div>
              </div>

              {/* COL 2: VISUAL (Right - 7 Cols) */}
              <div className="lg:col-span-7 bg-[#EBEBEB] relative min-h-[300px] lg:min-h-[500px] overflow-hidden">

                {/* 1. Static Image (Base Layer) */}
                <img
                  src={project.src}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:opacity-0 transition-opacity duration-300"
                />

                {/* 2. GIF (Hover Layer) */}
                <img
                  src={project.gif}
                  alt="Project Demo"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Overlays / Decorations */}
                <div className="absolute top-0 left-0 p-6 pointer-events-none">
                  <FiLayout className="text-3xl text-white drop-shadow-md" />
                </div>

                {/* Bottom Bar inside Image */}
                <div className="absolute bottom-0 right-0 bg-white border-t border-l border-[#050505] px-4 py-2 z-20 pointer-events-none">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#050505]">
                    {project.subtitle}
                  </span>
                </div>
              </div>

            </div>
          ))}

          {/* OPTIONAL: ENGINEERING METRICS ROW (To match Research/About layout completely) */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#050505]">
            <MetricBox label="Lighthouse" value="100" />
            <MetricBox label="Framework" value="Next.14" />
            <MetricBox label="Type Safety" value="Strict" />
            <MetricBox label="Scroll" value="Lenis" />
          </div>

        </div>
      </div>
    </section>
  );
}

const MetricBox = ({ label, value }: { label: string, value: string }) => (
  <div className="p-6 md:p-8 flex flex-col items-center justify-center border-r border-[#050505] last:border-r-0 hover:bg-[#050505] hover:text-white transition-colors duration-300 group cursor-crosshair">
    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1 group-hover:text-[#FF4D00]">
      {label}
    </span>
    <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">
      {value}
    </span>
  </div>
)