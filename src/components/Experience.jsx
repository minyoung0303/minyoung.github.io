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
      'Docker',
      'Git / GitHub',
      'Tableau',
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
    title: 'ESTsoft 백엔드 개발자 과정',
    organization: '교육 과정',
    period: '2023.06 - 2023.11',
    type: 'Education',
    description: [
      'HTML5, CSS3, JavaScript를 학습하여 프론트엔드 이해도 확보',
      'Python을 활용 문제 해결 능력 개발',
      'JAVA 기반 객체지향 프로그래밍 및 자료구조 이해',
      'Django Framework 기반 웹 서비스 개발 및 프로젝트 수행',
      'AWS(IAM, RDS, S3, ECS, EC2) 활용하여 프로젝트 배포 및 시스템 아키텍처 이해',
      'PostgreSQL 연동, ERD 설계 및 데이터 아키텍처 설계 경험',
    ],
    tech: [
      'Python',
      'Django',
      'PostgreSQL',
      'JAVA',
      'HTML5',
      'CSS3',
      'JavaScript',
      'AWS(IAM, RDS, S3, ECS, EC2)',
      'Docker',
      'Git / GitHub',
    ]
  },
  {
    title: 'ERP / EP 시스템 사무보조',
    organization: '동부엔지니어링 · 수자원환경부',
    period: '2022.05 - 2023.05',
    type: 'Work',
    description: [
      'ERP / EP 시스템 데이터 관리 및 행정 지원',
      '시스템 기반 업무 프로세스 이해 및 데이터 처리 경험',
      '부서 간 협업을 통한 업무 요청 대응 및 문서 정리',
      '공공기관 시스템 운영 환경에 대한 이해 증진',
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