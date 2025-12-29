// About: 경력, 기술 스택(Backend: Django/PostgreSQL, Frontend: React), 교육 배경 등
// - 3~4줄 요약 소개
// - Backend / Frontend / Infra 스택 분리
// - 교육 or 성장 경로 (SSAFY 등)

function About() {
  return (
    <section id="about">

      <h2>About Me</h2>

      <div className="about-grid">

        <div>

          <h3>Backend</h3>
          Django, DRF, PostgreSQL

        </div>

        <div>
          <h3>Frontend</h3>
          React, Vite
        </div>

        <div>
        <h3>Infra</h3>
        AWS, Nginx
        </div>
        
      </div>
    </section>
  )
}

export default About
