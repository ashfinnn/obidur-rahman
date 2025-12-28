"use client";

import { FiArrowUpRight, FiMapPin, FiCpu } from "react-icons/fi";

const TIMELINE = [
    {
        role: "R&D ENGINEER",
        company: "NorthAxis",
        date: "2024 — PRESENT",
        location: "Chattogram",
        desc: "Bridging the gap between market requirements and engineering feasibility. Driving feature development through rigorous competitive analysis."
    },
    {
        role: "B.S. MATHEMATICS",
        company: "University of Chittagong",
        date: "2022 — 2026",
        location: "Chattogram",
        desc: "Specialization in Abstract Algebra & Linear Optimization. Applying pure math theories to algorithmic problem solving."
    }
];

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

                        {/* COL 1: CURRENT STATUS (Matches About Photo Style) */}
                        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#050505] p-8 md:p-12 bg-[#F4F4F5] relative overflow-hidden group">
                            {/* Curtain Reveal */}
                            <div className="absolute inset-0 bg-[#FF4D00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-6">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                        <span className="font-mono text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">Current Role</span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-2 group-hover:text-white transition-colors">
                                        R&D<br />Engineer
                                    </h3>
                                    <p className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-white/80 transition-colors">
                                        @ NorthAxis
                                    </p>
                                </div>

                                <div className="mt-12 pt-8 border-t border-[#050505]/10 group-hover:border-white/20">
                                    <FiCpu size={32} className="mb-4 text-[#050505] group-hover:text-white transition-colors" />
                                    <p className="text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                                        "Leading research initiatives to optimize deep learning models on constrained hardware."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* COL 2: TIMELINE LOG */}
                        <div className="md:col-span-8">
                            {TIMELINE.map((item, i) => (
                                <div
                                    key={i}
                                    className={`
                                group/item p-8 md:p-12 flex flex-col justify-center relative transition-all duration-300
                                ${i !== TIMELINE.length - 1 ? 'border-b border-[#050505]' : ''}
                                hover:bg-[#050505] hover:text-white
                            `}
                                >
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                        <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight group-hover/item:text-[#FF4D00] transition-colors">
                                            {item.role}
                                        </h3>
                                        <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-50 group-hover/item:opacity-100">
                                            {item.date}
                                        </span>
                                    </div>

                                    <div className="mb-6 font-mono text-xs uppercase tracking-widest opacity-60 flex items-center gap-4">
                                        <span>{item.company}</span>
                                        <span className="hidden md:inline">|</span>
                                        <span className="flex items-center gap-1"><FiMapPin /> {item.location}</span>
                                    </div>

                                    <p className="text-sm md:text-base leading-relaxed max-w-xl opacity-80 group-hover/item:opacity-100">
                                        {item.desc}
                                    </p>

                                    <div className="absolute top-8 right-8 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-4 group-hover/item:translate-x-0 text-[#FF4D00]">
                                        <FiArrowUpRight size={24} />
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