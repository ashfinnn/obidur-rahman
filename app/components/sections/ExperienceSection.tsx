"use client";

import { FiArrowUpRight, FiMapPin, FiCpu, FiBookOpen } from "react-icons/fi";

// RIGHT COLUMN: WORK ONLY
const EXPERIENCE_DATA = [
    {
        role: "R&D ENGINEER",
        company: "NorthAxis",
        date: "2024 — PRESENT",
        location: "Chattogram",
        desc: "Bridging the gap between market requirements and engineering feasibility. Driving feature development through rigorous competitive analysis."
    }
];

// LEFT COLUMN: EDUCATION ONLY
const EDUCATION_DATA = {
    degree: "B.S. MATHEMATICS",
    school: "University of Chittagong",
    date: "2022 — 2026",
    desc: "Specialization in Abstract Algebra & Linear Optimization. Applying pure math theories to algorithmic problem solving."
};

export default function ExperienceSection() {
    return (
        <section className="bg-white text-[#050505] w-full py-24 border-t border-[#050505]">

            <div className="container mx-auto px-4 md:px-12 max-w-7xl">

                {/* HEADER */}
                <div className="mb-16 border-b border-[#050505] pb-6">
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.8]">
                        Career <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200">History</span>
                    </h2>
                </div>

                {/* --- GRID SYSTEM --- */}
                <div className="border border-[#050505] bg-white shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-12">

                        {/* COL 1: EDUCATION / FOUNDATION (Left Side) */}
                        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#050505] p-8 md:p-12 bg-[#F4F4F5] relative overflow-hidden group">
                            
                            {/* Curtain Reveal: BLACK */}
                            <div className="absolute inset-0 bg-[#050505] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-6">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500 group-hover:bg-white transition-colors"></span>
                                        </span>
                                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                                            Academic Foundation
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-2 group-hover:text-white transition-colors">
                                        {EDUCATION_DATA.degree}
                                    </h3>
                                    <p className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-white/80 transition-colors">
                                        @ {EDUCATION_DATA.school}
                                    </p>
                                </div>

                                <div className="mt-12 pt-8 border-t border-[#050505]/10 group-hover:border-white/20">
                                    <div className="flex items-center gap-3 mb-4 text-[#050505] group-hover:text-white transition-colors">
                                        <FiBookOpen size={24} />
                                        <span className="font-mono text-xs font-bold uppercase">{EDUCATION_DATA.date}</span>
                                    </div>
                                    <p className="text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                                        "{EDUCATION_DATA.desc}"
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* COL 2: PROFESSIONAL LOG (Right Side) */}
                        <div className="md:col-span-8 flex flex-col justify-center">
                            {EXPERIENCE_DATA.map((item, i) => (
                                <div
                                    key={i}
                                    // Hover effect changed to BLACK background
                                    className="group/item p-8 md:p-12 flex flex-col justify-center relative transition-all duration-300 h-full hover:bg-[#050505] hover:text-white"
                                >
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            {/* Icon box turns White on hover for contrast */}
                                            <div className="p-2 border border-[#050505] group-hover/item:border-white group-hover/item:bg-white group-hover/item:text-[#050505] transition-colors rounded-none">
                                                <FiCpu size={20} />
                                            </div>
                                            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                                                {item.role}
                                            </h3>
                                        </div>
                                        <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-50 group-hover/item:opacity-100 mt-2 md:mt-0">
                                            {item.date}
                                        </span>
                                    </div>

                                    <div className="mb-8 font-mono text-xs uppercase tracking-widest opacity-60 flex items-center gap-4 pl-14">
                                        <span className="font-bold">{item.company}</span>
                                        <span className="hidden md:inline">|</span>
                                        <span className="flex items-center gap-1"><FiMapPin /> {item.location}</span>
                                    </div>

                                    <p className="text-base leading-relaxed max-w-2xl opacity-80 group-hover/item:opacity-100 pl-0 md:pl-14 font-medium">
                                        {item.desc}
                                    </p>

                                    {/* Arrow turns Orange on hover for a subtle pop against the black */}
                                    <div className="absolute top-8 right-8 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-4 group-hover/item:translate-x-0 text-[#FF4D00]">
                                        <FiArrowUpRight size={32} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}