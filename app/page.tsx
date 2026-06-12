import Navbar from "@/components/Navbar";
import CinematicHero from "@/components/CinematicHero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent text-white overflow-hidden">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Hero Canvas Frame scrubbing engine */}
      <CinematicHero />

      {/* Content Layout Sections */}
      <div className="relative z-10 bg-transparent">
        {/* About Biography Section */}
        <About />

        {/* Technical Comfort / Skill Category Matrix */}
        <Skills />

        {/* Vertical Chronological Timeline */}
        <Experience />

        {/* Portfolio Project Showcases */}
        <Projects />

        {/* Honors, Awards, and Certifications Grid */}
        <Achievements />

        {/* Command Line Input Contact Panel */}
        <Contact />
      </div>

      {/* Footnote Credits */}
      <Footer />
    </main>
  );
}
