// Experience.jsx -- 경력 타임라인, 인증서, 오픈소스 기여 등 서술
// 2024
// - Django 서비스 구조 개선
// - API 응답 속도 30% 개선


function Experience() {
  return (
    <section id="experience">
      <h3>Experience</h3>

      <article>
        <h3>Django 기반 웹 서비스</h3>
        <p>
          사용자 인증과 게시판 기능을 포함한 웹 서비스입니다.
          REST API 구조로 백엔드를 설계했습니다.
        </p>
        <ul>
          <li>Backend: Django</li>
          <li>DB: SQLite / MySQL</li>
        </ul>
        <a href="https://github.com/minyoung0303/KDT_Hackathon" target="_blank">
          냉장고 해방일지
        </a>
      </article>

      <article>
        <h3>사이드 프로젝트</h3>
        <p>
          팀 프로젝트로 진행한 서비스로,
          백엔드 API 개발을 담당했습니다.
        </p>
        <ul>
          <li>Backend: Django</li>
          <li>Frontend: React</li>
        </ul>
        <a href="https://github.com/minyoung0303/JHC" target="_blank">
          Chatbot 상담사가 있는 중고 거래 플랫폼
        </a>
      </article>
            <article>
        <h3>사이드 프로젝트</h3>
        <p>
          팀 프로젝트로 진행한 서비스로,
          백엔드 API 개발을 담당했습니다.
        </p>
        <ul>
          <li>Backend: Django</li>
          <li>Frontend: React</li>
        </ul>
        <a href="https://github.com/minyoung0303/MYLOG" target="_blank">
          MYLOG
        </a>
      </article>
    </section>
  )
}

export default Experience