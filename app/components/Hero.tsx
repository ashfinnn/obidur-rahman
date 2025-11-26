'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import HeroBackground from './HeroBackground';
import { ScrambleText } from './ui/ScrambleText';
import { useEffect } from 'react';

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Magnetic text effect configuration
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);
    
    // Text moves slightly opposite to mouse (Parallax)
    const x = useTransform(mouseXSpring, [-0.5, 0.5], ["-2%", "2%"]);
    const y = useTransform(mouseYSpring, [-0.5, 0.5], ["-2%", "2%"]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position from -0.5 to 0.5
            const xPct = (e.clientX / window.innerWidth) - 0.5;
            const yPct = (e.clientY / window.innerHeight) - 0.5;
            mouseX.set(xPct);
            mouseY.set(yPct);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-center px-6 md:px-12 bg-[#050505] text-white selection:bg-cyan-500 selection:text-black">
            <HeroBackground />

            {/* Left Vertical Line */}
            <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
            
            {/* Content Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* 1. Left Info - Fixed */}
                <div className="md:col-span-2 flex flex-col justify-center h-full space-y-6 border-l border-white/10 pl-6 md:border-none md:pl-0">
                    <div className="space-y-1">
                        <p className="text-[10px] font-mono text-cyan-500 tracking-widest">ROLE</p>
                        <p className="text-sm font-bold text-gray-300">ARCHITECT & DEV</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-mono text-cyan-500 tracking-widest">LOCATION</p>
                        <p className="text-sm font-bold text-gray-300">CHITTAGONG, BD</p>
                    </div>
                </div>

                {/* 2. CENTER - MASSIVE INTERACTIVE TEXT */}
                <motion.div 
                    style={{ x, y }} // Applies the magnetic effect
                    className="md:col-span-8 flex flex-col items-center md:items-start"
                >
                    <h1 className="flex flex-col text-[12vw] md:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase mix-blend-screen">
                        {/* Interactive Scramble Text Components */}
                        <div className="relative group cursor-default">
                            <span className="absolute -left-8 top-4 text-base font-mono text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">{`->`}</span>
                            <ScrambleText text="OBIDUR" className="text-white group-hover:text-cyan-50 transition-colors duration-300" />
                        </div>
                        
                        <div className="relative group cursor-default flex items-center">
                            <ScrambleText text="RAHMAN" className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                            <span className="text-cyan-500 animate-pulse">_</span>
                        </div>
                    </h1>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 md:ml-2 max-w-xl"
                    >
                        <p className="font-mono text-sm md:text-base text-gray-400 leading-relaxed">
                            Creating high-performance AI Models. Focusing on{' '}
                            <span className="text-cyan-400 hover:bg-cyan-400/10 cursor-cell px-1 transition-colors">Artificial Intelligence</span>{' '}
                            and optimizing algorithms.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a href="#projects" className="group relative px-6 py-3 bg-white text-black font-bold font-mono text-sm overflow-hidden">
                                <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative group-hover:text-white transition-colors">VIEW PROJECTS</span>
                            </a>
                            <a href="#contact" className="px-6 py-3 border border-white/20 text-white font-mono text-sm hover:bg-white/5 transition-colors">
                                CONTACT ME
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 3. Right - Interactive Decor */}
                <div className="md:col-span-2 flex flex-col items-end justify-end h-full pointer-events-none">
                    {/* Decorative Coordinate Crosshair */}
                    <div className="relative w-32 h-32 border border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1 h-1 bg-cyan-500 rounded-full" />
                        </div>
                        <div className="absolute top-0 left-1/2 w-[1px] h-4 bg-white/20 -translate-x-1/2" />
                        <div className="absolute bottom-0 left-1/2 w-[1px] h-4 bg-white/20 -translate-x-1/2" />
                        <div className="absolute left-0 top-1/2 h-[1px] w-4 bg-white/20 -translate-y-1/2" />
                        <div className="absolute right-0 top-1/2 h-[1px] w-4 bg-white/20 -translate-y-1/2" />
                    </div>
                </div>
            </div>
            
            {/* Bottom Footer */}
            <div className="absolute bottom-6 left-6 md:left-12 right-6 md:right-12 flex justify-between items-end border-t border-white/10 pt-6 text-[10px] font-mono text-gray-500 uppercase">
               <div>
                  SYSTEM: <span className="text-green-500">ONLINE</span>
               </div>
               <div className="flex gap-4">
                   <span>Next.js 14</span>
                   <span>Framer Motion</span>
                   <span>Tailwind</span>
               </div>
            </div>
        </section>
    );
};

export default Hero;