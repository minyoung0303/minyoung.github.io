import { useRef, useState } from 'react';
import './css/ProblemSolving.css';

/**
 * 문제 해결 경험 (Problem Solving)
 *
 * 각 사례는 "문제 → 원인 분석 → 해결 → 결과" 4단 구조로 서술한다.
 * 채용 공고에서 포트폴리오 작성 기준으로 명시한 흐름이며,
 * 백엔드 개발자로서의 판단 근거를 드러내기 위한 구성이다.
 *
 * 구조: 좌측 사례 목록(sticky) + 우측 상세. 탭 패턴이다.
 * 목록 카드는 키워드와 결과만 남겨 훑기 쉽게 두고, 제목과 서술은 상세에서
 * 읽게 한다. 상세를 문서 흐름에 끼워 넣지 않으므로 목록 위치가 흔들리지 않는다.
 *
 * 문장 규칙 (전체 사례 공통)
 * - tag        : '영역 · 대상' 두 토막
 * - title      : 행동을 드러내는 '~다' 종결의 한 줄
 * - context    : '대상 · 소속 또는 성격 (핵심 스택)'
 * - problem    : '~습니다' 서술체
 * - analysis   : '~습니다' 서술체
 * - solution   : '~습니다' 서술체 (원인 분석과 같은 형태로 맞춘다)
 * - result     : metric 은 짧은 지표, label 은 개선 내용을 담은 명사구
 * - resultNote : 무엇을 알게 되었는지로 닫는다
 *                ('~하게 되었습니다' / '깨닫게 되었습니다' / '~임을 확인했습니다')
 *
 * 본문 세 항목(problem·analysis·solution)의 종결을 한 형태로 두는 것이
 * 이 섹션의 규칙이다. 명사형과 서술체를 섞으면 같은 흐름인데 다른 글처럼 읽힌다.
 */
const cases = [
  {
    id: 'search-perf',
    tag: 'SQL · 쿼리 성능',
    title: '검색이 느려진 원인을 인덱스 미사용에서 찾다',
    context: 'MYLOG · 팀 프로젝트 (Django · PostgreSQL)',
    problem:
      '게시글 데이터가 쌓이면서 검색 기능의 응답이 눈에 띄게 느려졌습니다. 기능은 정상 동작했지만 사용자가 결과를 기다리는 시간이 길어졌습니다.',
    analysis: [
      '느린 요청을 특정해 실행 계획을 확인한 결과, 검색 조건이 LIKE 패턴 매칭이라 인덱스를 타지 못하고 테이블 전체를 스캔하고 있었습니다.',
      '한 번의 요청이 여러 조건을 하나의 무거운 쿼리로 처리하면서, 데이터가 늘어날수록 비용이 선형 이상으로 증가하고 있었습니다.',
    ],
    solution: [
      'LIKE 기반 조회를 PostgreSQL Full-Text Search로 전환해 인덱스를 타도록 바꿨습니다.',
      '무거운 단일 쿼리를 목적별로 분할해 각 쿼리가 인덱스를 쓰도록 재작성했습니다.',
    ],
    result: [{ metric: '2배', label: '검색 응답 속도 향상' }],
    resultNote:
      '이후로는 기능이 동작하는지보다 데이터가 늘어도 버티는지를 먼저 확인하게 되었습니다.',
    tech: ['PostgreSQL', 'Full-Text Search', 'Django ORM', 'Python'],
  },
  {
    id: 'schema-normalize',
    tag: 'RDBMS · 스키마 설계',
    title: '조회 병목을 스키마 정규화와 인덱싱으로 걷어내다',
    context:
      '냉장고 해방일지 · 제5회 K-Digital Hackathon (Django · DRF · PostgreSQL)',
    problem:
      '재료와 레시피를 함께 조회하는 화면의 로딩이 느렸습니다. 같은 재료 정보가 여러 곳에 중복 저장되어 수정할 때 데이터가 어긋날 위험도 있었습니다.',
    analysis: [
      '테이블 구조를 다시 그려보니 재료·레시피·사용자 관계가 한 테이블에 섞여 있어 중복이 구조적으로 발생하고 있었습니다.',
      '조회 조건으로 가장 많이 쓰이는 컬럼에 인덱스가 없어, 조회량이 늘 때마다 스캔 범위가 함께 커지고 있었습니다.',
    ],
    solution: [
      'ERD를 다시 설계해 엔티티를 분리하고 정규화했습니다. 설계안은 팀 리뷰를 거쳐 반영했습니다.',
      '조회 패턴을 기준으로 인덱스를 추가하고 불필요한 조인을 제거했습니다.',
      'JWT 기반 인증·인가 구조를 함께 정리해 사용자별 데이터 접근 범위를 분리했습니다.',
    ],
    result: [
      { metric: '약 30%', label: '페이지 로딩 시간 단축' },
      { metric: '중복 제거', label: '정규화로 데이터 정합성 확보' },
    ],
    resultNote:
      '성능 문제의 원인이 쿼리가 아니라 스키마에 있을 수 있다는 것을 깨닫게 되었습니다.',
    tech: ['PostgreSQL', 'ERD 설계', '정규화', '인덱싱', 'Django', 'DRF', 'JWT'],
  },
  {
    id: 'credit-ledger',
    tag: '트랜잭션 · 데이터 정합성',
    title: '결제 크레딧이 어긋날 수 있는 구조를 트랜잭션으로 닫다',
    context:
      'AI NOVA · 서울경제신문 미래전략부, 운영 중인 유료 서비스 (Python · AWS)',
    problem:
      '실제 결제가 이루어지는 서비스에서 크레딧 잔액과 사용 원장이 별도로 기록되고 있었습니다. 중간에 실패하면 잔액은 줄었는데 기록은 남지 않는 상태가 생길 수 있었고, 대량 일괄 지급 중 한 건이 실패하면 전체가 롤백되었습니다.',
    analysis: [
      '잔액 변경과 원장 기록이 서로 다른 쓰기 작업으로 분리되어 있어, 둘 중 하나만 성공하는 경우를 막을 장치가 없었습니다.',
      '회수 로직에 잔액 검증이 없어 이론적으로 음수 잔액이 만들어질 수 있었습니다.',
      '일괄 지급을 하나의 트랜잭션으로 묶은 탓에, 특정 사용자 한 명의 실패가 전체 작업의 실패로 번지고 있었습니다.',
    ],
    solution: [
      '잔액 변경과 원장 기록을 하나의 트랜잭션으로 원자화해 부분 성공 상태를 없앴습니다.',
      '회수 시 조건부 쓰기(conditional write)를 적용해 잔액이 부족하면 쓰기 자체가 실패하도록 막았습니다.',
      '대량 지급을 사용자별 독립 트랜잭션으로 분리해 실패 영향 범위를 한 명으로 좁혔습니다.',
    ],
    result: [
      { metric: '정합성 확보', label: '부분 성공 상태와 음수 잔액 제거' },
      { metric: '실패 격리', label: '일괄 작업 전체 롤백 방지' },
    ],
    resultNote:
      '돈이 걸린 데이터에는 대체로 맞음이 허용되지 않음을 확인했습니다.',
    tech: ['Python', 'AWS', 'DynamoDB', '트랜잭션', '조건부 쓰기', 'Lambda'],
  },
  {
    id: 'metric-pollution',
    tag: '데이터 정확도 · 운영 지표',
    title: '지표를 오염시키던 내부 계정을 역할 체계로 분리하다',
    context: 'AI NOVA · 서울경제신문 미래전략부 (Python · AWS · Next.js)',
    problem:
      '매출과 활성 사용자 지표가 실제 체감과 맞지 않았습니다. 지표를 근거로 판단해야 하는 비개발 직군에서 수치를 신뢰하기 어려운 상황이었습니다.',
    analysis: [
      '집계 대상을 거슬러 확인한 결과, 개발자·테스트 계정이 일반 사용자와 동일하게 집계되고 있었습니다.',
      '내부 계정을 구분하는 기준 자체가 없었고, 예외 처리는 코드에 하드코딩된 목록에 의존하고 있었습니다. 계정이 늘어날 때마다 배포가 필요했습니다.',
    ],
    solution: [
      '관리자·테스트·일반 사용자를 구분하는 역할(Role) 관리 체계를 설계해 집계에서 내부 계정을 분리했습니다.',
      '하드코딩 목록을 DynamoDB 역할 테이블로 옮기고, 조회 실패 시 코드 폴백과 캐시를 두어 가용성을 확보했습니다.',
      '지표가 어긋난 이유와 변경 이후 달라지는 점을 비개발 직군에 설명해 합의를 먼저 맞췄습니다.',
    ],
    result: [
      { metric: '지표 신뢰도', label: '내부 계정 분리로 실사용 기준 집계' },
      { metric: '배포 불필요', label: '역할 변경을 데이터로 처리' },
    ],
    resultNote:
      '요청받은 일이 아니어도 지표를 쓰는 사람 입장에서 보면 문제가 먼저 보인다는 것을 알게 되었습니다.',
    tech: ['DynamoDB', 'Python', 'AWS', '캐시 설계', 'Next.js'],
  },
  {
    id: 'slack-automation',
    tag: '업무 자동화 · 협업',
    title: '사람이 매개하던 데이터 공유를 시스템으로 옮기다',
    context: '사내 백오피스 · 위시켓, 약 50명 사용 (Django · MariaDB)',
    problem:
      '이용자 평가·리뷰 데이터를 비개발 직군에 전달할 때, 담당자가 매번 URL을 직접 복사해 수동으로 공유하고 있었습니다. 사람이 개입해야만 정보가 흐르는 구조였습니다.',
    analysis: [
      '기능이 없어서가 아니라, 시스템에 공유라는 경로가 설계되어 있지 않아 사람이 그 자리를 메우고 있었습니다.',
      '실제 사용자들의 업무 흐름을 따라가 보니, 반복 작업의 대부분이 데이터 확인이 아니라 전달 과정에서 발생하고 있었습니다.',
    ],
    solution: [
      'Slack Webhook API를 연동해 평가 데이터 공유를 자동화했습니다.',
      '백오피스 평가·리뷰 관리 기능의 백엔드를 개선하고 사용자 동선에 맞춰 UI도 함께 정리했습니다.',
    ],
    result: [
      { metric: '10초 → 2초', label: '평가 데이터 공유 시간 단축' },
      { metric: '약 50명', label: '사내 백오피스 활용도 향상' },
    ],
    resultNote:
      '비개발 직군의 업무 흐름을 먼저 관찰하면 만들 기능이 달라진다는 것을 알게 되었습니다.',
    tech: ['Python', 'Django', 'MariaDB', 'Slack Webhook', 'React', 'AWS ECS'],
  },
];

const STEPS = [
  { key: 'problem', label: '문제', num: '01' },
  { key: 'analysis', label: '원인 분석', num: '02' },
  { key: 'solution', label: '해결', num: '03' },
  { key: 'result', label: '결과', num: '04' },
];

const caseNo = (idx) => String(idx + 1).padStart(2, '0');

const ARROW_STEP = {
  ArrowDown: 1,
  ArrowRight: 1,
  ArrowUp: -1,
  ArrowLeft: -1,
};

function ProblemSolving() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = cases[activeIdx];
  const tabRefs = useRef({});

  const select = (idx) =>
    setActiveIdx(Math.min(cases.length - 1, Math.max(0, idx)));

  // 탭 패턴 표준 동작: 화살표 키로 사례 간 이동
  const onTabKey = (e) => {
    const delta = ARROW_STEP[e.key];
    if (!delta) return;
    e.preventDefault();
    const next = (activeIdx + delta + cases.length) % cases.length;
    setActiveIdx(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="problem-solving" className="section ps">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">Problem Solving</span>
          <h2 className="section-title">문제 해결 경험</h2>
          <p className="section-lead">
            어떤 문제가 있었고, 원인을 어떻게 찾았고, 무엇을 바꿨고, 그래서
            무엇이 달라졌는지. 왼쪽 목록에서 사례를 고르면 오른쪽에 같은
            순서로 펼쳐집니다.
          </p>
        </div>

        <ol className="ps-steps" aria-hidden="true">
          {STEPS.map((s) => (
            <li className="ps-step" key={s.key}>
              <span className="ps-step-num">{s.num}</span>
              <span className="ps-step-label">{s.label}</span>
            </li>
          ))}
        </ol>

        <div className="ps-layout">
          {/*
            좌: 사례 목록.
            키워드와 결과만 남긴다. 제목까지 넣으면 카드가 세 덩이가 되어
            훑는 속도가 떨어지고, 상세 제목과 같은 문장이 두 번 읽힌다.
          */}
          <div
            className="ps-rail"
            role="tablist"
            aria-label="문제 해결 사례"
            aria-orientation="vertical"
          >
            {cases.map((c, idx) => {
              const selected = idx === activeIdx;
              return (
                <button
                  type="button"
                  key={c.id}
                  role="tab"
                  id={`ps-tab-${c.id}`}
                  className={`ps-rail-item ${selected ? 'active' : ''}`}
                  aria-selected={selected}
                  aria-controls={`ps-detail-${c.id}`}
                  aria-label={`Case ${caseNo(idx)} ${c.tag}: ${c.title}`}
                  tabIndex={selected ? 0 : -1}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  onClick={() => select(idx)}
                  onKeyDown={onTabKey}
                >
                  <span className="ps-rail-top">
                    <span className="ps-index">Case {caseNo(idx)}</span>
                    <span className="ps-tag">{c.tag}</span>
                  </span>
                  <span className="ps-rail-metric">
                    <i
                      className="fa-solid fa-arrow-trend-up"
                      aria-hidden="true"
                    />
                    {c.result[0].metric} · {c.result[0].label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 우: 선택한 사례의 상세. 제목은 여기에서만 보여준다 */}
          <div
            className="ps-detail"
            role="tabpanel"
            id={`ps-detail-${active.id}`}
            aria-labelledby={`ps-tab-${active.id}`}
            tabIndex={0}
          >
            <header className="ps-detail-head">
              <div className="ps-rail-top">
                <span className="ps-index">Case {caseNo(activeIdx)}</span>
                <span className="ps-tag">{active.tag}</span>
              </div>
              <h3 className="ps-detail-title">{active.title}</h3>
              <span className="ps-context">{active.context}</span>
            </header>

            {/*
              4단 블록을 세로로만 쌓으면 상세가 한 화면을 넘어간다.
              문제와 결과는 폭이 필요하니 한 줄을 다 쓰고, 원인 분석과 해결은
              나란히 둔다. 세로 길이가 줄어드는 동시에 "이 원인 → 이 해결"
              대응이 좌우로 마주 보게 되는 이점이 있다.
            */}
            <div className="ps-flow">
              <div className="ps-block ps-block--problem">
                <span className="ps-block-label">
                  <em>01</em> 문제
                </span>
                <p className="ps-block-text">{active.problem}</p>
              </div>

              <div className="ps-block ps-block--analysis">
                <span className="ps-block-label">
                  <em>02</em> 원인 분석
                </span>
                <ul className="ps-block-list">
                  {active.analysis.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>

              <div className="ps-block ps-block--solution">
                <span className="ps-block-label">
                  <em>03</em> 해결
                </span>
                <ul className="ps-block-list ps-block-list--do">
                  {active.solution.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="ps-block ps-block--result">
                <span className="ps-block-label">
                  <em>04</em> 결과
                </span>
                <ul className="ps-metrics">
                  {active.result.map((r, i) => (
                    <li className="ps-metric" key={i}>
                      <span className="ps-metric-value">{r.metric}</span>
                      <span className="ps-metric-label">{r.label}</span>
                    </li>
                  ))}
                </ul>
                {active.resultNote && (
                  <p className="ps-result-note">{active.resultNote}</p>
                )}
              </div>
            </div>

            <div className="ps-tech">
              {active.tech.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>

            {/* 목록으로 올라가지 않고도 사례를 연달아 읽을 수 있게 한다 */}
            <footer className="ps-detail-foot">
              <button
                type="button"
                className="ps-nav"
                onClick={() => select(activeIdx - 1)}
                disabled={activeIdx === 0}
              >
                <i className="fa-solid fa-chevron-left" aria-hidden="true" />
                <span>이전 사례</span>
              </button>

              <span className="ps-detail-count">
                {activeIdx + 1} / {cases.length}
              </span>

              <button
                type="button"
                className="ps-nav"
                onClick={() => select(activeIdx + 1)}
                disabled={activeIdx === cases.length - 1}
              >
                <span>다음 사례</span>
                <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              </button>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolving;
