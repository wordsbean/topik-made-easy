/* ============================================================
   플래시카드 카드 UI 렌더링
   - app.js의 renderFlashcardDeck() 자리를 이 내용으로 교체
   - 이미지 있든 없든 항상 3D-text 오버레이(한글단어/로마자/영어단어)
   - 뒷면: 예문(한글+로마자) + 영어예문 + 모국어 번역
   ============================================================ */

function renderFlashcardDeck(words, startIndex) {
  const root = document.getElementById('app');
  root.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'deck-wrap';
  root.appendChild(wrap);

  // ---- 상단바 ----
  const topbar = document.createElement('div');
  topbar.className = 'deck-topbar';
  const progress = document.createElement('span');
  progress.className = 'deck-progress';
  topbar.appendChild(progress);
  wrap.appendChild(topbar);

  // ---- 카드 ----
  const flipCard = document.createElement('div');
  flipCard.className = 'flip-card';
  const flipInner = document.createElement('div');
  flipInner.className = 'flip-card-inner';
  flipCard.appendChild(flipInner);
  wrap.appendChild(flipCard);

  const front = document.createElement('div');
  front.className = 'flip-face flip-face--front';
  const back = document.createElement('div');
  back.className = 'flip-face flip-face--back';
  flipInner.appendChild(front);
  flipInner.appendChild(back);

  flipInner.addEventListener('click', (e) => {
    if (e.target.closest('.card-top-icons')) return; // 아이콘 클릭은 뒤집기와 분리
    flipCard.classList.toggle('is-flipped');
  });

  // ---- 하단 네비게이션 ----
  const nav = document.createElement('div');
  nav.className = 'deck-nav';
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '‹';
  prevBtn.setAttribute('aria-label', '이전 단어');
  const nextBtn = document.createElement('button');
  nextBtn.textContent = '›';
  nextBtn.setAttribute('aria-label', '다음 단어');
  nav.appendChild(prevBtn);
  nav.appendChild(nextBtn);
  wrap.appendChild(nav);

  let index = startIndex;
  const showRoman = getSettings().showRoman !== false; // 기본값 true

  function renderCard() {
    const w = words[index];
    flipCard.classList.remove('is-flipped');
    progress.textContent = `${index + 1} / ${words.length}`;

    front.innerHTML = '';
    back.innerHTML = '';

    // ---- 앞면 ----
    const imageArea = document.createElement('div');
    imageArea.className = 'card-image-area';
    imageArea.dataset.pos = w.pos || '';

    if (w.image) {
      const img = new Image();
      img.src = `images/${w.image}`;
      img.onload = () => {
        imageArea.style.backgroundImage = `url('images/${w.image}')`;
      };
      img.onerror = () => {
        imageArea.classList.add('no-image');
      };
    } else {
      imageArea.classList.add('no-image');
    }

    const topIcons = document.createElement('div');
    topIcons.className = 'card-top-icons';

    const favBtn = document.createElement('button');
    favBtn.textContent = '★';
    favBtn.setAttribute('aria-label', '즐겨찾기');
    favBtn.classList.toggle('active', isFavorite(w.id));
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(w.id);
      favBtn.classList.toggle('active', isFavorite(w.id));
    });

    const speakBtn = document.createElement('button');
    speakBtn.textContent = '🔊';
    speakBtn.setAttribute('aria-label', '발음 듣기');
    speakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakWord(w.word);
    });

    const hideBtn = document.createElement('button');
    hideBtn.textContent = '⊘';
    hideBtn.setAttribute('aria-label', '더 이상 안 보기');
    hideBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dismissWord(w.id);
      goNext();
    });

    topIcons.appendChild(favBtn);
    topIcons.appendChild(speakBtn);
    topIcons.appendChild(hideBtn);

    const textOverlay = document.createElement('div');
    textOverlay.className = 'card-text-overlay';
    textOverlay.innerHTML = `
      <p class="text-3d text-3d--pos">[${w.pos || ''}]</p>
      <p class="text-3d text-3d--word">${w.word}</p>
      <p class="text-3d text-3d--roman ${showRoman ? '' : 'roman-toggle-hidden'}">${w.roman}</p>
      <p class="text-3d text-3d--eng">${w.engWord || ''}</p>
      ${w.translation ? `<p class="text-3d text-3d--native">${w.translation.word}</p>` : ''}
    `;

    imageArea.appendChild(topIcons);
    imageArea.appendChild(textOverlay);
    front.appendChild(imageArea);

    // ---- 뒷면 ----
    const backHeader = document.createElement('div');
    backHeader.className = 'back-header';
    backHeader.innerHTML = `
      <p class="text-3d text-3d--word" style="color:var(--ink,#211D1A); -webkit-text-stroke:0;">${w.word}</p>
      <p class="back-example-roman ${showRoman ? '' : 'roman-toggle-hidden'}">${w.roman}</p>
      <p class="back-example-eng">${w.engWord || ''}</p>
    `;
    back.appendChild(backHeader);

    const examples = (w.naverExamplesPos && w.naverExamplesPos.length)
      ? w.naverExamplesPos.slice(0, 2)
      : (w.examplesKor || []).slice(0, 2).map(k => ({ kor: k, eng: '' }));

    examples.forEach(ex => {
      const sec = document.createElement('div');
      sec.className = 'back-section';
      sec.innerHTML = `
        <p class="back-example-kor">${ex.kor}</p>
        <p class="back-example-eng">${ex.eng || ''}</p>
      `;
      back.appendChild(sec);
    });

    if (w.translation && w.translation.meaning) {
      const nativeBox = document.createElement('div');
      nativeBox.className = 'back-native';
      nativeBox.innerHTML = `
        <p class="back-section-label">모국어</p>
        <p style="margin:0;">${w.translation.word} — ${w.translation.meaning}</p>
      `;
      back.appendChild(nativeBox);
    }

    saveLastIndex(index);
  }

  function goNext() {
    if (index < words.length - 1) {
      index += 1;
      renderCard();
    }
  }
  function goPrev() {
    if (index > 0) {
      index -= 1;
      renderCard();
    }
  }

  prevBtn.addEventListener('click', goPrev);
  nextBtn.addEventListener('click', goNext);

  renderCard();
}

/* ---------- 즐겨찾기 / 더보기안보기 (localStorage 기반) ---------- */

function isFavorite(id) {
  const favs = JSON.parse(localStorage.getItem('topik_favorites') || '[]');
  return favs.includes(id);
}
function toggleFavorite(id) {
  let favs = JSON.parse(localStorage.getItem('topik_favorites') || '[]');
  favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
  localStorage.setItem('topik_favorites', JSON.stringify(favs));
}
function dismissWord(id) {
  let dismissed = JSON.parse(localStorage.getItem('topik_dismissed') || '[]');
  if (!dismissed.includes(id)) dismissed.push(id);
  localStorage.setItem('topik_dismissed', JSON.stringify(dismissed));
}

/* ---------- 발음 듣기 (Web Speech API 기본 - 나중에 오디오 파일로 교체 가능) ---------- */

function speakWord(text) {
  if (!('speechSynthesis' in window)) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'ko-KR';
  speechSynthesis.speak(utter);
}
