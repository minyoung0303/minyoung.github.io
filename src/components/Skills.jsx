import './css/Skills.css';

/**
 * 스택은 "쓸 수 있다"가 아니라 "어디에 어떻게 썼는지" 기준으로 정리한다.
 * Database & SQL을 첫 그룹에 두는 이유는 실제 업무 비중이 가장 크기 때문이다.
 */
const skillGroups = [
  {
    icon: '▤',
    title: 'Database & SQL',
    note: '가장 오래 붙어 있던 영역',
    items: [
      {
        name: 'MySQL / MariaDB',
        desc: '사내 백오피스 운영 DB 스키마 관리 및 조회 개선 (위시켓)',
      },
      {
        name: 'PostgreSQL',
        desc: '정규화·인덱싱·Full-Text Search로 조회 성능 개선',
      },
      {
        name: 'SQL 튜닝',
        desc: '실행 계획 확인 → 인덱스 설계 → 무거운 쿼리 분할 (SQLD 보유)',
      },
      {
        name: '데이터 모델링',
        desc: 'ERD 설계, 트랜잭션 기반 정합성 확보, 원장 구조 설계',
      },
    ],
  },
  {
    icon: '{ }',
    title: 'Backend',
    note: '주력 · 필요하면 새로 배워 적용',
    items: [
      {
        name: 'Python / Django · DRF',
        desc: '주력 스택. REST API 설계와 운영 백오피스 개발',
      },
      {
        name: 'Java / Spring Boot',
        desc: 'JPA · Flyway 기반 API 설계 (개인 프로젝트로 직접 습득)',
      },
      {
        name: 'Node.js / TypeScript',
        desc: '대시보드 백엔드 API 및 서버 로직 구현',
      },
      {
        name: 'API · 인증',
        desc: 'RESTful 설계, JWT 인증/인가, WebSocket 실시간 통신',
      },
    ],
  },
  {
    icon: '☁',
    title: 'Infra & DevOps',
    note: '설계에서 배포·운영까지',
    items: [
      {
        name: 'AWS',
        desc: 'Lambda · S3 · IAM · WAF · EC2 · ECS · DynamoDB 운영 경험',
      },
      { name: 'Docker', desc: '컨테이너화로 개발·배포 환경 일관성 확보' },
      {
        name: 'CI/CD',
        desc: 'GitHub Actions 파이프라인 구성 (빌드 → 아티팩트 → 배포 자동화)',
      },
      {
        name: 'Git / GitHub',
        desc: '팀 리더로 브랜치 전략·PR 리뷰·Hotfix 대응 주도',
      },
    ],
  },
  {
    icon: '◇',
    title: 'Collaboration',
    note: '비개발 직군과 일하는 방식',
    items: [
      {
        name: '비개발 직군 소통',
        desc: '약 50명이 쓰는 백오피스에서 요구사항 정리 및 변경 사항 설명',
      },
      {
        name: '업무 자동화',
        desc: 'Slack Webhook 연동으로 수동 전달 과정을 시스템으로 이전',
      },
      { name: 'Notion · Dooray류 협업', desc: '이슈 트래킹, 문서화, 주간 스탠드업' },
      { name: 'React · Next.js · Figma', desc: '필요할 때 프론트까지 직접 처리' },
    ],
  },
];

/**
 * 새 기술을 스스로 학습해 실제로 적용한 근거.
 * 추정이나 희망이 아니라 결과물이 남아 있는 것만 적는다.
 */
const learningTrack = [
  {
    tech: 'Java · Spring Boot',
    when: '2026.05 —',
    what: 'Python만 쓰던 상태에서 Spring Data JPA · Flyway를 새로 익혀 장소·리뷰 REST API를 직접 설계 (대동맛지도)',
  },
  {
    tech: 'TypeScript · Deno · Hono',
    when: '2026.07 —',
    what: '처음 접한 런타임과 웹 프레임워크로 연합형 마이크로블로그를 구현하고, 코어 라이브러리 버그를 분석해 수정 (Fedify · OSSCA)',
  },
  {
    tech: 'ActivityPub · JSON-LD',
    when: '2026.07 —',
    what: 'W3C 표준 명세를 직접 읽고 Mastodon 계정 간 전파가 동작하는 수준까지 구현',
  },
  {
    tech: 'AWS DynamoDB · 트랜잭션',
    when: '2026.07 —',
    what: 'RDBMS 경험을 기반으로 NoSQL 트랜잭션·조건부 쓰기 모델을 학습해 결제 크레딧 정합성 문제에 적용',
  },
];

function Skills() {
  return (
    <section id="skills" className="section section--alt skills">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">기술 스택</h2>
          <p className="section-lead">
            서버 설계부터 배포까지, 서비스를 실제로 굴러가게 만드는 데
            필요한 도구들을 다룹니다. 각 항목은 어디에 어떻게 썼는지를
            함께 적었습니다.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-head">
                <span className="skill-icon">{group.icon}</span>
                <div className="skill-card-heading">
                  <h3 className="skill-card-title">{group.title}</h3>
                  {group.note && (
                    <span className="skill-card-note">{group.note}</span>
                  )}
                </div>
              </div>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li className="skill-item" key={item.name}>
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-desc">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* 새 기술을 스스로 익혀 적용한 기록 */}
        <div className="skills-learning">
          <div className="skills-learning-head">
            <h3 className="skills-learning-title">
              새로 배워서 바로 적용한 것들
            </h3>
            <p className="skills-learning-lead">
              주력이 Python이지만, 필요한 기술이 생기면 언어와 프레임워크를
              가리지 않고 익혀서 결과물까지 만들어 왔습니다.
            </p>
          </div>

          <ul className="skills-learning-list">
            {learningTrack.map((l) => (
              <li className="skills-learning-item" key={l.tech}>
                <div className="skills-learning-meta">
                  <span className="skills-learning-tech">{l.tech}</span>
                  <span className="skills-learning-when">{l.when}</span>
                </div>
                <p className="skills-learning-what">{l.what}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
