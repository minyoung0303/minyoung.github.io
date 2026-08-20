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
        '사용자 위치 주변의 맛집·카페를 탐색하는 위치 기반 서비스입니다. Python만 쓰던 상태에서 Java · Spring Boot를 새로 익혀 백엔드를 처음부터 직접 설계했고, DB 스키마 버전 관리까지 포함해 혼자 운영 가능한 구조로 만들었습니다.',
      role: [
        'Java 21 · Spring Boot 기반 장소 · 리뷰 REST API 설계 및 구현',
        'Spring Data JPA로 도메인 매핑, Flyway로 DB 스키마 마이그레이션 이력 관리',
        '카테고리 필터 · 리뷰 기능 개발 및 검색 로직 개선',
        '탐색 반경을 1km → 2km로 확대하며 늘어난 조회 범위에 맞춰 응답 구조 조정',
        'React(Vite) 프론트엔드와 Kakao Maps SDK 연동까지 단독 처리',
      ],
      result:
        '백엔드 · 프론트 · 배포를 혼자 담당해 Apps in Toss 미니앱 출시 준비 단계까지 진행. 새로운 언어와 프레임워크를 실제 서비스에 적용할 수 있음을 확인한 프로젝트입니다. (진행 중)',
      tech: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'Flyway', 'PostgreSQL', 'React', 'Vite', 'Kakao Maps', 'Apps in Toss'],
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
        '영수증·냉장고 재료 관리를 기반으로 레시피를 공유하는 웹 서비스입니다. 백엔드 데이터 구조 전반을 맡아 ERD 설계부터 인증, 조회 성능까지 담당했습니다.',
      role: [
        '백엔드 ERD 및 아키텍처 설계 (팀 리뷰를 거쳐 개정)',
        '재료·레시피·사용자 관계를 분리해 정규화하고 데이터 중복 제거',
        '조회 패턴을 기준으로 PostgreSQL 인덱스를 설계해 스캔 범위 축소',
        'JWT 기반 인증/인가 구조 설계로 사용자별 데이터 접근 범위 분리',
      ],
      result: '스키마 정규화와 인덱싱으로 페이지 로딩 시간 약 30% 단축, 데이터 정합성 확보',
      solvingCase: 'Case 02',
      tech: ['Python', 'Django', 'DRF', 'PostgreSQL', '정규화', '인덱싱', 'JWT', 'Docker', 'AWS'],
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
      summary:
        'AI 챗봇이 상담을 도와주는 중고 거래 서비스입니다. 팀 리더로서 형상 관리와 백엔드 안정화를 함께 맡았습니다.',
      role: [
        '팀 리더 · GitHub 브랜치 전략 수립과 병합 충돌 정리, 코드 리뷰 진행',
        '실시간 채팅 및 거래 API 안정화',
        'WebSocket 통합과 캐싱 레이어 도입, 반복 조회 쿼리에 인덱스 추가',
      ],
      result:
        '반복 조회를 캐시로, 대기 시간을 WebSocket으로 분리하면서 "어디를 캐시하고 어디를 쿼리로 풀어야 하는지"에 대한 판단 기준을 얻었습니다.',
      tech: ['Django', 'PostgreSQL', 'Python', 'WebSocket', 'OpenAI API', 'Docker', 'AWS'],
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
      summary:
        '개인 일정과 기록을 관리하는 웹 블로그 애플리케이션입니다. 데이터가 쌓이며 느려진 검색을 쿼리 관점에서 개선했습니다.',
      role: [
        '팀 리더 · GitHub 버전 관리 및 운영 중 Hotfix 대응',
        '검색 기능 구현 및 느린 요청 원인 추적',
        '실행 계획을 확인해 LIKE 조회를 PostgreSQL Full-Text Search로 전환',
        '무거운 단일 쿼리를 목적별로 분할해 인덱스를 타도록 재작성',
      ],
      result: '검색 응답 속도 2배 향상',
      solvingCase: 'Case 01',
      tech: ['Python', 'Django', 'PostgreSQL', 'Full-Text Search', 'JavaScript', 'Docker'],
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
            데이터 구조 설계와 API 구현, 성능 개선을 직접 담당한
            프로젝트입니다. 각 항목은 무엇을 맡았고 무엇이 달라졌는지를
            기준으로 정리했습니다.
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
                  {project.solvingCase && (
                    <a className="project-solving-link" href="#problem-solving">
                      문제 해결 경험 {project.solvingCase}에서 원인 분석 과정
                      보기 →
                    </a>
                  )}
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
