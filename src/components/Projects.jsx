import { useState } from 'react';
import './css/Projects.css';

function Projects() {
  const [preview, setPreview] = useState({ image: null, projectIndex: null });

  const base = import.meta.env.BASE_URL;

  const openImageModal = (img, idx) =>
    setPreview({ image: img, projectIndex: idx });
  const closeImageModal = () =>
    setPreview({ image: null, projectIndex: null });

  const projects = [
    {
      title: '대동맛지도',
      subtitle: '개인 프로젝트 · Apps in Toss 출시 예정',
      period: '2026.05 — 현재',
      type: 'Solo',
      summary:
        'React(Vite) 프론트엔드와 Java · Spring Boot 백엔드, Kakao Maps API로 사용자 위치 주변의 맛집·카페를 탐색하는 위치 기반 서비스. Apps in Toss 미니앱 출시를 준비 중입니다.',
      role: [
        'React(Vite) 프론트엔드 설계 및 Kakao Maps SDK 클라이언트 직접 연동',
        'Java · Spring Boot(Spring Data JPA · Flyway) 기반 장소 · 리뷰 REST API 설계',
        '카테고리 필터 · 리뷰 기능 개발 및 검색 로직 개선',
        '주변 탐색 반경을 1km에서 2km로 확대',
      ],
      result:
        'Apps in Toss 미니앱 출시를 준비하며 필터 · 리뷰 · 검색 개선과 탐색 반경 확대(1km → 2km)를 적용 (진행 중)',
      tech: ['React', 'Vite', 'Java 21', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Flyway', 'Kakao Maps', 'Apps in Toss'],
      images: [
        `${base}images/daedong-matmap-gantt.png`,
        `${base}images/daedong-matmap-system.png`,
        `${base}images/kakaomap.png`,
      ],
      github: 'https://github.com/minyoung0303/daedong-matmap',
    },
    {
      title: '냉장고 해방일지',
      subtitle: '팀 프로젝트 · 제5회 K-Digital Hackathon',
      period: '2023.09 — 2023.11',
      type: 'Team',
      summary:
        '영수증·냉장고 재료 관리를 기반으로 레시피를 공유하는 웹 서비스입니다.',
      role: [
        '백엔드 ERD 및 아키텍처 설계',
        'JWT 기반 인증/인가 구조 설계',
        'PostgreSQL 인덱싱으로 조회 성능 최적화',
      ],
      result: '데이터베이스 정규화 및 페이지 로딩 속도 약 30% 개선',
      tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'JWT', 'Docker', 'AWS'],
      images: [
        `${base}images/ndjango-erd1.png`,
        `${base}images/ndjango-architecture.png`,
        `${base}images/ndjango-erd-final.png`,
      ],
      github: 'https://github.com/minyoung0303/KDT_Hackathon',
    },
    {
      title: 'Chatbot 중고 거래 플랫폼',
      subtitle: '팀 프로젝트 · ESTsoft 백엔드 캠프',
      period: '2023.07 — 2023.08',
      type: 'Team',
      summary: 'AI 챗봇이 상담을 도와주는 중고 거래 서비스입니다.',
      role: [
        '팀 리더 · GitHub 버전 관리',
        '실시간 채팅 및 거래 API 안정화',
        'WebSocket 통합과 캐싱 레이어 도입으로 응답 최적화',
      ],
      result: 'WebSocket · 캐싱 · 인덱싱 조합이 실시간 성능에 주는 영향을 검증',
      tech: ['Django', 'PostgreSQL', 'Python', 'OpenAI API', 'Docker', 'AWS'],
      images: [
        `${base}images/preview-jhc1.png`,
        `${base}images/preview-jhc2.png`,
      ],
      github: 'https://github.com/minyoung0303/JHC',
    },
    {
      title: 'MYLOG',
      subtitle: '팀 프로젝트',
      period: '2023.06 — 2023.07',
      type: 'Team',
      summary: '개인 일정과 기록을 관리하는 웹 블로그 애플리케이션입니다.',
      role: [
        '팀 리더 · GitHub 버전 관리 및 Hotfix 대응',
        '검색 기능 구현',
        'PostgreSQL Full-Text Search 도입, 쿼리 분할 처리',
      ],
      result: '검색 속도 2배 향상',
      tech: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'Docker'],
      images: [],
      github: 'https://github.com/minyoung0303/MYLOG',
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">주요 프로젝트</h2>
          <p className="section-lead">
            문제 정의부터 설계, 성능 개선까지. 직접 손으로 만들고 수치로
            검증한 결과들입니다.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, idx) => (
            <article className="project-card" key={idx}>
              <header className="project-head">
                <div className="project-head-main">
                  <span className={`project-type ${project.type.toLowerCase()}`}>
                    {project.type}
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                <span className="project-period">{project.period}</span>
              </header>

              <p className="project-summary">{project.summary}</p>

              <div className="project-body">
                <div className="project-role">
                  <h4 className="project-label">담당 역할</h4>
                  <ul>
                    {project.role.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-result">
                  <h4 className="project-label">성과</h4>
                  <p>{project.result}</p>
                </div>
              </div>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fa-brands fa-github" aria-hidden="true"></i>
                  <span>GitHub</span>
                </a>
              </div>

              {project.images.length > 0 && (
                <div className="project-thumbs">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      className="project-thumb"
                      onClick={() => openImageModal(img, idx)}
                      aria-label={`${project.title} 이미지 ${i + 1} 확대`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}

              {preview.image && preview.projectIndex === idx && (
                <div className="image-preview-overlay" onClick={closeImageModal}>
                  <div
                    className="image-preview-box"
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Project Image Preview"
                  >
                    <button
                      type="button"
                      className="image-preview-close"
                      onClick={closeImageModal}
                      aria-label="Close preview"
                    >
                      ×
                    </button>
                    <img
                      src={preview.image}
                      alt={`${project.title} preview`}
                      className="image-preview-img"
                    />
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
