"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft, FiMenu, FiX, FiCpu, FiActivity, FiAlertTriangle, FiAward, FiDownload
} from "react-icons/fi";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function LeafDiseasePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("abstract");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['abstract', 'intro', 'methodology', 'results', 'discussion', 'future'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.3) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const sections = [
    { id: "abstract", label: "Abstract" },
    { id: "intro", label: "Introduction" },
    { id: "methodology", label: "Methodology" },
    { id: "results", label: "Results" },
    { id: "discussion", label: "Discussion" },
    { id: "future", label: "Future Work" }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#0A0A0A]">

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF4500] origin-left z-50" 
        style={{ scaleX }} 
      />

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen w-[300px] bg-white border-r-2 border-[#0A0A0A] z-30">
        <div className="p-8 border-b-2 border-[#0A0A0A] bg-[#0A0A0A]">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 text-white font-mono text-xs uppercase tracking-[0.15em] hover:text-[#FF4500] transition-colors duration-300 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={16} /> 
            Back to Portfolio
          </Link>
        </div>

        <nav className="p-8">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-6 font-bold">
            Contents
          </h3>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className={`
                    w-full text-left px-4 py-3 font-mono text-xs uppercase tracking-[0.1em] transition-all duration-200
                    ${activeSection === section.id 
                      ? 'bg-[#0A0A0A] text-white font-bold' 
                      : 'text-[#404040] hover:bg-[#F4F4F5] hover:text-[#0A0A0A]'
                    }
                  `}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-8 border-t-2 border-[#E5E5E5]">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 bg-[#FF4500] border-2 border-[#0A0A0A]">
              <FiAward className="text-white" size={16} />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#808080] mb-1">
                Award
              </p>
              <p className="text-xs font-bold leading-tight">
                Best Presenter
              </p>
            </div>
          </div>
          <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#A0A0A0]">
            Under Review · 2024
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <nav className="lg:hidden fixed top-0 w-full bg-white/95 backdrop-blur-sm z-40 flex justify-between items-center px-6 h-16 border-b-2 border-[#0A0A0A]">
        <Link href="/" className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.15em]">
          <FiArrowLeft size={16} /> Back
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-[#F4F4F5] transition-colors duration-200"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 bg-white z-30 pt-20 overflow-y-auto"
          >
            <div className="p-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-6 font-bold px-4">
                Contents
              </h3>
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollTo(section.id)}
                  className={`
                    block w-full text-left px-4 py-4 border-b border-[#E5E5E5] text-lg font-bold uppercase tracking-tight
                    ${activeSection === section.id ? 'bg-[#0A0A0A] text-white' : 'text-[#0A0A0A]'}
                  `}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16 lg:pt-0 lg:ml-[300px]">

        {/* Hero Section */}
        <section className="p-8 sm:p-12 lg:p-20 xl:p-28 min-h-[90vh] flex flex-col justify-center border-b-2 border-[#0A0A0A] bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF4500] text-white border-2 border-[#0A0A0A] mb-8 shadow-[4px_4px_0px_0px_rgba(10,10,10,1)]">
              <FiAward size={16} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em]">
                Best Presenter Award
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.95] max-w-5xl mb-10 tracking-tight">
              CPU-Constrained Deep Learning for Tomato Disease Detection
            </h1>

            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 w-16 bg-[#0A0A0A]" />
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#808080]">
                Research Paper · Under Review
              </p>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl text-[#404040] leading-relaxed font-medium mb-12">
              Deep learning enables accurate plant disease diagnosis, but GPU-dependent solutions
              remain inaccessible to many regions. This work explores model efficiency under
              strict CPU-only constraints.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border-2 border-[#0A0A0A] p-6 bg-white shadow-[4px_4px_0px_0px_rgba(10,10,10,1)]"
              >
                <div className="text-4xl lg:text-5xl font-black text-[#FF4500] mb-2">99.66%</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#808080]">
                  Accuracy
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="border-2 border-[#0A0A0A] p-6 bg-white shadow-[4px_4px_0px_0px_rgba(10,10,10,1)]"
              >
                <div className="text-4xl lg:text-5xl font-black text-[#0A0A0A] mb-2">22ms</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#808080]">
                  Latency
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="border-2 border-[#0A0A0A] p-6 bg-white shadow-[4px_4px_0px_0px_rgba(10,10,10,1)]"
              >
                <div className="text-4xl lg:text-5xl font-black text-[#0A0A0A] mb-2">4.03M</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#808080]">
                  Parameters
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="border-2 border-[#0A0A0A] p-6 bg-white shadow-[4px_4px_0px_0px_rgba(10,10,10,1)]"
              >
                <div className="text-4xl lg:text-5xl font-black text-[#0A0A0A] mb-2">CPU</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#808080]">
                  Only
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#FF4500] transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(10,10,10,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(10,10,10,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] border-2 border-[#0A0A0A] group">
                Download Paper
                <FiDownload size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => scrollTo('abstract')}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#0A0A0A] bg-white text-[#0A0A0A] font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
              >
                Read Abstract
              </button>
            </div>
          </motion.div>
        </section>

        {/* Abstract */}
        <section id="abstract" className="p-8 sm:p-12 lg:p-20 bg-[#FAFAFA] border-b-2 border-[#0A0A0A]">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-black mb-8 uppercase tracking-tight flex items-center gap-4">
              <span className="w-3 h-3 bg-[#0A0A0A] rounded-full" />
              Abstract
            </h2>
            <div className="border-l-4 border-[#0A0A0A] pl-8 py-2">
              <p className="text-base sm:text-lg leading-relaxed text-[#404040]">
                Tomato diseases significantly impact crop yield. While deep learning models achieve
                strong performance, most require GPU acceleration. This study evaluates traditional,
                modern, and hybrid architectures under CPU-only constraints, highlighting efficiency–
                accuracy trade-offs relevant to real-world agricultural deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section id="intro" className="p-8 sm:p-12 lg:p-20 bg-white border-b-2 border-[#0A0A0A]">
          <div className="max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-12 tracking-tight flex items-center gap-4">
              <span className="w-3 h-3 bg-[#0A0A0A] rounded-full" />
              Introduction
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-2 border-[#0A0A0A] p-8 bg-[#FAFAFA] shadow-[4px_4px_0px_0px_rgba(10,10,10,1)] hover:shadow-[6px_6px_0px_0px_rgba(10,10,10,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="p-3 bg-[#0A0A0A] inline-block mb-6">
                  <FiCpu className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg uppercase mb-3 tracking-tight">Hardware Constraint</h3>
                <p className="text-sm text-[#404040] leading-relaxed">
                  CPU-only inference on consumer-grade hardware without specialized accelerators or GPU access.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border-2 border-[#0A0A0A] p-8 bg-[#FAFAFA] shadow-[4px_4px_0px_0px_rgba(10,10,10,1)] hover:shadow-[6px_6px_0px_0px_rgba(10,10,10,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="p-3 bg-[#FF4500] inline-block mb-6 border-2 border-[#0A0A0A]">
                  <FiActivity className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg uppercase mb-3 tracking-tight">Research Goal</h3>
                <p className="text-sm text-[#404040] leading-relaxed">
                  Real-time disease classification achieving high accuracy without requiring expensive hardware infrastructure.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section id="methodology" className="p-8 sm:p-12 lg:p-20 bg-[#FAFAFA] border-b-2 border-[#0A0A0A]">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-12 tracking-tight flex items-center gap-4">
              <span className="w-3 h-3 bg-[#0A0A0A] rounded-full" />
              Methodology
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-[#0A0A0A] pl-8 py-2">
                <h3 className="font-bold text-lg mb-3 uppercase tracking-tight">Dataset</h3>
                <p className="text-[#404040] leading-relaxed">
                  Experiments were conducted on the PlantVillage dataset, comprising thousands of labeled images
                  across multiple disease categories.
                </p>
              </div>
              <div className="border-l-4 border-[#0A0A0A] pl-8 py-2">
                <h3 className="font-bold text-lg mb-3 uppercase tracking-tight">Approach</h3>
                <p className="text-[#404040] leading-relaxed">
                  Transfer learning with multiple architectural families evaluated under identical CPU-only conditions.
                  Models include ResNet-50, ConvNeXt-Tiny, and FastViT-T8.
                </p>
              </div>
              <div className="border-l-4 border-[#0A0A0A] pl-8 py-2">
                <h3 className="font-bold text-lg mb-3 uppercase tracking-tight">Evaluation</h3>
                <p className="text-[#404040] leading-relaxed">
                  All models were benchmarked on inference latency, parameter count, and classification accuracy
                  to identify optimal efficiency-performance trade-offs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="p-8 sm:p-12 lg:p-20 bg-white border-b-2 border-[#0A0A0A]">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-12 tracking-tight flex items-center gap-4">
              <span className="w-3 h-3 bg-[#0A0A0A] rounded-full" />
              Results
            </h2>
            <div className="border-2 border-[#0A0A0A] p-8 bg-[#FAFAFA] shadow-[6px_6px_0px_0px_rgba(10,10,10,1)]">
              <p className="text-[#404040] leading-relaxed mb-6">
                Hybrid architectures demonstrated significantly lower latency on CPU-only systems while maintaining
                competitive accuracy relative to larger CNN baselines. FastViT-T8 emerged as the optimal model,
                achieving 99.66% accuracy with just 22ms inference time.
              </p>
              <p className="text-sm text-[#808080] font-mono uppercase tracking-[0.1em]">
                Detailed quantitative comparisons and statistical analyses are reported in the full manuscript.
              </p>
            </div>
          </div>
        </section>

        {/* Discussion */}
        <section id="discussion" className="p-8 sm:p-12 lg:p-20 bg-[#FAFAFA] border-b-2 border-[#0A0A0A]">
          <div className="max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-12 tracking-tight flex items-center gap-4">
              <span className="w-3 h-3 bg-[#0A0A0A] rounded-full" />
              Discussion & Limitations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl uppercase mb-6 tracking-tight">Key Findings</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 bg-[#0A0A0A] rounded-full mt-2 shrink-0" />
                    <p className="text-sm text-[#404040]">
                      Hybrid vision architectures significantly outperform traditional CNNs on CPU hardware
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 bg-[#0A0A0A] rounded-full mt-2 shrink-0" />
                    <p className="text-sm text-[#404040]">
                      Sub-30ms inference enables real-time edge deployment scenarios
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 bg-[#0A0A0A] rounded-full mt-2 shrink-0" />
                    <p className="text-sm text-[#404040]">
                      Compact models remain viable for resource-constrained agricultural applications
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl uppercase mb-6 tracking-tight">Limitations</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-white border-l-4 border-[#FF4500]">
                    <FiAlertTriangle className="text-[#FF4500] mt-1 shrink-0" size={18} />
                    <p className="text-sm text-[#404040]">
                      Random image splits may overestimate generalization accuracy
                    </p>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-white border-l-4 border-[#FF4500]">
                    <FiAlertTriangle className="text-[#FF4500] mt-1 shrink-0" size={18} />
                    <p className="text-sm text-[#404040]">
                      Dataset images captured under controlled lighting conditions
                    </p>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-white border-l-4 border-[#FF4500]">
                    <FiAlertTriangle className="text-[#FF4500] mt-1 shrink-0" size={18} />
                    <p className="text-sm text-[#404040]">
                      Single-seed experiments limit statistical confidence intervals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Work */}
        <section id="future" className="p-8 sm:p-12 lg:p-20 bg-[#0A0A0A] text-white border-b-2 border-[#0A0A0A]">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-12 tracking-tight flex items-center gap-4">
              <span className="w-3 h-3 bg-white rounded-full" />
              Future Work
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Multi-seed evaluation with confidence intervals",
                "Statistical significance testing across architectures",
                "INT8 quantization for mobile deployment",
                "Validation on real field images",
                "Cross-dataset generalization studies",
                "Ensemble methods for improved robustness"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4 items-start p-6 border-2 border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-[#FF4500] rounded-full mt-2 shrink-0" />
                  <p className="text-sm text-[#C0C0C0]">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Citation */}
        <section className="p-8 sm:p-12 lg:p-20 bg-white border-b-2 border-[#0A0A0A]">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-8 tracking-tight flex items-center gap-4">
              <span className="w-3 h-3 bg-[#0A0A0A] rounded-full" />
              Citation
            </h2>
            <div className="border-2 border-[#0A0A0A] p-8 bg-[#FAFAFA] font-mono text-xs sm:text-sm">
              <pre className="whitespace-pre-wrap break-words text-[#404040]">
{`@inproceedings{rahman2024cpu,
  title={CPU-Constrained Deep Learning for 
         Tomato Disease Detection},
  author={Rahman, Obidur and et al.},
  booktitle={International Mathematics 
             Conference 2024},
  year={2024},
  status={Under Review}
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-8 sm:p-12 bg-[#0A0A0A] text-[#808080] border-t-2 border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.15em]">
              © 2024 Obidur Rahman · University of Chittagong
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em]">
                Manuscript Status:
              </span>
              <span className="px-3 py-1.5 bg-white/10 text-white font-mono text-[10px] uppercase tracking-[0.12em] border border-white/20">
                Under Review
              </span>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}