// app/components/sections/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';

// Define SkillLevel type for type safety
type SkillLevel = 'EXPERT' | 'ADVANCED' | 'PROFICIENT' | 'INTERMEDIATE';

// 1. Data structure updated to use the SkillLevel type
const skillCategories = [
  {
    category: 'LANGUAGES & DATABASES',
    skills: [
      { name: 'Python', level: 'EXPERT' as SkillLevel },
      { name: 'R', level: 'ADVANCED' as SkillLevel },
      { name: 'JavaScript / TypeScript', level: 'PROFICIENT' as SkillLevel },
      { name: 'SQL (PostgreSQL, MySQL)', level: 'ADVANCED' as SkillLevel },
    ],
  },
  {
    category: 'DATA SCIENCE & ML',
    skills: [
      { name: 'Machine Learning (Scikit-learn)', level: 'ADVANCED' as SkillLevel },
      { name: 'Statistical Analysis', level: 'EXPERT' as SkillLevel },
      { name: 'Data Visualization (Matplotlib, Seaborn)', level: 'ADVANCED' as SkillLevel },
      { name: 'Deep Learning (TensorFlow, PyTorch)', level: 'PROFICIENT' as SkillLevel },
      { name: 'Data Wrangling (Pandas, NumPy)', level: 'EXPERT' as SkillLevel },
    ],
  },
  {
    category: 'TOOLS & PLATFORMS',
    skills: [
      { name: 'Git & GitHub', level: 'ADVANCED' as SkillLevel },
      { name: 'Jupyter Ecosystem', level: 'EXPERT' as SkillLevel },
      { name: 'Docker', level: 'PROFICIENT' as SkillLevel },
      { name: 'AWS (S3, EC2, SageMaker)', level: 'INTERMEDIATE' as SkillLevel },
      { name: 'Linux / Bash', level: 'PROFICIENT' as SkillLevel },
    ],
  },
];

// Helper component for rendering visual skill levels
const levelConfig: Record<SkillLevel, { width: string; color: string; hoverColor: string; label: string }> = {
  EXPERT:       { width: '100%', color: 'bg-cyan-400', hoverColor: 'group-hover/skill:bg-cyan-300', label: 'Expert' },
  ADVANCED:     { width: '85%',  color: 'bg-cyan-500', hoverColor: 'group-hover/skill:bg-cyan-400', label: 'Advanced' },
  PROFICIENT:   { width: '70%',  color: 'bg-cyan-600', hoverColor: 'group-hover/skill:bg-cyan-500', label: 'Proficient' },
  INTERMEDIATE: { width: '55%',  color: 'bg-cyan-700', hoverColor: 'group-hover/skill:bg-cyan-600', label: 'Intermediate' },
};

const ProficiencyBar = ({ level }: { level: SkillLevel }) => {
  const { width, color, hoverColor, label } = levelConfig[level];
  return (
    <div className="flex items-center gap-4 w-40 sm:w-56">
      <div className="w-full bg-gray-800 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full ${color} ${hoverColor} transition-all duration-300`}
          style={{ width: width }}
          aria-label={`Proficiency level: ${label}`}
        />
      </div>
      <span className="font-mono text-xs text-gray-500 w-24 hidden sm:block text-right">{label.toUpperCase()}</span>
    </div>
  );
};


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
      id="skills" // Added ID for navigation
      // Dark theme background
      className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 2. Thematic Header - Dark Theme & New Title */}
        <header className="mb-12 md:mb-16">
          <motion.h2
            // IMPROVEMENT: New name and white text
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            variants={itemVariants}
          >
            TECHNICAL_ARSENAL
          </motion.h2>
          {/* IMPROVEMENT: Accent color for underline */}
          <motion.div className="mt-4 w-32 h-px bg-cyan-300" variants={itemVariants} />
          <motion.p
            className="mt-6 text-gray-400 max-w-2xl text-base lg:text-lg"
            variants={itemVariants}
          >
            A comprehensive list of my technical capabilities and proficiency levels, categorized for clarity and analysis.
          </motion.p>
        </header>

        {/* 3. Redesigned Skills List for Dark Theme */}
        <motion.div className="border-t border-gray-800" variants={itemVariants}>
          {skillCategories.map((category) => (
            <div
              key={category.category}
              // IMPROVEMENT: group/category allows linked hover effects
              className="group/category grid grid-cols-1 md:grid-cols-4 border-b border-gray-800"
            >
              {/* Category Title */}
              <div className="py-6 pr-8 font-mono text-sm font-bold text-gray-400 md:border-r md:border-gray-800 transition-colors duration-300 group-hover/category:text-white">
                {category.category}
              </div>

              {/* Skills List */}
              <div className="md:col-span-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    // group/skill enables hover effects on children
                    className="group/skill flex justify-between items-center py-5 border-t border-gray-800 md:border-t-0 md:border-b md:border-gray-800 md:first:border-t-0"
                  >
                    {/* IMPROVEMENT: Skill name glows on hover */}
                    <span className="md:pl-8 font-mono text-base text-gray-300 transition-colors duration-300 group-hover/skill:text-cyan-300">{skill.name}</span>
                    {/* 4. REPLACEMENT: Using the new ProficiencyBar component */}
                    <div className="pr-0 md:pr-8">
                      <ProficiencyBar level={skill.level} />
                    </div>
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