'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

// Background Animation Component
const MovingGrid = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute inset-[-50%] w-[200%] h-[200%] animate-[spin_60s_linear_infinite]">
            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
    </div>
);

const AboutSection = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id="about" className="relative bg-white md:py-32 min-h-full py-32 overflow-hidden">
            <MovingGrid />
            
            <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-3 py-1 mb-6 border border-black/10 rounded-full bg-gray-50">
                            <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">01 // The Narrative</span>
                        </div>
                        
                        <h2 className="text-5xl md:text-7xl font-black text-black mb-8 leading-[0.9] tracking-tighter">
                            DEFINING<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                                THE FUTURE
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed md:pr-12">
                            <p>
                                <span className="text-black font-bold">I am a Mathematician turned Innovator.</span> Growing up in Bangladesh, I saw the gap between theoretical science and real-world application.
                            </p>
                            <p>
                                Today, I bridge that gap. Using <span className="text-cyan-600 font-medium">Advanced Analytics</span> and <span className="text-cyan-600 font-medium">Deep Learning</span>, I build systems that don't just crunch numbers—they solve human problems in healthcare and agriculture.
                            </p>
                            <p>
                                Founder of <span className="text-black font-bold underline decoration-cyan-400 underline-offset-4">The Code Forum</span>. R&D Secretary. Edge AI Researcher.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Floating Image & Stats */}
                    <div className="relative">
                        <motion.div style={{ y }} className="relative z-10">
                            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rotate-3 transition-transform hover:rotate-0 duration-500">
                                <Image 
                                    src="/me.jpg" 
                                    alt="Profile" 
                                    fill 
                                    className="object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" 
                                />
                                {/* Floating Badge */}
                                <motion.div 
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute -bottom-8 -left-8 bg-black text-white p-6 shadow-xl max-w-[200px]"
                                >
                                    <div className="text-3xl font-bold text-cyan-400">3+</div>
                                    <div className="text-xs font-mono tracking-widest mt-1">YEARS RESEARCH EXPERIENCE</div>
                                </motion.div>
                            </div>
                        </motion.div>
                        
                        {/* Decorative Elements behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;