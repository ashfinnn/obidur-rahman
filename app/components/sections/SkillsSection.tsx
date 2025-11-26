'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiLayers } from 'react-icons/fi';

const skillGroups = [
    {
        title: "LANGUAGES",
        icon: FiCode,
        skills: ["Python", "TypeScript", "C++", "SQL", "Bash"],
        desc: "The syntax of my solutions."
    },
    {
        title: "INTELLIGENCE",
        icon: FiCpu,
        skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "Pandas"],
        desc: "Building brains from data."
    },
    {
        title: "INFRASTRUCTURE",
        icon: FiDatabase,
        skills: ["PostgreSQL", "Docker", "Git", "Linux", "AWS"],
        desc: "Robust foundations for scale."
    },
    {
        title: "INTERFACE",
        icon: FiLayers,
        skills: ["React", "Next.js", "Tailwind", "Framer Motion", "D3.js"],
        desc: "Visualizing complex systems."
    }
];

const SkillsSection = () => {
    return (
        <section id="skills" data-theme="light" className="relative  bg-[#000000] py-24 md:py-32 min-h-full">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-[90rem] mx-auto px-6 md:px-12 md:pl-32 relative z-10">
                <div className="mb-20 border-l-2 border-black pl-6">
                     <span className="font-mono text-xs text-cyan-600 tracking-widest uppercase">02 // Capabilities</span>
                     <h2 className="text-5xl md:text-6xl font-black mt-2 text-black">TECHNICAL<br/>ARSENAL</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300 border border-gray-300">
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 h-full hover:bg-gray-50 transition-colors group relative"
                        >
                            {/* Hover Corner Accent */}
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-transparent group-hover:border-r-cyan-500 transition-all duration-300" />

                            <div className="w-10 h-10 border border-gray-200 rounded-md flex items-center justify-center mb-6 text-gray-400 group-hover:text-cyan-600 group-hover:border-cyan-500 transition-colors">
                                <group.icon className="w-5 h-5" />
                            </div>
                            
                            <h3 className="font-bold text-lg mb-2 tracking-tight">{group.title}</h3>
                            <p className="text-xs text-gray-500 font-mono mb-6 h-8 leading-relaxed">{group.desc}</p>
                            
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {group.skills.map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-gray-100 text-[10px] font-mono uppercase text-gray-600 border border-transparent group-hover:border-cyan-200 transition-colors">
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