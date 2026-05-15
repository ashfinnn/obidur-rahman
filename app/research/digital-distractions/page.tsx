"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft, FiBook, FiActivity, FiBarChart2, FiDownload, FiPlus
} from "react-icons/fi";
import { motion, useScroll, useSpring } from "framer-motion";

export default function DigitalDistractionsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: "abstract", label: "Abstract" },
    { id: "intro", label: "Introduction" },
    { id: "methodology", label: "Methodology" },
    { id: "results", label: "Results" },
    { id: "discussion", label: "Discussion" }
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen text-[#111] selection:bg-blue-600 selection:text-white">
      {/* ── Subtle Grain Overlay ── */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60]" 
        style={{ scaleX }} 
      />

      {/* Minimal Header */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-[#E8E8E8] px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#999] hover:text-[#111] transition-colors"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {sections.map(s => (
            <button 
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#999] hover:text-blue-600 transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* ── HERO ── */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-600 font-bold">
                [Conference Presentation]
              </span>
              <div className="h-px w-12 bg-[#E8E8E8]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#999]">
                SCRIS · 2026
              </span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] mb-12"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Pathways from Digital Distractions to Academic Performance
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <p className="text-xl lg:text-2xl text-[#555] leading-relaxed font-serif italic border-l-4 border-blue-600 pl-8">
                Examining the mediation of self-regulation between digital habits and CGPA among Bangladeshi university students through multi-variate statistical analysis.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#111] text-white font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-colors">
                  View DOI
                </button>
                <div className="flex items-center gap-3 py-2 px-4 border border-[#E8E8E8] bg-[#FAFAFA]">
                   <FiBook className="text-blue-600" size={16} />
                   <span className="font-mono text-[9px] uppercase tracking-widest text-[#999]">Behavioral Science</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mt-24 border border-[#E8E8E8]">
            {[
              { label: "Sample Size", value: "225", icon: FiBarChart2 },
              { label: "Target", value: "CGPA", icon: FiActivity },
              { label: "Method", value: "ML/Stat", icon: FiPlus },
              { label: "Region", value: "BD", icon: FiBook }
            ].map((m, i) => (
              <div key={i} className="p-8 md:p-12 bg-[#FAFAFA] flex flex-col justify-between min-h-[200px] border-r border-[#E8E8E8] last:border-0">
                <m.icon size={20} className="text-[#999]" />
                <div>
                  <div className="text-3xl md:text-5xl font-light tracking-tight mb-2">{m.value}</div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#999]">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTENT ── */}
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto space-y-24 md:space-y-32">
            
            {/* Abstract */}
            <section id="abstract" className="scroll-mt-32">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#999] mb-12 flex items-center gap-4">
                <span className="w-2 h-2 bg-blue-600" />
                01. Abstract
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl leading-relaxed text-[#333] font-serif">
                  Surveyed 225 university students across Bangladesh to examine how digital habits, self-regulation,
                  and socio-economic factors jointly predict CGPA. Applied multiple statistical and machine-learning
                  analyses; found that behavioural self-regulation outweighs raw study hours as a predictor of academic success.
                </p>
              </div>
            </section>

            {/* Methodology */}
            <section id="methodology" className="scroll-mt-32">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#999] mb-12 flex items-center gap-4">
                <span className="w-2 h-2 bg-blue-600" />
                02. Methodology
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif">Survey Design</h3>
                  <p className="text-[#555] leading-relaxed">
                    Cross-sectional study using structured questionnaires covering digital consumption, self-regulation scales (SRSI), and academic metrics.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif">Statistical Models</h3>
                  <p className="text-[#555] leading-relaxed">
                    Regression analysis, mediation modeling, and random forest classifiers were used to rank importance of academic predictors.
                  </p>
                </div>
              </div>
            </section>

            {/* Results */}
            <section id="results" className="scroll-mt-32">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#999] mb-12 flex items-center gap-4">
                <span className="w-2 h-2 bg-blue-600" />
                03. Results
              </h2>
              <div className="bg-[#111] p-8 md:p-16 text-white border border-white/10 relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                   <h3 className="text-3xl md:text-4xl font-serif mb-8 italic">"Behavioural self-regulation was identified as the single most significant predictor of CGPA."</h3>
                   <p className="text-white/60 leading-relaxed mb-12">
                     Our models showed that self-regulation acts as a critical buffer, allowing students to maintain high academic performance 
                     despite high levels of digital media consumption.
                   </p>
                   <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                      <div>
                        <div className="text-4xl font-light">Self-Reg</div>
                        <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/40 mt-1">Primary Buffer</div>
                      </div>
                      <div>
                        <div className="text-4xl font-light">225</div>
                        <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/40 mt-1">Sample Size</div>
                      </div>
                   </div>
                </div>
                <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 opacity-[0.05] select-none pointer-events-none">
                   <FiBarChart2 size={400} />
                </div>
              </div>
            </section>

            {/* Discussion */}
            <section id="discussion" className="scroll-mt-32">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#999] mb-12 flex items-center gap-4">
                <span className="w-2 h-2 bg-blue-600" />
                04. Discussion
              </h2>
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                   <h3 className="text-xl font-bold uppercase tracking-tight mb-6">Key Insights</h3>
                   <ul className="space-y-4">
                      <li className="flex gap-4 items-start">
                         <span className="text-blue-600 mt-1">01.</span>
                         <p className="text-sm text-[#555]">Study hours alone are not sufficient to predict academic success in digital environments.</p>
                      </li>
                      <li className="flex gap-4 items-start">
                         <span className="text-blue-600 mt-1">02.</span>
                         <p className="text-sm text-[#555]">Proactive digital boundary setting is strongly correlated with higher CGPA.</p>
                      </li>
                      <li className="flex gap-4 items-start">
                         <span className="text-blue-600 mt-1">03.</span>
                         <p className="text-sm text-[#555]">Socio-economic factors played a secondary role compared to individual habits.</p>
                      </li>
                   </ul>
                </div>
                <div className="p-8 bg-white border border-blue-100 border-l-4 border-l-blue-600">
                   <FiActivity className="text-blue-600 mb-4" size={24} />
                   <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">Conclusion</h3>
                   <p className="text-xs leading-relaxed text-[#666]">
                     The findings underscore the need for educational institutions to focus on developing students' self-regulatory 
                     capacities rather than simply discouraging digital usage.
                   </p>
                </div>
              </div>
            </section>

            {/* Citation */}
            <section className="pt-16 border-t border-[#E8E8E8]">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#999] mb-8">Citation</h2>
              <div className="p-8 bg-[#FAFAFA] border border-[#E8E8E8] font-mono text-[10px] md:text-xs leading-relaxed overflow-x-auto">
                <pre className="text-[#111]">
{`@inproceedings{rahman2026distractions,
  title={Pathways from Digital Distractions to Academic Performance},
  author={Rahman, Obidur and Rafi, Ali Arman},
  booktitle={Scholars’ Convergence Research & Innovation Summit},
  year={2026},
  doi={10.13140/RG.2.2.24207.24483}
}`}
                </pre>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#050505] text-white/40 py-20">
         <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
               <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20 mb-4">Scholarly Work</div>
               <p className="text-xs max-w-xs font-serif italic text-white/60 leading-relaxed">
                 "Redefining the relationship between digital consumption and human potential."
               </p>
            </div>
            <div className="flex gap-8">
               <div className="text-center">
                  <div className="text-white text-lg mb-1">2026</div>
                  <div className="font-mono text-[8px] uppercase tracking-widest text-white/20">Year</div>
               </div>
               <div className="text-center">
                  <div className="text-white text-lg mb-1">SCRIS</div>
                  <div className="font-mono text-[8px] uppercase tracking-widest text-white/20">Venue</div>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
