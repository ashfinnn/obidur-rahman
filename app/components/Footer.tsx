'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <footer className="relative bg-[#050505] text-white pt-24 pb-12 overflow-hidden">
            
            {/* Background Glow on Hover */}
            <motion.div 
                animate={{ opacity: isHovered ? 0.2 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-cyan-900 to-transparent pointer-events-none transition-opacity duration-500"
            />

            <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
                
                {/* 1. Massive Call To Action */}
                <div className="border-b border-white/10 pb-12 mb-12">
                    <h2 className="font-mono text-sm text-cyan-500 mb-4 tracking-widest">WHAT'S NEXT?</h2>
                    <a 
                        href="mailto:hello@obidur.com"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="group block w-fit"
                    >
                        <div className="flex items-baseline gap-4 md:gap-8">
                            <span className="text-[12vw] leading-[0.8] font-black tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-500 transition-all duration-500">
                                LET'S TALK
                            </span>
                            <FaArrowRight className="text-4xl md:text-6xl text-white group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
                        </div>
                    </a>
                </div>

                {/* 2. Grid Info */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-black text-2xl tracking-tight">OBIDUR.</h3>
                        <p className="font-mono text-xs text-gray-400 max-w-[200px]">
                            Digital Architect crafting experiences for the modern web.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-xs text-gray-500 mb-2">SOCIALS</span>
                        <a href="#" className="font-mono text-sm hover:text-cyan-500 transition-colors">LINKEDIN</a>
                        <a href="#" className="font-mono text-sm hover:text-cyan-500 transition-colors">GITHUB</a>
                        <a href="#" className="font-mono text-sm hover:text-cyan-500 transition-colors">TWITTER</a>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-xs text-gray-500 mb-2">SITEMAP</span>
                        <a href="#about" className="font-mono text-sm hover:text-cyan-500 transition-colors">ABOUT</a>
                        <a href="#work" className="font-mono text-sm hover:text-cyan-500 transition-colors">WORK</a>
                        <a href="#contact" className="font-mono text-sm hover:text-cyan-500 transition-colors">CONTACT</a>
                    </div>

                    {/* Technical Details */}
                    <div className="flex flex-col justify-end items-start md:items-end">
                        <div className="text-[10px] font-mono text-gray-600 text-right space-y-1">
                            <p>LOCAL_TIME: {new Date().toLocaleTimeString()}</p>
                            <p>LAT: 23.8103 N / LNG: 90.4125 E</p>
                            <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;