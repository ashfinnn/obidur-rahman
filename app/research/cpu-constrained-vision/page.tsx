"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowLeft, FiCpu, FiActivity, FiAlertTriangle, FiAward, FiDownload, FiPlus, FiCornerDownRight, FiFileText
} from "react-icons/fi";
import {
  SiPython, SiPytorch, SiTensorflow, SiFastapi, SiOpencv,
} from "react-icons/si";

const TECH = [
  { name: "Python",     icon: SiPython     },
  { name: "PyTorch",    icon: SiPytorch    },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "OpenCV",     icon: SiOpencv     },
  { name: "FastAPI",    icon: SiFastapi    },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function LeafDiseasePage() {
  return (
    <div className="bg-white min-h-screen text-[#111] selection:bg-[#FF4D00] selection:text-white overflow-x-hidden">
      {/* ── Subtle Grain Overlay ── */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Minimal Header */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-[#E8E8E8] px-6 h-16 flex items-center justify-between">
        <Link 
          href="/#research" 
          className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#999] hover:text-[#111] transition-colors"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Research
        </Link>
        <div className="flex items-center gap-6">
           <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#999]">Node_01</span>
           <div className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" />
        </div>
      </nav>

      <main className="pt-16">
        
        {/* ── HERO SECTION ── */}
        <section className="relative border-b border-[#E8E8E8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[60vh]">
            {/* Title Block */}
            <div className="lg:col-span-8 p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-[#E8E8E8] flex flex-col justify-end">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease }}
               >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#FF4D00] font-bold">[Research_Publication]</span>
                    <div className="h-px w-12 bg-[#E8E8E8]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#999]">Springer Nature · 2025</span>
                  </div>
                  <h1 
                    className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.9] mb-12"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    CPU-Constrained Deep Learning for Tomato Disease Detection
                  </h1>
               </motion.div>
            </div>

            {/* Meta Block */}
            <div className="lg:col-span-4 p-8 md:p-12 lg:p-16 flex flex-col justify-end space-y-12 bg-[#FAFAFA]">
               <div className="space-y-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#999]">Collaborators</div>
                  <p className="text-sm font-serif italic text-[#555]">With L. C. Das, A. Aich, A. S. M. Taiham, and A. I. Latif</p>
               </div>
               <div className="space-y-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#999]">Recognition</div>
                  <div className="flex items-center gap-3 py-2 px-4 border border-[#E8E8E8] bg-white w-fit">
                    <FiAward className="text-[#FF4D00]" size={16} />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#111]">Best Presenter Award</span>
                  </div>
               </div>
               <button className="w-full py-5 bg-[#111] text-white font-mono text-[10px] uppercase tracking-[0.4em] hover:bg-[#FF4D00] transition-colors flex items-center justify-center gap-3 group">
                  Download Paper
                  <FiCornerDownRight className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </section>

        {/* ── METRICS GRID ── */}
        <section className="border-b border-[#E8E8E8]">
           <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Peak Accuracy", value: "99.88%", icon: FiActivity },
                { label: "Inference Latency", value: "0.022s", icon: FiCpu },
                { label: "Parameter Count", value: "4.03M", icon: FiPlus },
                { label: "Deployment", value: "CPU Only", icon: FiFileText }
              ].map((m, i) => (
                <div key={i} className="p-8 md:p-12 lg:p-16 border-r last:border-r-0 border-[#E8E8E8] flex flex-col justify-between min-h-[220px] hover:bg-[#FAFAFA] transition-colors group">
                   <m.icon size={20} className="text-[#999] group-hover:text-[#FF4D00] transition-colors" />
                   <div>
                      <div className="text-3xl md:text-5xl font-light tracking-tighter mb-2">{m.value}</div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#999]">{m.label}</div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* ── EDITORIAL CONTENT ── */}
        <section className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Column 1: Abstract Pull-quote */}
            <div className="px-8 md:px-12 lg:px-16 py-16 md:py-24 border-b md:border-r border-[#E8E8E8] flex flex-col justify-start">
               <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#999] mb-12 flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#FF4D00]" />
                  01. Abstract
               </div>
               <p 
                className="text-2xl sm:text-3xl lg:text-[1.75rem] leading-[1.3] text-[#111] font-serif italic"
               >
                 "The findings show that real-time, CPU-only plant disease detection is feasible for field deployment scenarios."
               </p>
            </div>

            {/* Column 2: Core Methodology */}
            <div className="px-8 md:px-12 lg:px-16 py-16 md:py-24 border-b lg:border-r border-[#E8E8E8] space-y-8">
               <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#999] mb-4 flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#FF4D00]" />
                  02. Analysis
               </div>
               <p className="text-sm leading-[1.9] text-[#555]">
                 Evaluated the practical viability of deploying modern deep learning architectures for tomato disease classification in CPU-constrained agricultural environments where GPU hardware is often unavailable. Using the PlantVillage tomato dataset containing 16,012 images across 10 classes, this study benchmarked ResNet-50, ConvNeXt-Tiny, and FastViT-T8 under a two-phase transfer learning pipeline on standard CPU hardware.
               </p>
               <p className="text-sm leading-[1.9] text-[#555]">
                 Results showed that FastViT-T8 achieved the best balance between computational efficiency and predictive performance, reaching 99.66% accuracy with 0.022s per-image inference latency, while ConvNeXt-Tiny achieved the highest overall accuracy at 99.88%.
               </p>
            </div>

            {/* Column 3: Tech Stack & Tools */}
            <div className="px-8 md:px-12 lg:px-16 py-16 md:py-24 space-y-12">
               <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#999] mb-4 flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#FF4D00]" />
                  03. Stack
               </div>
               <div className="grid grid-cols-2 gap-px bg-[#E8E8E8] border border-[#E8E8E8]">
                  {TECH.map((t) => (
                    <div key={t.name} className="bg-white p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#FAFAFA] transition-colors">
                       <t.icon size={24} className="text-[#111]" />
                       <span className="font-mono text-[8px] tracking-widest uppercase text-[#999]">{t.name}</span>
                    </div>
                  ))}
               </div>
               <div className="p-8 bg-red-50/50 border-l-4 border-[#FF4D00] space-y-4">
                  <FiAlertTriangle className="text-[#FF4D00]" size={20} />
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#111]">Environmental Noise</div>
                  <p className="text-[11px] leading-relaxed text-[#555]">The study notes that real-world performance may vary due to environmental noise, occlusion, and varying image resolutions compared to controlled datasets.</p>
               </div>
            </div>
          </div>
        </section>

        {/* ── CITATION ── */}
        <section className="border-t border-[#E8E8E8] bg-[#FAFAFA]">
           <div className="max-w-4xl mx-auto px-8 py-16 md:py-24">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#999] mb-12">Manuscript Citation</h2>
              <div className="p-8 md:p-12 bg-white border border-[#E8E8E8] shadow-sm font-mono text-[10px] md:text-xs leading-relaxed overflow-x-auto relative group">
                <div className="absolute top-4 right-4 text-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity">
                   <FiDownload size={16} />
                </div>
                <pre className="text-[#111]">
{`@inproceedings{rahman2025cpu,
  title={CPU-Constrained Deep Learning for Tomato Disease Detection},
  author={Rahman, Obidur and et al.},
  booktitle={24th International Mathematics Conference},
  publisher={Springer Nature},
  year={2025}
}`}
                </pre>
              </div>
           </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#050505] py-24 border-t border-white/10">
         <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="space-y-8">
               <div className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/20">Conclusion</div>
               <p className="text-3xl md:text-5xl lg:text-6xl text-white font-serif max-w-2xl leading-[1.1] tracking-tight">
                  Bridging the gap between theory & <em className="italic">accessible</em> hardware.
               </p>
            </div>
            <Link 
               href="/#research"
               className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-[#FF4D00] transition-colors border-b border-white/10 pb-2"
            >
               Next Research Case
            </Link>
         </div>
      </footer>
    </div>
  );
}
