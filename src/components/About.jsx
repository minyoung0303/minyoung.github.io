// About: 경력, 기술 스택(Backend: Django/PostgreSQL, Frontend: React), 교육 배경 등
// - 3~4줄 요약 소개
// - Backend / Frontend / Infra 스택 분리
// - 교육 or 성장 경로 (SSAFY 등)
import './css/About.css';
import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function About() {
  const COLORS = {
    경력: '#108d20',
    교육: '#5e8cee',
    자격증: '#2fa36b',
    학력: '#80dfa7',
  };

  const experiences = [
    {
      name: '정보처리기사',
      type: '자격증',
      start: '2025-09',
      end: '2025-09',
      achievements: '정보처리기사 자격증 취득',
      period: '2025.09 취득',
    },
    {
      name: '위시켓 개발팀 인턴십',
      type: '경력',
      start: '2024-07',
      end: '2024-12',
      achievements:
        'REST API 설계 및 구현, JWT 인증 처리, PostgreSQL DB 모델링, 기획팀/UX/UI팀/프론트엔드팀 협업으로 기능 완성',
      period: '2024.07 ~ 2024.12 (6개월)',
    },
    {
      name: 'SQLD',
      type: '자격증',
      start: '2024-05',
      end: '2024-05',
      achievements: 'SQLD 자격증 취득 (데이터베이스 설계/관리)',
      period: '2024.05 취득',
    },
    {
      name: 'ESTsoft 백엔드 개발자 과정',
      type: '교육',
      start: '2023-06',
      end: '2023-11',
      achievements:
        '사이드 프로젝트로 REST API 개발, Django 실무 프로젝트 완성, 팀 협업 경험',
      period: '2023.06 ~ 2023.11 (6개월)',
    },
    {
      name: '동부엔지니어링 ERP/EP 기반 사무보조',
      type: '경력',
      start: '2022-05',
      end: '2023-05',
      achievements:
        'ERP/EP, OA 시스템 운영 지원, 대규모 사무 데이터 관리 및 보고서 작성',
      period: '2022.05 ~ 2023.05 (12개월)',
    },
    {
      name: '컴퓨터활용능력 1급',
      type: '자격증',
      start: '2021-10',
      end: '2021-10',
      achievements: '컴퓨터활용능력 1급 취득',
      period: '2021.10 취득',
    },
    {
      name: '네트워크관리사 2급',
      type: '자격증',
      start: '2019-06',
      end: '2019-06',
      achievements: '네트워크관리사 2급 취득',
      period: '2019.06 취득',
    },
    {
      name: '학점은행제 컴퓨터공학 학사',
      type: '학력',
      start: '2019-03',
      end: '2022-02',
      achievements:
        '컴퓨터공학 학사 학위 취득 (GPA 3.8/4.5)',
      period: '2019.03 ~ 2022.02',
    },
  ].sort((a, b) => new Date(b.start) - new Date(a.start));

  const [hoveredExperience, setHoveredExperience] = useState(null);

  /* ===============================
     날짜 → month index 변환
     =============================== */
  const BASE_YEAR = 2019;

  const monthToIndex = (ym) => {
    const [y, m] = ym.split('-').map(Number);
    return (y - BASE_YEAR) * 12 + (m - 1);
  };

  /* ===============================
     차트용 데이터 변환
     =============================== */
  const timelineData = experiences.map((exp) => ({
    name: exp.name,
    type: exp.type,
    start: monthToIndex(exp.start),
    end: monthToIndex(exp.end),
    period: exp.period,
    achievements: exp.achievements,
  }));

  /* ===============================
    호버 상태에 따른 높이 계산
    =============================== */
    const getBarHeight = (index, isHovered) => {
      const baseHeight = 15;
      const hoverHeight = baseHeight + 30;
      return isHovered ? hoverHeight : baseHeight;
    };

  const TimelineBar = ({ x, y, height, width, payload, index }) => {
    const barHeight = getBarHeight(index, hoveredExperience?.name === payload.name);
    const unitWidth = 18;
    const startX = payload.start * unitWidth;
    const barWidth = Math.max((payload.end - payload.start + 1) * unitWidth, 8);

    return (
      <g>
        {hoveredExperience?.name === payload.name && (
          <rect
          x={startX - 6}
          y={y - 15}
          width={barWidth + 12}
          height={barHeight + 30}
          rx={8}
          fill="rgba(255,255,255,0.1)"
          opacity={0.8}
          style={{ transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
        )}
        
        <rect
          x={startX}
          y={y + (height - barHeight) / 2}
          width={barWidth}
          height={barHeight}
          rx={6}
          fill={COLORS[payload.type]}
          stroke={hoveredExperience?.name === payload.name ? '#ffffff': 'transparent'}
          strokeWidth={2}
          className={`timeline-bar ${hoveredExperience?.name === payload.name ? 'hovered' : ''}`}
          style={{
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            transformOrigin: 'center'
          }}
          onMouseEnter={() =>
            setHoveredExperience(
              experiences.find((e) => e.name === payload.name)
            )
          }
          onMouseLeave={() => setHoveredExperience(null)}
          />
      </g>
    );
  };


  const CustomTooltip = () => {
    if (!hoveredExperience) return null;
    
    const exp = hoveredExperience;
    
    return (
      <div className="timeline-tooltip">
        <strong>{exp.name}</strong>
        <p>{exp.period}</p>
        <div className="achievement-list">
          {exp.achievements.split(',').map((a, i) => (
            <span key={i} className="achievement-item">
              • {a.trim()}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <ResponsiveContainer width="100%" height={420}>
        <BarChart
          data={timelineData}
          layout="vertical"
          margin={{ top: 10, left: 30, right: 30 }}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            width={0}
            tick={false}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Bar dataKey="end" shape={<TimelineBar />} />
        </BarChart>
      </ResponsiveContainer>

      <p className="chart-note">
        * 2019 ~ 2025 타임라인 | 이력 하나당 하나의 연속 막대
      </p>
    </section>
  );
}

export default About;

