// app/components/sections/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi'; // +++ IMPROVEMENT: Icon for a cleaner visual cue

// --- Data structure is perfect, no changes needed ---
const contextualSkills = [
  {
    category: 'LANGUAGES & DATABASES',
    skills: [
      { name: 'Python', context: 'Primary language for ML, statistical modeling, and data analysis.' },
      { name: 'R', context: 'Utilized for advanced statistical analysis and academic research projects.' },
      { name: 'JavaScript / TypeScript', context: 'For building interactive data visualizations and web interfaces.' },
      { name: 'SQL (PostgreSQL, MySQL)', context: 'Querying and managing relational data for analysis pipelines.' },
    ],
  },
  {
    category: 'DATA SCIENCE & ML',
    skills: [
      { name: 'Data Wrangling (Pandas, NumPy)', context: 'Expertise in cleaning, transforming, and preparing complex datasets.' },
      { name: 'Machine Learning (Scikit-learn)', context: 'Implementing models for classification, regression, and clustering.' },
      { name: 'Deep Learning (TensorFlow, PyTorch)', context: 'Building and training neural networks for computer vision tasks.' },
      { name: 'Data Visualization (Matplotlib, Seaborn)', context: 'Creating insightful plots to communicate findings and model performance.' },
      { name: 'Statistical Analysis', context: 'Applying statistical tests and methods to validate hypotheses.' },
    ],
  },
  {
    category: 'TOOLS & PLATFORMS',
    skills: [
      { name: 'Jupyter Ecosystem', context: 'Preferred environment for iterative research and development.' },
      { name: 'Git & GitHub', context: 'For version control, collaboration, and CI/CD pipelines.' },
      { name: 'Linux / Bash', context: 'Comfortable in shell environments for scripting and system management.' },
      { name: 'Docker', context: 'Containerizing applications for reproducible and scalable deployments.' },
      { name: 'AWS (S3, EC2, SageMaker)', context: 'Leveraging cloud services for data storage, computation, and model deployment.' },
    ],
  },
];

// --- Animation variants are perfect, no changes needed ---
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };


// +++ IMPROVEMENT: A dedicated, interactive component for each skill entry +++
const SkillItem = ({ name, context }: { name: string; context: string }) => (
  <div className="group/skill relative flex items-start gap-3 p-3 -m-3 rounded-lg transition-colors hover:bg-gray-100">
    <div className="flex-shrink-0 mt-1 text-gray-400 transition-colors duration-300 group-hover/skill:text-black">
      <FiChevronRight size={16} />
    </div>
    <div>
      <h4 className="font-mono text-base text-gray-800 font-medium">
        {name}
      </h4>
      <p className="mt-1 font-sans text-sm text-gray-500">
        {context}
      </p>
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-white" // CHANGED: bg-white for light theme
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 md:mb-16">
          <motion.h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black" variants={itemVariants}> {/* CHANGED: text-black */}
            TECHNICAL_ARSENAL
          </motion.h2>
          <motion.div className="mt-4 w-32 h-px bg-black" variants={itemVariants} /> {/* CHANGED: bg-black */}
          <motion.p className="mt-6 text-gray-600 max-w-2xl text-base lg:text-lg" variants={itemVariants}> {/* CHANGED: text-gray-600 */}
            A curated list of technologies I leverage to analyze data, build models, and create impactful solutions.
          </motion.p>
        </header>

        {/* +++ IMPROVEMENT: Layout is now a grid of cards for better visual separation +++ */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {contextualSkills.map((category) => (
            <motion.div
              key={category.category}
              className="border border-gray-200 p-8" // Card container
              variants={itemVariants}
            >
              <h3 className="pb-4 mb-6 font-mono text-sm font-bold text-black border-b border-gray-200"> {/* CHANGED: Colors */}
                {`// ${category.category}`}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;