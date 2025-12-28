"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    FiArrowLeft, FiMenu, FiX, FiGithub, FiDownload,
    FiCpu, FiActivity, FiAlertTriangle, FiCheckCircle, FiChevronRight
} from "react-icons/fi";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function LeafDiseasePage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("abstract");

    // Smooth Scroll Progress Bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Active Section Spy
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['abstract', 'intro', 'methodology', 'results', 'discussion', 'future'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Active if top of section is within upper 30% of screen
                    if (rect.top >= 0 && rect.top <= window.innerHeight * 0.3) {
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

            {/* PROGRESS BAR */}
            <div className="fixed top-0 left-0 w-full h-1.5 z-[60] bg-transparent">
                <motion.div
                    className="h-full bg-[#FF4D00] origin-left"
                    style={{ scaleX }}
                />
            </div>

            {/* MOBILE HEADER */}
            <nav className="lg:hidden fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#E5E5E5] flex justify-between items-center px-6 h-16">
                <Link href="/" className="flex items-center gap-2 text-xs font-bold uppercase hover:text-[#FF4D00] transition-colors">
                    <FiArrowLeft /> Back
                </Link>
                <div className="text-[10px] font-black uppercase leading-none tracking-tight text-right">
                    CPU-Constrained<br />Deep Learning
                </div>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -mr-2">
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
                    >
                        <div className="flex flex-col gap-6 text-2xl font-black uppercase tracking-tighter">
                            {['Abstract', 'Introduction', 'Methodology', 'Results', 'Discussion', 'Future'].map((item, i) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item.toLowerCase())}
                                    className="text-left border-b border-gray-100 pb-4 flex items-center justify-between group"
                                >
                                    <span>0{i} . {item}</span>
                                    <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[#FF4D00]" />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col lg:flex-row min-h-screen lg:pt-0 pt-16">

                {/* SIDEBAR NAVIGATION (Desktop) */}
                <aside className="hidden lg:flex w-[320px] h-screen fixed top-0 left-0 border-r border-[#E5E5E5] flex-col justify-between bg-white z-20 overflow-y-auto no-scrollbar">
                    <div>
                        {/* Brand / Back */}
                        <div className="p-8 border-b border-[#E5E5E5]">
                            <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400 hover:text-[#FF4D00] mb-8 transition-colors">
                                <FiArrowLeft /> Return to Index
                            </Link>
                            <h1 className="text-3xl font-black uppercase leading-[0.85] tracking-tighter mb-4">
                                Tomato<br />Disease<br />Detection
                            </h1>
                            <div className="flex items-center gap-2 bg-[#FF4D00]/10 w-fit px-2 py-1 rounded">
                                <span className="w-1.5 h-1.5 bg-[#FF4D00] animate-pulse rounded-full"></span>
                                <span className="text-[9px] font-bold uppercase tracking-widest text-[#FF4D00]">Research Paper '24</span>
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
                                    className={`
                                        px-8 py-4 border-b border-[#E5E5E5] flex items-center justify-between transition-all duration-300 text-left
                                        ${activeSection === item.id
                                            ? 'text-black bg-gray-50 border-l-[4px] border-l-[#FF4D00] pl-7'
                                            : 'hover:bg-gray-50 hover:text-black'}
                                    `}
                                >
                                    <span>{item.label}</span>
                                    {activeSection === item.id && <motion.span layoutId="activeDot" className="w-1.5 h-1.5 bg-[#FF4D00] rounded-full" />}
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
                <main className="lg:ml-[320px] w-full relative">

                    {/* HERO / TITLE SECTION */}
                    <section className="min-h-[85vh] flex flex-col justify-center p-6 lg:p-24 border-b border-[#E5E5E5]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-block border border-black px-3 py-1 mb-8 w-fit"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black">Traditional vs. Modern vs. Hybrid Models</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl lg:text-7xl font-black uppercase mb-12 max-w-5xl leading-[0.9] tracking-tighter text-black"
                        >
                            CPU-Constrained Deep Learning for Tomato Disease Detection
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid lg:grid-cols-2 gap-12 pt-12 border-t border-black"
                        >
                            <div>
                                <p className="text-lg lg:text-xl font-medium leading-relaxed text-gray-800">
                                    Agriculture faces a <span className="bg-black text-white px-1 font-bold">40% yield loss</span> from disease. While GPUs power modern AI, they are inaccessible to developing regions. This study bridges the gap.
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
                        </motion.div>
                    </section>

                    {/* ABSTRACT */}
                    <section id="abstract" className="p-6 lg:p-24 border-b border-[#E5E5E5] bg-[#FAFAFA]">
                        <div className="max-w-4xl">
                            <span className="font-mono text-xs font-bold uppercase text-gray-400 mb-6 block tracking-widest">00 // Abstract</span>
                            <p className="text-lg md:text-2xl leading-relaxed font-serif text-gray-800">
                                Tomato diseases like early/late blight reduce yields by up to 40%. While deep learning excels at detection, most solutions require GPUs. This study evaluates ResNet-50, ConvNeXt-Tiny, and FastViT-T8 under CPU constraints. FastViT-T8 emerged optimal: <strong>99.66% accuracy</strong> with superior efficiency (<strong>0.022s per image</strong>), ideal for real-time field use.
                            </p>
                        </div>
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
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Prior studies relied on NVIDIA Tesla/RTX GPUs, financially inaccessible to smallholder farmers. Our objective was to identify a model that balances <strong>accuracy</strong> and <strong>speed</strong> on consumer-grade hardware (AMD Ryzen 5).
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-[#F4F4F5] p-8 border border-[#E5E5E5]">
                                        <FiCpu className="text-4xl mb-4 text-gray-400" />
                                        <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Constraint</h4>
                                        <p className="text-sm text-gray-600">No GPU Acceleration. Pure CPU Inference on consumer hardware.</p>
                                    </div>
                                    <div className="bg-[#F4F4F5] p-8 border border-[#E5E5E5]">
                                        <FiActivity className="text-4xl mb-4 text-[#FF4D00]" />
                                        <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Goal</h4>
                                        <p className="text-sm text-gray-600">Real-time classification with &gt;99% Accuracy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. METHODOLOGY */}
                    <section id="methodology" className="border-b border-[#E5E5E5]">
                        <div className="p-6 lg:p-12 bg-black text-white border-b border-gray-800 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <span className="font-mono text-xs font-bold text-[#FF4D00] uppercase tracking-widest mb-2 block">02 // Protocol</span>
                                <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">Methodology</h2>
                            </div>
                            <div className="flex gap-4 text-xs font-mono text-gray-500 uppercase">
                                <span>16,012 Images</span>
                                <span>/</span>
                                <span>10 Classes</span>
                                <span>/</span>
                                <span>2-Phase Transfer</span>
                            </div>
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
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Hybrid (Rec.)</span>
                                    <span className="font-mono text-xs bg-white text-black px-2 py-1 font-bold">4.03M Params</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">FastViT-T8</h3>
                                <p className="text-sm text-white/90 leading-relaxed">Hybrid CNN-Transformer. <span className="underline decoration-black decoration-2">6x smaller</span> than competitors. Optimized for edge inference.</p>
                            </div>
                        </div>

                        {/* Hardware Specs */}
                        <div className="p-6 lg:p-12 bg-[#FAFAFA] border-t border-[#E5E5E5]">
                            <div className="grid md:grid-cols-4 gap-8">
                                <SpecItem label="Hardware" title="AMD Ryzen 5" desc="5600G (6C/12T)" />
                                <SpecItem label="Optimization" title="AdamW" desc="Weight Decay 1e-4" />
                                <SpecItem label="Learning Rate" title="Two-Phase" desc="1e-4 frozen / 5e-5 fine-tune" />
                                <SpecItem label="Dataset" title="PlantVillage" desc="16k Images / Stratified Split" />
                            </div>
                        </div>
                    </section>

                    {/* 3. RESULTS */}
                    <section id="results" className="p-6 lg:p-24 border-b border-[#E5E5E5]">
                        <div className="mb-16">
                            <span className="font-mono text-xs font-bold uppercase text-gray-400 mb-2 block tracking-widest">03 // Benchmarks</span>
                            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight">Performance<br />Analysis</h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                            {/* Efficiency Chart */}
                            <div>
                                <h3 className="font-bold text-sm uppercase border-b border-black pb-4 mb-8">Inference Speed (Lower is Better)</h3>
                                <div className="space-y-8 font-mono text-xs">
                                    <BarChart
                                        label="FastViT-T8"
                                        value="0.022s"
                                        width="40%"
                                        color="#FF4D00"
                                    />
                                    <div className="opacity-50">
                                        <BarChart
                                            label="ConvNeXt-Tiny"
                                            value="0.051s"
                                            width="92%"
                                            color="#000"
                                        />
                                    </div>
                                    <div className="opacity-30">
                                        <BarChart
                                            label="ResNet-50"
                                            value="0.055s"
                                            width="100%"
                                            color="#000"
                                        />
                                    </div>
                                </div>
                                <p className="mt-8 text-xs text-gray-500 font-medium">
                                    * FastViT is 57% faster than ConvNeXt-Tiny on the same CPU hardware.
                                </p>
                            </div>

                            {/* Accuracy Stats */}
                            <div>
                                <h3 className="font-bold text-sm uppercase border-b border-black pb-4 mb-8">Top Model Metrics (ConvNeXt)</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <StatBox value="99.88%" label="Accuracy" />
                                    <StatBox value="0.998" label="F1-Score" />
                                    <div className="p-8 bg-[#FAFAFA] border border-[#E5E5E5] text-center col-span-2">
                                        <div className="text-5xl font-black mb-2 text-[#FF4D00]">100%</div>
                                        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">On 4 Classes (Healthy, Bacterial Spot, etc.)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. DISCUSSION & LIMITATIONS */}
                    <section id="discussion" className="grid lg:grid-cols-2 border-b border-[#E5E5E5]">
                        <div className="p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#E5E5E5]">
                            <h3 className="text-2xl font-bold uppercase mb-8">Critical<br />Limitations</h3>
                            <ul className="space-y-8">
                                <LimitationItem title="Data Leakage Risk" desc="Images were split randomly, not by plant ID. Reported accuracies are likely upper bounds." />
                                <LimitationItem title="Lab Conditions" desc="Dataset contains controlled backgrounds. Field performance with complex backgrounds will vary." />
                                <LimitationItem title="Single Seed" desc="Results based on seed=42. Multi-seed validation needed for statistical significance of the 0.22% gap." />
                            </ul>
                        </div>

                        <div className="p-6 lg:p-12 bg-[#FAFAFA]">
                            <h3 className="text-2xl font-bold uppercase mb-8">Decision<br />Guide</h3>
                            <div className="space-y-4">
                                <div className="bg-white p-8 border border-[#E5E5E5] shadow-sm">
                                    <h4 className="font-bold text-[#FF4D00] uppercase text-xs tracking-widest mb-1">Recommendation A</h4>
                                    <p className="font-bold text-xl mb-2">Real-Time Field Use</p>
                                    <p className="text-sm text-gray-600">Use <strong>FastViT-T8</strong>. It sacrifices negligible accuracy (0.2%) for a 2x speedup.</p>
                                </div>
                                <div className="bg-white p-8 border border-[#E5E5E5] shadow-sm opacity-60">
                                    <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-1">Recommendation B</h4>
                                    <p className="font-bold text-xl mb-2">Lab Diagnosis</p>
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
                            <div className="grid md:grid-cols-2 gap-12 text-sm text-gray-400 leading-relaxed">
                                <p>
                                    <strong className="text-white block mb-2 text-lg">Statistical Rigor</strong>
                                    Conduct multi-seed experiments (McNemar&apos;s test) to scientifically validate findings and eliminate random chance.
                                </p>
                                <p>
                                    <strong className="text-white block mb-2 text-lg">Mobile Integration</strong>
                                    Quantize FastViT-T8 for offline mobile application deployment to help farmers in remote areas without internet access.
                                </p>
                                <p>
                                    <strong className="text-white block mb-2 text-lg">Field Validation</strong>
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
                            {/* Placeholder Links */}
                            <button disabled className="flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-500 font-bold uppercase text-xs cursor-not-allowed">
                                <FiGithub /> Repo (Private)
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

// --- SUB COMPONENTS FOR CLEANER CODE ---

const BarChart = ({ label, value, width, color }: { label: string, value: string, width: string, color: string }) => (
    <div>
        <div className="flex justify-between mb-2 font-bold">
            <span>{label}</span>
            <span style={{ color }}>{value} / img</span>
        </div>
        <div className="w-full h-8 bg-[#F0F0F0] relative overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width }}
                transition={{ duration: 1, ease: "circOut" }}
                className="absolute top-0 left-0 h-full"
                style={{ backgroundColor: color }}
            />
        </div>
    </div>
)

const StatBox = ({ value, label }: { value: string, label: string }) => (
    <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] text-center">
        <div className="text-4xl font-black mb-1">{value}</div>
        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{label}</div>
    </div>
)

const SpecItem = ({ label, title, desc }: { label: string, title: string, desc: string }) => (
    <div>
        <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-gray-400">{label}</h4>
        <p className="font-bold text-lg">{title}</p>
        <p className="text-xs text-gray-500 font-mono mt-1">{desc}</p>
    </div>
)

const LimitationItem = ({ title, desc }: { title: string, desc: string }) => (
    <div className="flex gap-4">
        <div className="mt-1">
            <FiAlertTriangle className="text-[#FF4D00]" size={20} />
        </div>
        <div>
            <h4 className="font-bold text-sm uppercase tracking-wide">{title}</h4>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{desc}</p>
        </div>
    </div>
)