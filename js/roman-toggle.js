// Lingo Power: Hangul Learning for TOPIK — 공용 로마자 표시 토글
// roman-toggle.js
//
// 여러 퀴즈 페이지(fillblank/sentencescramble/commonword/listening 등)에서
// "로마자 표시 on/off"를 각자 따로 구현하지 않고 이 모듈 하나로 통일합니다.
// 저장은 localStorage 한 키로 공유되므로, 한 페이지에서 끄면 다른 페이지에서도 꺼진 채로 유지됩니다.
//
// 사용법:
//   1. <script src="js/roman-toggle.js"></script> 로드
//   2. 로마자를 보여주는 요소들에 CSS로 아래 규칙만 추가:
//        body.roman-hidden .my-roman-class { display: none !important; }
//   3. 툴바에 토글을 넣고 싶은 페이지는 initRomanToggle(document.getElementById('내컨테이너'))를 호출

const ROMAN_PREF_KEY = 'lingoPowerHangul_showRoman';

function getShowRoman() {
    try {
        return localStorage.getItem(ROMAN_PREF_KEY) !== '0';
    } catch (e) {
        return true;
    }
}

function setShowRoman(show) {
    try {
        localStorage.setItem(ROMAN_PREF_KEY, show ? '1' : '0');
    } catch (e) { /* ignore */ }
    document.body.classList.toggle('roman-hidden', !show);
}

let __rtStyleInjected = false;
function __rtInjectStyle() {
    if (__rtStyleInjected) return;
    __rtStyleInjected = true;
    const style = document.createElement('style');
    style.textContent = `
        .rt-toggle {
            display: inline-flex; align-items: center; gap: 6px;
            background: #fff; border: 1px solid #e2e8f0; border-radius: 999px;
            padding: 6px 12px; font-size: 12px; font-weight: 600; color: #64748b;
            cursor: pointer; user-select: none;
        }
        .rt-toggle input { accent-color: #2563eb; }
    `;
    document.head.appendChild(style);
}

// containerEl 안에 체크박스 토글 UI를 넣어줌 (없으면 UI 없이 body 클래스만 적용됨)
// labelText를 안 주면 기본 한국어 문구("로마자 표시")를 씀 — ui-i18n-hangul.js가 있는 페이지는
// initRomanToggle(el, t('romanToggle'))처럼 넘기면 UI 언어에 맞춰집니다.
function initRomanToggle(containerEl, labelText) {
    document.body.classList.toggle('roman-hidden', !getShowRoman());
    if (!containerEl) return;

    __rtInjectStyle();
    const label = document.createElement('label');
    label.className = 'rt-toggle';
    label.innerHTML = `<input type="checkbox" ${getShowRoman() ? 'checked' : ''}> ${labelText || '로마자 표시'}`;
    containerEl.appendChild(label);

    label.querySelector('input').addEventListener('change', (e) => {
        setShowRoman(e.target.checked);
    });
}

// initRomanToggle()을 페이지가 직접 안 불러도 최소한 body 클래스는 로드 시점에 맞춰둠
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.toggle('roman-hidden', !getShowRoman());
});
