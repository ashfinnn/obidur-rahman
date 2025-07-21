// eslint-disable-next-line react-hooks/exhaustive-deps

// app/components/sections/ContactSection.tsx
"use client";

import { motion } from 'framer-motion';

// Reusable variants for motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactSection = () => {
    return (
        <motion.section
            className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-7xl mx-auto">
                {/* 1. Thematic Header */}
                <header className="mb-12 md:mb-16">
                    <motion.h2
                        className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black"
                        variants={itemVariants}
                    >
                        CONTACT_PROTOCOL
                    </motion.h2>
                    <motion.div className="mt-4 w-32 h-px bg-black" variants={itemVariants} />
                    <motion.p
                        className="mt-6 text-gray-600 max-w-2xl text-base lg:text-lg"
                        variants={itemVariants}
                    >
                        Open to collaboration, inquiries, and new opportunities. Use the provided channels to establish a connection.
                    </motion.p>
                </header>

                {/* 2. Main Grid Layout (Redesigned) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Side: Contact Links */}
                    <motion.div className="space-y-8" variants={itemVariants}>
                        <div>
                            <h3 className="font-mono text-xs text-gray-500 tracking-widest mb-4">[DIRECT_CHANNELS]</h3>
                            <div className="space-y-4 font-mono text-sm border-t border-gray-200 pt-4">
                                <a href="mailto:obidur.shawal@gmail.com" className="group flex items-center justify-between transition-colors hover:text-gray-600">
                                    <span>EMAIL</span>
                                    <span className="text-black group-hover:text-gray-600 transition-colors">obidur.shawal@gmail.com</span>
                                </a>
                                <div className="w-full h-px bg-gray-200"></div>
                                <a href="https://linkedin.com/in/obidur-rahman" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between transition-colors hover:text-gray-600">
                                    <span>LINKEDIN</span>
                                    <span className="text-black group-hover:text-gray-600 transition-colors">/in/obidur-rahman →</span>
                                </a>
                                <div className="w-full h-px bg-gray-200"></div>
                                <a href="https://github.com/obidur-rahman" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between transition-colors hover:text-gray-600">
                                    <span>GITHUB</span>
                                    <span className="text-black group-hover:text-gray-600 transition-colors">/obidur-rahman →</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-mono text-xs text-gray-500 tracking-widest mb-4">[LOCATION_GRID]</h3>
                            <div className="border border-gray-200 p-4">
                                <p className="font-mono text-sm text-black">Dhaka, Bangladesh</p>
                                <p className="font-mono text-xs text-gray-500 mt-1">TIMEZONE: GMT+6 // STATUS: OPERATIONAL</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. Right Side: Contact Form (Redesigned) */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-mono text-xs text-gray-500 tracking-widest mb-4">[SECURE_MESSAGE_FORM]</h3>
                        <form className="space-y-4 border border-gray-200 p-6">
                            <div className="relative">
                                <label htmlFor="name" className="absolute -top-2 left-4 bg-white px-1 font-mono text-xs text-gray-400">NAME</label>
                                <input id="name" type="text" className="w-full p-3 bg-transparent border border-gray-300 font-mono text-sm focus:border-black focus:outline-none transition-colors" />
                            </div>
                             <div className="relative">
                                <label htmlFor="email" className="absolute -top-2 left-4 bg-white px-1 font-mono text-xs text-gray-400">EMAIL</label>
                                <input id="email" type="email" className="w-full p-3 bg-transparent border border-gray-300 font-mono text-sm focus:border-black focus:outline-none transition-colors" />
                            </div>
                             <div className="relative">
                                <label htmlFor="message" className="absolute -top-2 left-4 bg-white px-1 font-mono text-xs text-gray-400">MESSAGE</label>
                                <textarea id="message" rows={5} className="w-full p-3 bg-transparent border border-gray-300 font-mono text-sm focus:border-black focus:outline-none transition-colors resize-none"></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 font-mono text-sm tracking-wider hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                            >
                                SUBMIT_MESSAGE
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;