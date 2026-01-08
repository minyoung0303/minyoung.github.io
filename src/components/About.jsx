// About: 경력, 기술 스택(Backend: Django/PostgreSQL, Frontend: React), 교육 배경 등
// - 3~4줄 요약 소개
// - Backend / Frontend / Infra 스택 분리
// - 교육 or 성장 경로 (SSAFY 등)
import './css/About.css';

function About() {
  return (
    <section id="about" className="about">

      <h2>About Me</h2>
      <p>
        2024.07 ~ 2024.12 
      </p> 
      <p>
        위시켓 (Wishket) 개발팀 인턴십
      </p>

      <p>
        2023.06 ~ 2023.11
      </p> 
      <p>
        ESTsoft 백엔드 개발자 과정 수료
      </p>
      <p>
        사이드 프로젝트를 통해 REST API 설계, 인증 처리, 
        데이터베이스 모델링 경험을 쌓았고, 
        기획팀, UX/UI 팀, 프론트엔드 팀과 협업하며 기능을 구현해왔습니다. 
      </p>
      <p>
        2022.05 ~ 2023.05
      </p> 
      <p>
        동부엔지니어링 수자원환경부 ERP/EP, OA 시스템 기반 사무보조
      </p>
    </section>
  )
}

export default About
