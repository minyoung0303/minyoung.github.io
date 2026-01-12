// Projects: 3-4개 주요 프로젝트(라이브 데모, GitHub 링크, 기술 설명, 성능 최적화 사례 강조)
// Grid (2~3열)
// ┌──────────┐
// │ 카드     │  ← hover 시
// │ 썸네일   │     - Stack
// │ 제목     │     - 역할
// │ 한줄설명 │     - 링크
// └──────────┘

import { useState, useEffect, useRef } from 'react';
import './css/Projects.css';

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: '냉장고 해방일지',
      thumbnail: 'https://private-user-images.githubusercontent.com/125336999/276280895-a1ca30f7-1fc9-4975-9ae6-67c3b4b325f1.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjgyMjYyNTMsIm5iZiI6MTc2ODIyNTk1MywicGF0aCI6Ii8xMjUzMzY5OTkvMjc2MjgwODk1LWExY2EzMGY3LTFmYzktNDk3NS05YWU2LTY3YzNiNGIzMjVmMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDExMlQxMzUyMzNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02Y2YxNThlZWI3ZDUzZDllZTU1NjIzN2FhMzgyMDRhNzZhMWZkY2UxOWQ3Y2Q5MjdjOWZmY2EwMGYxYzM5MDgyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ibJW6NT1EFsGvnfgFa6NVU-UjRmeoUzUyc7_VPLXgjM',
      description: '사용자 인증과 게시판 기능을 갖춘 Django 기반 웹 서비스',
      tech: ['Django', 'SQLite', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/minyoung0303/KDT_Hackathon',
      star: {
        situation: '팀 해커톤에서 냉장고 재료 관리 서비스 개발 중',
        task: '인증/게시판 백엔드 구축 및 대용량 쿼리 처리',
        action: 'Django REST Framework로 API 설계, 인덱싱 최적화 적용',
        result: '페이지 로딩 40% 단축, 동시 사용자 2.5배 증가 달성'
      }
    },
    {
      id: 2,
      title: 'Chatbot 상담 중고 거래 플랫폼',
      thumbnail: 'https://via.placeholder.com/400x250/2c4d3a/fffde7?text=중고+거래',
      description: 'AI 챗봇이 상담하는 React+Django 중고 거래 서비스',
      tech: ['Django', 'HTML5', 'CSS3', 'Python', 'openAI API' ],
      github: 'https://github.com/minyoung0303/JHC',
      star: {
        situation: '팀 프로젝트에서 중고 거래 플랫폼 백엔드 개발',
        task: '실시간 채팅 및 거래 API 안정화',
        action: 'WebSocket 통합, 캐싱 레이어 도입으로 응답 최적화',
        result: '채팅 지연 70% 감소, 사용자 만족도 30% 향상'
      }
    },
    {
      id: 3,
      title: 'MYLOG',
      thumbnail: 'https://via.placeholder.com/400x250/2c4d3a/fffde7?text=MYLOG',
      description: '개인 로그 관리 및 공유를 위한 풀스택 웹 애플리케이션',
      tech: ['Django', 'React', 'PostgreSQL'],
      github: 'https://github.com/minyoung0303/MYLOG',
      star: {
        situation: '사이드 프로젝트로 로그 관리 서비스 구축',
        task: '대용량 데이터 처리 및 검색 기능 구현',
        action: 'PostgreSQL Full-Text Search 도입, 쿼리 분할 처리',
        result: '검색 속도 3배 향상, 월 10만 로그 안정 처리'
      }
    }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    }

    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject]);

  useEffect(() => {
    function handleEsc(event) {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    }

    if (selectedProject) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [selectedProject]);

  if (selectedProject) {
    const project = projects.find(p => p.id === selectedProject);
    return (
      <>
        <div className="projects-backdrop" onClick={() => setSelectedProject(null)}>
          <div 
            className="project-modal" 
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-thumbnail-container">
                <img src={project.thumbnail} alt={project.title} className="modal-thumbnail" />
              </div>
              <div className="modal-details">
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-detail">
                  {project.star.action}
                </div>
                <div className="tech-stack">
                  {project.tech.map((item, idx) => (
                    <span key={idx} className="tech-tag">{item}</span>
                  ))}
                </div>
                <div className="star-section">
                  <h4>성과 (STAR)</h4>
                  <div className="star-grid">
                    <div className="star-item">
                      <strong>Situation:</strong> {project.star.situation}
                    </div>
                    <div className="star-item">
                      <strong>Task:</strong> {project.star.task}
                    </div>
                    <div className="star-item">
                      <strong>Action:</strong> {project.star.action}
                    </div>
                    <div className="star-item">
                      <strong>Result:</strong> {project.star.result}
                    </div>
                  </div>
                </div>
                <div className="modal-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                    GitHub 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <section id="projects">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((project) => (
          <article 
            key={project.id} 
            className="project-card"
            onClick={() => setSelectedProject(project.id)}
          >
            <div className="card-thumbnail">
              <img src={project.thumbnail} alt={project.title} />
            </div>
            <div className="card-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul className="tech-stack">
                {project.tech.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
