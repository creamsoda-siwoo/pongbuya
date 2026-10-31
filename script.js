// 불티 생성
(() => {
  const ash = document.querySelector('.ash');
  // 모바일·터치 기기와 동작 줄이기 설정에서는 불티를 만들지 않음
  if (!ash || matchMedia('(prefers-reduced-motion: reduce), (max-width: 768px), (pointer: coarse)').matches) return;
  const n = 24;
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i');
    const s = Math.random() * 3 + 1;
    p.style.left = Math.random() * 100 + 'vw';
    p.style.width = p.style.height = s + 'px';
    p.style.opacity = (Math.random() * 0.6 + 0.3).toFixed(2);
    p.style.animationDuration = (Math.random() * 10 + 8).toFixed(1) + 's';
    p.style.animationDelay = (-Math.random() * 18).toFixed(1) + 's';
    p.style.setProperty('--dx', (Math.random() * 120 - 60).toFixed(0) + 'px');
    if (Math.random() < 0.3) p.style.background = '#b18cff';
    ash.appendChild(p);
  }
})();

// 2018.10.31 19:00 부터 흐르는 사변 시계
(() => {
  const el = document.getElementById('clock');
  if (!el) return;
  const start = Date.now();
  const pad = (v) => String(v).padStart(2, '0');
  const tick = () => {
    const sec = Math.floor((Date.now() - start) / 1000);
    const m = 19 * 60 + Math.floor(sec / 60);
    el.textContent = `2018.10.31  ${pad(Math.floor(m / 60) % 24)}:${pad(m % 60)}:${pad(sec % 60)}`;
  };
  tick();
  setInterval(tick, 1000);
})();

// 영상 재생 중에는 배경 효과를 멈춰 버벅임 방지
(() => {
  const video = document.getElementById('film');
  if (!video) return;
  const set = () => document.body.classList.toggle('playing', !video.paused && !video.ended);
  ['play', 'pause', 'ended'].forEach((e) => video.addEventListener(e, set));
})();
