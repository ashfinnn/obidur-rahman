// app/components/sections/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';

// 1. Centralized data structure for skills
const skillCategories = [
  {
    category: 'LANGUAGES & DATABASES',
    skills: [
      { name: 'Python', level: 'EXPERT' },
      { name: 'R', level: 'ADVANCED' },
      { name: 'JavaScript / TypeScript', level: 'PROFICIENT' },
      { name: 'SQL (PostgreSQL, MySQL)', level: 'ADVANCED' },
    ],
  },
  {
    category: 'DATA SCIENCE & ML',
    skills: [
      { name: 'Machine Learning (Scikit-learn)', level: 'ADVANCED' },
      { name: 'Statistical Analysis', level: 'EXPERT' },
      { name: 'Data Visualization (Matplotlib, Seaborn)', level: 'ADVANCED' },
      { name: 'Deep Learning (TensorFlow, PyTorch)', level: 'PROFICIENT' },
      { name: 'Data Wrangling (Pandas, NumPy)', level: 'EXPERT' },
    ],
  },
  {
    category: 'TOOLS & PLATFORMS',
    skills: [
      { name: 'Git & GitHub', level: 'ADVANCED' },
      { name: 'Jupyter Ecosystem', level: 'EXPERT' },
      { name: 'Docker', level: 'PROFICIENT' },
      { name: 'AWS (S3, EC2, SageMaker)', level: 'INTERMEDIATE' },
      { name: 'Linux / Bash', level: 'PROFICIENT' },
    ],
  },
];

// Reusable variants for motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => {
  return (
    <motion.section
      className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 2. Thematic Header */}
        <header className="mb-12 md:mb-16">
          <motion.h2
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black"
            variants={itemVariants}
          >
            SKILL_MATRIX
          </motion.h2>
          <motion.div className="mt-4 w-32 h-px bg-black" variants={itemVariants} />
          <motion.p
            className="mt-6 text-gray-600 max-w-2xl text-base lg:text-lg"
            variants={itemVariants}
          >
            A comprehensive list of my technical capabilities and proficiency levels, categorized for clarity and analysis.
          </motion.p>
        </header>

        {/* 3. Redesigned Skills List */}
        <motion.div className="border-t border-gray-200" variants={itemVariants}>
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="group/category grid grid-cols-1 md:grid-cols-4 border-b border-gray-200"
            >
              {/* Category Title */}
              <div className="py-6 pr-8 font-mono text-sm font-bold text-black md:border-r md:border-gray-200">
                {category.category}
              </div>

              {/* Skills List */}
              <div className="md:col-span-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill relative flex justify-between items-center py-6 border-b border-gray-200 last:border-b-0 md:border-b-0"
                  >
                    {/* 4. Interactive Hover Highlight Effect */}
                    <div className="absolute inset-0 bg-gray-50 transition-opacity duration-300 opacity-0 group-hover/skill:opacity-100 z-0"></div>
                    
                    <span className="relative z-10 pl-0 md:pl-8 font-mono text-base text-gray-700">{skill.name}</span>
                    <span className="relative z-10 pr-0 md:pr-8 font-mono text-xs text-gray-500 tracking-widest">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;