import './css/Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">Languages</h3>
            <ul>
              <li>
                <span className="skill-name">Python</span>
                <span className="skill-desc">백엔드 개발, API 로직 구현</span>
              </li>
              <li>
                <span className="skill-name">JavaScript</span>
                <span className="skill-desc">React 상태관리, 비동기 처리</span>
              </li>
              <li>
                <span className="skill-name">C</span>
                <span className="skill-desc">메모리 최적화, 시스템 프로그래밍의 기초 이해</span>
              </li>
              <li>
                <span className="skill-name">HTML5 / CSS3</span>
                <span className="skill-desc">반응형 웹 구조 및 스타일링</span>
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Frameworks & Libraries</h3>
            <ul>
              <li>
                <span className="skill-name">Django</span>
                <span className="skill-desc">웹 애플리케이션 개발 및 보안 처리</span>
              </li>
              <li>
                <span className="skill-name">Django REST framework (DRF)</span>
                <span className="skill-desc">RESTful API 설계와 직렬화</span>
              </li>
              <li>
                <span className="skill-name">React</span>
                <span className="skill-desc">컴포넌트 기반 UI와 상태 관리</span>
              </li>
              <li>
                <span className="skill-name">jQuery</span>
                <span className="skill-desc">DOM 조작과 AJAX 비동기 요청</span>
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Databases</h3>
            <ul>
              <li>
                <span className="skill-name">PostgreSQL</span>
                <span className="skill-desc">관계형 데이터 모델링, 쿼리 최적화 및 트랜잭션</span>
              </li>
              <li>
                <span className="skill-name">SQLite</span>
                <span className="skill-desc">개발/테스트 환경에서의 경량 DB 관리</span>
              </li>
              <li>
                <span className="skill-name">Docker</span>
                <span className="skill-desc">컨테이너화와 배포 환경 일관성</span>
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Cloud & Tools</h3>
            <ul>
              <li>
                <span className="skill-name">AWS</span>
                <span className="skill-desc">EC2/ECS/RDS/S3 인프라 운영 경험 보유</span>
              </li>
              <li>
                <span className="skill-name">GitHub</span>
                <span className="skill-desc">버전 관리 및 PR 리뷰, CI/CD 파이프라인</span>
              </li>
              <li>
                <span className="skill-name">Figma</span>
                <span className="skill-desc">UI/UX 설계 및 팀 협업</span>
              </li>
              <li>
                <span className="skill-name">Notion</span>
                <span className="skill-desc">워크플로우 자동화, 문서화</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
