import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ProjectsSection from "./components/sections/ProjectsSection";
// import ExperienceSection from "./components/sections/ExperienceSection";

import SlideSection from "./components/ui/SlideSection";
// ... imports

export default function Home() {
  return (
    <main className="bg-[#050505]">
      {/* HERO: Index 1 */}
      <SlideSection index={1} id="hero">
        <Hero />
      </SlideSection>

      {/* ABOUT: Index 2 (Slides over Hero) */}
      <SlideSection index={2} id="about">
        <AboutSection />
      </SlideSection>

      {/* PROJECTS: Index 3 */}
      <SlideSection index={3} id="projects">
        <ProjectsSection />
      </SlideSection>

      {/* EXPERIENCE: Index 4 */}
      {/*<SlideSection index={4} id="experience">
        <ExperienceSection />
      </SlideSection>*/}

      {/* CONTACT: Index 5 (Final card) */}
      <SlideSection index={5} id="contact">
        <ContactSection />
      </SlideSection>
    </main>
  );
}
