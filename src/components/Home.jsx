// Home.jsx 파일에는 자기소개, 한줄 요약
// (예: "Python/Django 백엔드 전문 개발자"), 프로필 사진 또는 애니메이션 배경 넣기

import './css/Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <h1 className="home-name">MIN YOUNG LEE</h1>

        <h2 className="home-title">
          Python · Django 기반 <span>백엔드 개발자</span>
        </h2>

        <p className="home-desc">
          한 번이 부족하면 10 번, 100 번도 시도하는<br />
          끈질긴 개발자입니다.
        </p>
      </div>
    </section>
  )
}

export default Home