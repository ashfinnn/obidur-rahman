'use client';

import { motion } from 'framer-motion';
import { FiCornerDownRight } from 'react-icons/fi';

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const WORK = {
  role: 'R&D Engineer',
  company: 'NorthAxis',
  location: 'Remote',
  period: 'Dec 2025 — Present',
  desc: 'Lead research and development for product launches and client projects. Core responsibilities include AI feature research, technical feasibility analysis, and end-to-end solution design.',
  responsibilities: [
    'Evaluate and integrate AI capabilities into products, researching emerging models and deployment strategies',
    'Design and prototype software solutions, translating briefs into engineering specifications',
    'Collaborate across teams to bring R&D outcomes into production',
    'Technical feasibility studies and architectural planning for new product initiatives',
  ],
};

const EDUCATION = {
  degree: 'B.S. in Mathematics',
  institution: 'University of Chittagong',
  location: 'Chittagong, BD',
  period: '2022 — 2027',
  desc: 'Specializing in pure mathematics with applications to machine learning and neural network theory.',
  courses: [
    'Real Analysis',
    'Linear Algebra',
    'Abstract Algebra',
    'Complex Analysis',
    'Numerical Methods',
  ],
};

const ease = [0.16, 1, 0.3, 1];

/* ─── Component ─────────────────────────────────────────────────────────────── */

export default function ExperienceSection() {
  return (
    <section className="bg-white text-[#111] w-full">

      {/* ── Section Header + rule ────────────────────────────────────────────── */}
      <div className="flex flex-col items-center pt-20 md:pt-28 pb-14 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-xl md:text-2xl tracking-[0.4em] uppercase mb-7 text-[#111]"
          style={{ fontFamily: '\'Georgia\', \'Times New Roman\', serif' }}
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.15 }}
          className="w-14 h-[1.5px] bg-[#111] origin-center"
        />
      </div>

      {/* ── Full-width divider ───────────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-[#E8E8E8]" />

      {/* ── Two-column editorial body ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Col 1 — Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="
            px-8 md:px-10 lg:px-14 py-16 md:py-24
            border-b md:border-b-0 md:border-r border-[#E8E8E8]
            space-y-6
          "
        >
          {/* Label */}
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#999]">
            Work Experience
          </span>

          {/* Role & Meta */}
          <div className="space-y-2">
            <h3
              className="text-2xl md:text-3xl tracking-tight text-[#111]"
              style={{ fontFamily: '\'Georgia\', \'Times New Roman\', serif' }}
            >
              {WORK.role}
            </h3>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#999]">
                {WORK.company}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#E8E8E8]" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#999]">
                {WORK.location} · {WORK.period}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-[1.9] text-[#555]">
            {WORK.desc}
          </p>

          {/* Responsibilities List */}
          <ul className="space-y-3 pt-2">
            {WORK.responsibilities.map((item, i) => (
              <li key={i} className="flex gap-3 group">
                <span className="w-1 h-1 mt-[10px] bg-[#E8E8E8] shrink-0 group-hover:bg-[#FF4D00] transition-colors duration-200" />
                <p className="text-sm leading-[1.9] text-[#555] group-hover:text-[#111] transition-colors duration-200">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 2 — Education */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="px-8 md:px-10 lg:px-14 py-16 md:py-24 space-y-6"
        >
          {/* Label */}
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#999]">
            Academic Base
          </span>

          {/* Degree & Meta */}
          <div className="space-y-2">
            <h3
              className="text-2xl md:text-3xl tracking-tight text-[#111]"
              style={{ fontFamily: '\'Georgia\', \'Times New Roman\', serif' }}
            >
              {EDUCATION.degree}
            </h3>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#999]">
              {EDUCATION.institution} · {EDUCATION.period}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-[1.9] text-[#555]">
            {EDUCATION.desc}
          </p>

          {/* Coursework */}
          <div className="pt-2">
            <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#bbb] block mb-4">
              Focus Coursework
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {EDUCATION.courses.map((course) => (
                <span
                  key={course}
                  className="font-mono text-[10px] tracking-widest text-[#999] uppercase"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Recognition / Award */}
          <div className="pt-6 border-t border-[#E8E8E8]">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] flex-shrink-0 mt-1.5" />
              <div className="space-y-1">
                <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#999] block">
                  Recognition
                </span>
                <p className="text-sm text-[#555] leading-[1.6]">
                  Best Presenter Award — 24th International Mathematics Conference
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-[#E8E8E8]" />

      {/* ── Footer Action ────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-8 md:px-10 lg:px-14 py-10 flex justify-end"
      >
        <a
          href="/obidur_cv_public.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-1.5
            text-[10px] tracking-[0.28em] uppercase text-[#111]
            border-b border-[#111] pb-0.5
            hover:text-[#FF4D00] hover:border-[#FF4D00]
            transition-colors duration-200 group
          "
        >
          Download CV
          <FiCornerDownRight
            size={10}
            className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
          />
        </a>
      </motion.div>

    </section>
  );
}