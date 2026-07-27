import './css/About.css';

const TYPE_META = {
  경력: { label: '경력', className: 'career' },
  교육: { label: '교육', className: 'education' },
  자격증: { label: '자격증', className: 'cert' },
  학력: { label: '학력', className: 'degree' },
};

const timeline = [
  {
    year: '2025 — 현재',
    name: '백엔드 개발자로 성장 중',
    type: '경력',
    desc: '교육과 개인 프로젝트를 통해 백엔드 설계 역량을 지속적으로 확장하고 있습니다.',
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
    desc: '실제 운영 조직의 업무 흐름을 분석해 Django Admin 기반 백오피스 시스템을 개선했습니다.',
  },
  {
    year: '2024.05',
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
              꾸준함으로 쌓아온<br />백엔드 개발 여정
            </h2>
            <p className="section-lead">
              데이터 구조를 먼저 이해하고, 안정적인 서버로 문제를 푸는 것을
              좋아합니다. 아래 타임라인에서 지금까지의 활동을 한눈에 확인하실 수
              있습니다.
            </p>

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
