"use client";

import { FiArrowUpRight } from "react-icons/fi";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#f4f4f0] text-black min-h-screen flex flex-col justify-center py-24 z-20"
    >
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:pl-32">
        {/* Header */}
        <div className="mb-20 border-b border-black/10 pb-8 flex items-end justify-between">
          <h2 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.85]">
            Track <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Record
            </span>
          </h2>
          <div className="hidden md:block text-right">
            <div className="font-mono text-xs text-gray-400 uppercase mb-1">
              Total Years
            </div>
            <div className="text-4xl font-black">3+</div>
          </div>
        </div>

        {/* The List */}
        <div className="space-y-12">
          {/* Item 1 */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-black/5 pb-12">
            <div className="lg:col-span-3">
              <span className="font-mono text-sm text-cyan-700">
                2023 — PRESENT
              </span>
              <h3 className="text-3xl font-black uppercase mt-2 group-hover:text-cyan-700 transition-colors">
                Theoretical <br />
                Researcher
              </h3>
            </div>
            <div className="lg:col-span-5">
              <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
                University of Chittagong
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Pioneered the <strong>'Geometric Dilution'</strong> framework.
                Proved limitations of synthetic data generation in high
                dimensions using Measure Theory.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-2 content-start">
              {["Python", "Measure Theory", "LaTeX", "Statistics"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white border border-black/5 text-xs font-mono uppercase"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Item 2 */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-black/5 pb-12">
            <div className="lg:col-span-3">
              <span className="font-mono text-sm text-cyan-700">AUG 2024</span>
              <h3 className="text-3xl font-black uppercase mt-2 group-hover:text-cyan-700 transition-colors">
                Headstarter <br />
                Fellow
              </h3>
            </div>
            <div className="lg:col-span-5">
              <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
                Remote Engineering Fellowship
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Architected and deployed scalable AI apps. Built serverless RAG
                pipelines using AWS Lambda and Vector Databases.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-2 content-start">
              {["Next.js", "AWS", "Pinecone", "OpenAI"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white border border-black/5 text-xs font-mono uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Credentials */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs text-gray-500 uppercase tracking-wide">
          <div>
            <span className="block text-cyan-700 mb-1">Education</span>
            B.S. Mathematics
          </div>
          <div>
            <span className="block text-cyan-700 mb-1">Publication</span>
            Geometric Dilution (Preprint)
          </div>
          <div>
            <span className="block text-cyan-700 mb-1">Award</span>
            1st Place Innovation Fair
          </div>
          <div className="flex items-center gap-2 text-black cursor-pointer hover:text-cyan-600 transition-colors">
            Download CV <FiArrowUpRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
