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

function App() {

  const [selectedPage, setSelectedPage] = useState('home');

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
      <Menu selectedPage={selectedPage} onSelectPage={setSelectedPage} />
      <main className="content">
        {renderPage()}
      </main>
    </>
  );
}

export default App;

