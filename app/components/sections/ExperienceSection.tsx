"use client";

import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { 
  FiMapPin, 
  FiCalendar, 
  FiBriefcase, 
  FiBook, 
  FiAward, 
  FiArrowUpRight
} from "react-icons/fi";

const WORK = {
  role: "R&D Engineer",
  company: "NorthAxis",
  location: "Dhaka, Bangladesh",
  period: "Dec 2024 — Present",
  desc: "Leading research and development for product launches and client projects. Designing and prototyping innovative solutions tailored to client requirements and market needs.",
  responsibilities: [
    "Lead research and development for product launches and client projects",
    "Design and prototype innovative solutions for client requirements",
    "Collaborate with teams to integrate R&D outcomes into production",
    "Technical feasibility assessments and market analysis"
  ]
};

const EDUCATION = {
  degree: "B.S. in Mathematics",
  institution: "University of Chittagong",
  location: "Chittagong, Bangladesh",
  period: "2022 — 2026",
  // focus: "Abstract Algebra, Linear Optimization & Neural Network Theory",
  desc: "Specializing in pure mathematics with applications to machine learning and neural network.",
  highlights: [
    { text: "Best Presenter Award - IMC 2024", isAward: true },
    // { text: "Research in linear algebra for neural networks", isAward: false },
    // { text: "Self-directed study in deep learning", isAward: false }
  ]
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
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200">Education</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-[2px] bg-[#050505] origin-left" 
          />
        </motion.div>

        {/* Main Grid */}
        <div className="border border-[#050505] bg-white shadow-xl">

          {/* Row 1: Work & Education Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Work Card */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={fast}
              className="border-b lg:border-b-0 lg:border-r border-[#050505] group hover:bg-[#050505] transition-colors duration-300"
            >
              {/* Card Header */}
              <div className="p-4 sm:p-6 border-b border-[#050505] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#050505] group-hover:bg-white transition-colors duration-300">
                    <FiBriefcase className="text-white group-hover:text-[#050505] transition-colors duration-300" size={16} />
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    Work Experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="font-mono text-[8px] sm:text-[9px] font-bold text-green-600 uppercase tracking-wider hidden sm:inline">
                      Active
                    </span>
                  </div>
                  <FiArrowUpRight className="text-gray-300 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" size={18} />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-1 group-hover:text-white transition-colors duration-300">
                  {WORK.role}
                </h3>
                <p className="text-base sm:text-lg text-[#050505] font-semibold mb-3 sm:mb-4 group-hover:text-[#FF4D00] transition-colors duration-300">
                  @ {WORK.company}
                </p>
                
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 group-hover:text-gray-400 transition-colors duration-300">
                  <span className="flex items-center gap-1 sm:gap-2">
                    <FiCalendar size={12} />
                    {WORK.period}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-2">
                    <FiMapPin size={12} />
                    <span className="hidden sm:inline">{WORK.location}</span>
                    <span className="sm:hidden">Chattogram</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {WORK.desc}
                </p>

                <div className="space-y-2">
                  <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest">Key Responsibilities</span>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {WORK.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#050505] mt-1.5 sm:mt-2 flex-shrink-0 group-hover:bg-[#FF4D00] transition-colors duration-300" />
                        <span className="text-[11px] sm:text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...fast, delay: 0.1 }}
              className="group hover:bg-[#050505] transition-colors duration-300"
            >
              {/* Card Header */}
              <div className="p-4 sm:p-6 border-b border-[#050505] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#050505] group-hover:bg-white transition-colors duration-300">
                    <FiBook className="text-white group-hover:text-[#050505] transition-colors duration-300" size={16} />
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    Education
                  </span>
                </div>
                <FiArrowUpRight className="text-gray-300 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" size={18} />
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-1 group-hover:text-white transition-colors duration-300">
                  {EDUCATION.degree}
                </h3>
                <p className="text-base sm:text-lg text-[#050505] font-semibold mb-1 group-hover:text-white transition-colors duration-300">
                  @ {EDUCATION.institution}
                </p>
                {/* <p className="text-xs sm:text-sm text-gray-500 italic mb-3 sm:mb-4 group-hover:text-gray-400 transition-colors duration-300">
                  Focus: {EDUCATION.focus}
                </p> */}
                
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 group-hover:text-gray-400 transition-colors duration-300">
                  <span className="flex items-center gap-1 sm:gap-2">
                    <FiCalendar size={12} />
                    {EDUCATION.period}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-2">
                    <FiMapPin size={12} />
                    <span className="hidden sm:inline">{EDUCATION.location}</span>
                    <span className="sm:hidden">Chittagong</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {EDUCATION.desc}
                </p>

                <div className="space-y-2">
                  <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest">Highlights</span>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {EDUCATION.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        {item.isAward ? (
                          <FiAward className="text-[#FF4D00] mt-0.5 flex-shrink-0" size={14} />
                        ) : (
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-300 mt-1.5 sm:mt-2 flex-shrink-0 group-hover:bg-gray-500 transition-colors duration-300" />
                        )}
                        <span className={`text-[11px] sm:text-sm transition-colors duration-300 ${
                          item.isAward 
                            ? 'text-[#FF4D00] font-semibold' 
                            : 'text-gray-600 group-hover:text-gray-300'
                        }`}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}