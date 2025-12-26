import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>

      <section id="about">
        <h2>About</h2>
        <p>
          컴퓨터공학 학사 출신으로 백엔드 중심의 웹 개발을 하고 있습니다.
          Django 기반 프로젝트와 실무 인턴 경험이 있습니다.
        </p>
      </section>

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

