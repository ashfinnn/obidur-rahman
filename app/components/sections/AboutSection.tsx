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

// Categorized by Importance (Tiers)
const stack = [
  {
    tier: "CORE WEAPONS",
    scale: "large", // Visual weight
    tools: [
      { name: "Python", icon: SiPython },
      { name: "PyTorch", icon: SiPytorch },
      { name: "SQL", icon: SiPostgresql },
    ],
  },
  {
    tier: "PRODUCTION STACK",
    scale: "medium",
    tools: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAwslambda },
    ],
  },
  {
    tier: "FULL STACK & EXTRAS",
    scale: "small",
    tools: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Scikit-Learn", icon: null },
    ],
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#f4f4f0] text-black flex items-center py-24 lg:py-0 overflow-hidden"
    >
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
          <div className="lg:col-span-5 space-y-10">
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

            {/* Micro-Paragraphs (Friendly Tone) */}
            <div className="space-y-6 text-lg font-light text-gray-800 leading-relaxed">
              <p>
                Data Science often feels like magic. I prefer to treat it as{" "}
                <strong>Engineering</strong>.
              </p>
              <p>
                My work connects the dots between complex research and actual
                software people use.
              </p>
              <p>
                I build the whole system—from gathering raw data to deploying
                models that scale on the web.
              </p>
            </div>
          </div>

          {/* RIGHT: Tiered Skills Grid */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {stack.map((group, i) => (
                <motion.div
                  key={group.tier}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-t border-black/10 pt-6"
                >
                  <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4">
                    {group.tier}
                  </h4>

                  <div className="flex flex-wrap gap-4 md:gap-8">
                    {group.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-3 group cursor-default"
                      >
                        {tool.icon && (
                          <tool.icon
                            className={`transition-colors group-hover:text-cyan-700 text-gray-800
                                                    ${group.scale === "large" ? "text-3xl md:text-4xl" : ""}
                                                    ${group.scale === "medium" ? "text-2xl md:text-3xl" : ""}
                                                    ${group.scale === "small" ? "text-xl" : ""}
                                                `}
                          />
                        )}
                        <span
                          className={`font-bold transition-colors group-hover:text-cyan-700
                                                ${group.scale === "large" ? "text-2xl md:text-3xl text-black" : ""}
                                                ${group.scale === "medium" ? "text-lg md:text-xl text-gray-700" : ""}
                                                ${group.scale === "small" ? "text-sm md:text-base text-gray-500" : ""}
                                            `}
                        >
                          {tool.name}
                        </span>
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

export default AboutSection;
