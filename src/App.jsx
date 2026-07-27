import { useState, useEffect, useCallback } from 'react';

import Cursor from './components/Cursor';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import './App.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificate', label: 'Certificate' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Scroll progress bar + back-to-top visibility
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowTop(scrollTop > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track the active section for nav + dots
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />

      {/* progress bar: the "scroll to the very end" indicator */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />

      <Menu
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main>
        <Home onNavigate={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificate />
        <Contact onNavigate={scrollToSection} />
      </main>

      {/* right-side section dots */}
      <nav className="section-dots" aria-label="Section navigation">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`section-dot ${activeSection === id ? 'active' : ''}`}
            onClick={() => scrollToSection(id)}
            aria-label={`Go to ${label}`}
            aria-current={activeSection === id ? 'true' : undefined}
          >
            <span className="section-dot-label">{label}</span>
          </button>
        ))}
      </nav>

      {/* back to top */}
      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={() => scrollToSection('home')}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

export default App;
