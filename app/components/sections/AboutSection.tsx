'use client';

import { motion } from 'framer-motion';
import QuoteBlock from '../QuoteBlock'; // 1. IMPORT: The new quote component

// Reusable variants for motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Helper component for section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h3 
    className="font-mono text-2xl font-bold text-black tracking-tight mb-8"
    variants={itemVariants}
  >
    {children}
  </motion.h3>
);

// 2. REFACTOR: Leadership data moved to an array for clean mapping
const leadershipData = [
  {
    role: 'FOUNDER',
    organization: 'The Code Forum',
    description: 'Built a tech community of 100+ members and established 5 comprehensive learning paths for aspiring developers.',
  },
  {
    role: 'R&D SECRETARY',
    organization: 'CU Math Club',
    description: 'Leading research initiatives and organizing events that bridge academic theory with practical application.',
  },
  {
    role: 'CONTENT CREATOR',
    organization: 'Educational Content',
    description: 'Created 10+ videos on ML & Math, and published 13 articles on Python & ML topics with over 1000+ reads.',
  },
];

// 3. REFACTOR: Created a dedicated component for leadership roles
const LeadershipCard = ({ role, organization, description }: typeof leadershipData[0]) => (
    <div className="group relative p-8 bg-white transition-all duration-300">
        {/* IMPROVEMENT: Interactive top border on hover */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 transition-all duration-300 group-hover:bg-black" />
        <h4 className="font-mono text-xs text-gray-500 mb-3">{role}</h4>
        <h5 className="font-sans text-lg font-bold mb-2 text-black">{organization}</h5>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
);


const AboutSection = () => {
    return (
        <motion.section 
            id="about" // Added ID for navigation
            className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-white" // Slightly off-white background for depth
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 md:mb-24">
                    <motion.h2 
                        className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black"
                        variants={itemVariants}
                    >
                        PROFILE_ANALYSIS
                    </motion.h2>
                    <motion.div className="mt-4 w-32 h-px bg-black" variants={itemVariants} />
                    <motion.p 
                        className="mt-6 text-gray-600 max-w-2xl text-base lg:text-lg"
                        variants={itemVariants}
                    >
                        An overview of my foundational philosophy, professional trajectory, and key operational metrics.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
                    <div className="lg:col-span-3 space-y-12">
                        <motion.div variants={itemVariants}>
                            <h4 className="font-mono text-xs text-gray-500 tracking-widest mb-4">[PHILOSOPHY]</h4>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>My mission isn't just to crunch numbers or write code, but to invent, build, and discover. I'm captivated by the elegance of mathematics and its tangible application in technology, exploring our world through the language of numbers, algorithms, and patterns.</p>
                                <p>I thrive on translating statistical models and algorithmic logic into functional code, primarily using Python and its powerful data science ecosystem to bridge theory with real-world impact.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h4 className="font-mono text-xs text-gray-500 tracking-widest mb-4">[EDUCATION_TIMELINE]</h4>
                            <div className="relative border-l border-gray-200 pl-8 space-y-8">
                                {/* IMPROVEMENT: Visual "node" on the timeline */}
                                <div className="absolute left-[-2px] top-1 w-1 h-12 bg-black"></div>
                                <div className="absolute left-[-6px] top-1 w-3 h-3 bg-black rounded-full border-2 border-gray-50"></div>
                                <div>
                                    <p className="font-mono text-xs text-black">2022 - 2026</p>
                                    <h5 className="font-sans text-lg font-bold mt-1">BSc in Mathematics</h5>
                                    <p className="text-gray-600">University of Chittagong, Bangladesh</p>
                                    <p className="text-sm text-gray-500 mt-2">Specializing in Complex Analysis, Numerical Analysis, and Mathematical Programming.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {/* IMPROVEMENT: Wrapped metrics in a styled container for visual separation */}
                    <div className="lg:col-span-2 space-y-12 bg-white border border-gray-200 p-8">
                        <motion.div variants={itemVariants}>
                            <h4 className="font-mono text-xs text-gray-500 tracking-widest mb-4">[OPERATIONAL_STATUS]</h4>
                            <div className="space-y-3 font-mono text-sm border-t border-b border-gray-200 py-4">
                                <div className="flex justify-between items-center"><span>LEARNING</span><span className="text-black font-medium">ACTIVE</span></div>
                                <div className="flex justify-between items-center"><span>PROJECTS</span><span className="text-black font-medium">ONGOING</span></div>
                                <div className="flex justify-between items-center"><span>COLLABORATION</span><span className="text-black font-medium">OPEN</span></div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h4 className="font-mono text-xs text-gray-500 tracking-widest mb-4">[IMPACT_METRICS]</h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-center border-t border-b border-gray-200 py-4">
                                <div><div className="font-sans text-3xl font-bold text-black">100+</div><div className="font-mono text-xs text-gray-500 mt-1">COMMUNITY</div></div>
                                <div><div className="font-sans text-3xl font-bold text-black">13</div><div className="font-mono text-xs text-gray-500 mt-1">ARTICLES</div></div>
                                <div><div className="font-sans text-3xl font-bold text-black">10+</div><div className="font-mono text-xs text-gray-500 mt-1">VIDEOS</div></div>
                                <div><div className="font-sans text-3xl font-bold text-black">1K+</div><div className="font-mono text-xs text-gray-500 mt-1">READS</div></div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mb-24">
                    <SectionTitle>[LEADERSHIP_&_COMMUNITY]</SectionTitle>
                    {/* 4. REFACTOR: Leadership section now maps over data, rendering the new card component */}
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200" variants={itemVariants}>
                        {leadershipData.map((item) => (
                           <LeadershipCard key={item.organization} {...item} />
                        ))}
                    </motion.div>
                </div>

                {/* 5. REFACTOR: Replaced inline quote with the new QuoteBlock component */}
                <QuoteBlock variants={itemVariants}>
                    "The beauty of mathematics lies not just in its precision, but in its power to reveal the hidden patterns that govern our universe."
                </QuoteBlock>
            </div>
        </motion.section>
    );
};

export default AboutSection;