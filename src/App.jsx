import { useState } from 'react';

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

  const selectedPage = pageOrder[currentIndex];
  
  const goPrev = () => {
    setCurrentIndex((prev) =>
    prev === 0 ? pageOrder.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) => 
    prev === pageOrder.length - 1 ? 0 : prev + 1
    );
  };

  const handleSelectPage = (page) => {
    const idx = pageOrder.indexOf(page);
    if (idx !== -1) setCurrentIndex(idx);
  };

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
        {renderPage()}
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

