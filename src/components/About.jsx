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
    경력: '#1f5e3b',
    교육: '#3f7f5f',
    자격증: '#2ea36a',
    학력: '#b9e6cf',
  };
  
  const BASE_YEAR = 2019;
  const CURRENT_YEAR = new Date().getFullYear();

  const monthToIndex = (ym) => {
    const [y, m] = ym.split('-').map(Number);
    return (y - BASE_YEAR) * 12 + (m - 1);
  };
  const experiences = [
    {
      name: '백엔드 개발자로서 성장중',
      type: '경력',
      start: '2025-09',
      end: '2026-06',
      achievements: '교육 및 개인 프로젝트를 통해 백엔드 설계 역량을 지속적으로 확장 중',
      period: '2026.04 ~ 현재',
    },
    {
      name: '정보처리기사',
      type: '자격증',
      start: '2025-09',
      end: '2025-09',
      achievements: '정보처리기사 취득',
      period: '2025.09 취득',
    },
    {
      name: '위시켓 개발팀 인턴십',
      type: '경력',
      start: '2024-07',
      end: '2024-12',
      achievements:
        '실제 운영 조직의 업무 흐름을 분석해 Django Admin 기반 백오피스 시스템을 개선',
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
      name: 'K-디지털 트레이닝 해커톤',
      type: '경력',
      start: '2023-10',
      end: '2023-11',
      achievements: '서비스 구조 설계와 인증 시스템 구현을 맡아 MVP 완성에 기여',
      period: '2023.09 ~ 2023.11 (2개월)',
    },
    {
      name: 'ESTsoft 백엔드 개발자 과정',
      type: '교육',
      start: '2023-06',
      end: '2023-11',
      achievements:
        '요구사항 분석부터 API 설계까지, 팀 프로젝트의 백엔드 전반을 경험',
      period: '2023.06 ~ 2023.11 (6개월)',
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
      start: '2020-12',
      end: '2020-12',
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


  const timelineData = experiences.map((exp) => ({
    name: exp.name,
    type: exp.type,
    start: monthToIndex(exp.start),
    end: monthToIndex(exp.end),
    period: exp.period,
    achievements: exp.achievements,
  }));

  const MAX_MONTH_INDEX = (CURRENT_YEAR - BASE_YEAR + 1) * 12;
  const TOTAL_MONTHS = MAX_MONTH_INDEX;

  const yearTicks = Array.from(
    { length: CURRENT_YEAR - BASE_YEAR + 1 },
    (_, i) => i * 12
  );

  const formatYearTick = (value) =>
    BASE_YEAR + Math.floor(value / 12);

  const TimelineBar = ({ y, height, payload, width }) => {
    const isHovered = hoveredExperience?.name === payload.name;

    const baseHeight = 25;
    const hoverHeight = 40;
    const barHeight = isHovered ? hoverHeight : baseHeight;

    const startRatio = payload.start / TOTAL_MONTHS;
    const endRatio = (payload.end + 5) / TOTAL_MONTHS;

    const startX = (startRatio + 0.2) * width;
    const isSinglePoint = payload.start === payload.end;

    const barWidth = isSinglePoint
      ? 24
      : Math.max((endRatio - startRatio) * width, 8);

    return (
      <g
      onMouseEnter={() =>
        setHoveredExperience(
          experiences.find((e) => e.name === payload.name)
        )
      }
      onMouseLeave={() => setHoveredExperience(null)}
      style={{ cursor: 'pointer' }}
      >
        {isHovered && (
          <rect
          x={startX - 6}
          y={y - 15}
          width={barWidth + 12}
          height={barHeight + 30}
          rx={8}
          fill="rgba(255, 255, 255, 0.1)"
          opacity={0.8}
          style={{ transition: 'all 0.3s ease' }}
          />
        )}
        
        <rect
          x={startX}
          y={y + (height - barHeight) / 2}
          width={barWidth}
          height={barHeight}
          rx={6}
          fill={COLORS[payload.type]}
          style={{
            transition: 'all 0.3s ease',
            transformOrigin: 'center',
          }}
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
          <Tooltip content={<CustomTooltip />} cursor={false} wrapperStyle={{ transition: 'transform 0.2s ease', }}/>
          <Bar dataKey="end" shape={<TimelineBar />} />
        </BarChart>
      </ResponsiveContainer>

      <p className="chart-note">
        * 2019 ~ 현재 | 이력 하나당 하나의 연속 막대
        <br />
        그래프에 마우스를 올리시면 해당 이력 요약이 보여집니다.
      </p>
    </section>
  );
}

export default About;

