'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi'; // Mobile icon

const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'WORK' },
    { id: 'contact', label: 'CONTACT' },
];

const Header = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            
            // Check themes and active sections
            for (const item of navItems) {
                const section = document.getElementById(item.id);
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(item.id);
                        const currentTheme = section.getAttribute('data-theme') as 'dark' | 'light' || 'dark';
                        setTheme(currentTheme);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDark = theme === 'dark';
    const borderColor = isDark ? 'border-white/10' : 'border-black/10';
    const textColor = isDark ? 'text-white' : 'text-black';
    const sidebarBg = isDark ? 'bg-black/40' : 'bg-white/60';

    return (
        <>
            {/* --- DESKTOP SIDEBAR (Wider & Easier to Click) --- */}
            <motion.header 
                className={`hidden md:flex fixed left-0 top-0 bottom-0 w-28 flex-col justify-between py-8 z-999 border-r backdrop-blur-xl transition-colors duration-500 ${sidebarBg} ${borderColor}`}
            >
                {/* Logo */}
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full flex justify-center py-4">
                    <div className={`font-black text-2xl tracking-tighter transition-colors ${textColor}`}>
                        OR<span className="text-cyan-500">.</span>
                    </div>
                </button>

                {/* Navigation - Full Width Clickable Areas */}
                <nav className="flex flex-col w-full">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <Link
                                key={item.id}
                                href={`#${item.id}`}
                                className="group relative flex items-center justify-center h-16 w-full cursor-pointer"
                            >
                                {/* Hover Background Slide */}
                                <div className="absolute inset-0 bg-cyan-500/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                
                                {/* Active Indicator Line (Left Border) */}
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeSidebarLine"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500" 
                                    />
                                )}

                                {/* Label or Dot */}
                                <div className="flex flex-col items-center gap-1 transition-all duration-300">
                                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-cyan-500 scale-110' : isDark ? 'text-gray-500 group-hover:text-white' : 'text-gray-400 group-hover:text-black'}`}>
                                        {item.label}
                                    </span>
                                    
                                    {/* Small dot below text for active visual */}
                                    <div className={`w-1 h-1 rounded-full transition-all duration-300 ${isActive ? 'bg-cyan-500 opacity-100' : 'opacity-0'}`} />
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                {/* Socials */}
                <div className="flex flex-col items-center gap-6">
                    {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                        <a key={i} href="#" className={`transition-colors duration-300 hover:text-cyan-500 hover:scale-110 p-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </motion.header>

            {/* --- MOBILE HEADER (Top Bar instead of bottom for better UX) --- */}
            <div className={`md:hidden fixed top-0 left-0 right-0 z-999 px-6 py-4 flex justify-between items-center backdrop-blur-lg border-b ${isDark ? 'bg-black/80 border-white/10 text-white' : 'bg-white/90 border-black/10 text-black'}`}>
                <span className="font-black text-xl">OR.</span>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                    <FiMenu size={24} />
                </button>
            </div>
            
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-black text-white flex flex-col items-center justify-center gap-8 md:hidden">
                     <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 text-sm font-mono">CLOSE</button>
                     {navItems.map(item => (
                         <Link key={item.id} href={`#${item.id}`} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-cyan-500">{item.label}</Link>
                     ))}
                </div>
            )}
        </>
    );
};

export default Header;
