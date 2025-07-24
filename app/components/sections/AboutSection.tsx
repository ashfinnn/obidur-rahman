// app/components/sections/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';
import QuoteBlock from '../QuoteBlock';

// --- No changes to variants ---
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

// --- SectionTitle component adapted for dark theme ---
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <motion.h3
        className="font-mono text-2xl font-bold text-white tracking-tight mb-8" // CHANGED: text-white
        variants={itemVariants}
    >
        {children}
    </motion.h3>
);

// --- No changes to data array ---
const leadershipData = [
    { role: 'FOUNDER', organization: 'The Code Forum', description: 'Built a tech community of 100+ members and established 5 comprehensive learning paths for aspiring developers.' },
    { role: 'R&D SECRETARY', organization: 'CU Math Club', description: 'Leading research initiatives and organizing events that bridge academic theory with practical application.' },
    { role: 'CONTENT CREATOR', organization: 'Educational Content', description: 'Created 10+ videos on ML & Math, and published 13 articles on Python & ML topics with over 1000+ reads.' },
];

// --- LeadershipCard component adapted for dark theme ---
const LeadershipCard = ({ role, organization, description }: typeof leadershipData[0]) => (
    <div className="group relative p-8 bg-neutral-900 transition-all duration-300"> {/* CHANGED: bg-neutral-900 */}
        <div className="absolute top-0 left-0 w-full h-1 bg-neutral-800 transition-all duration-300 group-hover:bg-cyan-300" /> {/* CHANGED: bg-neutral-800, group-hover:bg-cyan-300 */}
        <h4 className="font-mono text-xs text-neutral-400 mb-3">{role}</h4> {/* CHANGED: text-neutral-400 */}
        <h5 className="font-sans text-lg font-bold mb-2 text-white">{organization}</h5> {/* CHANGED: text-white */}
        <p className="text-sm text-neutral-300 leading-relaxed">{description}</p> {/* CHANGED: text-neutral-300 */}
    </div>
);


const AboutSection = () => {
    return (
        <motion.section
            id="about"
            // Use the .on-dark class from globals.css to apply the fixed scan-line effect
            className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-black scan-line on-dark" // CHANGED: bg-black and added scan-line classes
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 md:mb-24">
                    <motion.h2
                        className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white" // CHANGED: text-white
                        variants={itemVariants}
                    >
                        PROFILE_ANALYSIS
                    </motion.h2>
                    <motion.div className="mt-4 w-32 h-px bg-cyan-300" variants={itemVariants} /> {/* CHANGED: bg-cyan-300 */}
                    <motion.p
                        className="mt-6 text-neutral-400 max-w-2xl text-base lg:text-lg" // CHANGED: text-neutral-400
                        variants={itemVariants}
                    >
                        An overview of my foundational philosophy, professional trajectory, and key operational metrics.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
                    <div className="lg:col-span-3 space-y-12">
                        <motion.div variants={itemVariants}>
                            <h4 className="font-mono text-xs text-neutral-500 tracking-widest mb-4">[PHILOSOPHY]</h4> {/* CHANGED: text-neutral-500 */}
                            <div className="space-y-4 text-neutral-300 leading-relaxed"> {/* CHANGED: text-neutral-300 */}
                                <p>My mission isn't just to crunch numbers or write code, but to invent, build, and discover. I'm captivated by the elegance of mathematics and its tangible application in technology, exploring our world through the language of numbers, algorithms, and patterns.</p>
                                <p>I thrive on translating statistical models and algorithmic logic into functional code, primarily using Python and its powerful data science ecosystem to bridge theory with real-world impact.</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h4 className="font-mono text-xs text-neutral-500 tracking-widest mb-4">[EDUCATION_TIMELINE]</h4> {/* CHANGED: text-neutral-500 */}
                            <div className="relative border-l border-neutral-800 pl-8 space-y-8"> {/* CHANGED: border-neutral-800 */}
                                <div className="absolute left-[-2px] top-1 w-1 h-12 bg-cyan-300"></div> {/* CHANGED: bg-cyan-300 */}
                                <div className="absolute left-[-6px] top-1 w-3 h-3 bg-cyan-300 rounded-full border-2 border-black"></div> {/* CHANGED: bg-cyan-300, border-black */}
                                <div>
                                    <p className="font-mono text-xs text-white">2022 - 2026</p> {/* CHANGED: text-white */}
                                    <h5 className="font-sans text-lg font-bold mt-1 text-white">BSc in Mathematics</h5> {/* CHANGED: text-white */}
                                    <p className="text-neutral-400">University of Chittagong, Bangladesh</p> {/* CHANGED: text-neutral-400 */}
                                    <p className="text-sm text-neutral-500 mt-2">Specializing in Complex Analysis, Numerical Analysis, and Mathematical Programming.</p> {/* CHANGED: text-neutral-500 */}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {/* Metrics container adapted for dark theme */}
                    <div className="lg:col-span-2 space-y-12 bg-neutral-900/50 border border-neutral-800 p-8"> {/* CHANGED: bg and border */}
                        <motion.div variants={itemVariants}>
                            <h4 className="font-mono text-xs text-neutral-500 tracking-widest mb-4">[OPERATIONAL_STATUS]</h4> {/* CHANGED: text-neutral-500 */}
                            <div className="space-y-3 font-mono text-sm border-t border-b border-neutral-800 py-4 text-neutral-300"> {/* CHANGED: border and text */}
                                <div className="flex justify-between items-center"><span>LEARNING</span><span className="text-white font-medium">ACTIVE</span></div> {/* CHANGED: text-white */}
                                <div className="flex justify-between items-center"><span>PROJECTS</span><span className="text-white font-medium">ONGOING</span></div> {/* CHANGED: text-white */}
                                <div className="flex justify-between items-center"><span>COLLABORATION</span><span className="text-white font-medium">OPEN</span></div> {/* CHANGED: text-white */}
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h4 className="font-mono text-xs text-neutral-500 tracking-widest mb-4">[IMPACT_METRICS]</h4> {/* CHANGED: text-neutral-500 */}
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-center border-t border-b border-neutral-800 py-4"> {/* CHANGED: border */}
                                <div><div className="font-sans text-3xl font-bold text-white">100+</div><div className="font-mono text-xs text-neutral-500 mt-1">COMMUNITY</div></div> {/* CHANGED: text color */}
                                <div><div className="font-sans text-3xl font-bold text-white">13</div><div className="font-mono text-xs text-neutral-500 mt-1">ARTICLES</div></div> {/* CHANGED: text color */}
                                <div><div className="font-sans text-3xl font-bold text-white">10+</div><div className="font-mono text-xs text-neutral-500 mt-1">VIDEOS</div></div> {/* CHANGED: text color */}
                                <div><div className="font-sans text-3xl font-bold text-white">1K+</div><div className="font-mono text-xs text-neutral-500 mt-1">READS</div></div> {/* CHANGED: text color */}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mb-24">
                    <SectionTitle>[LEADERSHIP_&_COMMUNITY]</SectionTitle>
                    {/* Leadership grid container adapted for dark theme */}
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800" variants={itemVariants}> {/* CHANGED: bg and border */}
                        {leadershipData.map((item) => (
                            <LeadershipCard key={item.organization} {...item} />
                        ))}
                    </motion.div>
                </div>

                {/* The QuoteBlock will need its own internal dark mode styling, but the variants are correct */}
                <QuoteBlock variants={itemVariants}>
                    "The beauty of mathematics lies not just in its precision, but in its power to reveal the hidden patterns that govern our universe."
                </QuoteBlock>
            </div>
        </motion.section>
    );
};

export default AboutSection;