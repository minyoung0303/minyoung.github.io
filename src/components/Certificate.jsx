import React from 'react'
import './css/Certificate.css';

function Certificate() {
  return (
    <section id="certificate" className="certificate">
      <h2>자격증</h2>
      
      <div className="cert-list">
        <div className="cert-item">
          <div className="cert-name">정보처리기사</div>
          <div className="cert-date">2025.09</div>
          <div className="cert-org">한국산업인력공단</div>
        </div>

        <div className="cert-item">
          <div className="cert-name">SQL 개발자(SQLD)</div>
          <div className="cert-date">2024.04</div>
          <div className="cert-org">한국데이터산업진흥원</div>
        </div>

        <div className="cert-item">
          <div className="cert-name">컴퓨터활용능력 1급</div>
          <div className="cert-date">2021.10</div>
          <div className="cert-org">한국산업인력공단</div>
        </div>

        <div className="cert-item">
          <div className="cert-name">네트워크관리사 2급</div>
          <div className="cert-date">2019.06</div>
          <div className="cert-org">한국인터넷진흥원</div>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
