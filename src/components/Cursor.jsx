import { useEffect, useRef } from 'react';
import './css/Cursor.css';

function Cursor() {
  const leafRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return; // skip on touch devices

    const leaf = leafRef.current;
    if (!leaf) return;

    document.body.classList.add('has-custom-cursor');

    const onMove = (e) => {
      // leaf tip tracks the exact pointer position
      leaf.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 2}px)`;
      if (!leaf.classList.contains('is-visible')) {
        leaf.classList.add('is-visible');
      }
    };
    const show = () => leaf.classList.add('is-visible');
    const hide = () => leaf.classList.remove('is-visible');

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseenter', show);
    document.addEventListener('mouseleave', hide);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', show);
      document.removeEventListener('mouseleave', hide);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <div className="cursor-leaf" ref={leafRef} aria-hidden="true">
      <svg viewBox="0 0 26 26" width="26" height="26">
        <defs>
          <linearGradient id="leaf-cursor-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6fe0b0" />
            <stop offset="1" stopColor="#0b6a46" />
          </linearGradient>
        </defs>
        <path
          d="M13 1 C 4 7, 4 18, 13 25 C 22 18, 22 7, 13 1 Z"
          fill="url(#leaf-cursor-grad)"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="0.8"
        />
        <path
          d="M13 4.5 L13 22"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M13 11 L9 9 M13 14 L17 12"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default Cursor;
