'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowRight as FaArrowRightSolid } from 'react-icons/fa';

const contactLinks = [
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/obidur-rahman-shawal/' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Ashfinn' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/obidur__rahman' },
];

const ContactItem = ({ icon: Icon, label, href }: { icon: any, label: string, href: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 p-3 border border-gray-200 bg-white 
             transition-all duration-300 hover:border-cyan-500 hover:shadow-md"
    >
        <Icon className="text-gray-400 group-hover:text-cyan-600 transition-colors" size={16} />
        <span className="font-mono text-[10px] font-bold text-gray-600 group-hover:text-black uppercase tracking-wider">
            {label}
        </span>
    </a>
);

const ContactSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString('en-US', {
                timeZone: 'Asia/Dhaka', hour12: false, hour: '2-digit', minute: '2-digit'
            }));
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        // H-SCREEN forces it to fill the viewport exactly. 
        // Flex-col allows us to split children.
        <section id="contact" data-theme="light" className="h-screen w-full flex flex-col">
            
            {/* =========================================
                PART 1: TOP HALF (Light) 
                flex-1 makes it take up exactly half the available space
               ========================================= */}
            <div className="flex-1 w-full bg-gray-50 flex flex-col justify-center border-b border-black/5">
                
                <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left: Headline */}
                        <div>
                            <div className="inline-block font-mono text-[10px] text-cyan-600 mb-4 px-2 py-1 border border-cyan-600/20 rounded-full bg-cyan-50">
                                Let&apos;s Connect
                            </div>
                            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 mb-4 leading-[0.9]">
                                READY TO<br/>COLLABORATE?
                            </h2>
                            <p className="text-gray-600 max-w-md text-sm md:text-base leading-relaxed">
                                I&apos;m always excited to discuss innovative ideas. Drop a message or connect socially.
                            </p>
                        </div>

                        {/* Right: Actions */}
                        <div className="space-y-6">
                            {/* Email Button */}
                            <div>
                                <h3 className="font-mono text-[10px] text-gray-400 tracking-widest mb-3 uppercase">Start a Conversation</h3>
                                <Link
                                    href="mailto:obidur.shawal@gmail.com"
                                    className="group inline-flex items-center gap-4 px-6 py-4 bg-gray-900 text-white font-mono text-xs tracking-wider hover:bg-cyan-600 transition-all duration-300 shadow-xl w-full md:w-auto justify-center"
                                >
                                    <span>SEND EMAIL</span>
                                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>

                            {/* Socials Row */}
                            <div>
                                <h3 className="font-mono text-[10px] text-gray-400 tracking-widest mb-3 uppercase">Or Follow Along</h3>
                                <div className="flex flex-wrap gap-3">
                                    {contactLinks.map(link => <ContactItem key={link.label} {...link} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================
                PART 2: BOTTOM HALF (Dark)
                flex-1 makes it take up the other half
               ========================================= */}
            <footer className="flex-1 w-full bg-[#050505] text-white flex flex-col justify-center relative overflow-hidden">
                
                {/* Hover Glow Effect */}
                <motion.div 
                    animate={{ opacity: isHovered ? 0.15 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-cyan-600 to-transparent pointer-events-none transition-opacity duration-500"
                />

                <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 relative z-10 flex flex-col h-full">
                    
                    {/* Massive CTA - Fills the middle space */}
                    <div className="flex-grow flex items-center border-b border-white/10">
                        <a 
                            href="mailto:obidur.shawal@gmail.com"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="group w-full block"
                        >
                            <div className="flex items-center gap-4 md:gap-8 w-full">
                                <span className="text-[13vw] md:text-[8rem] lg:text-[9rem] leading-[0.8] font-black tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-500 transition-all duration-500">
                                    LET&apos;S TALK
                                </span>
                                <FaArrowRightSolid className="text-3xl md:text-5xl lg:text-7xl text-white group-hover:-rotate-45 transition-transform duration-500" />
                            </div>
                        </a>
                    </div>

                    {/* Footer Meta - Anchored at bottom */}
                    <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 font-mono text-[10px] md:text-xs text-gray-500">
                        
                        <div className="space-y-1">
                            <p className="text-white font-bold tracking-tight">OBIDUR RAHMAN</p>
                            <p>Architect & Developer</p>
                        </div>

                        <div className="flex gap-6">
                            <a href="#about" className="hover:text-cyan-500 transition-colors">ABOUT</a>
                            <a href="#projects" className="hover:text-cyan-500 transition-colors">WORK</a>
                            <a href="#" className="hover:text-cyan-500 transition-colors">RESUME</a>
                        </div>

                        <div className="text-right">
                            <p>DHAKA: <span className="text-cyan-500">{time}</span></p>
                            <p>© {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default ContactSection;