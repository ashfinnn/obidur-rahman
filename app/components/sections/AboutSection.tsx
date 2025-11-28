"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiAwslambda,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { FiCpu, FiTerminal, FiLayers, FiDatabase } from "react-icons/fi";

const stack = [
  {
    category: "INTELLIGENCE",
    icon: <FiCpu />,
    tools: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-Learn", icon: null },
    ],
  },
  {
    category: "ENGINEERING",
    icon: <FiTerminal />,
    tools: [
      { name: "Python", icon: SiPython },
      { name: "Docker", icon: SiDocker },
      { name: "AWS Lambda", icon: SiAwslambda },
    ],
  },
  {
    category: "INTERFACE",
    icon: <FiLayers />,
    tools: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: null },
    ],
  },
  {
    category: "DATA",
    icon: <FiDatabase />,
    tools: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Vector DB", icon: null },
      { name: "Pandas", icon: null },
    ],
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#f4f4f0] text-black flex items-center py-24 lg:py-0 overflow-hidden"
    >
      {/* Static Grid Background (Zero Lag) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:pl-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* LEFT: The Manifesto */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 border border-cyan-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-600" />
                </div>
                <span className="font-mono text-xs text-cyan-700 tracking-widest uppercase">
                  01 // Philosophy
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                Signal <br />
                <span className="text-gray-400">Over Noise</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg font-light text-gray-800 leading-relaxed">
              <p>
                Data Science is often treated as magic. I treat it as{" "}
                <strong className="font-bold border-b-2 border-cyan-200">
                  Engineering
                </strong>
                .
              </p>
              <p>
                My work bridges the gap between theoretical research and
                production software. I don't just train models in isolation; I
                architect the entire pipeline—from raw data ingestion to
                scalable edge deployment using <strong>Next.js</strong> and{" "}
                <strong>AWS</strong>.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: The Tech Spec Sheet */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
              {stack.map((group) => (
                <div
                  key={group.category}
                  className="bg-[#f4f4f0] p-8 hover:bg-white transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-2xl text-cyan-700">{group.icon}</div>
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                      {group.category}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {group.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-3 group/item cursor-default"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-300 group-hover/item:bg-cyan-600 transition-colors rounded-full" />
                        <span className="text-sm font-bold text-gray-700 group-hover/item:text-black transition-colors">
                          {tool.name}
                        </span>
                        {tool.icon && (
                          <tool.icon className="ml-auto text-gray-300 group-hover/item:text-black transition-colors" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
