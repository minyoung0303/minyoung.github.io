// Experience.jsx -- 경력 타임라인, 인증서, 오픈소스 기여 등 서술
// 2024
// - Django 서비스 구조 개선
// - API 응답 속도 30% 개선
import './css/Experience.css';

const experiences = [
  {
    title: 'Wishket Internship',
    organization: '위시켓',
    period: '2024.07 - 2025.01',
    type: 'Internship',
    description: [
      'IT 외주 및 프로젝트 매칭 플랫폼 비즈니스 구조 이해',
      '개발 외주 프로세스 및 요구사항 정리 방식 학습',
      '실제 프로젝트 사례를 통해 개발자–클라이언트 커뮤니케이션 흐름 파악',
    ],
    tech: ['IT 서비스', '요구사항 분석', '커뮤니케이션'],
  },
  {
    title: 'Hackathon',
    organization: '팀 프로젝트',
    period: '2023.09 - 2023.11',
    type: 'Project',
    description: [
      '짧은 기간 내 문제 정의부터 기능 구현까지 전 과정 경험',
      '팀 단위 협업을 통해 역할 분담 및 일정 관리',
      '아이디어를 실제 동작하는 결과물로 구현',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'Git', 'Team Collaboration'],
  },
  {
    title: 'ERP / EP 시스템 사무보조',
    organization: '동부엔지니어링 · 수자원환경부',
    period: '2022.05 - 2023.05',
    type: 'Work',
    description: [
      '수자원환경부 ERP / EP 시스템 데이터 관리 및 행정 지원',
      '시스템 기반 업무 프로세스 이해 및 데이터 처리 경험',
      '부서 간 협업을 통한 업무 요청 대응 및 문서 정리',
    ],
    tech: ['ERP', 'EP System', 'Data Handling', 'Public Sector System'],
  },
];

function Experience() {
  return (
    <section id="experience">
      <h3>Experience</h3>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <div>
                <h4>{exp.title}</h4>
                <span className="organization">{exp.organization}</span>
              </div>
              <span className="period">{exp.period}</span>
            </div>

            <span className={`type ${exp.type.toLowerCase()}`}>
              {exp.type}
            </span>

            <ul className="description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {exp.tech.map((tech, idx) => (
                <span key={idx} className="tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;