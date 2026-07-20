/* ============================================================
   Lingo Power: Hangul for TOPIK — level0.html app.js
   의존성: js/data.js, js/hangul-compose.js, js/wordlists_by_grade.js,
          js/word_translations.js (이 순서로 먼저 로드되어 있어야 함)
   ============================================================ */

const svgNS = 'http://www.w3.org/2000/svg';
const BOX = 220;

/* ---------- 0) 공용 TTS ---------- */
let voicesReady = false;
function loadVoices() {
  const voices = speechSynthesis.getVoices();
  if (voices.length > 0) voicesReady = true;
}
if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}
function speakKorean(text) {
  if (!('speechSynthesis' in window) || !text) return;
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'ko-KR';
  utter.rate = 0.9;
  const voices = speechSynthesis.getVoices();
  const koVoice = voices.find(v => v.lang === 'ko-KR') || voices.find(v => v.lang && v.lang.startsWith('ko'));
  if (koVoice) utter.voice = koVoice;
  speechSynthesis.speak(utter);
}

/* ---------- 1) 설정(모국어) ----------
   getSavedUserLang()/saveUserLang()은 이제 js/lang-pref-hangul.js가 제공합니다
   (이 파일보다 먼저 로드되어 있어야 함). 예전엔 이 파일 자체에 USER_LANG_KEY를
   따로 선언해서 다른 페이지들과 저장 키가 어긋나 있었는데, 공용 걸로 통일했습니다.
   설정 버튼/모달도 nav-hangul.js 드로어로 옮겨서 여기선 뺐습니다. */

/* ---------- 2) 자모 트레이싱 공용 로직 ---------- */
function pathD(points) {
  return 'M ' + points[0][0] + ' ' + points[0][1] + ' ' +
    points.slice(1).map(p => 'L ' + p[0] + ' ' + p[1]).join(' ');
}
function sampleSegment(a, b, n) {
  const out = [];
  for (let i = 0; i <= n; i++) out.push([a[0] + (b[0] - a[0]) * i / n, a[1] + (b[1] - a[1]) * i / n]);
  return out;
}
function buildGuideSamples(strokes) {
  let all = [];
  strokes.forEach(s => { for (let i = 0; i < s.length - 1; i++) all = all.concat(sampleSegment(s[i], s[i + 1], 20)); });
  return all;
}
function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); }

/* ---------- 3) 모드 탭 ---------- */
let currentMode = 'consonant';
const letterGrid = document.getElementById('letter-grid');
const practiceRow = document.getElementById('practice-row');
const buildPanel = document.getElementById('build-panel');

document.querySelectorAll('.mode-tabs .mode-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.mode-tabs .mode-tab').forEach(t => t.removeAttribute('data-active'));
    tab.setAttribute('data-active', '1');
    const mode = tab.dataset.mode;
    if (mode === 'build') {
      letterGrid.style.display = 'none';
      practiceRow.style.display = 'none';
      buildPanel.style.display = '';
      newBuildPrompt();
    } else {
      currentMode = mode;
      letterGrid.style.display = '';
      practiceRow.style.display = 'none';
      buildPanel.style.display = 'none';
      renderLetterGrid();
    }
  });
});

/* ---------- 4) 자모 그리드 ---------- */
function renderLetterGrid() {
  const data = currentMode === 'consonant' ? STROKE_DATA : VOWEL_DATA;
  letterGrid.innerHTML = '';
  Object.keys(data).forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'letter-btn';
    btn.textContent = letter;
    btn.addEventListener('click', () => selectLetter(letter));
    letterGrid.appendChild(btn);
  });
  const firstLetter = Object.keys(data)[0];
  if (firstLetter) selectLetter(firstLetter);
}

/* ---------- 5) 획순 데모 + 따라그리기 + 단어패널 ---------- */
const demoStrokesG = document.getElementById('demo-strokes');
const letterNameEl = document.getElementById('letter-name');
const replayBtn = document.getElementById('replay-btn');
const drawCanvas = document.getElementById('draw');
const drawCtx = drawCanvas.getContext('2d');
const stampEl = document.getElementById('stamp');
const clearBtn = document.getElementById('clear-btn');
const feedbackEl = document.getElementById('feedback');
const gradeTabs = document.getElementById('grade-tabs');
const wordListEl = document.getElementById('word-list');

let selectedLetter = null;
let selectedGrade = '1급';
let guideSamples = [];
let userPoints = [];
let drawing = false;

function getStrokes(letter) {
  return (currentMode === 'consonant' ? STROKE_DATA : VOWEL_DATA)[letter] || [];
}

function playDemoAnimation(strokes) {
  demoStrokesG.innerHTML = '';
  const paths = [];
  strokes.forEach((pts, idx) => {
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', pathD(pts));
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#C23B32');
    path.setAttribute('stroke-width', '10');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    demoStrokesG.appendChild(path);
    paths.push(path);

    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', pts[0][0]);
    circle.setAttribute('cy', pts[0][1]);
    circle.setAttribute('r', '10');
    circle.setAttribute('fill', '#0C447C');
    circle.style.opacity = '0';
    demoStrokesG.appendChild(circle);

    const num = document.createElementNS(svgNS, 'text');
    num.setAttribute('x', pts[0][0]);
    num.setAttribute('y', pts[0][1] + 4);
    num.setAttribute('text-anchor', 'middle');
    num.setAttribute('font-size', '12');
    num.setAttribute('fill', '#fff');
    num.textContent = idx + 1;
    num.style.opacity = '0';
    demoStrokesG.appendChild(num);

    setTimeout(() => {
      circle.style.transition = 'opacity 0.2s';
      num.style.transition = 'opacity 0.2s';
      circle.style.opacity = '1';
      num.style.opacity = '1';
    }, idx * 550 + 60);
  });
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

function drawGuideOnCanvas(strokes) {
  drawCtx.strokeStyle = '#C9C4B8';
  drawCtx.lineWidth = 9;
  drawCtx.lineCap = 'round';
  drawCtx.lineJoin = 'round';
  strokes.forEach(pts => {
    drawCtx.beginPath();
    drawCtx.moveTo(pts[0][0], pts[0][1]);
    pts.slice(1).forEach(p => drawCtx.lineTo(p[0], p[1]));
    drawCtx.stroke();
  });
}

function clearDraw() {
  drawCtx.clearRect(0, 0, BOX, BOX);
  if (selectedLetter) drawGuideOnCanvas(getStrokes(selectedLetter));
  userPoints = [];
  stampEl.style.display = 'none';
  feedbackEl.textContent = '';
}

function toCanvasXY(e) {
  const r = drawCanvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return [(clientX - r.left) * (BOX / r.width), (clientY - r.top) * (BOX / r.height)];
}

function scoreDrawing() {
  if (userPoints.length < 5 || !guideSamples.length) return;
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

  if (ok) {
    stampEl.style.display = 'block';
    feedbackEl.innerHTML = '<span class="ok">참 잘했어요!</span>';
    speakKorean('참 잘했어요');
  } else {
    stampEl.style.display = 'none';
    feedbackEl.innerHTML = '<span class="retry">조금 더 정확하게 따라 그려보세요.</span>';
  }
}

drawCanvas.addEventListener('pointerdown', e => {
  drawing = true;
  const p = toCanvasXY(e);
  userPoints.push(p);
  drawCtx.beginPath();
  drawCtx.moveTo(p[0], p[1]);
  drawCtx.strokeStyle = '#C23B32';
  drawCtx.lineWidth = 9;
  drawCtx.lineCap = 'round';
});
drawCanvas.addEventListener('pointermove', e => {
  if (!drawing) return;
  const p = toCanvasXY(e);
  userPoints.push(p);
  drawCtx.lineTo(p[0], p[1]);
  drawCtx.stroke();
});
window.addEventListener('pointerup', () => { if (drawing) { drawing = false; scoreDrawing(); } });
clearBtn.addEventListener('click', clearDraw);
replayBtn.addEventListener('click', () => playDemoAnimation(getStrokes(selectedLetter)));

gradeTabs.querySelectorAll('.grade-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    gradeTabs.querySelectorAll('.grade-btn').forEach(b => b.removeAttribute('data-active'));
    btn.setAttribute('data-active', '1');
    selectedGrade = btn.dataset.grade;
    renderWordList();
  });
});

function renderWordList() {
  if (!selectedLetter) { wordListEl.innerHTML = ''; return; }
  const bucket = (WORD_LISTS_BY_GRADE[currentMode] || {})[selectedLetter] || {};
  const words = bucket[selectedGrade] || [];
  wordListEl.innerHTML = words.length
    ? words.map(w =>
        '<div class="word-row" data-word="' + w + '">' +
        '<span>' + highlightWord(w, selectedLetter, currentMode) + '</span>' +
        '<span class="rr">' + romanizeWord(w) + '</span>' +
        '</div>'
      ).join('')
    : '<div class="word-row empty">이 급수에는 단어가 없어요.</div>';
  wordListEl.querySelectorAll('.word-row[data-word]').forEach(row => {
    row.addEventListener('click', () => openWordModal(row.dataset.word));
  });
}

function selectLetter(letter) {
  selectedLetter = letter;
  const strokes = getStrokes(letter);
  guideSamples = buildGuideSamples(strokes);

  letterGrid.querySelectorAll('.letter-btn').forEach(b => {
    b.toggleAttribute('data-active', b.textContent === letter);
  });

  practiceRow.style.display = '';
  letterNameEl.textContent = currentMode === 'consonant'
    ? (CONSONANT_NAMES[letter] || letter)
    : (VOWEL_READING[letter] || letter);

  playDemoAnimation(strokes);
  clearDraw();

  gradeTabs.querySelectorAll('.grade-btn').forEach(b => b.removeAttribute('data-active'));
  gradeTabs.querySelector('[data-grade="' + selectedGrade + '"]').setAttribute('data-active', '1');
  renderWordList();
}

/* ---------- 6) 단어 상세 모달 ---------- */
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalWord = document.getElementById('modal-word');
const modalSpeakBtn = document.getElementById('modal-speak-btn');
const modalRomanization = document.getElementById('modal-romanization');
const modalJamo = document.getElementById('modal-jamo');
const langTabs = document.getElementById('lang-tabs');
const modalTranslation = document.getElementById('modal-translation');
const translateFetchBtn = document.getElementById('translate-fetch-btn');
const modalCanvas = document.getElementById('modal-canvas');
const modalCtx = modalCanvas.getContext('2d');
const modalClearBtn = document.getElementById('modal-clear');

let currentModalWord = null;

function openWordModal(word) {
  currentModalWord = word;
  const entry = WORD_TRANSLATIONS[word] || {};
  modalWord.textContent = word;
  modalRomanization.textContent = romanizeWord(word);
  modalJamo.innerHTML = renderJamoBreakdown(entry.jamo, selectedLetter);

  const userLang = getSavedUserLang();
  langTabs.querySelectorAll('.lang-btn').forEach(b => b.removeAttribute('data-active'));
  const initialBtn = langTabs.querySelector('[data-lang="' + userLang + '"]') || langTabs.querySelector('[data-lang="en"]');
  initialBtn.setAttribute('data-active', '1');
  showModalTranslation(initialBtn.dataset.lang, entry);

  clearModalCanvas();
  modalOverlay.classList.add('open');
}

function showModalTranslation(langCode, entry) {
  const text = entry[langCode];
  if (text) {
    modalTranslation.textContent = text;
    translateFetchBtn.style.display = 'none';
  } else {
    modalTranslation.textContent = entry.en ? ('(번역 준비 중 · 영어: ' + entry.en + ')') : '(번역 준비 중)';
    translateFetchBtn.style.display = 'none';
  }
}

langTabs.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    langTabs.querySelectorAll('.lang-btn').forEach(b => b.removeAttribute('data-active'));
    btn.setAttribute('data-active', '1');
    const entry = WORD_TRANSLATIONS[currentModalWord] || {};
    showModalTranslation(btn.dataset.lang, entry);
  });
});

modalSpeakBtn.addEventListener('click', () => speakKorean(currentModalWord));
modalClose.addEventListener('click', () => modalOverlay.classList.remove('open'));
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) modalOverlay.classList.remove('open'); });

function clearModalCanvas() {
  modalCtx.clearRect(0, 0, modalCanvas.width, modalCanvas.height);
}
let modalDrawing = false;
function toModalXY(e) {
  const r = modalCanvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return [(clientX - r.left) * (modalCanvas.width / r.width), (clientY - r.top) * (modalCanvas.height / r.height)];
}
modalCanvas.addEventListener('pointerdown', e => {
  modalDrawing = true;
  const xy = toModalXY(e);
  modalCtx.beginPath();
  modalCtx.moveTo(xy[0], xy[1]);
  modalCtx.strokeStyle = '#0C447C';
  modalCtx.lineWidth = 4;
  modalCtx.lineCap = 'round';
});
modalCanvas.addEventListener('pointermove', e => {
  if (!modalDrawing) return;
  const xy = toModalXY(e);
  modalCtx.lineTo(xy[0], xy[1]);
  modalCtx.stroke();
});
window.addEventListener('pointerup', () => { modalDrawing = false; });
modalClearBtn.addEventListener('click', clearModalCanvas);

/* ---------- 7) 단어 만들기(듣고 쓰기) ---------- */
const buildListenBtn = document.getElementById('build-listen-btn');
const buildPromptHint = document.getElementById('build-prompt-hint');
const buildNewPromptBtn = document.getElementById('build-new-prompt-btn');
const buildWordDisplay = document.getElementById('build-word-display');
const buildResultEl = document.getElementById('build-result');

const allWords = Object.keys(WORD_TRANSLATIONS);
const composer = createHangulComposer();
let buildTarget = '';

function renderBuildWord() {
  buildWordDisplay.textContent = composer.getWord();
}

function newBuildPrompt() {
  buildTarget = allWords[Math.floor(Math.random() * allWords.length)];
  const entry = WORD_TRANSLATIONS[buildTarget] || {};
  buildPromptHint.textContent = entry.en ? ('뜻: ' + entry.en) : '';
  composer.clear();
  renderBuildWord();
  buildResultEl.textContent = '';
}

buildListenBtn.addEventListener('click', () => speakKorean(buildTarget));
buildNewPromptBtn.addEventListener('click', newBuildPrompt);

buildWordDisplay.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') { e.preventDefault(); composer.backspace(); renderBuildWord(); buildResultEl.textContent = ''; }
  else if (e.key === 'Enter') { e.preventDefault(); document.getElementById('build-check-btn').click(); }
});
document.getElementById('build-clear-btn').addEventListener('click', () => { composer.clear(); renderBuildWord(); buildResultEl.textContent = ''; });
document.getElementById('build-check-btn').addEventListener('click', () => {
  const word = composer.getWord();
  if (!word) return;
  if (word === buildTarget) {
    buildResultEl.innerHTML = '<span class="ok">정답이에요! "' + buildTarget + '"</span>';
    speakKorean('참 잘했어요');
  } else {
    buildResultEl.innerHTML = '<span class="retry">아직이에요. 정답: "' + buildTarget + '" (내가 쓴 것: "' + word + '")</span>';
  }
});

mountHangulKeyboard({
  rowIds: ['kb-row-1', 'kb-row-2', 'kb-row-3'],
  shiftBtnId: 'kb-shift-btn',
  backspaceBtnId: 'kb-backspace-btn',
  onType: (jamo) => { composer.typeJamo(jamo); renderBuildWord(); buildResultEl.textContent = ''; },
  onBackspace: () => { composer.backspace(); renderBuildWord(); buildResultEl.textContent = ''; }
});

/* ---------- 8) 시작 ---------- */
renderLetterGrid();
