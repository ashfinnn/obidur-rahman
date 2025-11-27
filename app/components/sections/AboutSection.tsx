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
} from "react-icons/si";

const AboutSection = () => {
  const skills = [
    { name: "Python", icon: SiPython },
    { name: "PyTorch", icon: SiPytorch },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "SQL", icon: SiPostgresql },
    { name: "Docker", icon: SiDocker },
    { name: "AWS", icon: SiAwslambda },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Next.js", icon: SiNextdotjs },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#f4f4f0] text-black min-h-screen flex items-center py-24 z-20 overflow-hidden"
    >
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:pl-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LEFT: The Statement */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-cyan-700 tracking-widest uppercase">
                01 // The Philosophy
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-[0.9] mb-10">
              Decoding <br />
              <span className="text-gray-300">Complexity</span>
            </h2>

            <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light text-gray-800 max-w-2xl border-l-2 border-black/5 pl-8">
              <p>
                Data is just noise until you give it structure. My work sits at
                the intersection of{" "}
                <strong className="font-bold">Statistical Rigor</strong> and{" "}
                <strong className="font-bold">Engineering Precision</strong>.
              </p>
              <p>
                I don't just build models; I build pipelines. From raw math in a
                notebook to scalable deployment on the edge, I handle the full
                lifecycle of intelligence.
              </p>
            </div>
          </div>

          {/* RIGHT: The Visual Stack */}
          <div className="lg:col-span-5">
            <div className="relative p-8 border border-black/5 bg-white shadow-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-600" />
              <div className="mb-6 flex justify-between items-center">
                <span className="font-mono text-xs text-gray-400">
                  STACK_CONFIG.JSON
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400/20" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/20" />
                  <div className="w-2 h-2 rounded-full bg-green-400/20" />
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-gray-400">CORE_LANG</span>
                  <span className="text-black font-bold">PYTHON 3.11+</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-gray-400">FRAMEWORK</span>
                  <span className="text-black font-bold">PYTORCH / TF</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-gray-400">INFRA</span>
                  <span className="text-black font-bold">AWS / DOCKER</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="text-gray-400">FRONTEND</span>
                  <span className="text-black font-bold">NEXT.JS / TS</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5 grid grid-cols-4 gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {skills.map((s) => (
                  <s.icon
                    key={s.name}
                    className="text-2xl mx-auto hover:text-cyan-600 transition-colors"
                    title={s.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
