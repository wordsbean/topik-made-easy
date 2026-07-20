// Lingo Power: Hangul Learning for TOPIK — shared Hangul composition engine
//
// This module is level-agnostic: it does not know or care whether it is being
// used for the 0급 자모 word-building screen or a future 1~6급 vocabulary
// spelling screen. Every screen that needs "type Hangul with an on-screen
// keyboard" should call createHangulComposer() for its own independent typing
// buffer, and mountHangulKeyboard() to wire up its own keyboard DOM.
//
// Depends on RR_CHO_LIST / RR_JUNG_LIST / RR_JONG_LIST from js/data.js,
// so this file must be loaded AFTER data.js and BEFORE any screen script
// that uses it (app.js, and future grade-1~6 screen scripts).

// -- combination tables (standard 두벌식 rules) --
const JUNG_COMBINE = {
  'ㅗ': { 'ㅏ': 'ㅘ', 'ㅐ': 'ㅙ', 'ㅣ': 'ㅚ' },
  'ㅜ': { 'ㅓ': 'ㅝ', 'ㅔ': 'ㅞ', 'ㅣ': 'ㅟ' },
  'ㅡ': { 'ㅣ': 'ㅢ' }
};
const JONG_COMBINE = {
  'ㄱ': { 'ㅅ': 'ㄳ' },
  'ㄴ': { 'ㅈ': 'ㄵ', 'ㅎ': 'ㄶ' },
  'ㄹ': { 'ㄱ': 'ㄺ', 'ㅁ': 'ㄻ', 'ㅂ': 'ㄼ', 'ㅅ': 'ㄽ', 'ㅌ': 'ㄾ', 'ㅍ': 'ㄿ', 'ㅎ': 'ㅀ' },
  'ㅂ': { 'ㅅ': 'ㅄ' }
};
const JUNG_DECOMBINE = {};
Object.keys(JUNG_COMBINE).forEach(base => {
  Object.keys(JUNG_COMBINE[base]).forEach(add => { JUNG_DECOMBINE[JUNG_COMBINE[base][add]] = base; });
});
const JONG_SPLIT = {};
Object.keys(JONG_COMBINE).forEach(first => {
  Object.keys(JONG_COMBINE[first]).forEach(second => { JONG_SPLIT[JONG_COMBINE[first][second]] = [first, second]; });
});

function composeBlockChar(b) {
  if (b.cho && b.jung) {
    const ci = RR_CHO_LIST.indexOf(b.cho);
    const vi = RR_JUNG_LIST.indexOf(b.jung);
    const ji = b.jong ? RR_JONG_LIST.indexOf(b.jong) : 0;
    if (ci >= 0 && vi >= 0 && ji >= 0) return String.fromCodePoint(0xAC00 + (ci * 21 + vi) * 28 + ji);
  }
  return (b.cho || '') + (b.jung || '');
}

// Creates one independent typing buffer + composition engine.
// Call this once per screen (0급 build panel, each future 1~6급 screen, etc.) —
// each instance keeps its own buffer, so several screens never interfere with each other.
function createHangulComposer() {
  let buffer = [];

  function typeConsonant(jamo) {
    const last = buffer[buffer.length - 1];
    if (!last || (last.cho && !last.jung)) { buffer.push({ cho: jamo, jung: null, jong: null }); return; }
    if (last.cho && last.jung && !last.jong) {
      if (RR_JONG_LIST.includes(jamo)) last.jong = jamo;
      else buffer.push({ cho: jamo, jung: null, jong: null });
      return;
    }
    if (last.jong) {
      const combined = JONG_COMBINE[last.jong] && JONG_COMBINE[last.jong][jamo];
      if (combined) last.jong = combined;
      else buffer.push({ cho: jamo, jung: null, jong: null });
      return;
    }
    buffer.push({ cho: jamo, jung: null, jong: null });
  }

  function typeVowel(jamo) {
    const last = buffer[buffer.length - 1];
    if (!last) { buffer.push({ cho: null, jung: jamo, jong: null }); return; }
    if (last.cho && !last.jung) { last.jung = jamo; return; }
    if (last.cho && last.jung && !last.jong) {
      const combined = JUNG_COMBINE[last.jung] && JUNG_COMBINE[last.jung][jamo];
      if (combined) last.jung = combined;
      else buffer.push({ cho: null, jung: jamo, jong: null });
      return;
    }
    if (last.jong) {
      const split = JONG_SPLIT[last.jong];
      const newCho = split ? split[1] : last.jong;
      last.jong = split ? split[0] : null;
      buffer.push({ cho: newCho, jung: jamo, jong: null });
      return;
    }
    buffer.push({ cho: null, jung: jamo, jong: null });
  }

  function typeJamo(jamo) {
    if (RR_CHO_LIST.includes(jamo)) typeConsonant(jamo);
    else if (RR_JUNG_LIST.includes(jamo)) typeVowel(jamo);
  }

  function backspace() {
    if (!buffer.length) return;
    const last = buffer[buffer.length - 1];
    if (last.jong) {
      const split = JONG_SPLIT[last.jong];
      last.jong = split ? split[0] : null;
    } else if (last.jung) {
      const base = JUNG_DECOMBINE[last.jung];
      if (base) last.jung = base;
      else { last.jung = null; if (!last.cho) buffer.pop(); }
    } else {
      buffer.pop();
    }
  }

  function clear() {
    buffer = [];
  }

  function getWord() {
    return buffer.map(composeBlockChar).join('');
  }

  function isEmpty() {
    return buffer.length === 0;
  }

  return { typeJamo, backspace, clear, getWord, isEmpty };
}

// -- on-screen keyboard (표준 두벌식 배열, real physical layout order) --
const HANGUL_KB_ROWS = [
  { base: ['ㅂ','ㅈ','ㄷ','ㄱ','ㅅ','ㅛ','ㅕ','ㅑ','ㅐ','ㅔ'],
    shift: ['ㅃ','ㅉ','ㄸ','ㄲ','ㅆ','ㅛ','ㅕ','ㅑ','ㅒ','ㅖ'] },
  { base: ['ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ'],
    shift: ['ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ'] },
  { base: ['ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ'],
    shift: ['ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ'] }
];

// Wires up an on-screen keyboard inside the given row/shift/backspace DOM ids.
// rowIds must be an array of 3 element ids (top/middle/bottom row containers).
// onType(jamo) is called for every key tap; onBackspace() for the backspace key.
// Returns { render } in case the caller ever needs to force a redraw.
function mountHangulKeyboard({ rowIds, shiftBtnId, backspaceBtnId, onType, onBackspace }) {
  let shift = false;
  const shiftBtn = document.getElementById(shiftBtnId);
  const backspaceBtn = document.getElementById(backspaceBtnId);

  function render() {
    HANGUL_KB_ROWS.forEach((row, ri) => {
      const rowEl = document.getElementById(rowIds[ri]);
      rowEl.innerHTML = '';
      row.base.forEach((baseJamo, ki) => {
        const shiftJamo = row.shift[ki];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'kb-key';
        btn.textContent = shift ? shiftJamo : baseJamo;
        btn.addEventListener('click', () => {
          onType(shift ? shiftJamo : baseJamo);
          if (shift) { shift = false; shiftBtn.removeAttribute('data-active'); render(); }
        });
        rowEl.appendChild(btn);
      });
    });
  }

  shiftBtn.addEventListener('click', () => {
    shift = !shift;
    shift ? shiftBtn.setAttribute('data-active', '1') : shiftBtn.removeAttribute('data-active');
    render();
  });

  backspaceBtn.addEventListener('click', () => onBackspace());

  render();
  return { render };
}
