import { useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';

import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import './App.css';

const pageOrder = [
  'home', 'about', 'projects', 'skills',
  'experience', 'certificate', 'contact'
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const selectedPage = pageOrder[currentIndex];
  
  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? pageOrder.length - 1 : prev - 1
    );
  }, []);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => 
    prev === pageOrder.length - 1 ? 0 : prev + 1
    );
  }, []);

  const handleSelectPage = useCallback((page) => {
    const idx = pageOrder.indexOf(page);
    if (idx !== -1) {
      setDirection(idx > currentIndex ? 1: -1);
      setCurrentIndex(idx);
    }
  }, [currentIndex]);

  const slideAnimation = useSpring({
    from: { transform: direction > 0 ? 'translateX(100%)' : 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
    config: { tension: 300, friction: 30 },
    reset: true
  });
  

  const renderPage = () => {
    switch (selectedPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'certificate':
        return <Certificate />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Menu selectedPage={selectedPage} onSelectPage={handleSelectPage} />
      <main className="content">
        <animated.div style={slideAnimation}>
          {renderPage()}
        </animated.div>
      </main>

        <button className="nav-arrow left" onClick={goPrev}>
          ‹
        </button>
        <button className="nav-arrow right" onClick={goNext}>
          ›
        </button>
    </>
  );
}

export default App;

