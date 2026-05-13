"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiAward,
  FiExternalLink,
  FiActivity,
  FiBook,
  FiFileText,
  FiPlus
} from "react-icons/fi";

const RESEARCH_ITEMS = [
  {
    id: "01",
    type: "Publication",
    title: "CPU-Constrained Deep Learning for Tomato Disease Detection",
    subtitle: "Springer Book Proceedings — 24th IMC",
    status: "Under Review",
    award: "Best Presenter Award",
    desc: "Evaluated ResNet-50, ConvNeXt-Tiny, and FastViT-T8 for tomato leaf disease classification on CPU-only hardware. Applied a two-phase transfer learning protocol to benchmark accuracy and inference latency.",
    metrics: [
      { label: "Acc", value: "99.66%" },
      { label: "Lat", value: "0.022s" },
      { label: "Params", value: "4.03M" }
    ],
    tags: ["PyTorch", "FastViT", "Quantization"],
    accent: "text-[#FF4D00]",
    letter: "R",
    icon: FiActivity
  },
  {
    id: "02",
    type: "Conference",
    title: "Pathways from Digital Distractions to Academic Performance",
    subtitle: "SCRIS, Chittagong, 2026",
    status: "Published",
    desc: "Surveyed 225 university students to examine how digital habits, self-regulation, and socio-economic factors jointly predict CGPA. Found that behavioural self-regulation outweighs raw study hours.",
    tags: ["Statistics", "Machine Learning", "Survey"],
    accent: "text-blue-600",
    letter: "D",
    icon: FiBook
  },
  {
    id: "03",
    type: "Conference",
    title: "Quantifying the Congestion Premium in a Port City",
    subtitle: "SCRIS, Chittagong, 2026",
    status: "Published",
    desc: "Modelled fare deviations from official government rates using a revealed-preference survey. Identified traffic intensity and waterlogging as primary drivers of the congestion premium.",
    tags: ["Regression", "Economics", "Urban"],
    accent: "text-green-600",
    letter: "C",
    icon: FiFileText
  }
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ResearchSection() {
  return (
    <section className="relative w-full bg-white">
      
      {/* ── SECTION BACKGROUND (Scoped to this section) ── */}
      <div className="absolute inset-0 z-0">
        <div className="sticky top-0 h-screen w-full">
          <Image
            src="/resbg.jpg"
            alt="Section Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="relative z-10">
        
        {/* ── STACKING CARDS (Light Mode) ── */}
        <div className="flex flex-col items-center">
          {RESEARCH_ITEMS.map((item, i) => (
            <div 
              key={item.id} 
              className="sticky top-0 w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-20 py-20 md:py-0"
              style={{ zIndex: i + 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease }}
                className="relative w-full max-w-7xl min-h-[70vh] md:h-[80vh] bg-white text-[#111] overflow-hidden flex flex-col md:flex-row items-stretch shadow-[0_60px_120px_rgba(0,0,0,0.15)] border border-[#E8E8E8]"
              >
                {/* Card Content (Left) */}
                <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-14 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8E8E8]">
                  <div className="space-y-6 md:space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#999]">[{item.id}]</span>
                      <span className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-widest ${item.accent}`}>{item.type}</span>
                    </div>

                    <h3 
                      className="text-2xl sm:text-3xl lg:text-5xl tracking-tight leading-tight text-[#111]"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-[#555] text-xs sm:text-sm leading-relaxed max-w-lg font-serif italic border-l border-[#E8E8E8] pl-4 sm:pl-5">
                      "{item.desc}"
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#F9F9F9] border border-[#E8E8E8] font-mono text-[7px] sm:text-[8px] uppercase tracking-widest text-[#999]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-8 md:mt-auto pt-6 md:pt-8 border-t border-[#F5F5F5] md:border-t-0">
                    {item.metrics ? (
                      <div className="flex gap-4 sm:gap-6">
                        {item.metrics.map(m => (
                          <div key={m.label}>
                            <div className="text-lg sm:text-xl md:text-2xl font-light tracking-tight text-[#111]">{m.value}</div>
                            <div className="font-mono text-[7px] sm:text-[8px] uppercase tracking-widest text-[#999]">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="font-mono text-[7px] sm:text-[8px] uppercase tracking-widest text-[#999]">Ref: SCRIS-26</div>
                    )}
                    
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center border border-[#E8E8E8] hover:bg-[#111] hover:text-white transition-all group shrink-0"
                    >
                      <FiExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Card Visual (Right) */}
                <div className="w-full md:w-1/2 bg-[#FAFAFA] relative flex items-center justify-center p-8 sm:p-12 overflow-hidden min-h-[250px] md:min-h-0">
                   <div className="absolute top-6 left-6 sm:top-10 sm:left-10">
                      <FiPlus className="text-[#E8E8E8]" size={20} strokeWidth={1} />
                   </div>

                   <div className="relative z-10 text-center">
                      <span className="text-[10rem] sm:text-[15rem] md:text-[20rem] font-bold text-[#111]/[0.02] leading-none select-none">
                        {item.letter}
                      </span>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <item.icon size={60} strokeWidth={0.5} className="text-[#111]/10 mb-4 sm:mb-6 mx-auto w-10 h-10 sm:w-[60px] sm:h-[60px]" />
                        <div className={`h-[1px] w-8 sm:w-10 mx-auto ${item.accent.replace('text', 'bg')}`} />
                      </div>
                   </div>

                   {/* Corner Accent */}
                   <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.5em] text-[#999] rotate-90 origin-right">
                      Research_Node
                   </div>
                </div>
              </motion.div>
            </div>
          ))}
          {/* Space for final card scrolling - allows next section to slide over last card */}
          <div className="h-screen" />
        </div>
      </div>
    </section>
  );
}
