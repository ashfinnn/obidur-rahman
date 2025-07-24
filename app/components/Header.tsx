// app/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform } from 'framer-motion';
import { useScroll } from '../hooks/useScroll';
import { useActiveSection } from '../hooks/useActiveSection';

const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'WORK' },
    { id: 'contact', label: 'CONTACT' }
];

const sectionIds = ['grid-section', 'about', 'skills', 'projects', 'contact'];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isScrolled, scrollYProgress } = useScroll();
    const activeSection = useActiveSection(sectionIds, 'grid-section');

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const headerBaseClasses = "fixed top-0 left-0 right-0 z-40 h-20 transition-all duration-300 ease-in-out";
    const scrolledClasses = "bg-black/80 backdrop-blur-md border-b border-neutral-800";
    const topClasses = "bg-white border-b border-gray-200";
    const logoColor = isScrolled ? "text-white" : "text-black";
    const mobileIconColor = isScrolled ? "bg-white" : "bg-black";

    const progressBarColor = useTransform(scrollYProgress, [0, 0.01], ['#000000', '#67E8F9']);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-0.5 z-50"
                style={{ scaleX: scrollYProgress, backgroundColor: progressBarColor, transformOrigin: 'left' }}
            />

            <header className={`${headerBaseClasses} ${isScrolled ? scrolledClasses : topClasses}`}>
                <div className="h-full px-4 sm:px-8 lg:px-16 flex items-center justify-between">
                    <Link href="/" className={`font-mono font-bold text-sm tracking-widest transition-colors ${logoColor} hover:text-cyan-300`}>
                        OBIDUR.RAHMAN
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;
                            const linkColor = isScrolled
                                ? (isActive ? 'text-white' : 'text-neutral-300 hover:text-white')
                                : (isActive ? 'text-black' : 'text-neutral-500 hover:text-black');
                            const indicatorColor = isScrolled ? 'bg-cyan-300' : 'bg-black';

                            return (
                                <Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`relative font-mono text-xs tracking-wider transition-colors duration-300 ${linkColor}`}
                                >
                                    {item.label}
                                    {isActive && (
                                        <motion.div
                                            className={`absolute -bottom-1 left-0 right-0 h-px ${indicatorColor}`}
                                            layoutId="active-nav-link"
                                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="relative w-8 h-8 flex items-center justify-center md:hidden z-50">
                        <div className="space-y-1.5">
                            <span className={`block w-5 h-px ${mobileIconColor} transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`} />
                            <span className={`block w-5 h-px ${mobileIconColor} transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`block w-5 h-px ${mobileIconColor} transition-all duration-300 ease-in-out ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
                        </div>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-30 bg-black/95 backdrop-blur-lg md:hidden"
                    >
                        <nav className="h-full flex flex-col justify-center items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`font-mono text-xl tracking-widest transition-colors ${activeSection === item.id ? 'text-cyan-300' : 'text-neutral-400'}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;