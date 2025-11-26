'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiCode, FiDatabase, FiCpu, FiLayers } from 'react-icons/fi';

// --- Data ---
const skillGroups = [
    {
        title: "LANGUAGES",
        icon: FiCode,
        skills: ["Python", "TypeScript", "C++", "SQL", "Bash"],
        color: "text-cyan-600"
    },
    {
        title: "AI / ML",
        icon: FiCpu,
        skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV"],
        color: "text-emerald-600"
    },
    {
        title: "BACKEND",
        icon: FiDatabase,
        skills: ["PostgreSQL", "Docker", "Git", "Linux", "AWS"],
        color: "text-violet-600"
    },
    {
        title: "FRONTEND",
        icon: FiLayers,
        skills: ["React", "Next.js", "Tailwind", "Framer Motion"],
        color: "text-sky-600"
    }
];

// --- Background Animation ---
const MovingGrid = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-[spin_60s_linear_infinite]">
            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
    </div>
);

const AboutSection = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]); // Subtle Parallax

    return (
        <section id="about" data-theme="light" className="relative bg-[#f4f4f0] text-black min-h-full flex flex-col justify-center py-12 md:py-24 overflow-hidden">
            <MovingGrid />
            
            <div className="max-w-[90rem] w-full mx-auto px-6 md:px-12 md:pl-32 relative z-10 h-full flex flex-col justify-center">
                
                {/* --- TOP: BIO & IMAGE --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-16 lg:mb-20">
                    
                    {/* Left: Text Narrative */}
                    <motion.div 
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-8 h-[1px] bg-cyan-600"></div>
                            <span className="font-mono text-xs text-cyan-600 tracking-widest uppercase">01 // The Narrative</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-black">
                            DEFINING<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
                                THE FUTURE
                            </span>
                        </h2>

                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                            <p>
                                <span className="font-bold text-black">Mathematician turned Innovator.</span> Growing up in Bangladesh, I saw the gap between theoretical science and real-world application.
                            </p>
                            <p>
                                Today, I bridge that gap. Using <span className="bg-cyan-100 px-1 font-medium text-cyan-900">Advanced Analytics</span> and <span className="bg-blue-100 px-1 font-medium text-blue-900">Deep Learning</span>, I build systems that don't just crunch numbers—they solve human problems.
                            </p>
                            <p className="font-mono text-xs pt-2 text-gray-500">
                                FOUNDER: THE CODE FORUM • R&D SECRETARY • EDGE AI RESEARCHER
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Image (Compact) */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <motion.div style={{ y }} className="relative z-10 w-full max-w-[300px] ml-auto rotate-3 hover:rotate-0 transition-all duration-500">
                            <div className="relative aspect-[3/4] w-full border-8 border-white shadow-2xl">
                                <Image 
                                    src="/me.jpg" 
                                    alt="Profile" 
                                    fill 
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                                />
                            </div>
                            {/* Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-black text-white p-4 shadow-lg">
                                <div className="text-2xl font-bold text-cyan-400">3+</div>
                                <div className="text-[10px] font-mono tracking-widest mt-1">YEARS EXP.</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* --- BOTTOM: SKILLS TICKER --- */}
                <div className="border-t border-black/10 pt-8">
                    <h3 className="font-mono text-xs font-bold text-gray-400 tracking-widest mb-6 uppercase">Technical Arsenal</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {skillGroups.map((group, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-4 bg-white border border-gray-200 hover:border-cyan-500 transition-colors shadow-sm"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <group.icon className={`w-5 h-5 ${group.color}`} />
                                    <h4 className="font-bold text-sm tracking-tight">{group.title}</h4>
                                </div>
                                <div className="flex flex-wrap gap-x-2 gap-y-1">
                                    {group.skills.map(skill => (
                                        <span key={skill} className="text-[10px] font-mono text-gray-500 bg-gray-50 px-1 rounded-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;