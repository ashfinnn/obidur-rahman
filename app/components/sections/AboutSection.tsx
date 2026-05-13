"use client";

import { motion } from "framer-motion";
import {
  FiCpu, FiEye, FiZap, FiBook, FiCode, FiCornerDownRight,
} from "react-icons/fi";
import {
  SiPython, SiPytorch, SiTensorflow, SiNextdotjs, SiTypescript,
  SiNumpy, SiPandas, SiScikitlearn, SiGit, SiFastapi, SiOpencv, SiScipy,
} from "react-icons/si";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const DISCIPLINES = [
  { icon: FiCpu,  label: "Deep Learning"    },
  { icon: FiEye,  label: "Computer Vision"  },
  { icon: FiZap,  label: "Compression"      },
  { icon: FiBook, label: "Research"         },
  { icon: FiCode, label: "Engineering"      },
];

const TECH = [
  { name: "Python",     icon: SiPython     },
  { name: "PyTorch",    icon: SiPytorch    },
  { name: "OpenCV",     icon: SiOpencv     },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "NumPy",      icon: SiNumpy      },
  { name: "SciPy",      icon: SiScipy      },
  { name: "Next.js",    icon: SiNextdotjs  },
  { name: "TypeScript", icon: SiTypescript },
  { name: "FastAPI",    icon: SiFastapi    },
  { name: "Pandas",     icon: SiPandas     },
  { name: "Sklearn",    icon: SiScikitlearn},
  { name: "Git",        icon: SiGit        },
];

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Component ─────────────────────────────────────────────────────────────── */

export default function AboutSection() {
  return (
    <section className="relative bg-white text-[#111] w-full overflow-hidden">
      
      {/* ── Subtle Grain Overlay ───────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ── Name + rule ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center pt-20 md:pt-28 pb-14 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-xl md:text-2xl tracking-[0.4em] uppercase mb-7 text-[#111]"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Obidur Rahman
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
          className="w-14 h-[1.5px] bg-[#111] origin-center"
        />
      </div>

      {/* ── Disciplines row ──────────────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.09 } }, hidden: {} }}
        className="flex flex-wrap items-start justify-center gap-x-8 gap-y-10 sm:gap-x-14 md:gap-x-20 lg:gap-x-24 px-6 pb-20 md:pb-28"
      >
        {DISCIPLINES.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={{
              hidden:   { opacity: 0, y: 10 },
              visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }}
            className="flex flex-col items-center gap-3 group cursor-default min-w-[80px]"
          >
            {/* Thin-stroke icon feel */}
            <Icon
              size={26}
              strokeWidth={1.2}
              className="text-[#111] group-hover:text-[#FF4D00] transition-colors duration-200"
            />
            <span
              className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#111] text-center"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Full-width divider ───────────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-[#E8E8E8]" />

      {/* ── Three-column editorial body ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {/* Col 1 — centered pull-quote / intro */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="
            flex items-start justify-center lg:justify-end
            px-8 md:px-10 lg:pr-16 py-16 md:py-24
            border-b md:border-r border-[#E8E8E8]
          "
        >
          <p
            className="
              text-xl sm:text-2xl lg:text-[1.35rem]
              leading-[1.45] text-center lg:text-right text-[#111]
              max-w-[320px] md:max-w-full lg:max-w-[250px]
            "
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Hello, I'm Obidur — Machine Learning Engineer focused on building
            efficient vision models that run{" "}
            <em style={{ fontStyle: "italic" }}>anywhere</em>.
          </p>
        </motion.div>

        {/* Col 2 — body copy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="
            px-8 md:px-10 lg:px-14 py-16 md:py-24
            border-b lg:border-b-0 lg:border-r border-[#E8E8E8]
            space-y-5
          "
        >
          <p className="text-xs sm:text-sm leading-[1.8] sm:leading-[1.9] text-[#555]">
            With a background in pure mathematics, I approach machine learning
            differently — model compression is fundamentally a mathematical
            problem, and I treat it like one. Quantization, pruning, and
            knowledge distillation aren't just engineering techniques; they're
            expressions of how we understand the geometry of learned
            representations.
          </p>
          <p className="text-xs sm:text-sm leading-[1.8] sm:leading-[1.9] text-[#555]">
            My work spans custom CV architectures for detection and
            segmentation, efficient inference pipelines optimised for
            CPU-class hardware, and the full research-to-production arc —
            from reading the paper to shipping the API.
          </p>
          <a
            href="/obidur_cv_public.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1.5 mt-2
              text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#111]
              border-b border-[#111] pb-0.5
              hover:text-[#FF4D00] hover:border-[#FF4D00]
              transition-colors duration-200 group
            "
          >
            Download CV
            <FiCornerDownRight
              size={10}
              className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>

        {/* Col 3 — body copy continued */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease, delay: 0.16 }}
          className="px-8 md:px-10 lg:px-14 py-16 md:py-24 space-y-5 md:col-span-2 lg:col-span-1 border-b md:border-b-0 border-[#E8E8E8]"
        >
          <p className="text-xs sm:text-sm leading-[1.8] sm:leading-[1.9] text-[#555] max-w-3xl">
            Currently working as an R&D Engineer at NorthAxis, prototyping and
            validating novel ML solutions. Previously built medical imaging
            pipelines and satellite-based land-use classification systems —
            work that demanded both rigour and real-world pragmatism.
          </p>
          <p className="text-xs sm:text-sm leading-[1.8] sm:leading-[1.9] text-[#555] max-w-3xl">
            I'm open to research collaborations, engineering roles, and
            consulting at the intersection of computer vision and efficient
            inference. If you need models that are both smart and fast,
            let's talk.
          </p>
          <div className="pt-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] flex-shrink-0" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#999]">
              Available · Bangladesh · Remote
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-[#E8E8E8]" />

      {/* ── Tech stack — desktop grid ────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.04 } }, hidden: {} }}
        className="hidden sm:grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12"
      >
        {TECH.map((t) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.name}
              variants={{
                hidden:  { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.2 } },
              }}
              className="
                aspect-square border-r border-b lg:border-b-0 last:border-r-0 border-[#E8E8E8]
                flex flex-col items-center justify-center gap-2
                group hover:bg-[#111] transition-colors duration-200 cursor-crosshair
              "
            >
              <Icon size={20} className="text-[#111] group-hover:text-white transition-colors" />
              <span className="font-mono text-[8px] tracking-widest text-[#bbb] group-hover:text-[#FF4D00] uppercase transition-colors">
                {t.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Tech stack — mobile marquee ──────────────────────────────────────── */}
      <div className="sm:hidden overflow-hidden relative w-full h-[70px] border-t border-[#E8E8E8]">
        <motion.div
          className="flex absolute left-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
        >
          {[...TECH, ...TECH].map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={`${t.name}-${i}`}
                className="w-[70px] h-[70px] border-r border-[#E8E8E8] flex flex-col items-center justify-center gap-1.5 shrink-0"
              >
                <Icon size={18} className="text-[#111]" />
                <span className="font-mono text-[7px] tracking-widest text-[#bbb] uppercase">
                  {t.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}