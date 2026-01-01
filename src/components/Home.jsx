// Home.jsx 파일에는 자기소개, 한줄 요약
// (예: "Python/Django 백엔드 전문 개발자"), 프로필 사진 또는 애니메이션 배경 넣기
// [왼쪽]
// - 이름
// - 한 줄 요약
//   "Python/Django 기반 백엔드 개발자"
// - 짧은 서브 문장
//   "성능과 구조를 고민하는 개발자입니다."

// [오른쪽]
// - 대표 프로젝트 3개 (카드 or 슬라이더)

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <h1 className="home-name">MIN YOUNG LEE</h1>

        <h2 className="home-title">
          Python · Django 기반 <span>백엔드 개발자</span>
        </h2>

        <p className="home-desc">
          안정적인 아키텍처와 명확한 책임 분리를 고민하며<br />
          유지보수 가능한 서버 구조를 설계합니다.
        </p>
      </div>
    </section>
  )
}

export default Home