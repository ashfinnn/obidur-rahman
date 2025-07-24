// app/components/sections/ContactSection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaLastfm } from 'react-icons/fa';
import { SiAnilist } from 'react-icons/si';

import type { Variants } from 'framer-motion';

// --- Variants are perfect, no changes ---
const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
const itemVariants: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } } };

// --- Data is perfect, no changes ---
const contactLinks = [
    { icon: FiMail, label: 'Email', href: 'mailto:obidur.shawal@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/obidur-rahman-shawal/' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Ashfinn' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/channel/UC63n2xBEcdTIBITPpNEgoFQ' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/obidur__rahman' },
    { icon: FaLastfm, label: 'Last.fm', href: 'https://www.last.fm/user/Ashfin' },
];

// Sub-component adapted for a LIGHT theme
const ContactPrompt = () => (
    <motion.div variants={itemVariants}>
        <h3 className="font-mono text-lg text-black mb-2">[INITIATE_CONTACT]</h3> {/* CHANGED */}
        <p className="text-gray-600 mb-6 max-w-sm"> {/* CHANGED */}
            I'm currently available for freelance projects and open to discussing new opportunities. My inbox is always open, whether you have a question or just want to say hi.
        </p>
        <Link href="mailto:obidur.shawal@gmail.com" className="group inline-flex items-center gap-3 px-6 py-3 border border-black text-black font-mono text-sm tracking-wider transition-all duration-300 hover:bg-black hover:text-white"> {/* CHANGED */}
            <span>SEND_DIRECT_EMAIL</span>
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    </motion.div>
);

// Sub-component adapted for a LIGHT theme
const ContactItem = ({ icon: Icon, label, href }: typeof contactLinks[0]) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-4 p-4 border border-gray-200 bg-white transition-all duration-300 hover:border-gray-800 hover:bg-gray-50" // CHANGED
    >
        <Icon className="text-gray-500 transition-colors duration-300 group-hover:text-black" size={20} /> {/* CHANGED */}
        <span className="font-mono text-gray-700 transition-colors duration-300 group-hover:text-black">{label}</span> {/* CHANGED */}
    </a>
);

const ContactSection = () => {
    return (
        <motion.section
            id="contact"
            className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-white" // CHANGED
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 md:mb-16">
                    <motion.h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black" variants={itemVariants}> {/* CHANGED */}
                        CONNECTION_INTERFACE
                    </motion.h2>
                    <motion.div className="mt-4 w-32 h-px bg-black" variants={itemVariants} /> {/* CHANGED */}
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ContactPrompt />

                    <motion.div className="space-y-10" variants={itemVariants}>
                        <div>
                            <h3 className="font-mono text-xs text-gray-500 tracking-widest mb-4">[DIRECT_CHANNELS]</h3> {/* CHANGED */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactLinks.map(link => <ContactItem key={link.label} {...link} />)}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-mono text-xs text-gray-500 tracking-widest mb-4">[LOCATION_GRID]</h3> {/* CHANGED */}
                            <div className="group border border-gray-200 p-4 transition-all duration-300 hover:border-gray-800 bg-[linear-gradient(theme(colors.gray.100)_1px,transparent_1px),linear-gradient(to_right,theme(colors.gray.100)_1px,transparent_1px)] bg-[size:20px_20px] hover:bg-[size:22px_22px]"> {/* CHANGED */}
                                <p className="font-mono text-sm text-black">Chittagong, Bangladesh</p> {/* CHANGED */}
                                <p className="font-mono text-xs text-gray-500 mt-1">TIMEZONE: GMT+6 // STATUS: OPERATIONAL</p> {/* CHANGED */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;