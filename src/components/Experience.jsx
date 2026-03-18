import './css/Experience.css';

const experiences = [
  {
    title: 'Backend / Frontend Internship',
    organization: '위시켓',
    period: '2024.07 - 2025.01',
    type: 'Internship',
    description: [
      'Django 기반 내부 관리 시스템 비즈니스 로직 구현',
      'MariaDB(RDS) 기반 파트너/클라이언트 평가 관리 시스템 개선',
      'Django ORM을 활용한 관계 모델 설계 및 데이터 무결성 보완',
      '파트너 이슈 개수 × 가중치 기반 평점 산정 로직 설계 및 구현',
      'Django Admin 커스터마이징 (정렬/필터/검색 기능 고도화)',
      'QuerySet 구조 개선을 통한 불필요한 반복 조회 제거',
      '관리자 업무 처리 흐름 단축 및 UX 개선',
      'Slack Webhook 연동을 통한 실시간 알림 자동화',
      'AWS ECS 기반 컨테이너 배포 환경 경험',
      'RDS(MariaDB) 연동 운영',
      'Docker 기반 개발 환경 관리',
    ],
    tech: [
      'Python',
      'Django',
      'Django Admin',
      'MariaDB (RDS)',
      'AWS ECS',
      'Docker',
      'Slack Webhook',
      'Git / GitHub',
    ],
  },
  {
    title: '냉Django 해방일지',
    organization: '팀 프로젝트',
    period: '2023.09 - 2023.11',
    type: 'Project',
    description: [
      '레시피 추천 서비스 백엔드 개발',
      'ERD 설계 주도 및 데이터 구조 설계',
      'AWS S3 기반 이미지 저장 구조 구현',
      '소셜 로그인 및 추천 기능 구현',
    ],
    tech: [
      'Django',
      'PostgreSQL',
      'AWS S3',
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
      'HTML, CSS, JavaScript 기반 프론트엔드 기초 학습',
      'Python 기반 문제 해결 능력 강화',
      'Java 객체지향 프로그래밍 및 자료구조 학습',
      'Django 기반 웹 서비스 개발 및 프로젝트 수행',
      'AWS(IAM, RDS, S3, ECS, EC2) 활용 배포 경험',
      'PostgreSQL 연동 및 ERD 설계 경험',
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