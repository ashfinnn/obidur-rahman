"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiMenu, FiX, FiGithub, FiDownload, FiCpu, FiClock, FiActivity, FiAlertTriangle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function LeafDiseasePage() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Handle Scroll Progress & Active Section
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));

            // Active Section Logic
            const sections = ['abstract', 'intro', 'methodology', 'results', 'discussion', 'future'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="bg-white text-[#050505] min-h-screen font-sans selection:bg-[#FF4D00] selection:text-white relative">

            {/* READING PROGRESS BAR */}
            <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-white">
                <div
                    className="h-full bg-[#FF4D00] transition-all duration-100 ease-out"
                    style={{ width: `${scrollProgress * 100}%` }}
                />
            </div>

            {/* MOBILE HEADER */}
            <nav className="lg:hidden fixed top-0 w-full bg-white z-50 border-b border-[#E5E5E5] flex justify-between items-center px-4 h-16">
                <Link href="/" className="flex items-center gap-2 text-xs font-bold uppercase hover:text-[#FF4D00] transition-colors">
                    <FiArrowLeft /> Back
                </Link>
                <div className="text-[10px] font-black uppercase leading-none tracking-tight text-right">
                    CPU-Constrained<br />Deep Learning
                </div>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white pt-20 px-6 lg:hidden">
                    <div className="flex flex-col gap-6 text-xl font-bold uppercase tracking-tighter">
                        {['Abstract', 'Introduction', 'Methodology', 'Results', 'Discussion', 'Future'].map((item) => (
                            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left border-b border-gray-100 pb-4">
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex flex-col lg:flex-row min-h-screen lg:pt-0 pt-16">

                {/* SIDEBAR NAVIGATION (Desktop) */}
                <aside className="hidden lg:flex w-[300px] h-screen fixed top-0 left-0 border-r border-[#E5E5E5] flex-col justify-between bg-white z-20 overflow-y-auto no-scrollbar">
                    <div>
                        {/* Brand / Back */}
                        <div className="p-8 border-b border-[#E5E5E5]">
                            <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400 hover:text-[#FF4D00] mb-6 transition-colors">
                                <FiArrowLeft /> Return to Index
                            </Link>
                            <h1 className="text-2xl font-black uppercase leading-[0.85] tracking-tighter mb-4">
                                CPU-Constrained<br />Deep Learning
                            </h1>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#FF4D00] animate-pulse rounded-full"></span>
                                <span className="text-[9px] font-bold uppercase tracking-widest text-black">Research Paper '24</span>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            {[
                                { id: 'abstract', label: '00 // Abstract' },
                                { id: 'intro', label: '01 // Introduction' },
                                { id: 'methodology', label: '02 // Methodology' },
                                { id: 'results', label: '03 // Results' },
                                { id: 'discussion', label: '04 // Discussion' },
                                { id: 'future', label: '05 // Future Work' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`px-8 py-4 border-b border-[#E5E5E5] flex items-center justify-between hover:bg-gray-50 hover:text-black transition-colors text-left ${activeSection === item.id ? 'text-black bg-gray-50 border-l-4 border-l-[#FF4D00]' : ''}`}
                                >
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Author Block */}
                    <div className="p-8 bg-[#FAFAFA] border-t border-[#E5E5E5]">
                        <p className="text-[9px] font-bold uppercase text-gray-400 mb-4 tracking-widest">Research Team</p>
                        <div className="mb-4">
                            <p className="text-[9px] font-bold uppercase text-[#FF4D00] mb-1">Principal Investigator</p>
                            <p className="text-sm font-bold text-black">Obidur Rahman</p>
                        </div>
                        <div className="text-[9px] text-gray-500 font-medium uppercase tracking-wide leading-relaxed">
                            Dept. of Mathematics<br />University of Chittagong
                        </div>
                    </div>
                </aside>

                {/* MAIN CONTENT AREA */}
                <main className="lg:ml-[300px] w-full relative">

                    {/* HERO / TITLE SECTION */}
                    <section className="min-h-[80vh] flex flex-col justify-center p-6 lg:p-24 border-b border-[#E5E5E5]">
                        <div className="inline-block border border-black px-3 py-1 mb-8 w-fit">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black">Analysis of Traditional, Modern & Hybrid Models</span>
                        </div>

                        <h1 className="text-4xl lg:text-7xl font-black uppercase mb-12 max-w-4xl leading-[0.9] tracking-tighter text-black">
                            CPU-Constrained Deep Learning for Tomato Disease Detection
                        </h1>

                        <div className="grid lg:grid-cols-2 gap-12 pt-12 border-t border-black">
                            <div>
                                <p className="text-lg lg:text-xl font-medium leading-relaxed text-gray-800">
                                    Agriculture faces a <span className="bg-black text-white px-1">40% yield loss</span> from disease. While GPUs power modern AI, they are inaccessible to developing regions. This study bridges the gap.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-5xl font-black text-[#FF4D00]">99.66%</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Accuracy (FastViT)</span>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-5xl font-black text-black">0.022s</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Latency (Ryzen 5 CPU)</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ABSTRACT */}
                    <section id="abstract" className="p-6 lg:p-24 border-b border-[#E5E5E5] bg-[#FAFAFA]">
                        <span className="font-mono text-xs font-bold uppercase text-gray-400 mb-6 block tracking-widest">00 // Abstract</span>
                        <p className="text-lg md:text-xl leading-relaxed font-serif text-gray-800 max-w-3xl">
                            Tomato diseases like early/late blight and bacterial spot reduce yields by up to 40%, threatening food security. While deep learning excels at automated detection, most solutions require GPUs unavailable in developing regions. This study evaluates ResNet-50, ConvNeXt-Tiny, and FastViT-T8 for tomato disease classification under CPU constraints. Using PlantVillage&apos;s 16,012 images across 10 classes, FastViT-T8 emerged optimal: 99.66% accuracy with superior efficiency (0.022s per image), ideal for real-time field use.
                        </p>
                    </section>

                    {/* 1. INTRODUCTION */}
                    <section id="intro" className="p-6 lg:p-24 border-b border-[#E5E5E5]">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                            <div className="lg:w-1/3">
                                <span className="text-6xl font-black text-[#E5E5E5]">01</span>
                                <h2 className="text-3xl font-bold uppercase tracking-tight mt-2">Introduction &<br />Context</h2>
                            </div>
                            <div className="lg:w-2/3 space-y-12">
                                <div>
                                    <h3 className="font-bold text-lg uppercase mb-4 border-l-2 border-[#FF4D00] pl-4">The GPU Gap</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Prior studies relied on NVIDIA Tesla/RTX GPUs, financially inaccessible to smallholder farmers. Our objective was to identify a model that balances <strong>accuracy</strong> and <strong>speed</strong> on consumer-grade hardware (AMD Ryzen 5), enabling deployment for the 180M+ ton global tomato market.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-[#F4F4F5] p-6">
                                        <FiCpu className="text-3xl mb-4 text-gray-400" />
                                        <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Constraint</h4>
                                        <p className="text-sm text-gray-600">No GPU Acceleration. Pure CPU Inference on consumer hardware.</p>
                                    </div>
                                    <div className="bg-[#F4F4F5] p-6">
                                        <FiActivity className="text-3xl mb-4 text-[#FF4D00]" />
                                        <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Goal</h4>
                                        <p className="text-sm text-gray-600">Real-time classification with &gt;99% Accuracy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. METHODOLOGY */}
                    <section id="methodology" className="border-b border-[#E5E5E5]">
                        <div className="p-6 lg:p-12 bg-black text-white border-b border-gray-800">
                            <span className="font-mono text-xs font-bold text-[#FF4D00] uppercase tracking-widest mb-2 block">02 // Protocol</span>
                            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">Methodology</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {/* Model 1 */}
                            <div className="p-10 border-r border-[#E5E5E5] group hover:bg-[#F9F9F9] transition-colors">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Baseline</span>
                                    <span className="font-mono text-xs bg-gray-200 px-2 py-1">25.6M Params</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">ResNet-50</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Traditional CNN. Established stability but computationally heavy for CPUs.</p>
                            </div>

                            {/* Model 2 */}
                            <div className="p-10 border-r border-[#E5E5E5] group hover:bg-[#F9F9F9] transition-colors">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Modern CNN</span>
                                    <span className="font-mono text-xs bg-gray-200 px-2 py-1">29.0M Params</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">ConvNeXt-Tiny</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Transformer-inspired architecture. Highest parameter count but optimized structure.</p>
                            </div>

                            {/* Model 3 */}
                            <div className="p-10 bg-[#FF4D00] text-white">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Hybrid (Recommended)</span>
                                    <span className="font-mono text-xs bg-white text-black px-2 py-1 font-bold">4.03M Params</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">FastViT-T8</h3>
                                <p className="text-sm text-white/90 leading-relaxed">Hybrid CNN-Transformer. <span className="underline decoration-black decoration-2">6x smaller</span> than competitors. Optimized for edge inference.</p>
                            </div>
                        </div>

                        {/* Training Protocol Details */}
                        <div className="p-6 lg:p-12 bg-[#FAFAFA] border-t border-[#E5E5E5]">
                            <div className="grid md:grid-cols-4 gap-8">
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-gray-400">Hardware</h4>
                                    <p className="font-bold">AMD Ryzen 5</p>
                                    <p className="text-xs text-gray-500 font-mono">5600G (6C/12T)</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-gray-400">Optimization</h4>
                                    <p className="font-bold">AdamW</p>
                                    <p className="text-xs text-gray-500 font-mono">Weight Decay 1e-4</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-gray-400">Learning Rate</h4>
                                    <p className="font-bold">Two-Phase</p>
                                    <p className="text-xs text-gray-500 font-mono">1e-4 frozen / 5e-5 fine-tune</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-gray-400">Dataset</h4>
                                    <p className="font-bold">PlantVillage</p>
                                    <p className="text-xs text-gray-500 font-mono">16,012 Images / 10 Classes</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. RESULTS */}
                    <section id="results" className="p-6 lg:p-24 border-b border-[#E5E5E5]">
                        <div className="mb-16">
                            <span className="font-mono text-xs font-bold uppercase text-gray-400 mb-2 block tracking-widest">03 // Benchmarks</span>
                            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight">Performance<br />Analysis</h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Efficiency Chart */}
                            <div>
                                <h3 className="font-bold text-sm uppercase border-b border-black pb-4 mb-8">Inference Speed (Lower is Better)</h3>
                                <div className="space-y-8 font-mono text-xs">
                                    <div>
                                        <div className="flex justify-between mb-2 font-bold">
                                            <span>FastViT-T8</span>
                                            <span className="text-[#FF4D00]">0.022s / img</span>
                                        </div>
                                        <div className="w-full h-8 bg-[#F0F0F0] relative">
                                            <div className="absolute top-0 left-0 h-full bg-[#FF4D00]" style={{ width: '40%' }} />
                                        </div>
                                    </div>
                                    <div className="opacity-50">
                                        <div className="flex justify-between mb-2 font-bold">
                                            <span>ConvNeXt-Tiny</span>
                                            <span>0.051s / img</span>
                                        </div>
                                        <div className="w-full h-8 bg-[#F0F0F0] relative">
                                            <div className="absolute top-0 left-0 h-full bg-black" style={{ width: '92%' }} />
                                        </div>
                                    </div>
                                    <div className="opacity-30">
                                        <div className="flex justify-between mb-2 font-bold">
                                            <span>ResNet-50</span>
                                            <span>0.055s / img</span>
                                        </div>
                                        <div className="w-full h-8 bg-[#F0F0F0] relative">
                                            <div className="absolute top-0 left-0 h-full bg-black" style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-6 text-xs text-gray-500 font-medium">
                                    * FastViT is 57% faster than ConvNeXt-Tiny on the same CPU hardware.
                                </p>
                            </div>

                            {/* Accuracy Stats */}
                            <div>
                                <h3 className="font-bold text-sm uppercase border-b border-black pb-4 mb-8">Top Model Metrics (ConvNeXt)</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] text-center">
                                        <div className="text-4xl font-black mb-1">99.88%</div>
                                        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Accuracy</div>
                                    </div>
                                    <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] text-center">
                                        <div className="text-4xl font-black mb-1">0.998</div>
                                        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">F1-Score</div>
                                    </div>
                                    <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] text-center col-span-2">
                                        <div className="text-4xl font-black mb-1 text-[#FF4D00]">100%</div>
                                        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">On 4 Classes (Healthy, Bacterial Spot, etc.)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. DISCUSSION & LIMITATIONS */}
                    <section id="discussion" className="grid lg:grid-cols-2 border-b border-[#E5E5E5]">
                        <div className="p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#E5E5E5]">
                            <h3 className="text-2xl font-bold uppercase mb-6">Critical<br />Limitations</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <FiAlertTriangle className="text-[#FF4D00] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-sm uppercase">Data Leakage Risk</h4>
                                        <p className="text-sm text-gray-600 mt-1">Images were split randomly, not by plant ID. Reported accuracies are likely upper bounds.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <FiAlertTriangle className="text-[#FF4D00] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-sm uppercase">Lab Conditions</h4>
                                        <p className="text-sm text-gray-600 mt-1">Dataset contains controlled backgrounds. Field performance with complex backgrounds will vary.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <FiAlertTriangle className="text-[#FF4D00] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-sm uppercase">Single Seed</h4>
                                        <p className="text-sm text-gray-600 mt-1">Results based on seed=42. Multi-seed validation needed for statistical significance of the 0.22% gap.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 lg:p-12 bg-[#F9F9F9]">
                            <h3 className="text-2xl font-bold uppercase mb-6">Decision<br />Guide</h3>
                            <div className="space-y-4">
                                <div className="bg-white p-6 border border-[#E5E5E5] shadow-sm">
                                    <h4 className="font-bold text-[#FF4D00] uppercase text-xs tracking-widest mb-1">Recommendation A</h4>
                                    <p className="font-bold text-lg mb-2">Real-Time Field Use</p>
                                    <p className="text-sm text-gray-600">Use <strong>FastViT-T8</strong>. It sacrifices negligible accuracy (0.2%) for a 2x speedup.</p>
                                </div>
                                <div className="bg-white p-6 border border-[#E5E5E5] shadow-sm opacity-60">
                                    <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-1">Recommendation B</h4>
                                    <p className="font-bold text-lg mb-2">Lab Diagnosis</p>
                                    <p className="text-sm text-gray-600">Use <strong>ConvNeXt-Tiny</strong>. Maximizes precision where latency is not the bottleneck.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. FUTURE WORK */}
                    <section id="future" className="p-6 lg:p-24 bg-black text-white">
                        <div className="max-w-3xl">
                            <span className="font-mono text-xs font-bold text-[#FF4D00] uppercase mb-4 block tracking-widest">05 // Looking Forward</span>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">Future Directions</h2>
                            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-400">
                                <p>
                                    <strong className="text-white block mb-2">Statistical Rigor</strong>
                                    Conduct multi-seed experiments (McNemar&apos;s test) to scientifically validate findings and eliminate random chance.
                                </p>
                                <p>
                                    <strong className="text-white block mb-2">Mobile Integration</strong>
                                    Quantize FastViT-T8 for offline mobile application deployment to help farmers in remote areas without internet access.
                                </p>
                                <p>
                                    <strong className="text-white block mb-2">Field Validation</strong>
                                    Test on real-world field images with variable lighting, occlusions, and co-infections to ensure robustness.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FOOTER ACTION */}
                    <div className="p-8 lg:p-12 border-t border-[#333] bg-black text-white flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
                            © 2024 Obidur Rahman • University of Chittagong
                        </p>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-white hover:text-white text-gray-400 font-bold uppercase text-xs transition-colors">
                                <FiGithub /> Repo (Coming Soon)
                            </button>
                            <button className="flex items-center gap-2 px-6 py-3 bg-[#FF4D00] text-white font-bold uppercase text-xs hover:bg-white hover:text-[#FF4D00] transition-colors">
                                <FiDownload /> Download PDF
                            </button>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}