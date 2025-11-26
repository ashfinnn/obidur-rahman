'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiLayers } from 'react-icons/fi';

// Helper to enforce consistent icon colors (base + hover). We append classes so
// the enforced colors win over any incoming classes.
const makeIcon =
    (Icon: any, baseClass = 'text-cyan-500', hoverClass = 'group-hover:text-cyan-600') =>
    (props: any) =>
        <Icon {...props} className={`${props?.className ?? ''} ${baseClass} ${hoverClass}`} />;

const skillGroups = [
    {
        title: "LANGUAGES",
        icon: makeIcon(FiCode, 'text-cyan-600', 'group-hover:text-cyan-700'),
        skills: ["Python", "TypeScript", "C++", "SQL", "Bash"],
        desc: "The syntax of my solutions."
    },
    {
        title: "INTELLIGENCE",
        icon: makeIcon(FiCpu, 'text-emerald-600', 'group-hover:text-emerald-700'),
        skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "Pandas"],
        desc: "Building brains from data."
    },
    {
        title: "INFRASTRUCTURE",
        icon: makeIcon(FiDatabase, 'text-violet-600', 'group-hover:text-violet-700'),
        skills: ["PostgreSQL", "Docker", "Git", "Linux", "AWS"],
        desc: "Robust foundations for scale."
    },
    {
        title: "INTERFACE",
        icon: makeIcon(FiLayers, 'text-sky-600', 'group-hover:text-sky-700'),
        skills: ["React", "Next.js", "Tailwind", "Framer Motion", "D3.js"],
        desc: "Visualizing complex systems."
    }
];
const SkillsSection = () => {
    return (
        <section id="skills" className="relative bg-gray-50 min-h-full flex items-center justify-center">
            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="mb-20 text-center">
                     <span className="font-mono text-xs text-cyan-600 tracking-widest uppercase">02 // Capabilities</span>
                     <h2 className="text-5xl md:text-6xl font-black mt-2">TECHNICAL ARSENAL</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 shadow-sm border border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-50 transition-colors">
                                <group.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">{group.title}</h3>
                            <p className="text-xs text-gray-500 font-mono mb-6 h-8">{group.desc}</p>
                            
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;