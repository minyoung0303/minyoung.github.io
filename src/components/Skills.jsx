import './css/Skills.css';

const skillGroups = [
  {
    icon: '{ }',
    title: 'Languages',
    items: [
      { name: 'Python', desc: '백엔드 개발, API 로직 구현' },
      { name: 'JavaScript', desc: 'React 상태 관리, 비동기 처리' },
      { name: 'SQL', desc: '쿼리 최적화 및 데이터 모델링' },
      { name: 'HTML5 / CSS3', desc: '반응형 웹 구조 및 스타일링' },
    ],
  },
  {
    icon: '</>',
    title: 'Frameworks',
    items: [
      { name: 'Django', desc: '웹 애플리케이션 개발 및 보안 처리' },
      { name: 'Django REST (DRF)', desc: 'RESTful API 설계와 직렬화' },
      { name: 'React', desc: '컴포넌트 기반 UI와 상태 관리' },
      { name: 'jQuery', desc: 'DOM 조작과 AJAX 비동기 요청' },
    ],
  },
  {
    icon: '▤',
    title: 'Data & Infra',
    items: [
      { name: 'PostgreSQL', desc: '관계형 모델링, 트랜잭션, 인덱싱' },
      { name: 'MariaDB / SQLite', desc: '운영·개발 환경 DB 관리' },
      { name: 'Docker', desc: '컨테이너화와 배포 환경 일관성' },
      { name: 'AWS', desc: 'EC2 · ECS · RDS · S3 운영 경험' },
    ],
  },
  {
    icon: '⚙',
    title: 'Tools & Collab',
    items: [
      { name: 'Git / GitHub', desc: '버전 관리, PR 리뷰, CI/CD' },
      { name: 'Slack Webhook', desc: '업무 자동화 및 알림 연동' },
      { name: 'Figma', desc: 'UI/UX 설계 및 팀 협업' },
      { name: 'Notion', desc: '워크플로우 자동화, 문서화' },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section section--alt skills">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">기술 스택</h2>
          <p className="section-lead">
            서버 설계부터 배포까지, 서비스를 실제로 굴러가게 만드는 데
            필요한 도구들을 다룹니다.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-head">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-card-title">{group.title}</h3>
              </div>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li className="skill-item" key={item.name}>
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-desc">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
