"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";

const jobs = [
  {
    id: "01",
    period: "2023 — NOW",
    role: "Theoretical Researcher",
    company: "University of Chittagong",
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
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
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
        </div>

        {/* The Timeline */}
        <div className="relative border-l-2 border-black/10 ml-3 md:ml-0 space-y-16">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white border-4 border-cyan-600 rounded-full" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                {/* Date */}
                <div className="md:col-span-3">
                  <span className="font-mono text-sm font-bold text-cyan-700 bg-cyan-50 px-2 py-1 rounded inline-block mb-2">
                    {job.period}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-white border border-black/10 rounded-sm text-gray-400">
                      <FiBriefcase />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase leading-none">
                      {job.role}
                    </h3>
                  </div>

                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4 pl-12">
                    {job.company}
                  </div>

                  <ul className="space-y-2 pl-12">
                    {job.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 leading-relaxed text-base flex items-start gap-3"
                      >
                        <span className="mt-2 w-1.5 h-1.5 bg-gray-300 shrink-0 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials Footer */}
        <div className="mt-20 pl-0 md:pl-12 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-black/10">
          <div className="flex items-start gap-4 group cursor-default">
            <div className="p-3 bg-white border border-black/5 rounded-sm shadow-sm group-hover:shadow-md transition-shadow">
              <FiBookOpen className="text-xl text-cyan-700" />
            </div>
            <div>
              <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1">
                Education
              </h4>
              <p className="text-lg font-bold leading-tight">
                B.S. Mathematics
              </p>
              <p className="text-sm text-gray-600">University of Chittagong</p>
            </div>
          </div>

          <div className="flex items-start gap-4 group cursor-default">
            <div className="p-3 bg-white border border-black/5 rounded-sm shadow-sm group-hover:shadow-md transition-shadow">
              <FiAward className="text-xl text-cyan-700" />
            </div>
            <div>
              <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1">
                Distinction
              </h4>
              <p className="text-lg font-bold leading-tight">
                Headstarter Fellow
              </p>
              <p className="text-sm text-gray-600">Top 1% Selection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
