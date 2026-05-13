"use client";

import Hero from "./components/Hero";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ResearchSection from "./components/sections/ResearchSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import DynamicNav from "./components/ui/DynamicNav";

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