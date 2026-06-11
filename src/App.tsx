import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import CursorTrail from "./components/CursorTrail";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <CursorTrail />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
