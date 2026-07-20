// 쓰기 연습지: 전체 표(자음/쌍자음/모음/이중모음) + 글자당 4개 트레이싱 박스
// app.js의 단일 캔버스 트레이싱/채점 로직(pathD/sampleSegment/buildGuideSamples/scoreDrawing)을
// 여러 캔버스에서 동시에 쓸 수 있도록 클로저 기반으로 일반화한 버전.

const svgNS = 'http://www.w3.org/2000/svg';
const BOX = 220; // 좌표계 기준(0~220), data.js 좌표와 동일

function pathD(points) {
  return 'M ' + points[0][0] + ' ' + points[0][1] + ' ' +
    points.slice(1).map(p => 'L ' + p[0] + ' ' + p[1]).join(' ');
}

function sampleSegment(a, b, n) {
  const out = [];
  for (let i = 0; i <= n; i++) {
    out.push([a[0] + (b[0] - a[0]) * i / n, a[1] + (b[1] - a[1]) * i / n]);
  }
  return out;
}

function buildGuideSamples(strokes) {
  let all = [];
  strokes.forEach(s => {
    for (let i = 0; i < s.length - 1; i++) {
      all = all.concat(sampleSegment(s[i], s[i + 1], 20));
    }
  });
  return all;
}

function dist(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

// ---- 데이터셋 정의 ----
function getDataSet(key) {
  switch (key) {
    case 'consonant': return { data: STROKE_DATA, order: Object.keys(STROKE_DATA) };
    case 'doubleConsonant': return { data: DOUBLE_CONSONANT_STROKE_DATA, order: Object.keys(DOUBLE_CONSONANT_STROKE_DATA) };
    case 'vowel': return { data: VOWEL_DATA, order: Object.keys(VOWEL_DATA) };
    case 'diphthong': return { data: DIPHTHONG_VOWEL_DATA, order: Object.keys(DIPHTHONG_VOWEL_DATA) };
    default: return { data: {}, order: [] };
  }
}

// ---- 작은 획순 데모 (SVG, 클릭하면 애니메이션 재생) ----
function buildDemoSVG(strokes) {
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${BOX} ${BOX}`);
  svg.classList.add('ws-demo');

  const paths = [];
  strokes.forEach((pts, idx) => {
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', pathD(pts));
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#D85A30');
    path.setAttribute('stroke-width', '10');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(path);
    paths.push(path);

    const c = document.createElementNS(svgNS, 'circle');
    c.setAttribute('cx', pts[0][0]);
    c.setAttribute('cy', pts[0][1]);
    c.setAttribute('r', '9');
    c.setAttribute('fill', '#0C447C');
    svg.appendChild(c);

    const t = document.createElementNS(svgNS, 'text');
    t.setAttribute('x', pts[0][0]);
    t.setAttribute('y', pts[0][1] + 4);
    t.setAttribute('text-anchor', 'middle');
    t.setAttribute('font-size', '11');
    t.setAttribute('fill', '#fff');
    t.textContent = idx + 1;
    svg.appendChild(t);
  });

  function playAnimation() {
    paths.forEach((path, i) => {
      const len = path.getTotalLength();
      path.style.transition = 'none';
      path.setAttribute('stroke-dasharray', len);
      path.setAttribute('stroke-dashoffset', len);
      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 0.5s ease';
        path.setAttribute('stroke-dashoffset', '0');
      }, i * 550 + 80);
    });
  }

  svg.addEventListener('click', playAnimation);
  setTimeout(playAnimation, 50); // 처음 렌더될 때 한 번 자동 재생

  return svg;
}

// ---- 트레이싱 박스 하나 생성 (독립된 상태를 클로저로 유지) ----
function createTraceBox(strokes) {
  const wrap = document.createElement('div');
  wrap.className = 'ws-trace-box';

  // 옅은 가이드선 (배경)
  const guideSvg = document.createElementNS(svgNS, 'svg');
  guideSvg.setAttribute('viewBox', `0 0 ${BOX} ${BOX}`);
  guideSvg.classList.add('ws-guide');
  strokes.forEach(pts => {
    const p = document.createElementNS(svgNS, 'path');
    p.setAttribute('d', pathD(pts));
    p.setAttribute('fill', 'none');
    p.setAttribute('stroke', '#B4B2A9');
    p.setAttribute('stroke-width', '9');
    p.setAttribute('stroke-linecap', 'round');
    p.setAttribute('stroke-linejoin', 'round');
    guideSvg.appendChild(p);
  });

  const canvas = document.createElement('canvas');
  canvas.width = BOX;
  canvas.height = BOX;
  const ctx = canvas.getContext('2d');

  const check = document.createElement('div');
  check.className = 'ws-check';
  check.textContent = '✓';

  wrap.appendChild(guideSvg);
  wrap.appendChild(canvas);
  wrap.appendChild(check);

  const guideSamples = buildGuideSamples(strokes);
  let userPoints = [];
  let drawing = false;

  function toCanvasXY(e) {
    const r = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = (clientX - r.left) * (BOX / r.width);
    const y = (clientY - r.top) * (BOX / r.height);
    return [x, y];
  }

  function scoreDrawing() {
    if (userPoints.length < 5) return;
    let sumMin = 0;
    userPoints.forEach(up => {
      let best = Infinity;
      guideSamples.forEach(gp => { const d = dist(up, gp); if (d < best) best = d; });
      sumMin += best;
    });
    const avgOff = sumMin / userPoints.length;

    let covered = 0;
    guideSamples.forEach(gp => {
      let best = Infinity;
      userPoints.forEach(up => { const d = dist(up, gp); if (d < best) best = d; });
      if (best < 24) covered++;
    });
    const coverage = covered / guideSamples.length;
    const ok = avgOff < 22 && coverage > 0.6;

    wrap.classList.toggle('ws-ok', ok);
  }

  function clearBox() {
    ctx.clearRect(0, 0, BOX, BOX);
    userPoints = [];
    wrap.classList.remove('ws-ok');
  }

  canvas.addEventListener('pointerdown', e => {
    drawing = true;
    const p = toCanvasXY(e);
    userPoints.push(p);
    ctx.beginPath();
    ctx.moveTo(p[0], p[1]);
    ctx.strokeStyle = '#D85A30';
    ctx.lineWidth = 9;
    ctx.lineCap = 'round';
  });
  canvas.addEventListener('pointermove', e => {
    if (!drawing) return;
    const p = toCanvasXY(e);
    userPoints.push(p);
    ctx.lineTo(p[0], p[1]);
    ctx.stroke();
  });
  window.addEventListener('pointerup', () => {
    if (drawing) { drawing = false; scoreDrawing(); }
  });

  // 더블클릭/더블탭으로 그 칸만 지우기
  wrap.addEventListener('dblclick', clearBox);

  return wrap;
}

// ---- 전체 표 렌더링 ----
const wsTable = document.getElementById('ws-table');
const wsTabs = document.querySelectorAll('.ws-mode-tab');

function renderWorksheet(setKey) {
  const { data, order } = getDataSet(setKey);
  wsTable.innerHTML = '';

  order.forEach(ch => {
    const strokes = data[ch];
    const row = document.createElement('div');
    row.className = 'ws-row';

    const letterEl = document.createElement('div');
    letterEl.className = 'ws-letter';
    letterEl.textContent = ch;

    const soundEl = document.createElement('div');
    soundEl.className = 'ws-sound';
    soundEl.textContent = '[' + (SOUND_VALUE[ch] || '?') + ']';

    row.appendChild(letterEl);
    row.appendChild(soundEl);
    row.appendChild(buildDemoSVG(strokes));

    for (let i = 0; i < 4; i++) {
      const box = createTraceBox(strokes);
      box.classList.add('ws-t' + (i + 1));
      row.appendChild(box);
    }

    wsTable.appendChild(row);
  });
}

wsTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    wsTabs.forEach(t => t.removeAttribute('data-active'));
    tab.setAttribute('data-active', '1');
    renderWorksheet(tab.dataset.set);
  });
});

renderWorksheet('consonant');
