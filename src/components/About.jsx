import './css/About.css';

const TYPE_META = {
  경력: { label: '경력', className: 'career' },
  교육: { label: '교육', className: 'education' },
  자격증: { label: '자격증', className: 'cert' },
  학력: { label: '학력', className: 'degree' },
};

/**
 * 일하는 기준.
 * 기술 스택보다 오래 남는 부분이라 판단해 About 상단에 함께 배치한다.
 */
const principles = [
  {
    title: '"왜 이 기능이 필요한가"를 먼저 확인합니다',
    desc: '요청을 그대로 만들기 전에 어떤 문제를 풀려는 요청인지 확인합니다. 더 단순한 대안이 있으면 그쪽을 제안합니다.',
  },
  {
    title: '막히면 혼자 붙잡지 않고 공유합니다',
    desc: '진행 상황과 막힌 지점을 먼저 드러내는 편이 결과적으로 빠릅니다. 리뷰와 피드백을 받는 과정을 편하게 생각합니다.',
  },
  {
    title: '비개발 직군의 언어로 설명합니다',
    desc: '지표를 보고 판단해야 하는 사람에게는 구현 방식보다 "무엇이 어떻게 달라지는지"가 필요합니다.',
  },
];

const timeline = [
  {
    year: '2026.07 — 현재',
    name: '서울경제신문 미래전략부 인턴',
    type: '경력',
    desc: '유료 AI 서비스 AI NOVA의 결제 크레딧 원장과 사용자 지표 데이터를 담당하고 있습니다. 트랜잭션 정합성 확보와 실시간 CS 시스템 구축을 맡았습니다.',
  },
  {
    year: '2025.09',
    name: '정보처리기사 취득',
    type: '자격증',
    desc: '소프트웨어 개발 전 과정에 대한 국가기술자격을 취득했습니다.',
  },
  {
    year: '2024.07 — 2024.12',
    name: '위시켓 개발팀 인턴십',
    type: '경력',
    desc: '약 50명이 사용하는 사내 백오피스를 Django · MariaDB 기반으로 개발·운영하며, 비개발 직군의 업무 흐름을 분석해 병목을 자동화했습니다.',
  },
  {
    year: '2024.04',
    name: 'SQLD 취득',
    type: '자격증',
    desc: '데이터베이스 설계와 SQL 활용 역량을 검증받았습니다.',
  },
  {
    year: '2023.09 — 2023.11',
    name: 'K-Digital 해커톤',
    type: '경력',
    desc: '서비스 구조 설계와 인증 시스템 구현을 맡아 MVP 완성에 기여했습니다.',
  },
  {
    year: '2023.06 — 2023.11',
    name: 'ESTsoft 백엔드 개발자 과정',
    type: '교육',
    desc: '요구사항 분석부터 API 설계까지 팀 프로젝트의 백엔드 전반을 경험했습니다.',
  },
  {
    year: '2019.03 — 2022.02',
    name: '컴퓨터공학 학사 (학점은행제)',
    type: '학력',
    desc: '컴퓨터공학 학사 학위를 취득했습니다. (GPA 3.8 / 4.5)',
  },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <div className="about-grid">
          {/* left: intro */}
          <div className="about-intro">
            <span className="section-kicker">About</span>
            <h2 className="section-title">
              사람이 떠안던 일을<br />시스템으로 옮깁니다
            </h2>
            <p className="section-lead">
              데이터 구조를 먼저 이해하고, 안정적인 서버로 문제를 푸는 것을
              좋아합니다. 기술이 실제로 누군가의 일과 경험을 낫게 만드는
              지점에 관심이 많아, 지금까지도 사람이 반복해서 떠안던 일을
              시스템으로 옮기는 작업을 주로 해왔습니다.
            </p>

            <ul className="about-principles">
              {principles.map((p) => (
                <li className="about-principle" key={p.title}>
                  <h3 className="about-principle-title">{p.title}</h3>
                  <p className="about-principle-desc">{p.desc}</p>
                </li>
              ))}
            </ul>

            <ul className="about-legend">
              {Object.values(TYPE_META).map((t) => (
                <li key={t.className} className="about-legend-item">
                  <span className={`about-dot ${t.className}`} />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          {/* right: timeline */}
          <ol className="about-timeline">
            {timeline.map((item, i) => {
              const meta = TYPE_META[item.type];
              return (
                <li className="about-item" key={i}>
                  <span className={`about-marker ${meta.className}`} />
                  <div className="about-content">
                    <div className="about-item-head">
                      <span className="about-year">{item.year}</span>
                      <span className={`about-tag ${meta.className}`}>
                        {meta.label}
                      </span>
                    </div>
                    <h3 className="about-name">{item.name}</h3>
                    <p className="about-desc">{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default About;
