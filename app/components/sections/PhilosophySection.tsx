"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiPostgresql,
  SiDocker,
  SiAwslambda,
  SiNextdotjs,
  SiTypescript,
  SiPlotly,
  SiTableau,
  SiGit,
} from "react-icons/si";
import { FiCpu, FiLayers, FiTerminal, FiActivity } from "react-icons/fi";

// --- STABLE SCRAMBLE ---
// (Reuse the ScrambleText component from your previous files to keep code dry,
// or copy it here if you need it standalone)

const skillsData = [
  {
    category: "Core Compute",
    icon: <FiTerminal className="text-cyan-500" />,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: SiPostgresql },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    category: "Intelligence Engines",
    icon: <FiCpu className="text-cyan-500" />,
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-Learn", icon: SiScikitlearn },
      { name: "Pandas/Numpy", icon: SiPandas },
    ],
  },
  {
    category: "Deployment & MLOps",
    icon: <FiLayers className="text-cyan-500" />,
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAwslambda },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "CI/CD", icon: null }, // Generic icon or text only
    ],
  },
  {
    category: "Visualization",
    icon: <FiActivity className="text-cyan-500" />,
    skills: [
      { name: "Plotly", icon: SiPlotly },
      { name: "Matplotlib", icon: null },
      { name: "Tableau", icon: SiTableau },
      { name: "Seaborn", icon: null },
    ],
  },
];

const PhilosophySection = () => {
  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#050505] text-white py-24 lg:py-32 z-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-cyan-900/5 to-transparent pointer-events-none" />

      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:pl-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: The Manifesto (Philosophy) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[1px] bg-cyan-500" />
                <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase">
                  01 // Methodology
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
                From Noise <br />
                <span className="text-gray-500">To Signal</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Data Science is often treated as a black box. I believe in{" "}
                <strong className="text-white">transparency</strong>. My
                approach combines rigorous mathematical theory with
                production-grade software engineering.
              </p>
              <p>
                I don't just train models in notebooks; I architect systems. By
                leveraging{" "}
                <span className="text-cyan-400">Next.js and TypeScript</span>{" "}
                alongside Python, I bridge the gap between research and
                real-world application, ensuring that insights are not just
                accurate, but accessible and deployable.
              </p>
              <p className="font-mono text-xs text-gray-500 border-l border-white/10 pl-4">
                "Reproducibility is not an afterthought; it is the foundation of
                intelligence."
              </p>
            </div>
          </div>

          {/* RIGHT: The Arsenal (Skills) */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <h3 className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-2">
                02 // Technical Arsenal
              </h3>
              <div className="w-full h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillsData.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-sm group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-2 bg-cyan-900/20 rounded text-xl">
                      {group.icon}
                    </span>
                    <span className="font-mono text-xs text-gray-300 uppercase tracking-wider">
                      {group.category}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between group/skill"
                      >
                        <div className="flex items-center gap-3">
                          {skill.icon && (
                            <skill.icon className="text-gray-600 group-hover/skill:text-white transition-colors" />
                          )}
                          <span className="text-sm text-gray-400 group-hover/skill:text-cyan-400 transition-colors font-mono">
                            {skill.name}
                          </span>
                        </div>
                        {/* Decor Line */}
                        <div className="h-px w-0 group-hover/skill:w-4 bg-cyan-500 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
