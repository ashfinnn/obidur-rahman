"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeInOut } from "framer-motion";
import { 
  FiArrowUpRight, 
  FiAward, 
  FiChevronDown, 
  FiExternalLink, 
  FiClock,
  FiFileText,
  FiCode
} from "react-icons/fi";

const UNDER_REVIEW = [
  {
    id: "cpu-vision",
    title: "CPU-Constrained Deep Learning for Tomato Disease Detection",
    authors: ["Obidur Rahman", "et al."],
    venue: "International Mathematics Conference 2024",
    status: "Under Review",
    award: "Best Presenter Award",
    abstract: "Benchmarking ResNet-50, ConvNeXt-Tiny, and FastViT-T8 under CPU constraints. FastViT achieved 99.66% accuracy with 0.022s inference—ideal for edge deployment in resource-limited agricultural settings.",
    metrics: [
      { label: "Accuracy", value: "99.66", suffix: "%" },
      { label: "Latency", value: "0.022", suffix: "s" },
      { label: "Parameters", value: "4.03", suffix: "M" }
    ],
    tags: ["PyTorch", "FastViT", "Quantization", "Agriculture"],
    link: "/research/cpu-constrained-vision",
  }
];

const ONGOING_RESEARCH = [
  {
    id: "geometric-dilution",
    title: "Geometric Dilution of SMOTE in High-Dimensional Feature Spaces",
    status: "In Progress",
    timeline: "",
    desc: "A mathematical investigation into the failure of SMOTE in high-dimensional spaces (>10D). Proving that synthetic point coverage approaches zero as dimensionality increases.",
    tags: ["Mathematics", "SMOTE", "High-Dimensional"],
    link: "https://ashfinnn.github.io/geometric-dilution/",
  },
  {
    id: "efficient-vit",
    title: "Efficient Vision Transformers for Mobile Deployment",
    status: "Early Stage",
    timeline: "",
    desc: "Investigating knowledge distillation and structured pruning for compressing ViT models to sub-5M parameters while maintaining accuracy.",
    tags: ["Vision Transformers", "Pruning", "Mobile AI"],
  },
  {
    id: "math-sparsity",
    title: "Mathematical Foundations of Neural Network Sparsity",
    status: "Exploration",
    timeline: "",
    desc: "Applying concepts from abstract algebra to understand and predict weight importance in deep networks.",
    tags: ["Mathematics", "Pruning", "Theory"],
  }
];

const RESEARCH_INTERESTS = [
  "Computer Vision",
  "Model Compression", 
  "Edge AI", 
  "Mathematical ML", 
  "Efficient Architectures"
];

const fast = { duration: 0.3, ease: easeInOut };

export default function ResearchSection() {
  const [expandedPaper, setExpandedPaper] = useState<string | null>("cpu-vision");

  return (
    <section className="bg-[#F4F4F5] text-[#050505] w-full py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={fast}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-4 sm:mb-6">
            Publications &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Ongoing Work</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-[2px] bg-[#050505] origin-left" 
          />
        </motion.div>

        {/* Main Container */}
        <div className="border border-[#050505] bg-white shadow-xl">
          
          {/* Under Review Section */}
          <div className="border-b border-[#050505]">
            {/* Section Header */}
            <div className="p-4 sm:p-6 border-b border-[#050505] flex items-center gap-3">
              <div className="p-2 bg-[#050505]">
                <FiFileText className="text-white" size={14} />
              </div>
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500">
                Under Review
              </span>
            </div>

            {/* Paper Card */}
            {UNDER_REVIEW.map((paper) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={fast}
              >
                {/* Paper Header - Clickable */}
                <button
                  onClick={() => setExpandedPaper(expandedPaper === paper.id ? null : paper.id)}
                  className="w-full text-left p-4 sm:p-6 md:p-8 hover:bg-[#FAFAFA] transition-colors duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                        {paper.award && (
                          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#FF4D00] text-white">
                            <FiAward size={12} />
                            <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                              {paper.award}
                            </span>
                          </div>
                        )}
                        <div className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 border border-[#050505]">
                          <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#050505]">
                            {paper.status}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg sm:text-xl md:text-2xl font-black leading-tight mb-2 sm:mb-3 uppercase tracking-tight">
                        {paper.title}
                      </h4>

                      {/* Authors & Venue */}
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                        {paper.authors.join(", ")}
                      </p>
                      <p className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest">
                        {paper.venue}
                      </p>
                    </div>

                    {/* Expand Icon */}
                    <motion.div
                      animate={{ rotate: expandedPaper === paper.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#050505] p-1 sm:p-2"
                    >
                      <FiChevronDown size={20} />
                    </motion.div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#E5E5E5]">
                    {paper.metrics.map((metric, i) => (
                      <motion.div 
                        key={metric.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="text-center sm:text-left"
                      >
                        <div className="text-xl sm:text-2xl md:text-4xl font-black text-[#050505]">
                          {metric.value}
                          <span className="text-sm sm:text-lg md:text-xl text-gray-400">{metric.suffix}</span>
                        </div>
                        <div className="font-mono text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-widest mt-1">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedPaper === paper.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 border-t border-[#E5E5E5]">
                        <div className="pt-4 sm:pt-6">
                          {/* Abstract */}
                          <div className="mb-4 sm:mb-6">
                            <h5 className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">
                              Abstract
                            </h5>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed border-l-2 border-[#050505] pl-3 sm:pl-4">
                              {paper.abstract}
                            </p>
                          </div>

                          {/* Tags */}
                          <div className="mb-4 sm:mb-6">
                            <h5 className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">
                              Keywords
                            </h5>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {paper.tags.map((tag) => (
                                <span 
                                  key={tag}
                                  className="px-2 py-1 bg-[#F4F4F5] border border-[#E5E5E5] font-mono text-[9px] sm:text-[10px] text-gray-600 uppercase tracking-wider"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <a
                            href={paper.link}
                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#050505] text-white font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:bg-[#333] transition-colors duration-200 group"
                          >
                            Read Full Paper
                            <FiArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Ongoing Research Section */}
          <div>
            {/* Section Header */}
            <div className="p-4 sm:p-6 border-b border-[#050505] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#050505]">
                  <FiCode className="text-white" size={14} />
                </div>
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500">
                  Ongoing Research
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 bg-green-500" />
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] font-bold text-green-600 uppercase tracking-wider hidden sm:inline">
                  Active
                </span>
              </div>
            </div>

            {/* Research Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {ONGOING_RESEARCH.map((research, index) => (
                <motion.div 
                  key={research.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...fast, delay: index * 0.05 }}
                  className={`p-4 sm:p-6 border-b sm:border-b lg:border-b-0 border-[#E5E5E5] hover:bg-[#050505] transition-colors duration-300 group cursor-default flex flex-col min-h-[200px] sm:min-h-[240px]
                    ${index < 2 ? 'sm:border-r lg:border-r' : ''} 
                    ${index === 0 ? 'lg:border-r' : ''}
                    ${index === 1 ? 'lg:border-r' : ''}
                  `}
                >
                  {/* Status Row */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 bg-green-500" />
                      </span>
                      <span className="font-mono text-[9px] sm:text-[10px] text-green-600 group-hover:text-green-400 uppercase tracking-widest font-bold transition-colors duration-300">
                        {research.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 group-hover:text-gray-500 transition-colors duration-300">
                      <FiClock size={10} />
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase">{research.timeline}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm sm:text-base font-bold mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300 leading-tight">
                    {research.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-gray-600 group-hover:text-gray-400 leading-relaxed mb-3 sm:mb-4 flex-1 transition-colors duration-300">
                    {research.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                    {research.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-1.5 sm:px-2 py-0.5 bg-[#F4F4F5] group-hover:bg-[#333] font-mono text-[8px] sm:text-[9px] text-gray-500 group-hover:text-gray-400 uppercase transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {research.link && (
                    <a
                      href={research.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 text-[#050505] group-hover:text-white font-mono text-[9px] sm:text-[10px] uppercase tracking-widest hover:underline transition-colors duration-300"
                    >
                      View Progress <FiExternalLink size={10} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Interests Footer */}
          <div className="p-4 sm:p-6 border-t border-[#050505] bg-[#FAFAFA]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest shrink-0">
                Research Interests
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {RESEARCH_INTERESTS.map((interest, i) => (
                  <motion.span 
                    key={interest}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.03 }}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-[#E5E5E5] font-mono text-[10px] sm:text-xs text-gray-600 hover:border-[#050505] hover:bg-[#050505] hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 sm:mt-8 grid grid-cols-3 border border-[#050505] bg-white"
        >
          <div className="p-3 sm:p-4 md:p-6 text-center border-r border-[#050505] hover:bg-[#050505] group transition-colors duration-300">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#050505] group-hover:text-white transition-colors duration-300">1</div>
            <div className="font-mono text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-widest mt-1">Publication</div>
          </div>
          <div className="p-3 sm:p-4 md:p-6 text-center border-r border-[#050505] hover:bg-[#050505] group transition-colors duration-300">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#050505] group-hover:text-white transition-colors duration-300">3</div>
            <div className="font-mono text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-widest mt-1">Ongoing</div>
          </div>
          <div className="p-3 sm:p-4 md:p-6 text-center hover:bg-[#050505] group transition-colors duration-300">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#050505] group-hover:text-white transition-colors duration-300">1</div>
            <div className="font-mono text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-widest mt-1">Award</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
