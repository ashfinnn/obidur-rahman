// app/components/sections/ContactSection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// Icons for each social link
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaLastfm } from 'react-icons/fa';
import { SiAnilist } from 'react-icons/si';

// Reusable variants for motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 12 } },
};

// Data for your contact links
const contactLinks = [
    { icon: FiMail, label: 'Email', href: 'mailto:obidur.shawal@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/obidur-rahman-shawal/' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Ashfinn' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/channel/UC63n2xBEcdTIBITPpNEgoFQ' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/obidur__rahman' },
    { icon: FaLastfm, label: 'Last.fm', href: 'https://www.last.fm/user/Ashfin' },
    { icon: SiAnilist, label: 'Anilist', href: 'https://anilist.co/user/Ashfin/' },
];

// 1. NEW: Component for the left-side prompt
const ContactPrompt = () => (
    <motion.div variants={itemVariants}>
        <h3 className="font-mono text-lg text-white mb-2">[INITIATE_CONTACT]</h3>
        <p className="text-gray-400 mb-6 max-w-sm">
            I'm currently available for freelance projects and open to discussing new opportunities. My inbox is always open, whether you have a question or just want to say hi.
        </p>
        <Link href="mailto:obidur.shawal@gmail.com" className="group inline-flex items-center gap-3 px-6 py-3 border border-cyan-300 text-cyan-300 font-mono text-sm tracking-wider transition-all duration-300 hover:bg-cyan-300/10 hover:shadow-[0_0_20px_0] hover:shadow-cyan-300/20">
            <span>SEND_DIRECT_EMAIL</span>
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    </motion.div>
);

// 2. NEW: Component for each item in the right-side grid
const ContactItem = ({ icon: Icon, label, href }: typeof contactLinks[0]) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-4 p-4 border border-gray-800 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/10"
    >
        <Icon className="text-gray-500 transition-colors duration-300 group-hover:text-cyan-300" size={20} />
        <span className="font-mono text-gray-300 transition-colors duration-300 group-hover:text-white">{label}</span>
    </a>
);


const ContactSection = () => {
    return (
        <motion.section
            id="contact"
            className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-black"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 md:mb-16">
                    <motion.h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white" variants={itemVariants}>
                        CONNECTION_INTERFACE
                    </motion.h2>
                    <motion.div className="mt-4 w-32 h-px bg-cyan-300" variants={itemVariants} />
                </header>

                {/* 3. NEW: A balanced two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: The Prompt */}
                    <ContactPrompt />
                    
                    {/* Right Column: Links and Location */}
                    <motion.div className="space-y-10" variants={itemVariants}>
                        <div>
                            <h3 className="font-mono text-xs text-gray-500 tracking-widest mb-4">[DIRECT_CHANNELS]</h3>
                            {/* 4. NEW: A responsive grid for contact links */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactLinks.map(link => <ContactItem key={link.label} {...link} />)}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-mono text-xs text-gray-500 tracking-widest mb-4">[LOCATION_GRID]</h3>
                            <div className="group border border-gray-800 p-4 transition-colors duration-300 hover:border-cyan-300/50 bg-[linear-gradient(#1f2937_1px,transparent_1px),linear-gradient(to_right,#1f29-37_1px,transparent_1px)] bg-[size:20px_20px]">
                                <p className="font-mono text-sm text-white">Chittagong, Bangladesh</p>
                                <p className="font-mono text-xs text-gray-500 mt-1">TIMEZONE: GMT+6 // STATUS: OPERATIONAL</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;