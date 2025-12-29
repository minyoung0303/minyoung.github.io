// Skills.jsx 파일에는 보유 기술 스택을 카테고리별로 정리

// Python   Django   PostgreSQL
// React    AWS      Git


function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <h3>Backend</h3>
      <ul>
        <li>Django</li>
        <li>REST API 설계</li>
        <li>Authentication / Authorization</li>
      </ul>

      <h3>Frontend</h3>
      <ul>
        <li>React</li>
        <li>HTML / CSS / JavaScript</li>
      </ul>

      <h3>Database</h3>
      <ul>
        <li>MySQL</li>
        <li>SQLite</li>
      </ul>

      <h3>Tools</h3>
      <ul>
        <li>Git / GitHub</li>
        <li>Postman</li>
      </ul>
    </section>
  )
}

export default Skills
