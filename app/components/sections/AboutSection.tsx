'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { 
    SiPython, SiTypescript, SiCplusplus, SiPytorch, 
    SiPostgresql, SiDocker, SiNextdotjs, SiAwslambda 
} from 'react-icons/si';

// --- Tech Stack Data ---
const techStack = [
    { icon: SiPython, name: "Python", color: "hover:text-[#3776AB]" },
    { icon: SiTypescript, name: "TypeScript", color: "hover:text-[#3178C6]" },
    { icon: SiNextdotjs, name: "Next.js", color: "hover:text-black" },
    { icon: SiPytorch, name: "PyTorch", color: "hover:text-[#EE4C2C]" },
    { icon: SiCplusplus, name: "C++", color: "hover:text-[#00599C]" },
    { icon: SiPostgresql, name: "Postgres", color: "hover:text-[#4169E1]" },
    { icon: SiDocker, name: "Docker", color: "hover:text-[#2496ED]" },
    { icon: SiAwslambda, name: "AWS", color: "hover:text-[#FF9900]" },
];

// --- Background Animation ---
const MovingGrid = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
        <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-[spin_60s_linear_infinite]">
            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
    </div>
);

const AboutSection = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

    return (
        <section id="about" data-theme="light" className="relative bg-[#f4f4f0] md:py-32 min-h-full py-24 overflow-hidden flex items-center">
            <MovingGrid />
            
            <div className="max-w-[90rem] mx-auto px-6 md:px-12 md:pl-32 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* --- LEFT: NARRATIVE --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <div className="inline-block px-3 py-1 mb-6 border border-black/10 rounded-full bg-white shadow-sm">
                            <span className="font-mono text-xs text-cyan-600 tracking-widest uppercase">01 // The Story</span>
                        </div>
                        
                        {/* Headline */}
                        <h2 className="text-5xl md:text-7xl font-black text-black mb-8 leading-[0.9] tracking-tighter">
                            BUILDING<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                                WHAT MATTERS
                            </span>
                        </h2>

                        {/* Enhanced, Natural Bio */}
                        <div className="space-y-5 text-base md:text-lg text-gray-600 leading-relaxed font-light">
                            <p>
                                My journey into tech started with a simple fascination: watching patterns emerge from chaos. Growing up in Bangladesh, I'd spend hours thinking about how tiny decisions compound into massive systems—how a single line of code could ripple into something that touches millions.
                            </p>
                            <p>
                                These days, I'm deep in the trenches of machine learning and full-stack development, building things that actually matter. I love that moment when theory clicks into practice—when an algorithm you've been debugging finally converges, or when a user interface just <span className="italic">feels right</span>. For me, great software sits at the intersection of elegant code and genuine human needs.
                            </p>
                            <p>
                                Outside of coding, I'm usually reading <span className="text-black font-semibold underline decoration-cyan-400 underline-offset-4">research papers</span>  over coffee, or experimenting with whatever caught my curiosity that week. Currently obsessed with making AI models run faster on edge devices.
                            </p>
                        </div>

                        {/* --- INTEGRATED SKILLS ROW --- */}
                        <div className="mt-10 pt-8 border-t border-black/10">
                            <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-4">
                                CURRENT STACK
                            </span>
                            <div className="flex flex-wrap gap-6">
                                {techStack.map((tech, i) => (
                                    <div key={i} className="group flex flex-col items-center gap-2 cursor-help">
                                        <tech.icon className={`text-2xl text-gray-400 transition-colors duration-300 ${tech.color}`} />
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute mt-8 text-[10px] font-mono bg-black text-white px-2 py-1 rounded">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* --- RIGHT: IMAGE --- */}
                    <div className="relative hidden lg:block">
                        <motion.div style={{ y }} className="relative z-10">
                            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                                {/* Image Frame */}
                                <div className="absolute inset-0 border-2 border-black translate-x-4 translate-y-4 rounded-sm" />
                                <div className="relative h-full w-full overflow-hidden rounded-sm bg-gray-200 shadow-2xl">
                                    <Image 
                                        src="/me.jpg" 
                                        alt="Obidur Rahman" 
                                        fill 
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                                        priority
                                    />
                                </div>
                                
                                {/* Floating Stats Badge */}
                                <motion.div 
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                    className="absolute -bottom-6 -left-12 bg-black text-white p-6 shadow-2xl max-w-[220px] border-l-4 border-cyan-500"
                                >
                                    <div className="text-4xl font-bold text-white">3<span className="text-cyan-500">+</span></div>
                                    <div className="text-xs font-mono text-gray-400 tracking-widest mt-1">YEARS IN THE FIELD</div>
                                </motion.div>
                            </div>
                        </motion.div>
                        
                        {/* Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 rounded-full blur-[80px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;