// app/components/sections/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';

// Types and data remain the same
type SkillLevel = 'EXPERT' | 'ADVANCED' | 'PROFICIENT' | 'INTERMEDIATE';

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

const levelConfig: Record<SkillLevel, { width: string; color: string; hoverColor: string; label: string }> = {
  EXPERT:       { width: '100%', color: 'bg-cyan-400', hoverColor: 'group-hover/skill:bg-cyan-300', label: 'Expert' },
  ADVANCED:     { width: '85%',  color: 'bg-cyan-500', hoverColor: 'group-hover/skill:bg-cyan-400', label: 'Advanced' },
  PROFICIENT:   { width: '70%',  color: 'bg-cyan-600', hoverColor: 'group-hover/skill:bg-cyan-500', label: 'Proficient' },
  INTERMEDIATE: { width: '55%',  color: 'bg-cyan-700', hoverColor: 'group-hover/skill:bg-cyan-600', label: 'Intermediate' },
};

const ProficiencyBar = ({ level }: { level: SkillLevel }) => {
  const { width, color, hoverColor, label } = levelConfig[level];
  return (
    <div className="flex items-center gap-4 w-full sm:w-56">
      <div className="w-full bg-neutral-800 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full ${color} ${hoverColor} transition-all duration-300`}
          style={{ width: width }}
          aria-label={`Proficiency level: ${label}`}
        />
      </div>
      <span className="font-mono text-xs text-neutral-500 w-24 hidden sm:block text-right">{label.toUpperCase()}</span>
    </div>
  );
};

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 md:mb-16">
          <motion.h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white" variants={itemVariants}>
            TECHNICAL_ARSENAL
          </motion.h2>
          <motion.div className="mt-4 w-32 h-px bg-cyan-300" variants={itemVariants} />
          <motion.p className="mt-6 text-gray-400 max-w-2xl text-base lg:text-lg" variants={itemVariants}>
            A comprehensive list of my technical capabilities and proficiency levels, categorized for clarity and analysis.
          </motion.p>
        </header>

        {/* THE FIX: Restructured the mapping and layout for better mobile view */}
        <motion.div className="space-y-12" variants={itemVariants}>
          {skillCategories.map((category) => (
            <div key={category.category} className="group/category">
              {/* Category Title now acts as a clear header for the list */}
              <h3 className="pb-4 mb-4 font-mono text-sm font-bold text-neutral-400 border-b border-neutral-800 transition-colors duration-300 group-hover/category:text-white">
                {category.category}
              </h3>
              
              {/* The list of skills */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="font-mono text-base text-neutral-300 transition-colors duration-300 group-hover/skill:text-cyan-300">
                        {skill.name}
                      </span>
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