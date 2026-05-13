"use client";

import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import DynamicNav from "./components/ui/DynamicNav";

// Dynamic imports for sections below the fold
const AboutSection = dynamic(() => import("./components/sections/AboutSection"), {
  loading: () => <div className="h-screen bg-[#F4F4F5] animate-pulse" />,
});
const ExperienceSection = dynamic(() => import("./components/sections/ExperienceSection"), {
  loading: () => <div className="h-screen bg-[#F4F4F5] animate-pulse" />,
});
const ResearchSection = dynamic(() => import("./components/sections/ResearchSection"), {
  loading: () => <div className="h-screen bg-white animate-pulse" />,
});
const ProjectsSection = dynamic(() => import("./components/sections/ProjectsSection"), {
  loading: () => <div className="h-screen bg-white animate-pulse" />,
});
const ContactSection = dynamic(() => import("./components/sections/ContactSection"), {
  loading: () => <div className="h-screen bg-[#050505] animate-pulse" />,
});

export default function Home() {
  return (
    <main className="relative w-full overflow-x-clip">
      <DynamicNav />

      {/* Hero Wrapper - Limits sticky duration */}
      <div className="relative h-[150vh] md:h-[200vh] z-20">
        <section
          id="hero"
          className="sticky top-0 h-[70vh] md:h-[80vh] w-full overflow-hidden"
        >
          <Hero />
        </section>
      </div>

      {/* About + Experience */}
      <div className="relative z-30 -mt-[80vh] md:-mt-[120vh] rounded-t-[40px] bg-[#F4F4F5] shadow-[0_-50px_100px_rgba(0,0,0,0.5)] md:rounded-t-[80px]">
        <section id="about">
          <AboutSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>
      </div>

      {/* Research */}
      <div className="relative z-30">
        <section id="research">
          <ResearchSection />
        </section>
      </div>

      {/* Projects */}
      <div className="relative z-30 -mt-[60vh] md:-mt-[100vh] rounded-t-[40px] bg-white shadow-[0_-60px_80px_rgba(0,0,0,0.25)] md:rounded-t-[80px]">
        <section id="projects">
          <ProjectsSection />
        </section>
      </div>

      {/* Spacer to reveal fixed contact */}
      <div className="h-[80vh] md:h-[50vh] w-full bg-transparent pointer-events-none" />

      {/* Fixed Contact */}
      <section
        id="contact"
        className="fixed bottom-0 left-0 z-10 h-[80vh] md:h-[50vh] w-full overflow-hidden bg-[#050505]"
      >
        <ContactSection />
      </section>
    </main>
  );
}