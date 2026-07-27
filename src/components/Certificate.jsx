import './css/Certificate.css';

const certificates = [
  { name: '정보처리기사', date: '2025.09', org: '한국산업인력공단' },
  { name: 'SQL 개발자 (SQLD)', date: '2024.04', org: '한국데이터산업진흥원' },
  { name: '컴퓨터활용능력 1급', date: '2021.10', org: '대한상공회의소' },
  { name: '네트워크관리사 2급', date: '2019.06', org: '한국정보통신자격협회' },
];

function Certificate() {
  return (
    <section id="certificate" className="section certificate">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">Certificate</span>
          <h2 className="section-title">보유 자격증</h2>
          <p className="section-lead">
            개발 · 데이터 · 인프라 전반의 기초 역량을 국가기술자격으로
            검증받았습니다.
          </p>
        </div>

        <div className="cert-grid">
          {certificates.map((cert) => (
            <article className="cert-card" key={cert.name}>
              <span className="cert-badge" aria-hidden="true">
                <i className="fa-solid fa-certificate"></i>
              </span>
              <div className="cert-info">
                <h3 className="cert-name">{cert.name}</h3>
                <span className="cert-org">{cert.org}</span>
              </div>
              <span className="cert-date">{cert.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
