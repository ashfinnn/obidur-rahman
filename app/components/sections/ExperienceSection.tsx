"use client";

import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import {
  FiMapPin,
  FiCalendar,
  FiBriefcase,
  FiBook,
  FiAward,
  FiArrowUpRight,
} from "react-icons/fi";

const WORK = {
  role: "R&D Engineer",
  company: "NorthAxis",
  location: "Remote",
  period: "Dec 2025 — Present",
  desc: "Lead research and development for product launches and client projects. Core responsibilities include AI feature research, technical feasibility analysis, and end-to-end solution design.",
  responsibilities: [
    "Evaluate and integrate AI capabilities into products, researching emerging models and deployment strategies",
    "Design and prototype software solutions, translating briefs into engineering specifications",
    "Collaborate across teams to bring R&D outcomes into production",
    "Technical feasibility studies and architectural planning for new product initiatives",
  ],
};

const EDUCATION = {
  degree: "B.S. in Mathematics",
  institution: "University of Chittagong",
  location: "Chittagong, Bangladesh",
  period: "2022 — 2027 (Expected)",
  desc: "Specializing in pure mathematics with applications to machine learning and neural network theory.",
  highlights: [
    {
      text: "Best Presenter Award — 24th International Mathematics Conference",
      isAward: true,
    },
    {
      text: "Coursework: Real Analysis, Linear Algebra, Abstract Algebra, Complex Analysis, Numerical Methods",
      isAward: false,
    },
  ],
  courses: [
    "Real Analysis",
    "Linear Algebra",
    "Abstract Algebra",
    "Complex Analysis",
    "Numerical Methods",
  ],
};

const fast = { duration: 0.3, ease: easeInOut };

export default function ExperienceSection() {
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
            Experience &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">
              Education
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-[2px] bg-[#050505] origin-left"
          />
        </motion.div>

        {/* Main Card */}
        <div className="border border-[#050505] bg-white shadow-xl">

          {/* Header Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#050505] text-white border-b border-[#050505]">
            <div className="lg:col-span-6 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-gray-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white">
                  <FiBriefcase className="text-[#050505]" size={16} />
                </div>
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
                  Work Experience
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] font-bold text-green-400 uppercase tracking-wider hidden sm:inline">
                    Active
                  </span>
                </div>
                <FiArrowUpRight className="text-gray-500" size={18} />
              </div>
            </div>
            <div className="lg:col-span-6 p-4 sm:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white">
                  <FiBook className="text-[#050505]" size={16} />
                </div>
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
                  Education
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] font-bold text-blue-400 uppercase tracking-wider hidden sm:inline">
                    Ongoing
                  </span>
                </div>
                <FiArrowUpRight className="text-gray-500" size={18} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#050505]">

            {/* ── Work Column ── */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={fast}
              className="lg:col-span-6 group hover:bg-[#050505] transition-colors duration-300 cursor-default"
            >
              {/* Role block */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:text-white transition-colors duration-300">
                      {WORK.role}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold group-hover:text-[#FF4D00] transition-colors duration-300 mt-0.5">
                      @ {WORK.company}
                    </p>
                  </div>
                  {/* Inline meta pill */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 font-mono">
                      <FiCalendar size={11} />
                      {WORK.period}
                    </span>
                    <span className="w-px h-3 bg-gray-300 group-hover:bg-gray-600 transition-colors duration-300" />
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 font-mono">
                      <FiMapPin size={11} />
                      {WORK.location}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 max-w-prose">
                  {WORK.desc}
                </p>
              </div>

              {/* Responsibilities block — timeline style */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest block mb-4">
                  Key Responsibilities
                </span>
                <ul className="space-y-0 ml-3">
                  {WORK.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 pb-4 last:pb-0">
                      {/* dot — pulled left to sit on the rail */}
                      <div className="shrink-0 -ml-[5px] mt-[5px] w-[9px] h-[9px] bg-[#050505] group-hover:bg-[#FF4D00] transition-colors duration-300" />
                      <span className="text-[11px] sm:text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ── Education Column ── */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...fast, delay: 0.1 }}
              className="lg:col-span-6 group hover:bg-[#050505] transition-colors duration-300 cursor-default flex flex-col"
            >
              {/* Degree block */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:text-white transition-colors duration-300 mb-0.5">
                  {EDUCATION.degree}
                </h3>
                <p className="text-base sm:text-lg font-semibold mb-4 group-hover:text-white transition-colors duration-300">
                  @ {EDUCATION.institution}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4 group-hover:text-gray-400 transition-colors duration-300 font-mono">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={11} />
                    {EDUCATION.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={11} />
                    <span className="hidden sm:inline">{EDUCATION.location}</span>
                    <span className="sm:hidden">Chittagong</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {EDUCATION.desc}
                </p>
              </div>

              {/* Award block */}
              <div className="px-6 sm:px-8 py-4 flex items-start gap-3 bg-[#050505]/[0.02] group-hover:bg-white/5 transition-colors duration-300">
                <FiAward className="text-[#FF4D00] mt-0.5 flex-shrink-0" size={16} />
                <span className="text-[11px] sm:text-sm text-[#FF4D00] font-semibold leading-snug">
                  Best Presenter Award — 24th International Mathematics Conference
                </span>
              </div>

              {/* Coursework block — pill grid */}
              <div className="p-6 sm:p-8 flex-1">
                <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest block mb-3">
                  Coursework
                </span>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.courses.map((course, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs font-mono px-2.5 py-1 border border-[#050505] text-[#050505] group-hover:border-gray-500 group-hover:text-gray-300 transition-colors duration-300 uppercase tracking-wide"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}