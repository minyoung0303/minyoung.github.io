import Introduction from './components/Introduction'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <section id="skills">
        <h2>Skills</h2>
      </section>

      <section id="projects">
        <h2>Projects</h2>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
        <p>GitHub: https://github.com/username</p>
      </section>
    </>
  )
}

export default App

