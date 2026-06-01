import './css/Experience.css';

const experiences = [
  {
    title: 'Backend / Frontend Internship',
    organization: '위시켓',
    period: '2024.07 - 2025.01',
    type: 'Internship',
    description: [
      '소속 : 개발팀',
        '   - 프론트엔드/백엔드개발 지원',
        '   - 내부 평가 관리 시스템 백엔드 개발 및 운영 인턴(6개월)',
      '이용자 평가·리뷰 관리 시스템 백엔드 개발 및 UX/UI 개선',
        '   - 사내 백오피스(약 50명 사용) 프론트엔드·백엔드 개발 및 협업 진행',
        '   - Slack Webhook API을 활용해 평가 데이터 공유 자동화 구현 (기존 수동 URL 전달 방식 개선)',
        '   - 데이터 공유 속도 10초 → 2초 단축, 업무 효율 및 시스템 활용도 향상',  
      '협업 및 운영 환경 경험',
        '   - 주간 스탠드업 회의 및 이슈 트래킹 도구(Notion 등)을 활용한 태스크 관리 경험',
        '   - Git 활용 및 PR 리뷰 기반 개발 프로세스 경험'
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
      'AWS(IAM, RDS, S3, EC2 등) 활용 배포 경험',
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