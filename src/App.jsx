import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import { House, BriefcaseBusiness, UserRound, Wrench, Mail } from 'lucide-react';

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
      
      <nav className="mobile-dock" aria-label="Mobile navigation">
        <a href="#home"><House /><span>Home</span></a>
        <a href="#projects"><BriefcaseBusiness /><span>Projects</span></a>
        <a href="#about"><UserRound /><span>About</span></a>
        <a href="#skills"><Wrench /><span>Skills</span></a>
        <a href="#contact"><Mail /><span>Contact</span></a>
      </nav>
    </div>
  );
}

export default App;
