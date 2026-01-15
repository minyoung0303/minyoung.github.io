// Experience.jsx -- 경력 타임라인, 인증서, 오픈소스 기여 등 서술
// 2024
// - Django 서비스 구조 개선
// - API 응답 속도 30% 개선
import './css/Experience.css';

const experiences = [
  {
    title: 'Full Stack Internship',
    organization: '위시켓',
    period: '2024.07 - 2025.01',
    type: 'Internship',
    description: [
      '파트너 및 클라이언트 평가 기록 관리 프로세스의 비효율성 문제를 개선하기 위한 내부 시스템 개발',
      'Django Admin 기반 평가 기록 관리 시스템을 직접 설계·구현하여 데이터 접근성과 운영 효율 개선',
      '평가·삭제·조회 기능을 표준화하여 평가 데이터의 일관성 및 관리 안정성 확보',
      'Slack 알림 기능을 연동하여 평가 결과를 팀 내 실시간으로 공유, 협업 효율 향상',
      'Back Office 서비스 일정 관리 기능 개선을 통해 실무자 중심의 업무 흐름 최적화',
      'DatePicker 커스터마이징 및 TODO 관리 기능(Due Date, 다중 작성) 추가로 일정 관리 편의성 강화',
    ],
    tech: [
      'Python',
      'Django',
      'Django Admin',
      'React',
      'jQuery',
      'SCSS',
      'Git / GitHub',
      'Notion',
    ],
  },
  {
    title: '2023 K-Digital Hackathon',
    organization: '팀 프로젝트',
    period: '2023.09 - 2023.11',
    type: 'Project',
    description: [
      '주요 역할 : 백엔드 개발 및 서비스 아키텍처 설계',
      '서비스 도메인 기반 ERD 설계',
      'Django 기반 회원가입 / 로그인 API 구현',
      'JWT 인증 구조 설계',
      'Django Admin을 활용한 운영/관리 환경 구축',
      '서비스 전체 흐름을 고려한 아키텍처 설계 참여',
    ],
    tech: [
      'Django',
      'Django Admin',
      'PostgreSQL',
      'JWT Authentication',
      'REST API',
      'GitHub',
    ],
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
    tech: [
      'ERP',
      'EP System',
      'Data Handling',
      'Public Sector System',
    ],
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