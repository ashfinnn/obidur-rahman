"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDownload,
  FiBookOpen,
  FiFileText,
} from "react-icons/fi";

const jobs = [
  {
    id: "01",
    period: "2023 — NOW",
    role: "Theoretical Researcher",
    company: "University of Chittagong",
    location: "Chittagong, BD",
    points: [
      "Pioneered 'Geometric Dilution' framework for SMOTE analysis.",
      "Proved limitations of synthetic data generation via Measure Theory.",
      "Published findings on high-dimensional dataset failures.",
    ],
  },
  {
    id: "02",
    period: "AUG 2024",
    role: "Engineering Fellow",
    company: "Headstarter AI",
    location: "Remote",
    points: [
      "Architected scalable AI applications using Next.js & AWS.",
      "Built serverless RAG pipelines with Pinecone Vector DB.",
      "Implemented CI/CD workflows for rapid deployment.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full bg-[#f4f4f0] text-black flex flex-col justify-center py-24 lg:py-0"
    >
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:pl-32">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 border border-cyan-600 flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-600" />
              </div>
              <span className="font-mono text-xs text-cyan-700 tracking-widest uppercase">
                04 // Career Log
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Track <br /> <span className="text-gray-400">Record</span>
            </h2>
          </div>

          {/* Simple Resume Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-cyan-700 transition-colors border-b border-black pb-1 hover:border-cyan-700"
          >
            Download CV{" "}
            <FiDownload className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        {/* The Log (Timeline) */}
        <div className="border-t-2 border-black">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-black/10 hover:bg-white transition-colors px-4 -mx-4"
            >
              {/* Date */}
              <div className="lg:col-span-3">
                <span className="font-mono text-sm font-bold text-cyan-700 block mb-2">
                  {job.period}
                </span>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {job.location}
                </span>
              </div>

              {/* Role */}
              <div className="lg:col-span-4">
                <h3 className="text-3xl font-black uppercase leading-none mb-2 group-hover:text-cyan-900 transition-colors">
                  {job.role}
                </h3>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                  {job.company}
                </span>
              </div>

              {/* Details */}
              <div className="lg:col-span-5">
                <ul className="space-y-2">
                  {job.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 leading-relaxed text-base flex items-start gap-3"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-gray-300 group-hover:bg-cyan-600 shrink-0 rounded-full transition-colors" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials Footer (Simplified) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-black/10">
          {/* Education */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white border border-black/5 rounded-sm">
              <FiBookOpen className="text-xl text-cyan-700" />
            </div>
            <div>
              <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1">
                Education
              </h4>
              <p className="text-lg font-bold leading-tight">
                B.S. Mathematics
              </p>
              <p className="text-sm text-gray-600">
                University of Chittagong (2026)
              </p>
            </div>
          </div>

          {/* Research */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white border border-black/5 rounded-sm">
              <FiFileText className="text-xl text-cyan-700" />
            </div>
            <div>
              <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1">
                Publications
              </h4>
              <p className="text-lg font-bold leading-tight">
                Geometric Dilution in SMOTE
              </p>
              <p className="text-sm text-gray-600">
                Conference Paper (In Review)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
