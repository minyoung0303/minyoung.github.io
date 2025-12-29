// Projects: 4-6개 주요 프로젝트(라이브 데모, GitHub 링크, 기술 설명, 성능 최적화 사례 강조)
// Grid (2~3열)
// ┌──────────┐
// │ 카드     │  ← hover 시
// │ 썸네일   │     - Stack
// │ 제목     │     - 역할
// │ 한줄설명 │     - 링크
// └──────────┘


function Projects() {
  return (
    <section id="projects">
      <h3>Projects</h3>

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

export default Projects
