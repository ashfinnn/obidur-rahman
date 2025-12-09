"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiPython,
  SiPytorch,
  SiDocker,
  SiNextdotjs,
  SiTypescript,
  SiFastapi,
  SiKubernetes,
  SiScikitlearn,
} from "react-icons/si";

const AboutSection = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techCategories = [
    {
      label: "ML",
      color: "#06B6D4",
      items: [
        { Icon: SiPython, name: "Python", color: "#3776AB" },
        { Icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
        { Icon: SiScikitlearn, name: "Sklearn", color: "#F7931E" },
      ],
    },
    {
      label: "Infra",
      color: "#8B5CF6",
      items: [
        { Icon: SiDocker, name: "Docker", color: "#2496ED" },
        { Icon: SiKubernetes, name: "K8s", color: "#326CE5" },
      ],
    },
    {
      label: "Web",
      color: "#10B981",
      items: [
        { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
      ],
    },
  ];

  const highlights = [
    { word: "craft", color: "cyan" },
    { word: "clarity", color: "violet" },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-neutral-50 overflow-hidden"
    >
      {/* Interactive background - responds to scroll subtly */}
      <motion.div
        className="absolute top-0 left-12 md:left-24 w-px h-full bg-neutral-200"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Section indicator - interactive */}
        <motion.div
          className="flex items-baseline gap-4 mb-16 cursor-default select-none"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-7xl md:text-8xl font-black text-neutral-200"
            whileHover={{
              color: "#06B6D4",
              transition: { duration: 0.2 },
            }}
          >
            01
          </motion.span>
          <span className="text-sm font-mono text-neutral-400 tracking-wide">
            ABOUT
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Statement */}
          <div className="lg:col-span-2 space-y-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-snug max-w-2xl"
            >
              I&apos;m a machine learning engineer who cares about
              <motion.span
                className="relative mx-2 cursor-pointer inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">craft</span>
                <motion.span
                  className="absolute bottom-1 left-0 w-full h-2 bg-cyan-200"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                />
              </motion.span>
              — building systems that are as elegant as they are effective.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-500 text-lg leading-relaxed max-w-xl"
            >
              Three years of shipping models to production taught me that good
              ML isn&apos;t about complexity—it&apos;s about{" "}
              <motion.span
                className="relative cursor-pointer text-neutral-700 font-medium"
                whileHover={{ color: "#8B5CF6" }}
              >
                clarity
                <motion.span
                  className="absolute -bottom-px left-0 w-full h-px bg-violet-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.span>
              . I work at the intersection of research and engineering.
            </motion.p>

            {/* What I do - Interactive list */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-4 space-y-2"
            >
              {[
                "Design and deploy production ML pipelines",
                "Build full-stack applications with AI capabilities",
                "Optimize models for scale and efficiency",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 py-2 px-3 -mx-3 rounded-lg cursor-default group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{
                    backgroundColor: "rgba(0,0,0,0.02)",
                    x: 4,
                  }}
                >
                  <motion.span
                    className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  />
                  <span className="text-neutral-600 group-hover:text-neutral-900 transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tech stack - Interactive cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <span className="text-xs font-mono text-neutral-400 tracking-wider mb-6 block">
                TOOLS I USE
                {hoveredTech && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-2 text-neutral-600"
                  >
                    → {hoveredTech}
                  </motion.span>
                )}
              </span>

              <div className="space-y-3">
                {techCategories.map((category, catIndex) => (
                  <motion.div
                    key={category.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + catIndex * 0.1 }}
                    className="p-4 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors group"
                    whileHover={{
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                      y: -2,
                    }}
                  >
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider"
                      style={{ color: category.color }}
                    >
                      {category.label}
                    </span>
                    <div className="flex gap-3 mt-3">
                      {category.items.map((tech) => (
                        <motion.div
                          key={tech.name}
                          className="relative cursor-pointer"
                          onHoverStart={() => setHoveredTech(tech.name)}
                          onHoverEnd={() => setHoveredTech(null)}
                          whileHover={{ scale: 1.15, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          <tech.Icon
                            className="text-2xl transition-all duration-200"
                            style={{ color: tech.color }}
                          />
                          {/* Glow effect on hover */}
                          <motion.div
                            className="absolute inset-0 rounded-full blur-lg opacity-0 -z-10"
                            style={{ backgroundColor: tech.color }}
                            whileHover={{ opacity: 0.3, scale: 2 }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats - Animated counters feel */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "3+", label: "Years", delay: 0 },
                    { value: "20+", label: "Projects", delay: 0.1 },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      className="cursor-default group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + stat.delay }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.span
                        className="text-2xl font-semibold text-neutral-900 block"
                        whileHover={{ color: "#06B6D4" }}
                        transition={{ duration: 0.2 }}
                      >
                        {stat.value}
                      </motion.span>
                      <span className="text-xs text-neutral-500 group-hover:text-neutral-700 transition-colors">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Subtle CTA */}
              <motion.a
                href="#projects"
                className="mt-8 flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-900 transition-colors group cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <span>See my work</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  className="group-hover:text-cyan-500"
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
