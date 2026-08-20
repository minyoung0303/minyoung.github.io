import { useState, useEffect, useCallback } from 'react';

import Cursor from './components/Cursor';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import ProblemSolving from './components/ProblemSolving';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import './App.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'problem-solving', label: 'Solving' },
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

  /*
    스크롤 진행바 + 맨 위로 버튼 + 현재 섹션 추적.

    현재 섹션은 IntersectionObserver 대신 스크롤 위치로 직접 계산한다.
    관찰자 방식은 "교차 상태가 바뀔 때"만 콜백이 오기 때문에, 두 섹션의
    경계가 좁은 감지 밴드 안에 함께 걸리면 두 항목이 한 번에 전달되고
    나중에 처리된 쪽이 이긴다. 이후 앞 섹션이 밴드를 벗어나도 뒤 섹션은
    이미 교차 상태라 새 콜백이 오지 않아, 활성 표시가 앞 섹션에 그대로
    묶여 버린다. 기준선 하나로 매 스크롤마다 다시 판정하면 이 문제가 없다.
  */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const root = document.documentElement;
      const docHeight = root.scrollHeight - window.innerHeight;

      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowTop(scrollTop > window.innerHeight * 0.6);

      // 화면 상단에서 35% 지점을 기준선으로 두고, 그 위에서 시작한 마지막 섹션을 활성화
      const line = scrollTop + window.innerHeight * 0.35;
      let current = sections[0].id;

      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollTop;
        if (top <= line) current = id;
      }

      // 문서 끝에 닿으면 마지막 섹션을 활성화 (짧은 마지막 섹션 보정)
      if (scrollTop + window.innerHeight >= root.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
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
        <ProblemSolving />
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
