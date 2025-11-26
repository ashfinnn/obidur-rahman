// app/components/sections/ContactSection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaLastfm } from 'react-icons/fa';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 12 }
    }
};

const contactLinks = [
    { icon: FiMail, label: 'Email', href: 'mailto:obidur.shawal@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/obidur-rahman-shawal/' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Ashfinn' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/channel/UC63n2xBEcdTIBITPpNEgoFQ' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/obidur__rahman' },
    { icon: FaLastfm, label: 'Last.fm', href: 'https://www.last.fm/user/Ashfin' },
];

const ContactPrompt = () => (
    <motion.div variants={itemVariants}>
        <h3 className="font-mono text-lg text-cyan-600 mb-2">Get in Touch</h3>
        <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
            I'm currently available for freelance projects and open to discussing new opportunities.
            Whether you have a question, project idea, or just want to connect, I'd love to hear from you.
        </p>
        <Link
            href="mailto:obidur.shawal@gmail.com"
            className="group inline-flex items-center gap-3 px-6 py-3 border border-gray-900 text-gray-900 
               font-mono text-sm tracking-wider transition-all duration-300 
               hover:bg-gray-900 hover:text-white hover:shadow-lg"
        >
            <span>Send Email</span>
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    </motion.div>
);

const ContactItem = ({ icon: Icon, label, href }: typeof contactLinks[0]) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-4 p-4 border border-gray-200 bg-white 
             transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50/50
             hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
    >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-400/10 blur-xl" />
        </div>
        <Icon className="relative text-gray-500 transition-colors duration-300 group-hover:text-cyan-600" size={20} />
        <span className="relative font-mono text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
            {label}
        </span>
    </a>
);

const ContactSection = () => {
    return (
        <motion.section
            id="contact"
            className="relative px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-gray-50 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* Grid pattern background */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(#06b6d4 1px, transparent 1px),
            linear-gradient(to right, #06b6d4 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Floating gradient orbs */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto">
                <header className="mb-12 md:mb-16">
                    <motion.div
                        className="inline-block font-mono text-xs text-cyan-600 mb-4 px-3 py-1 border border-cyan-600/20 rounded-full bg-cyan-50/50"
                        variants={itemVariants}
                    >
                        Let's Connect
                    </motion.div>
                    <motion.h2
                        className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
                        variants={itemVariants}
                    >
                        Ready to Collaborate?
                    </motion.h2>
                    <motion.div
                        className="mt-4 w-32 h-px bg-gradient-to-r from-cyan-600 to-cyan-400"
                        variants={itemVariants}
                    />
                    <motion.p
                        className="mt-6 text-gray-600 max-w-2xl text-base lg:text-lg"
                        variants={itemVariants}
                    >
                        I'm always excited to work on new projects, discuss innovative ideas, or simply connect with fellow enthusiasts. 
                        Drop me a message through any of these channels.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ContactPrompt />

                    <motion.div className="space-y-10" variants={itemVariants}>
                        <div>
                            <h3 className="font-mono text-xs text-gray-500 tracking-widest mb-4">Connect With Me</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactLinks.map(link => <ContactItem key={link.label} {...link} />)}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-mono text-xs text-gray-500 tracking-widest mb-4">Location</h3>
                            <div className="group relative border border-gray-200 p-4 bg-white 
                           transition-all duration-300 hover:border-cyan-400 
                           hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 bg-[linear-gradient(#06b6d4_1px,transparent_1px),linear-gradient(to_right,#06b6d4_1px,transparent_1px)] 
                                bg-[size:20px_20px] opacity-5" />
                                </div>
                                <div className="relative flex items-center justify-between">
                                    <div>
                                        <p className="font-mono text-sm text-gray-900 font-semibold">Chittagong, Bangladesh</p>
                                        <p className="font-mono text-xs text-gray-500 mt-1">
                                            GMT+6 • Available for remote work
                                        </p>
                                    </div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                </div>
                            </div>
                        </div>

                        <div className="relative border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl" />
                            <h4 className="font-mono text-xs text-cyan-700 tracking-widest mb-3">Response Time</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                I typically respond within 24-48 hours. For urgent inquiries, 
                                email is the fastest way to reach me.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;