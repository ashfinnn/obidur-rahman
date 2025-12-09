"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiChevronDown,
  FiExternalLink,
  FiPlay,
  FiPause,
} from "react-icons/fi";

interface Project {
  id: string;
  title: string;
  category: string;
  color: string;
  src: string;
  desc: string;
  tech: string[];
  link: string;
  github: string;
  year: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Efficient Leaf Disease Detection",
    category: "Computer Vision",
    color: "#10b981",
    src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop",
    desc: "A lightweight deep learning model achieving 98.5% accuracy for real-time plant disease classification, optimized for edge devices and mobile deployment.",
    tech: ["PyTorch", "ONNX", "FastAPI", "Docker"],
    link: "https://github.com/ashfinnn/efficient-leaf-disease",
    github: "https://github.com/ashfinnn/efficient-leaf-disease",
    year: "2024",
  },
  {
    id: "02",
    title: "Geometric Dilution Framework",
    category: "Research",
    color: "#06b6d4",
    src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
    desc: "Theoretical framework with mathematical proofs demonstrating SMOTE limitations in high-dimensional feature spaces, published with visual demonstrations.",
    tech: ["Python", "NumPy", "Scikit-learn", "LaTeX"],
    link: "https://github.com/ashfinnn/geometric-dilution",
    github: "https://github.com/ashfinnn/geometric-dilution",
    year: "2024",
  },
  {
    id: "03",
    title: "Portfolio V2",
    category: "Full Stack",
    color: "#8b5cf6",
    src: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    desc: "High-performance portfolio with advanced animations, 3D interactions, and WCAG 2.1 AA accessibility compliance. Built for speed and elegance.",
    tech: ["Next.js", "Framer Motion", "Tailwind", "Three.js"],
    link: "https://obidur.vercel.app",
    github: "https://github.com/ashfinnn/obidur-rahman",
    year: "2024",
  },
  {
    id: "04",
    title: "Neural Style Transfer",
    category: "Machine Learning",
    color: "#f59e0b",
    src: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2072&auto=format&fit=crop",
    desc: "Browser-based artistic style transfer using WebGPU acceleration. Transform any image into artwork inspired by famous painters in real-time.",
    tech: ["TensorFlow.js", "WebGPU", "React", "Vite"],
    link: "https://github.com/ashfinnn/neural-style",
    github: "https://github.com/ashfinnn/neural-style",
    year: "2023",
  },
];

// 3D Tilt Card
const TiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Mobile Project Card
const MobileProjectCard = ({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div
        onClick={onToggle}
        className={`relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
          isExpanded
            ? "border-white/20 bg-white/[0.08]"
            : "border-white/[0.08] bg-white/[0.02]"
        }`}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.src}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isExpanded ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />

          {/* Category */}
          <div className="absolute top-4 left-4">
            <div
              className="px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 text-xs font-medium"
              style={{
                backgroundColor: `${project.color}15`,
                color: project.color,
              }}
            >
              {project.category}
            </div>
          </div>

          {/* Year */}
          <div className="absolute top-4 right-4 text-xs font-mono text-white/40">
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <span className="text-xs font-mono text-white/30">
                  {project.id}
                </span>
              </div>
              <h3 className="text-xl font-semibold leading-tight">
                {project.title}
              </h3>
            </div>

            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-full bg-white/5 flex-shrink-0"
            >
              <FiChevronDown className="text-white/50" size={18} />
            </motion.div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-5 mt-5 border-t border-white/[0.06]">
                  <p className="text-[15px] text-white/60 leading-relaxed mb-5">
                    {project.desc}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/[0.06] text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-medium text-sm transition-transform active:scale-[0.98]"
                    >
                      View Project
                      <FiExternalLink size={14} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-xl bg-white/10 border border-white/[0.08] transition-colors hover:bg-white/15"
                    >
                      <FiGithub size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate
  useEffect(() => {
    if (isAutoPlaying && !hoveredId) {
      autoPlayRef.current = setInterval(() => {
        setActiveProject((prev) => {
          const idx = projects.findIndex((p) => p.id === prev.id);
          return projects[(idx + 1) % projects.length];
        });
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, hoveredId]);

  const currentIndex = projects.findIndex((p) => p.id === activeProject.id);

  const navigate = useCallback((dir: "prev" | "next") => {
    setIsAutoPlaying(false);
    setActiveProject((prev) => {
      const idx = projects.findIndex((p) => p.id === prev.id);
      const newIdx =
        dir === "next"
          ? (idx + 1) % projects.length
          : (idx - 1 + projects.length) % projects.length;
      return projects[newIdx];
    });
  }, []);

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowDown" || e.key === "ArrowRight") navigate("next");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#030303] text-white flex flex-col selection:bg-white/20"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-indigo-500/[0.07] to-purple-500/[0.07] blur-[100px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-tr from-emerald-500/[0.05] to-cyan-500/[0.05] blur-[100px] -translate-x-1/4 translate-y-1/4" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-20 lg:py-0">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 lg:pt-16 pb-12 lg:pb-0"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.25em]">
                  Selected Works
                </span>
              </motion.div>

              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.1]">
                Featured
                <span className="text-white/20 ml-4">Projects</span>
              </h2>
            </div>

            <a
              href="https://github.com/Ashfinn"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden lg:flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"
            >
              <FiGithub size={16} className="text-white/60" />
              <span className="text-sm font-medium text-white/80">
                View All on GitHub
              </span>
              <FiArrowUpRight
                size={14}
                className="text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.header>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-1 items-center gap-16 xl:gap-24 py-12">
          {/* Left - Project List */}
          <div className="w-[380px] xl:w-[420px] flex-shrink-0">
            <div className="space-y-1">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => {
                    setActiveProject(project);
                    setHoveredId(project.id);
                    setIsAutoPlaying(false);
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative group cursor-pointer"
                >
                  <div
                    className={`relative z-10 p-5 rounded-2xl border transition-all duration-400 ${
                      activeProject.id === project.id
                        ? "bg-white/[0.04] border-white/[0.08]"
                        : "bg-transparent border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      {/* Animated Dot */}
                      <div className="relative">
                        <motion.div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: project.color }}
                          animate={{
                            scale: activeProject.id === project.id ? 1 : 0.7,
                            opacity: activeProject.id === project.id ? 1 : 0.4,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        {activeProject.id === project.id && (
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: project.color }}
                            animate={{
                              scale: [1, 2, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-mono text-white/25">
                            {project.id}
                          </span>
                          <span className="text-[10px] text-white/20 font-mono">
                            {project.year}
                          </span>
                        </div>
                        <h3
                          className={`text-lg font-medium truncate transition-colors duration-300 ${
                            activeProject.id === project.id
                              ? "text-white"
                              : "text-white/50"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p className="text-xs text-white/30 font-mono uppercase tracking-widest mt-1">
                          {project.category}
                        </p>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        animate={{
                          opacity: activeProject.id === project.id ? 1 : 0,
                          x: activeProject.id === project.id ? 0 : -10,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiArrowUpRight className="text-white/40" size={18} />
                      </motion.div>
                    </div>

                    {/* Progress bar for auto-play */}
                    {isAutoPlaying && activeProject.id === project.id && (
                      <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: project.color }}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                          key={`progress-${project.id}`}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.06]">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  isAutoPlaying
                    ? "bg-white/10 text-white"
                    : "bg-white/[0.03] text-white/50 border border-white/[0.06]"
                }`}
              >
                {isAutoPlaying ? <FiPause size={12} /> : <FiPlay size={12} />}
                {isAutoPlaying ? "Playing" : "Paused"}
              </button>

              <div className="flex-1" />

              <span className="text-xs font-mono text-white/30">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right - Preview */}
          <div className="flex-1 h-[70vh] min-h-[500px] max-h-[700px]">
            <AnimatePresence mode="wait">
              <TiltCard key={activeProject.id} className="w-full h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/[0.08] bg-[#0a0a0a]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Image */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={activeProject.src}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/20" />
                  </motion.div>

                  {/* Category Badge */}
                  <div
                    className="absolute top-8 left-8 px-4 py-2 rounded-full backdrop-blur-xl border border-white/10"
                    style={{
                      backgroundColor: `${activeProject.color}15`,
                      transform: "translateZ(50px)",
                    }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: activeProject.color }}
                    >
                      {activeProject.category}
                    </span>
                  </div>

                  {/* Year */}
                  <div
                    className="absolute top-8 right-8 text-sm font-mono text-white/30"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    {activeProject.year}
                  </div>

                  {/* Content */}
                  <div
                    className="absolute inset-x-0 bottom-0 p-10 xl:p-12"
                    style={{ transform: "translateZ(60px)" }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                    >
                      {/* Number + Line */}
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-5xl xl:text-6xl font-bold font-mono text-white/10">
                          {activeProject.id}
                        </span>
                        <div
                          className="w-16 h-[2px] rounded-full"
                          style={{ backgroundColor: activeProject.color }}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl xl:text-4xl font-bold mb-4 tracking-tight leading-tight">
                        {activeProject.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/60 text-base xl:text-lg leading-relaxed max-w-xl mb-8">
                        {activeProject.desc}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {activeProject.tech.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 + idx * 0.05 }}
                            className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.06] text-white/50"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4">
                        <motion.a
                          href={activeProject.link}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group flex items-center gap-3 px-7 py-4 rounded-2xl bg-white text-black font-semibold transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                        >
                          <span>View Project</span>
                          <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.a>

                        <motion.a
                          href={activeProject.github}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-4 rounded-2xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/10 transition-colors"
                        >
                          <FiGithub size={20} />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none"
                    style={{ backgroundColor: activeProject.color }}
                  />
                </motion.div>
              </TiltCard>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex-1 pb-12">
          <div className="space-y-4">
            {projects.map((project, index) => (
              <MobileProjectCard
                key={project.id}
                project={project}
                index={index}
                isExpanded={mobileExpanded === project.id}
                onToggle={() =>
                  setMobileExpanded(
                    mobileExpanded === project.id ? null : project.id,
                  )
                }
              />
            ))}
          </div>

          {/* Mobile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <a
              href="https://github.com/Ashfinn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium"
            >
              <FiGithub size={16} />
              View All Projects
              <FiArrowUpRight size={14} className="text-white/40" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
};

export default ProjectsSection;
