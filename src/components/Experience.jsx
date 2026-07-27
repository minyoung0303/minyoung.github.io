import './css/Experience.css';

const experiences = [
  {
    title: 'AI 서비스 개발 인턴 (Backend)',
    organization: '서울경제신문 미래전략부',
    period: '2026.07 — 현재',
    type: 'Internship',
    highlights: [
      'AI 글쓰기 플랫폼 AI NOVA(B2C 유료 서비스)의 사용자 데이터 지표를 관리하는 백오피스 대시보드 운영·개발',
      'Next.js · Node.js 기반 백오피스에서 NOVA 엔진별 토큰 사용량·결제 금액·AWS 서버 비용 지표 관리',
      '엔진 토글 16종 LLM API 호출 원가를 실측·확정하고, 프롬프트 경량화로 품질 무손상 원가 절감 여지 도출',
      '결제·크레딧 운영 기능 개발, 크레딧 반영 지연(최대 180초 → 즉시) 해결 및 손익 데이터 신뢰도 개선',
      '실시간 채팅·다중 이메일 전송 기능을 API 설계부터 운영 배포까지 end-to-end 수행',
      'AWS Lambda·S3 기반 서버리스 처리와 IAM·MFA·WAF 콘솔 권한 관리로 운영 보안 강화',
      'AI 서비스 QA 및 개선안 보고, 브랜치 전략·코드 리뷰 기반 수익형 서비스 개발 프로세스 경험',
    ],
    tech: ['Node.js', 'Next.js', 'TypeScript', 'Python', 'AWS Lambda', 'S3', 'IAM', 'WAF'],
  },
  {
    title: 'Backend / Frontend Internship',
    organization: '위시켓',
    period: '2024.07 — 2024.12',
    type: 'Internship',
    highlights: [
      '사내 백오피스(약 50명 사용) 프론트엔드·백엔드 개발 및 운영',
      '이용자 평가·리뷰 관리 시스템 백엔드 개발과 UX/UI 개선',
      'Slack Webhook API로 평가 데이터 공유 자동화 (수동 URL 전달 방식 개선)',
      '데이터 공유 속도 10초 → 2초 단축, 업무 효율 및 시스템 활용도 향상',
      '주간 스탠드업 · Notion 이슈 트래킹 · PR 리뷰 기반 협업 경험',
    ],
    tech: ['Python', 'Django', 'React', 'jQuery', 'MariaDB', 'AWS ECS', 'Docker', 'Slack Webhook'],
  },
  {
    title: '냉Django 해방일지',
    organization: '팀 프로젝트',
    period: '2023.09 — 2023.11',
    type: 'Project',
    highlights: [
      '레시피 추천 서비스 백엔드 개발',
      'ERD 설계 주도 및 데이터 구조 설계',
      'AWS S3 기반 이미지 저장 구조 구현',
      '소셜 로그인 및 추천 기능 구현',
    ],
    tech: ['Django', 'PostgreSQL', 'AWS S3', 'REST API', 'GitHub'],
  },
  {
    title: 'ESTsoft 백엔드 개발자 과정',
    organization: '교육 과정',
    period: '2023.06 — 2023.11',
    type: 'Education',
    highlights: [
      'HTML · CSS · JavaScript 기반 프론트엔드 기초 학습',
      'Python 기반 문제 해결 능력 강화, Java 객체지향·자료구조 학습',
      'Django 기반 웹 서비스 개발 및 팀 프로젝트 수행',
      'AWS(IAM · RDS · S3 · EC2) 활용 배포 경험',
      'PostgreSQL 연동 및 ERD 설계 경험',
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
                <span className={`exp-type ${exp.type.toLowerCase()}`}>
                  {exp.type}
                </span>
              </div>

              <div className="exp-main">
                <h3 className="exp-title">{exp.title}</h3>
                <span className="exp-org">{exp.organization}</span>

                <ul className="exp-highlights">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>

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
