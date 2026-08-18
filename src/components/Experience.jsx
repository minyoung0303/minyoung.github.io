import './css/Experience.css';

const experiences = [
  {
    title: 'AI 서비스 개발 인턴 (Backend)',
    organization: '서울경제신문 미래전략부',
    period: '2026.07 — 현재',
    type: 'Internship',
    summary:
      '유료 B2C AI 서비스 결제·데이터 백엔드 (Python / AWS). 실제 결제·크레딧이 동작하는 프로덕션 서비스에서 크레딧 정합성과 데이터 신뢰도를 담당합니다.',
    groups: [
      {
        heading: '크레딧 원장 정합성·안전성',
        points: [
          '잔액 변경과 원장 기록을 DynamoDB 트랜잭션으로 원자화하고, 회수 시 조건부 쓰기로 음수 잔액 차단',
          '대량 일괄 지급을 사용자별 독립 트랜잭션으로 분리해 일부 실패가 전체 롤백으로 번지지 않게 격리',
        ],
      },
      {
        heading: '실시간 고객 문의(CS) 시스템 설계·개발·배포',
        points: [
          '단방향 이메일 응대를 유저-관리자 양방향 실시간 채팅으로 전환 (데이터 모델 재설계부터 운영 배포까지)',
          'WebSocket 실시간 알림에 30초 폴링을 폴백으로 두어 안정화',
        ],
      },
      {
        heading: '계정 역할(Role) 관리 체계 설계',
        points: [
          '개발자·테스트 계정이 매출·활성 지표를 오염시키는 문제를 발견해 관리자·테스트 계정을 분리',
          '하드코딩 목록 대신 DynamoDB 역할 테이블과 코드 폴백·캐시 구조로 설계',
        ],
      },
    ],
    tech: ['Python', 'AWS', 'DynamoDB', 'WebSocket', 'Lambda', 'S3', 'IAM', 'Node.js', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Fedify 오픈소스 기여',
    organization: 'OSSCA 2026',
    period: '2026.07 — 현재',
    type: 'Open Source',
    summary:
      'W3C ActivityPub 표준 기반 TypeScript 프레임워크 Fedify의 코어 버그를 수정하고, 연합형(federated) 마이크로블로그를 구현했습니다.',
    groups: [
      {
        heading: '코어 버그 수정',
        points: [
          'Fedify Vocabulary 속성 파싱 버그 분석 및 수정',
        ],
      },
      {
        heading: '연합형 마이크로블로그 구현',
        points: [
          'Fedify · Hono · better-sqlite3 스택으로 ActivityPub 연합형 마이크로블로그 구현',
          '팔로우 / 언팔로우, 글 작성, Mastodon 계정 간 자동 전파 기능 구현',
        ],
      },
    ],
    tech: ['TypeScript', 'Node.js', 'Deno', 'Hono', 'SQLite', 'ActivityPub', 'JSON-LD'],
  },
  {
    title: 'Backend / Frontend Internship',
    organization: '위시켓',
    period: '2024.07 — 2024.12',
    type: 'Internship',
    summary:
      '사내 백오피스(약 50명 사용)의 프론트엔드·백엔드를 함께 개발·운영하며 평가 시스템을 개선했습니다.',
    groups: [
      {
        heading: '평가·리뷰 관리 시스템 개발',
        points: [
          '이용자 평가·리뷰 관리 시스템 백엔드 개발 및 UX/UI 개선',
          'Slack Webhook API로 평가 데이터 공유를 자동화 (기존 수동 URL 전달 방식 개선)',
        ],
      },
      {
        heading: '업무 효율 개선',
        points: [
          '평가 데이터 공유 속도 10초 → 2초로 단축해 업무 효율과 시스템 활용도 향상',
        ],
      },
      {
        heading: '협업 방식',
        points: [
          '주간 스탠드업 · Notion 이슈 트래킹 · PR 리뷰 기반 협업 경험',
        ],
      },
    ],
    tech: ['Python', 'Django', 'React', 'jQuery', 'MariaDB', 'AWS ECS', 'Docker', 'Slack Webhook'],
  },
  {
    title: 'ESTsoft 백엔드 개발자 과정',
    organization: '교육 과정',
    period: '2023.06 — 2023.11',
    type: 'Education',
    summary:
      '요구사항 분석부터 배포까지 백엔드 개발 전 과정을 다룬 부트캠프 과정입니다.',
    groups: [
      {
        heading: '백엔드 개발',
        points: [
          'Python 기반 문제 해결 능력 강화 및 Java 객체지향·자료구조 학습',
          'Django 기반 웹 서비스 개발 및 팀 프로젝트 수행',
        ],
      },
      {
        heading: '데이터 · 인프라',
        points: [
          'PostgreSQL 연동 및 ERD 설계 경험',
          'AWS(IAM · RDS · S3 · EC2) 활용 배포 경험',
        ],
      },
    ],
    tech: ['Python', 'Django', 'PostgreSQL', 'Java', 'JavaScript', 'AWS', 'Docker'],
  },
];

function Experience() {
  return (
    <section id="experience" className="section section--alt experience">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">경력 &amp; 활동</h2>
          <p className="section-lead">
            실무와 교육, 팀 프로젝트를 거치며 협업과 운영 환경에서의
            개발 프로세스를 익혔습니다.
          </p>
        </div>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <article className="exp-card" key={i}>
              <div className="exp-side">
                <span className="exp-period">{exp.period}</span>
                <span
                  className={`exp-type ${exp.type
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                >
                  {exp.type}
                </span>
              </div>

              <div className="exp-main">
                <h3 className="exp-title">{exp.title}</h3>
                <span className="exp-org">{exp.organization}</span>

                {exp.summary && <p className="exp-summary">{exp.summary}</p>}

                <div className="exp-groups">
                  {exp.groups.map((group, gi) => (
                    <div className="exp-group" key={gi}>
                      <h4 className="exp-group-title">{group.heading}</h4>
                      <ul className="exp-highlights">
                        {group.points.map((point, pi) => (
                          <li key={pi}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="exp-tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
