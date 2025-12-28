"use client";

import Link from "next/link";
import { FiArrowUpRight, FiAward, FiActivity, FiCpu } from "react-icons/fi";

export default function ResearchSection() {
    return (
        <section className="bg-[#F4F4F5] text-[#050505] w-full py-24 border-t border-[#E5E5E5]">

            <div className="container mx-auto px-4 md:px-12 max-w-7xl">

                {/* HEADER */}
                <div className="mb-12">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#FF4D00] uppercase mb-4 block">
                        Scientific Output
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
                        Research <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-200">Archive</span>
                    </h2>
                    <div className="w-full h-[2px] bg-[#050505]" />
                </div>

                {/* --- RESEARCH DOSSIER (Text Only Variant) --- */}
                <div className="border-x border-b border-[#050505] bg-white">

                    {/* ITEM 1: THE AWARD PAPER (Internal Link) */}
                    <Link
                        href="/research/cpu-constrained-vision"
                        className="block group border-b border-[#050505] hover:bg-[#050505] transition-colors duration-500"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12">

                            {/* META COLUMN (Left) */}
                            <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#050505] flex flex-col justify-between group-hover:border-gray-800 transition-colors">
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-[#FF4D00] text-white px-3 py-1 mb-6">
                                        <FiAward />
                                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                                            Best Presenter Award
                                        </span>
                                    </div>
                                    <div className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-400 mb-2">
                                        Venue: Intl. Math Conference '24
                                    </div>
                                    <div className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-400">
                                        ID: RES_01
                                    </div>
                                </div>

                                <div className="mt-8 lg:mt-0 flex items-center gap-2 text-[#FF4D00] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Read Case Study</span>
                                    <FiArrowUpRight />
                                </div>
                            </div>

                            {/* CONTENT COLUMN (Right) */}
                            <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] group-hover:text-white transition-colors">
                                        CPU-Constrained<br />Vision
                                    </h3>
                                    <FiArrowUpRight className="text-2xl opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300 -translate-y-2 group-hover:translate-y-0" />
                                </div>

                                <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium mb-8 border-l-2 border-[#050505] group-hover:border-[#FF4D00] pl-6 group-hover:text-gray-300 transition-colors">
                                    "Benchmarking deep learning architectures on edge hardware. Validated that ConvNeXt achieves &gt;99% accuracy while FastViT offers viable inference speeds for real-time agricultural disease detection."
                                </p>

                                <div className="flex gap-2">
                                    {["PyTorch", "FastViT", "Quantization"].map(t => (
                                        <span key={t} className="px-2 py-1 bg-gray-100 border border-gray-200 group-hover:bg-gray-800 group-hover:border-gray-700 group-hover:text-gray-300 text-[10px] font-mono font-bold uppercase text-gray-500 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* ITEM 2: GEOMETRIC DILUTION (External Link) */}
                    <a
                        href="https://ashfinnn.github.io/geometric-dilution/"
                        target="_blank"
                        className="block group hover:bg-[#050505] transition-colors duration-500"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12">

                            {/* META COLUMN */}
                            <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#050505] flex flex-col justify-between group-hover:border-gray-800 transition-colors">
                                <div>
                                    <div className="flex items-center gap-2 text-[#FF4D00] mb-6">
                                        <FiActivity size={20} />
                                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                                            Independent Framework
                                        </span>
                                    </div>
                                    <div className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-400">
                                        ID: RES_02
                                    </div>
                                </div>

                                <div className="mt-8 lg:mt-0 flex items-center gap-2 text-[#FF4D00] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                    <span className="font-mono text-xs font-bold uppercase tracking-widest">View Proof</span>
                                    <FiArrowUpRight />
                                </div>
                            </div>

                            {/* CONTENT COLUMN */}
                            <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] group-hover:text-white transition-colors">
                                        Geometric Dilution
                                    </h3>
                                    <FiArrowUpRight className="text-2xl opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300 -translate-y-2 group-hover:translate-y-0" />
                                </div>

                                <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium mb-8 border-l-2 border-[#050505] group-hover:border-[#FF4D00] pl-6 group-hover:text-gray-300 transition-colors">
                                    A mathematical proof demonstrating the failure of SMOTE in high-dimensional spaces (&gt;10D). Analysis across Wine Quality and Breast Cancer datasets reveals synthetic point coverage drops to near-zero.
                                </p>

                                <div className="flex gap-2">
                                    {["Math", "Python", "NumPy"].map(t => (
                                        <span key={t} className="px-2 py-1 bg-gray-100 border border-gray-200 group-hover:bg-gray-800 group-hover:border-gray-700 group-hover:text-gray-300 text-[10px] font-mono font-bold uppercase text-gray-500 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

            </div>
        </section>
    );
}