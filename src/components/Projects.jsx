import { useState, useRef } from 'react';
import './css/Projects.css';

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const projects = [
        {
      title: '대동맛지도',
      subtitle: '개인 프로젝트',
      period: '2026.05 - 2026.06',
      type: 'Solo',
      summary: 'React, Django, Kakao Map API를 기반으로 사용자 위치 주변의 맛집과 카페를 탐색할 수 있는 위치 기반 웹 서비스',
      role: [
        'React 기반 프론트엔드 구조 설계 및 카카오맵 SDK 연동',
        'Django·DRF 기반 장소 데이터 처리 및 API 연동 구조 설계',
        'KakaoMap API 기반 사용자 위치 기준 주변 맛집·카페 탐색 기능 구현 및 검색 로직 개선 진행',
      ],
      result: ['React 기반 지도·리스트 연동 UI 구현 및 Django·DRF 기반 장소 검색 API 설계 및 연동 진행중',
            ],
      tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'JWT', 'React', 'Docker', 'AWS'],
      links: {
              github: 'https://github.com/minyoung0303/daedong-matmap',
              demo: null,
            },
    },
    {
      title: '냉장고 해방일지',
      subtitle: '팀 프로젝트 · 2023년 제 5회 K-Digital Hackathon',
      period: '2023.09 - 2023.11',
      type: 'Team',
      summary: '영수증 재료와 냉장고 재료 관리를 위한 레시피 공유 웹 서비스',
      role: [
        '백엔드 ERD 및 아키텍처 설계',
        'JWT 기반 인증/인가 구조 설계',
        'PostgreSQL 인덱싱 적용으로 조회 성능 최적화',
      ],
      result: '데이터베이스 정규화 및 페이지 로딩 속도 약 30% 개선',
      tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'JWT', 'HTML5', 'CSS', 'Docker', 'AWS'],
      links: {
              github: 'https://github.com/minyoung0303/KDT_Hackathon',
              demo: null,
            },
    },
    {
      title: 'Chatbot 상담 중고 거래 플랫폼',
      subtitle: '팀 프로젝트 · ESTsoft 백엔드개발 교육캠프',
      period: '2023.07 - 2023.08',
      type: 'Team',
      summary: 'AI 챗봇이 상담하는 중고 거래 서비스',
      role: [
        '팀 리더 · GitHub 버전 관리',
        '실시간 채팅 및 거래 API 안정화',
        'WebSocket 통합, 캐싱 레이어 도입으로 응답 최적화',
        'PostgreSQL 인덱싱 적용으로 조회 성능 최적화',
      ],
      result: '실시간 서비스에서 WebSocket과 캐싱·인덱싱 조합이 성능에 미치는 영향을 직접 경험',
      tech: ['Django', 'PostgreSQL', 'HTML5', 'CSS3', 'Python', 'openAI API', 'Docker', 'AWS'],
      links: { github:'https://github.com/minyoung0303/JHC',
               demo: null,
              },
    },
    {
      title: 'MYLOG',
      subtitle: '팀 프로젝트',
      period: '2023.06 - 2023.07',
      type: 'Team',
      summary: '개인 일정 및 기록 관리 웹 블로그 애플리케이션',
      role: [
        '팀 리더 · GitHub 버전관리 및 Hotfix 관리',
        '검색 기능 구현',
        'PostgreSQL Full-Text Search 도입, 쿼리 분할 처리',
      ],
      result: '검색 속도 2배 향상',
      tech: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS', 'javascript', 'Docker'],
      links: { github:'https://github.com/minyoung0303/MYLOG',
               demo: null,
              }
    },
  ];

  return (
    <section id="projects">
      <h3>Projects</h3>

      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-header">
              <div>
                <h4>{project.title}</h4>
                <span className="subtitle">{project.subtitle}</span>
              </div>
              <span className="period">{project.period}</span>
            </div>

            <span className={`type ${project.type.toLowerCase()}`}>
              {project.type}
            </span>

            <p className="summary">{project.summary}</p>

            <ul className="role">
              {project.role.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p className="result">
              <strong>성과:</strong> {project.result}
            </p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-circle github project-github"
                aria-label="GitHub Repository"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
