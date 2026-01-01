import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">

      <main className="content">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certificate />
        <Contact />
      </main>

      <nav className="toc">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certificate">Certificate</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default App

