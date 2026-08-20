import { useEffect, useRef, useState } from 'react';
import './css/Cursor.css';

/**
 * 커스텀 커서 — 스코프 레티클.
 *
 * 기본        먹색. 링과 스캔 호가 서로 반대로 계속 회전하고,
 *             조준선은 바깥에 벌어져 있다. 중심 점이 실제 포인터 좌표다.
 *             본체는 0.13초 뒤따라오며 관성을 만든다.
 * 락온        링크·버튼·탭 위에서 초록으로 바뀌고 조준선이 중심으로 모인다.
 * 클릭        초록 코드 글리프가 클릭 지점에서 사방으로 퍼진다.
 *
 * 락온 상태는 연출만이 아니다. 네이티브 커서를 숨기면 버튼 위에서
 * cursor: pointer 가 주던 "누를 수 있다"는 신호가 사라지는데, 그 정보를
 * 색 변화와 조준 완료 모양으로 대신 전달한다.
 */
const INTERACTIVE = [
  'a[href]',
  'button',
  '[role="tab"]',
  '[role="button"]',
  'input',
  'textarea',
  'select',
  'summary',
].join(', ');

// 클릭할 때 퍼지는 글리프 풀
const GLYPHS = ['{', '}', '<', '>', '/', ';', '_', '$', '=', '*', '0', '1'];
const BURST_COUNT = 10;
const BURST_LIFE = 800; // ms, 애니메이션이 끝난 뒤 DOM 에서 걷어내는 시점

/** 클릭 지점에서 사방으로 흩어질 글리프 한 세트를 만든다 */
function makeBurst(id, x, y) {
  const parts = Array.from({ length: BURST_COUNT }, (_, i) => {
    // 균등 분포에 약간의 흔들림을 줘서 기계적으로 보이지 않게 한다
    const angle = (360 / BURST_COUNT) * i + (Math.random() * 22 - 11);
    const rad = (angle * Math.PI) / 180;
    const dist = 32 + Math.random() * 28;

    return {
      ch: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      dx: `${(Math.cos(rad) * dist).toFixed(1)}px`,
      dy: `${(Math.sin(rad) * dist).toFixed(1)}px`,
      rot: `${(Math.random() * 160 - 80).toFixed(0)}deg`,
      delay: `${Math.floor(Math.random() * 70)}ms`,
    };
  });

  return { id, x, y, parts };
}

function Cursor() {
  const cursorRef = useRef(null);
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    // 터치 기기에서는 기본 동작을 유지한다
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = cursorRef.current;
    if (!el) return;

    document.body.classList.add('has-custom-cursor');

    let burstSeq = 0;
    const pending = new Set();

    const onMove = (e) => {
      // transform 만 갱신하고, 뒤따라오는 관성은 CSS transition 이 만든다
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      el.classList.add('is-visible');

      const target = e.target;
      const interactive =
        target instanceof Element &&
        Boolean(target.closest(INTERACTIVE)) &&
        !target.closest('[disabled]');

      el.classList.toggle('is-locked', interactive);
    };

    const show = () => el.classList.add('is-visible');
    const hide = () => el.classList.remove('is-visible');

    const press = (e) => {
      el.classList.add('is-pressed');

      const id = burstSeq++;
      setBursts((prev) => [...prev, makeBurst(id, e.clientX, e.clientY)]);

      const timer = window.setTimeout(() => {
        pending.delete(timer);
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, BURST_LIFE);
      pending.add(timer);
    };

    const release = () => el.classList.remove('is-pressed');

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', press);
    window.addEventListener('mouseup', release);
    document.addEventListener('mouseenter', show);
    document.addEventListener('mouseleave', hide);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', press);
      window.removeEventListener('mouseup', release);
      document.removeEventListener('mouseenter', show);
      document.removeEventListener('mouseleave', hide);
      pending.forEach((t) => window.clearTimeout(t));
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} aria-hidden="true">
        <svg
          className="cursor-reticle"
          viewBox="0 0 56 56"
          width="56"
          height="56"
          fill="none"
        >
          {/* 점선 링 — 움직일 때만 회전 */}
          <circle className="cursor-ring" cx="28" cy="28" r="18" />

          {/* 스캔 호 — 반대 방향으로 회전 */}
          <g className="cursor-arc">
            <path d="M28 5 A23 23 0 0 1 44.3 11.7" />
            <path d="M28 51 A23 23 0 0 1 11.7 44.3" />
          </g>

          {/* 조준선 — 락온 시 중심으로 모인다 */}
          <g className="cursor-ticks">
            <line
              className="cursor-tick cursor-tick--n"
              x1="28"
              y1="7"
              x2="28"
              y2="15"
            />
            <line
              className="cursor-tick cursor-tick--s"
              x1="28"
              y1="41"
              x2="28"
              y2="49"
            />
            <line
              className="cursor-tick cursor-tick--w"
              x1="7"
              y1="28"
              x2="15"
              y2="28"
            />
            <line
              className="cursor-tick cursor-tick--e"
              x1="41"
              y1="28"
              x2="49"
              y2="28"
            />
          </g>

          {/* 락온 브래킷 — 바깥에서 조여든다 */}
          <g className="cursor-lock">
            <path d="M14 22 V15 H21" />
            <path d="M42 22 V15 H35" />
            <path d="M14 34 V41 H21" />
            <path d="M42 34 V41 H35" />
          </g>

          {/* 중심 점이 실제 포인터 좌표 */}
          <circle className="cursor-dot" cx="28" cy="28" r="1.7" />
        </svg>
      </div>

      {/*
        클릭 이펙트는 커서와 분리된 레이어에 둔다.
        커서 안에 넣으면 글리프가 마우스를 따라 끌려다녀서, 터진 자리에
        남지 않는다.
      */}
      <div className="cursor-bursts" aria-hidden="true">
        {bursts.map((b) => (
          <div
            className="cursor-burst"
            key={b.id}
            style={{ left: `${b.x}px`, top: `${b.y}px` }}
          >
            {b.parts.map((p, i) => (
              <span
                className="cursor-burst-glyph"
                key={i}
                style={{
                  '--dx': p.dx,
                  '--dy': p.dy,
                  '--rot': p.rot,
                  animationDelay: p.delay,
                }}
              >
                {p.ch}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Cursor;
