import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import ProjectsSection from './components/sections/ProjectsSection';
import Footer from './components/Footer';
import SlideSection from './components/ui/SlideSection';

export default function Home() {
  return (
    // bg-black ensures that when a slide fades out, it reveals black (not white)
    <main className="w-full bg-black relative">
      <Header />

      {/* 1. HERO (Black) */}
      <SlideSection index={1} id="hero" className="bg-[#050505]">
        <Hero />
      </SlideSection>

      {/* 2. ABOUT (Light) - Slides up & covers Hero */}
      <SlideSection index={2} id="about" className="bg-[#f4f4f0]">
        <AboutSection />
      </SlideSection>

      {/* 3. PROJECTS (Black) - Slides up & covers About */}
      <SlideSection index={3} id="projects" className="bg-[#000]">
        <ProjectsSection />
      </SlideSection>

      {/* 4. CONTACT (White) - Slides up & covers Projects */}
      <SlideSection index={4} id="contact" className="bg-white">
        {/* Flex wrapper to ensure footer stays at bottom */}
        <div className="min-h-full flex flex-col justify-between">
            <ContactSection />
        </div>
      </SlideSection>
    </main>
  );
}