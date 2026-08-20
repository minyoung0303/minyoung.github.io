import './css/Experience.css';

const experiences = [
  {
    title: 'AI 서비스 개발 인턴 (Backend)',
    organization: '서울경제신문 미래전략부',
    period: '2026.07 — 현재',
    type: 'Internship',
    summary:
      '실제 결제가 이루어지는 유료 B2C AI 서비스(AI NOVA)의 결제·데이터 백엔드를 담당합니다. 운영 중인 서비스에서 크레딧 정합성과 지표 신뢰도를 책임지고, 기능 제안부터 배포까지 직접 처리합니다.',
    groups: [
      {
        heading: '담당 범위',
        points: [
          '크레딧 원장 구조 설계·운영 (잔액 변경과 사용 기록의 트랜잭션 정합성)',
          '실시간 고객 문의(CS) 시스템을 데이터 모델 재설계부터 운영 배포까지 단독 진행',
          '사용자 지표·결제·비용을 관리하는 백오피스 대시보드 개발 및 운영',
        ],
      },
      {
        heading: '운영 안정성',
        points: [
          '단방향 이메일 응대를 유저-관리자 양방향 실시간 채팅으로 전환',
          'WebSocket 실시간 알림에 30초 폴링을 폴백으로 두어 장애 시에도 알림이 끊기지 않게 처리',
          '계정 역할(Role) 관리 체계를 설계해 하드코딩 예외 목록을 데이터로 이전 (배포 없이 역할 변경 가능)',
        ],
      },
      {
        heading: '일하는 방식',
        points: [
          '요청받지 않은 문제(지표 오염, 원장 정합성)를 먼저 발견해 원인과 대안을 정리해 제안',
          '변경 사항이 비개발 직군의 판단에 미치는 영향을 먼저 설명하고 합의 후 작업',
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
      '약 50명의 사내 구성원이 매일 쓰는 백오피스를 개발·운영했습니다. 사용자 대부분이 비개발 직군이라, 요구사항을 듣는 것부터 변경 사항을 설명하는 것까지가 업무의 절반이었습니다.',
    groups: [
      {
        heading: '운영 DB · 백엔드 개발',
        points: [
          '이용자 평가·리뷰 관리 시스템 백엔드 개발 (Django · MariaDB)',
          '운영 DB 스키마를 다루며 조회 조건 변경과 데이터 정합성 확인을 직접 담당',
          'AWS ECS · Docker 기반 운영 환경에서 배포와 장애 확인 경험',
        ],
      },
      {
        heading: '비개발 직군과의 협업',
        points: [
          '실제 사용자의 업무 흐름을 관찰해 병목을 찾고 개선 방향을 제안',
          'Slack Webhook API로 수동 URL 전달 과정을 자동화 (공유 소요 10초 → 2초)',
          '어려운 기술 변경도 "무엇이 어떻게 달라지는지" 기준으로 설명해 합의 확보',
        ],
      },
      {
        heading: '형상 관리 · 리뷰 문화',
        points: [
          '주간 스탠드업 · Notion 이슈 트래킹 · Git 브랜치 기반 PR 리뷰로 협업',
          '리뷰에서 받은 피드백을 반영하고, 동료 코드에도 의견을 남기는 흐름 경험',
        ],
      },
    ],
    tech: ['Python', 'Django', 'MariaDB', 'React', 'jQuery', 'AWS ECS', 'Docker', 'Slack Webhook', 'Git'],
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
