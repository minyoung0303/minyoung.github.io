import './css/Home.css';

const stats = [
  { value: '2+', label: '년 개발 경험' },
  { value: '8+', label: '완료 프로젝트' },
  { value: '4', label: '기술 자격증' },
  { value: '2.5x', label: '서비스 사용량 증가' },
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
          Python · Django 기반 <strong>백엔드 개발자</strong>
        </h2>

        <p className="home-desc">
          안정적인 서버 설계와 데이터 중심의 문제 해결에 집중합니다.
          한 번이 부족하면 100번, 1000번 시도하는 끈질긴 개발자로서
          <span className="home-highlight">실 사용량 2.5배 성장</span>이라는 정량적 성과를 만들어 왔습니다.
        </p>

        <div className="home-actions">
          <button className="btn btn-primary" onClick={() => onNavigate('projects')}>
            프로젝트 보기
          </button>
          <button className="btn btn-ghost" onClick={() => onNavigate('contact')}>
            연락하기
          </button>
        </div>

        <ul className="home-stats">
          {stats.map((s) => (
            <li key={s.label} className="home-stat">
              <span className="home-stat-value">{s.value}</span>
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
