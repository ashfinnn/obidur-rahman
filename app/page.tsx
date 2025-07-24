// app/page.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import GridSection from './components/sections/GridSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      {/* <GridSection /> */}
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}