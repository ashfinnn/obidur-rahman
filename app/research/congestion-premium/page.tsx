"use client";

import Link from "next/link";
import {
  FiArrowLeft,
  FiFileText,
  FiTrendingUp,
  FiAlertTriangle,
  FiDownload,
  FiMapPin,
  FiClock,
  FiBarChart2,
  FiArrowUpRight,
} from "react-icons/fi";
import { motion, useScroll, useSpring } from "framer-motion";

export default function CongestionPremiumPage() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const sections = [
    { id: "abstract", label: "Abstract" },
    { id: "methodology", label: "Methodology" },
    { id: "results", label: "Results" },
    { id: "discussion", label: "Discussion" },
    { id: "citation", label: "Citation" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#F7F7F5] min-h-screen text-[#111] overflow-x-hidden selection:bg-green-600 selection:text-white">
      {/* Grain */}
      <div className="fixed inset-0 opacity-[0.025] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-green-600 origin-left z-[70]"
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[60] backdrop-blur-xl bg-[#F7F7F5]/70 border-b border-black/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#777] hover:text-black transition-colors"
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#888] hover:text-green-600 transition-colors"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-32">
        {/* HERO */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="grid lg:grid-cols-[1.4fr_0.8fr] gap-16 items-end"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-5 mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-green-600">
                  Urban Economics
                </span>

                <div className="h-px w-14 bg-black/10" />

                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#999]">
                  SCRIS · 2026
                </span>
              </div>

              <h1
                className="text-[3.2rem] sm:text-[4.5rem] lg:text-[7rem] xl:text-[8.5rem] leading-[0.92] tracking-[-0.06em]"
                style={{
                  fontFamily: "'Georgia', serif",
                }}
              >
                Quantifying
                <br />
                the Congestion
                <br />
                Premium
              </h1>

              <div className="mt-12 max-w-2xl">
                <p className="text-lg md:text-2xl leading-relaxed text-[#555] font-serif italic border-l-[3px] border-green-600 pl-8">
                  A revealed-preference investigation into how congestion,
                  waterlogging, and temporal demand distort non-metered urban
                  transport fares in Chittagong.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mt-12">
                <a
                  href="/papers/OETDS291-1.pdf"
                  target="_blank"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[#111] text-white hover:bg-green-600 transition-all duration-300 font-mono text-[10px] uppercase tracking-[0.28em]"
                >
                  <FiDownload />
                  Download Paper
                </a>

                <button className="inline-flex items-center gap-3 px-7 py-4 border border-black/10 bg-white hover:border-green-600 transition-all duration-300 font-mono text-[10px] uppercase tracking-[0.28em]">
                  <FiArrowUpRight />
                  View DOI
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-600/5 blur-3xl rounded-full" />

              <div className="relative bg-white border border-black/5 p-8 md:p-10">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#999] mb-3">
                      Research Focus
                    </div>

                    <h3 className="text-2xl font-serif leading-tight">
                      Informal Transport Market Dynamics
                    </h3>
                  </div>

                  <FiTrendingUp
                    className="text-green-600"
                    size={30}
                  />
                </div>

                <div className="space-y-8">
                  {[
                    {
                      icon: FiMapPin,
                      label: "Location",
                      value: "Chittagong",
                    },
                    {
                      icon: FiClock,
                      label: "Survey Size",
                      value: "100 Trips",
                    },
                    {
                      icon: FiBarChart2,
                      label: "Analysis",
                      value: "Regression Model",
                    },
                    {
                      icon: FiFileText,
                      label: "Category",
                      value: "Urban Transport",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between border-b border-black/5 pb-5"
                    >
                      <div className="flex items-center gap-4">
                        <item.icon
                          className="text-[#777]"
                          size={18}
                        />

                        <div>
                          <div className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#999] mb-1">
                            {item.label}
                          </div>

                          <div className="text-sm text-[#222]">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-24 border border-black/5">
            {[
              {
                value: "100",
                label: "Trips",
              },
              {
                value: "4",
                label: "Key Variables",
              },
              {
                value: "CTG",
                label: "Region",
              },
              {
                value: "2026",
                label: "Published",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 md:p-12 border-r border-black/5 last:border-r-0"
              >
                <div className="text-4xl md:text-6xl tracking-tight font-light mb-3">
                  {item.value}
                </div>

                <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#999]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="space-y-32">
            {/* ABSTRACT */}
            <section
              id="abstract"
              className="scroll-mt-32"
            >
              <div className="mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-green-600">
                  01 · ABSTRACT
                </span>
              </div>

              <p className="text-[1.3rem] md:text-[1.7rem] leading-[1.8] text-[#333] font-serif">
                This paper investigates how urban congestion and environmental
                disruption influence non-metered transportation fares in a
                developing port city. Using revealed-preference data from 100
                commuter trips involving CNG auto-rickshaws and cycle
                rickshaws, the study models fare deviations from government
                benchmarks and identifies structural determinants of the
                congestion premium.
              </p>
            </section>

            {/* METHODOLOGY */}
            <section
              id="methodology"
              className="scroll-mt-32"
            >
              <div className="mb-14">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-green-600">
                  02 · METHODOLOGY
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    title: "Revealed Preference Survey",
                    text:
                      "Collected real-world negotiated fare data across multiple urban corridors in Chittagong to observe actual commuter behavior rather than stated preferences.",
                  },
                  {
                    title: "Regression Framework",
                    text:
                      "Applied multivariable regression analysis to estimate the impact of traffic intensity, travel time, distance, and waterlogging on fare inflation.",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white border border-black/5 p-10"
                  >
                    <div className="font-serif text-2xl mb-5">
                      {card.title}
                    </div>

                    <p className="text-[#666] leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* RESULTS */}
            <section
              id="results"
              className="scroll-mt-32"
            >
              <div className="mb-14">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-green-600">
                  03 · RESULTS
                </span>
              </div>

              <div className="relative overflow-hidden bg-[#0B0B0B] text-white p-10 md:p-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_35%)]" />

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-5xl font-serif leading-tight italic max-w-4xl">
                    “Fare deviations emerge as adaptive responses to structural
                    congestion rather than arbitrary market inefficiency.”
                  </h3>

                  <p className="mt-10 max-w-2xl text-white/60 leading-relaxed">
                    The findings indicate that informal transport operators
                    dynamically incorporate congestion risk, flooding exposure,
                    and time-sensitive demand into real-time fare negotiation.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                    {[
                      "Traffic Density",
                      "Waterlogging",
                      "Peak Hours",
                      "Distance",
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="text-2xl md:text-3xl font-light mb-2">
                          0{i + 1}
                        </div>

                        <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/40">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* DISCUSSION */}
            <section
              id="discussion"
              className="scroll-mt-32"
            >
              <div className="mb-14">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-green-600">
                  04 · DISCUSSION
                </span>
              </div>

              <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16">
                <div className="space-y-10">
                  {[
                    "Traffic intensity is the dominant predictor of fare escalation in non-metered systems.",
                    "Monsoon-driven waterlogging introduces a measurable environmental risk premium.",
                    "Informal transport markets display adaptive efficiency under infrastructural stress.",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex gap-6"
                    >
                      <span className="text-green-600 font-mono text-sm mt-1">
                        0{i + 1}
                      </span>

                      <p className="text-[#555] leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-white border border-green-100 border-l-4 border-l-green-600 p-8">
                  <FiAlertTriangle
                    className="text-green-600 mb-5"
                    size={24}
                  />

                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4">
                    Policy Insight
                  </h3>

                  <p className="text-sm text-[#666] leading-relaxed">
                    Policy interventions should address structural urban
                    bottlenecks, including drainage systems, road management,
                    and peak-hour traffic flows, instead of relying solely on
                    rigid fare enforcement policies that ignore dynamic market
                    constraints.
                  </p>
                </div>
              </div>
            </section>

            {/* CITATION */}
            <section
              id="citation"
              className="scroll-mt-32 pt-10 border-t border-black/5"
            >
              <div className="mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-green-600">
                  05 · CITATION
                </span>
              </div>

              <div className="bg-white border border-black/5 p-8 overflow-x-auto">
                <pre className="font-mono text-[11px] leading-relaxed text-[#111]">
{`@inproceedings{rahman2026congestion,
  title = {
    Quantifying the Congestion Premium:
    Disentangling the Determinants of
    Non-Metered Fares in a Developing Port City
  },
  author = {Rahman, Obidur and Islam, Sifatul},
  booktitle = {
    Scholars' Convergence Research &
    Innovation Summit
  },
  year = {2026},
  doi = {10.13140/RG.2.2.16906.53448}
}`}
                </pre>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-black/5 bg-[#0A0A0A] py-20 mt-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/20 mb-4">
              Urban Systems Research
            </div>

            <p className="max-w-md text-sm text-white/50 leading-relaxed font-serif italic">
              Developing data-driven perspectives on urban resilience,
              congestion economics, and adaptive transport systems.
            </p>
          </div>

          <div className="flex gap-14">
            {[
              {
                value: "2026",
                label: "Year",
              },
              {
                value: "SCRIS",
                label: "Venue",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center"
              >
                <div className="text-2xl text-white mb-2">
                  {item.value}
                </div>

                <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}