/**
 * 카드 렌더링: 이미지가 있으면 이미지, 없으면(로드 실패/미생성) 배경+3D텍스트로 폴백
 * word = { pos, engWord, engMeaning, korWord, imageUrl }
 */
function renderCardImageArea(word) {
  const box = document.createElement('div');
  box.className = 'card-image';
  box.dataset.pos = word.pos;

  const img = new Image();
  img.src = word.imageUrl;

  img.onload = () => {
    box.style.backgroundImage = `url('${word.imageUrl}')`;
    box.style.backgroundSize = 'cover';
    box.style.backgroundPosition = 'center';
  };

  img.onerror = () => {
    box.classList.add('no-image');
    box.appendChild(buildCaptionStack(word));
  };

  return box;
}

function buildCaptionStack(word) {
  const stack = document.createElement('div');
  stack.className = 'caption-stack';

  const pos = document.createElement('div');
  pos.className = 'text-3d text-3d--pos';
  pos.textContent = `[${word.pos}]`;

  const eng = document.createElement('div');
  eng.className = 'text-3d text-3d--word';
  eng.textContent = word.engWord;

  const meaning = document.createElement('div');
  meaning.className = 'text-3d text-3d--meaning';
  meaning.textContent = word.engMeaning;

  const kor = document.createElement('div');
  kor.className = 'text-3d text-3d--korean';
  kor.textContent = word.korWord;

  stack.append(pos, eng, meaning, kor);
  return stack;
}
