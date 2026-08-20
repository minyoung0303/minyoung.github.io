import './css/Home.css';

/**
 * 지표는 모두 아래 섹션(문제 해결 경험 / 프로젝트 / 경력)에서
 * 근거를 확인할 수 있는 수치만 사용한다.
 */
const stats = [
  { value: '2배', label: '검색 쿼리 응답 개선' },
  { value: '30%', label: '조회 페이지 로딩 단축' },
  { value: '10초→2초', label: '사내 데이터 공유 자동화' },
  { value: '50명', label: '사용 백오피스 개발·운영' },
];

function Home({ onNavigate }) {
  return (
    <section id="home" className="home">
      <div className="home-bg" aria-hidden="true">
        <span className="home-glow home-glow-1" />
        <span className="home-glow home-glow-2" />
        <span className="home-grid" />
      </div>

      <div className="home-inner section-inner">
        <div className="home-badge">
          <span className="home-badge-dot" />
          새로운 기회를 찾고 있습니다
        </div>

        <h1 className="home-name">
          안녕하세요,<br />
          <span className="home-name-accent">이민영</span> 입니다.
        </h1>

        <h2 className="home-title">
          데이터와 쿼리부터 보는 <strong>백엔드 개발자</strong>
        </h2>

        <p className="home-desc">
          RDBMS 설계와 SQL 성능 개선, API 개발과 운영이 제 중심축입니다.
          Python · Django로 시작해 필요에 따라 Java · Spring Boot,
          Node.js · TypeScript를 직접 익혀 서비스에 적용했습니다.
          기능이 되는지보다{' '}
          <span className="home-highlight">데이터가 늘어도 버티는지</span>를
          먼저 확인합니다.
        </p>

        <div className="home-actions">
          <button
            className="btn btn-primary"
            onClick={() => onNavigate('problem-solving')}
          >
            문제 해결 경험 보기
          </button>
          <button className="btn btn-ghost" onClick={() => onNavigate('contact')}>
            연락하기
          </button>
        </div>

        <ul className="home-stats">
          {stats.map((s) => (
            <li key={s.label} className="home-stat">
              <span
                className={`home-stat-value ${
                  s.value.length > 4 ? 'is-long' : ''
                }`}
              >
                {s.value}
              </span>
              <span className="home-stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="home-scroll-cue"
        onClick={() => onNavigate('about')}
        aria-label="Scroll to About"
      >
        <span className="home-scroll-text">Scroll</span>
        <span className="home-scroll-mouse">
          <span className="home-scroll-wheel" />
        </span>
      </button>
    </section>
  );
}

export default Home;
