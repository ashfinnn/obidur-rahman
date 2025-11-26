'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'WORK' },
    { id: 'contact', label: 'CONTACT' },
];

// Intersection observer initial setup removed from module scope because it referenced component state.
// The observer is already created inside the Header component's useEffect where setActiveSection and setIsDark are available.

const Header = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isDark, setIsDark] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // INTERSECTION OBSERVER: The robust way to track sticky sections
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px -45% 0px', // Detects what is in the MIDDLE 10% of screen
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                    
                    // Auto-detect theme based on section data-attribute
                    // Note: You need to add data-theme="light" or "dark" to your sections
                    const theme = entry.target.closest('section')?.getAttribute('data-theme');
                    if (theme) setIsDark(theme === 'dark');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Dynamic styles
    const bgClass = isDark ? 'bg-black/20 border-white/10' : 'bg-white/40 border-black/10';
    const textClass = isDark ? 'text-white' : 'text-black';
    const muteClass = isDark ? 'text-gray-500' : 'text-gray-400';

    return (
        <>
            {/* --- DESKTOP SIDEBAR --- */}
            <aside className={`hidden md:flex fixed left-0 top-0 bottom-0 w-28 flex-col justify-between py-8 z-[999] border-r backdrop-blur-xl transition-all duration-500 ${bgClass}`}>
                {/* Logo */}
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full flex justify-center">
                    <span className={`font-black text-2xl tracking-tighter ${textClass}`}>OR.</span>
                </button>

                {/* Nav */}
                <nav className="flex flex-col w-full gap-2">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <Link
                                key={item.id}
                                href={`#${item.id}`}
                                className="relative flex items-center justify-center h-12 w-full group"
                            >
                                <div className={`flex items-center gap-2 transition-all duration-300 ${isActive ? 'translate-x-2' : ''}`}>
                                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-cyan-500' : 'text-transparent group-hover:text-gray-400'}`}>
                                        {item.label}
                                    </span>
                                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? 'bg-cyan-500 scale-125' : isDark ? 'bg-white/20' : 'bg-black/20'}`} />
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                {/* Socials */}
                <div className="flex flex-col items-center gap-6">
                    {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                        <a key={i} href="#" className={`hover:text-cyan-500 transition-colors ${muteClass}`}>
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </aside>

            {/* --- MOBILE TOP BAR --- */}
            <header className={`md:hidden fixed top-0 left-0 right-0 z-[999] px-6 py-4 flex justify-between items-center backdrop-blur-xl border-b transition-colors duration-500 ${isDark ? 'bg-black/80 border-white/10 text-white' : 'bg-white/90 border-black/10 text-black'}`}>
                <span className="font-black text-xl">OR.</span>
                <button onClick={() => setMobileMenuOpen(true)}>
                    <FiMenu size={24} />
                </button>
            </header>

            {/* MOBILE MENU OVERLAY */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[1000] bg-black text-white flex flex-col items-center justify-center gap-8">
                    <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6">
                        <FiX size={24} />
                    </button>
                    {navItems.map(item => (
                        <Link 
                            key={item.id} 
                            href={`#${item.id}`} 
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-3xl font-black ${activeSection === item.id ? 'text-cyan-500' : 'text-white'}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default Header;