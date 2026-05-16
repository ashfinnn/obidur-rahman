"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
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
    subtitle: "Springer Nature Book Proceedings, 24th IMC, 2025",    status: "Under Review",
    award: "Best Presenter Award",
    authors: "With L. C. Das, A. Aich, A. S. M. Taiham, and A. I. Latif",
    desc: "Evaluated the practical viability of deploying modern deep learning architectures for tomato disease classification in CPU-constrained agricultural environments where GPU hardware is often unavailable. Using the PlantVillage tomato dataset containing 16,012 images across 10 classes, this study benchmarked ResNet-50, ConvNeXt-Tiny, and FastViT-T8 under a two-phase transfer learning pipeline on standard CPU hardware. Results showed that FastViT-T8 achieved the best balance between computational efficiency and predictive performance, reaching 99.66% accuracy with 0.022s per-image inference latency, while ConvNeXt-Tiny achieved the highest overall accuracy at 99.88%. The findings demonstrate the feasibility of real-time, CPU-only plant disease detection for edge and field deployment scenarios.",
    metrics: [
      { label: "Acc", value: "99.88%" },
      { label: "Lat", value: "0.022s" },
      { label: "Params", value: "4.03M" }
    ],
    tags: ["Computer Vision", "FastViT", "Edge AI"],
    accent: "text-[#FF4D00]",
    image: "/tomato.jpeg",
    letter: "R",
    icon: FiActivity,
    link: "/research/cpu-constrained-vision"
  },
  {
    id: "02",
    type: "Conference",
    title: "Pathways from Digital Distractions to Academic Performance",
    subtitle: "SCRIS, Chittagong, 2026",
    status: "Published",
    authors: "With Md. Ali Arman Rafi",
    desc: "Surveyed 225 university students to examine how digital habits and self-regulation predict CGPA. Findings revealed that behavioural self-regulation outweighs raw study hours as a primary predictor of academic success among students.",
    metrics: [
      { label: "Sample", value: "225" },
      { label: "Method", value: "ML/Stat" },
      { label: "Focus", value: "Self-Reg" }
    ],
    tags: ["Self-Regulation", "ML", "DOI: 24207.24483"],
    accent: "text-blue-500",
    letter: "D",
    icon: FiBook,
    link: "/research/digital-distractions"
  },
  {
    id: "03",
    type: "Conference",
    title: "Quantifying the Congestion Premium in a Port City",
    subtitle: "SCRIS, Chittagong, 2026",
    status: "Published",
    authors: "With Sifatul Islam",
    desc: "Used a revealed-preference survey of 100 commuter trips to model fare deviations. Identified traffic intensity, time of day, and waterlogging as the primary structural drivers of the congestion premium in non-metered transport.",
    metrics: [
      { label: "Trips", value: "100" },
      { label: "Drivers", value: "3 Main" },
      { label: "Market", value: "Rational" }
    ],
    tags: ["Urban Economics", "Regression", "DOI: 16906.53448"],
    accent: "text-green-500",
    letter: "C",
    icon: FiFileText,
    link: "/research/congestion-premium"
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
        
        {/* ── STACKING CARDS ── */}
        <div className="flex flex-col items-center">
          {RESEARCH_ITEMS.map((item, i) => {
            const isDark = i % 2 === 0;
            const bgColor = isDark ? "bg-[#111]" : "bg-white";
            const textColor = isDark ? "text-white" : "text-[#111]";
            const subTextColor = isDark ? "text-white/60" : "text-[#555]";
            const borderColor = isDark ? "border-white/10" : "border-[#E8E8E8]";
            const tagBg = isDark ? "bg-white/5" : "bg-[#F9F9F9]";
            const visualBg = isDark ? "bg-[#1a1a1a]" : "bg-[#FAFAFA]";

            return (
              <div 
                key={item.id} 
                className="sticky top-0 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-0"
                style={{ zIndex: i + 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease }}
                  className={`relative w-full max-w-7xl min-h-[85vh] md:h-[80vh] ${bgColor} ${textColor} overflow-hidden flex flex-col md:flex-row items-stretch shadow-[0_60px_120px_rgba(0,0,0,0.25)] border ${borderColor}`}
                >
                  {/* Card Content (Left) */}
                  <div className={`w-full md:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r ${borderColor}`}>
                    <div className="space-y-6 md:space-y-8">
                      <div className="flex items-center gap-4">
                        <span className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-widest ${isDark ? "text-white/40" : "text-[#999]"}`}>[{item.id}]</span>
                        <span className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-widest ${item.accent}`}>{item.type}</span>
                      </div>

                      <h3 
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {item.title}
                      </h3>

                      <p className={`${subTextColor} text-xs sm:text-sm leading-relaxed max-w-lg font-serif italic border-l ${borderColor} pl-4 sm:pl-5`}>
                        "{item.desc}"
                      </p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className={`px-2 sm:px-3 py-0.5 sm:py-1 ${tagBg} border ${borderColor} font-mono text-[7px] sm:text-[8px] uppercase tracking-widest ${isDark ? "text-white/40" : "text-[#999]"}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`flex items-center justify-between mt-8 md:mt-auto pt-6 md:pt-8 border-t ${isDark ? "border-white/5" : "border-[#F5F5F5]"} md:border-t-0`}>
                      {item.metrics ? (
                        <div className="flex gap-4 sm:gap-6 lg:gap-8">
                          {item.metrics.map(m => (
                            <div key={m.label}>
                              <div className="text-lg sm:text-xl md:text-2xl font-light tracking-tight">{m.value}</div>
                              <div className={`font-mono text-[7px] sm:text-[8px] uppercase tracking-widest ${isDark ? "text-white/40" : "text-[#999]"}`}>{m.label}</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={`font-mono text-[7px] sm:text-[8px] uppercase tracking-widest ${isDark ? "text-white/40" : "text-[#999]"}`}>Ref: SCRIS-26</div>
                      )}
                      
                      <Link 
                        href={item.link} 
                        className={`w-10 h-10 flex items-center justify-center border ${borderColor} ${isDark ? "hover:bg-white hover:text-[#111]" : "hover:bg-[#111] hover:text-white"} transition-all group shrink-0`}
                      >
                        <FiExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Card Visual (Right) */}
                  <div className={`w-full md:w-1/2 ${visualBg} relative flex items-center justify-center p-8 sm:p-12 overflow-hidden min-h-[300px] md:min-h-0 group`}>
                     {item.image ? (
                       <div className="absolute inset-0 z-0">
                         <Image
                           src={item.image}
                           alt={item.title}
                           fill
                           className="object-cover opacity-100 transition-transform duration-700 group-hover:scale-105"
                         />
                         {/* Subtle Overlay to maintain text readability if needed, though here it's just a visual card */}
                         <div className={`absolute inset-0 ${isDark ? "bg-black/20" : "bg-white/5"}`} />
                       </div>
                     ) : (
                       <div className="relative z-10 text-center">
                          <span className={`text-[10rem] sm:text-[15rem] md:text-[18rem] lg:text-[22rem] font-bold ${isDark ? "text-white/[0.03]" : "text-[#111]/[0.02]"} leading-none select-none`}>
                            {item.letter}
                          </span>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <item.icon size={60} strokeWidth={0.5} className={`${isDark ? "text-white/10" : "text-[#111]/10"} mb-4 sm:mb-6 mx-auto w-10 h-10 sm:w-[60px] sm:h-[60px]`} />
                            <div className={`h-[1px] w-8 sm:w-10 mx-auto ${item.accent.replace('text', 'bg')}`} />
                          </div>
                       </div>
                     )}

                     <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-10">
                        <FiPlus className={isDark ? "text-white/10" : "text-[#E8E8E8]"} size={20} strokeWidth={1} />
                     </div>

                     {/* Corner Accent */}
                     <div className={`absolute bottom-6 right-6 sm:bottom-10 sm:right-10 font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.5em] ${isDark ? "text-white/20" : "text-[#999]"} rotate-90 origin-right z-10`}>
                        Research_Node
                     </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
          {/* Space for final card scrolling - allows next section to slide over last card */}
          <div className="h-screen" />
        </div>
      </div>
    </section>
  );
}
