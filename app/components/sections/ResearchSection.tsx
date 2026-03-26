"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeInOut } from "framer-motion";
import {
  FiArrowUpRight,
  FiAward,
  FiChevronDown,
  FiExternalLink,
  FiFileText,
  FiBook
} from "react-icons/fi";

const UNDER_REVIEW = [
  {
    id: "cpu-vision",
    title: "CPU-Constrained Deep Learning for Tomato Disease Detection",
    authors: [
      "Obidur Rahman",
      "Lipon Chandra Das",
      "Arnab Aich",
      "Abu Saiman Md Taiham",
      "Atif Ibna Latif"
    ],
    orcid: ["0009-0007-7960-9423", "0000-0001-8150-8057", "0009-0008-5111-6990", "0009-0002-3503-6276", "0009-0001-4785-9782"],
    venue: "Springer Book Proceedings — 24th International Mathematics Conference",
    status: "Under Review",
    award: "Best Presenter Award",
    abstract:
      "Evaluated ResNet-50, ConvNeXt-Tiny, and FastViT-T8 for tomato leaf disease classification on CPU-only hardware using the PlantVillage dataset (16,012 images, 10 classes). Applied a two-phase transfer learning protocol to benchmark accuracy and inference latency under constraints representative of smallholder agricultural settings.",
    metrics: [
      { label: "Accuracy", value: "99.66", suffix: "%" },
      { label: "Latency", value: "0.022", suffix: "s" },
      { label: "Parameters", value: "4.03", suffix: "M" }
    ],
    tags: ["PyTorch", "FastViT", "Quantization", "Agriculture"],
    link: "",
  }
];

const CONFERENCE_PRESENTATIONS = [
  {
    id: "digital-distractions",
    title: "Pathways from Digital Distractions and Study Habits to Academic Performance",
    coAuthors: "With Md. Ali Arman Rafi",
    venue: "Scholars' Convergence Research & Innovation Summit (SCRIS), Chittagong, 2026",
    doi: "10.13140/RG.2.2.24207.24483",
    desc: "Surveyed 225 university students across Bangladesh to examine how digital habits, self-regulation, and socio-economic factors jointly predict CGPA. Found that behavioural self-regulation outweighs raw study hours as a predictor of academic success.",
    tags: ["Statistics", "Machine Learning", "Survey Research"],
  },
  {
    id: "congestion-premium",
    title: "Quantifying the Congestion Premium: Determinants of Non-Metered Fares in a Developing Port City",
    coAuthors: "With Sifatul Islam",
    venue: "Scholars' Convergence Research & Innovation Summit (SCRIS), Chittagong, 2026",
    doi: "10.13140/RG.2.2.16906.53448",
    desc: "Modelled fare deviations from official government rates using a revealed-preference survey of 100 commuter trips. Regression analysis identified traffic intensity, time of day, and waterlogging as primary structural drivers of the congestion premium.",
    tags: ["Regression", "Economics", "Urban Transport"],
  },
];

const RESEARCH_INTERESTS = [
  "Computer Vision",
  "Model Compression",
  "Edge AI",
  "Efficient Architectures",
  "Imbalanced Learning",
  "Low-Resource NLP"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Research</span>
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
                        <div className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 border border-[#FF4D00] text-[#FF4D00]">
                          <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
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
                                  className="px-2 py-1 bg-[#F4F4F5] border border-[#E5E5E5] font-mono text-[9px] sm:text-[10px] text-gray-600 uppercase tracking-wider hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors duration-200"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <a
                            href={paper.link}
                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#050505] text-white font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:bg-[#FF4D00] transition-colors duration-200 group"
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

          {/* Conference Presentations Section */}
          <div>
            {/* Section Header */}
            <div className="p-4 sm:p-6 border-b border-[#050505] flex items-center gap-3">
              <div className="p-2 bg-[#050505]">
                <FiBook className="text-white" size={14} />
              </div>
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500">
                Conference Presentations
              </span>
            </div>

            {/* Presentations Grid */}
            <div className="grid sm:grid-cols-2">
              {CONFERENCE_PRESENTATIONS.map((pres, index) => (
                <motion.div
                  key={pres.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...fast, delay: index * 0.05 }}
                  className={`p-4 sm:p-6 md:p-8 hover:bg-[#050505] transition-colors duration-300 group cursor-default flex flex-col min-h-[200px] sm:min-h-[260px]
                    ${index === 0 ? 'border-b sm:border-b-0 sm:border-r border-[#050505]' : ''}
                  `}
                >
                  {/* Title */}
                  <h4 className="text-sm sm:text-base font-bold mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300 leading-tight">
                    {pres.title}
                  </h4>

                  {/* Co-authors */}
                  <p className="text-[11px] sm:text-xs text-gray-500 group-hover:text-gray-400 mb-2 transition-colors duration-300">
                    {pres.coAuthors}
                  </p>

                  {/* Venue */}
                  <p className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mb-3 group-hover:text-gray-500 transition-colors duration-300">
                    {pres.venue}
                  </p>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-gray-600 group-hover:text-gray-400 leading-relaxed mb-3 sm:mb-4 flex-1 transition-colors duration-300">
                    {pres.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                    {pres.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 sm:px-2 py-0.5 bg-[#F4F4F5] group-hover:bg-[#333] font-mono text-[8px] sm:text-[9px] text-gray-500 group-hover:text-gray-400 uppercase transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* DOI Link */}
                  <a
                    href={`https://doi.org/${pres.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-[#FF4D00] font-mono text-[9px] sm:text-[10px] uppercase tracking-widest hover:underline transition-colors duration-300"
                  >
                    DOI: {pres.doi} <FiExternalLink size={10} />
                  </a>
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
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-[#E5E5E5] font-mono text-[10px] sm:text-xs text-gray-600 hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors duration-200 cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}