// Lingo Power: Hangul Learning for TOPIK — shared language preference
//
// level0.html(예전 index.html)의 js/app.js에 이미 USER_LANG_KEY/getSavedUserLang/
// saveUserLang이 있습니다. 이 파일은 그 "저장 키"를 그대로 재사용해서 index.html /
// progress.html / wordcross.html 등 다른 페이지에서도 같은 설정값을 공유합니다.
//
// ⚠️ level0.html에는 이 파일을 넣지 마세요 — app.js가 이미 같은 이름의 함수/상수를
// 선언하고 있어서 중복선언 오류가 납니다. level0.html은 app.js 것을 그대로 씁니다.

const USER_LANG_KEY = 'lingoPowerHangul_userLang';

// level0.html의 설정 모달(#settings-lang-select)과 옵션 순서를 맞췄습니다.
// Group A: topik_lang_XX.js에 단어+뜻 번역이 미리 준비되어 있는 "정식 지원" 10개 언어.
const HANGUL_LANG_NAMES = {
    en: 'English',
    ja: '日本語',
    zh: '中文',
    es: 'Español',
    fr: 'Français',
    vi: 'Tiếng Việt',
    th: 'ไทย',
    id: 'Indonesia',
    ru: 'Русский',
    ar: 'العربية',
    mn: 'Монгол',
};

// Group B: 정적 번역 데이터가 없는 "기타 언어" — 주로 한국 고용허가제(EPS) 송출국 언어.
// 이 그룹은 js/translate-helper.js의 getNativeWordMeaning()으로 실시간(구글) 번역해서 채웁니다.
const HANGUL_EXTRA_LANG_NAMES = {
    ne: 'नेपाली',      // 네팔
    km: 'ខ្មែរ',        // 캄보디아
    my: 'မြန်မာ',       // 미얀마
    uz: "Oʻzbek",     // 우즈베키스탄
    bn: 'বাংলা',        // 방글라데시
    tl: 'Filipino',   // 필리핀
    si: 'සිංහල',        // 스리랑카
    ur: 'اردو',         // 파키스탄
    lo: 'ລາວ',         // 라오스
    ky: 'Кыргызча',   // 키르기스스탄
};

// code가 정적 번역 데이터(topik_lang_XX.js)를 갖고 있는 "10개국" 그룹인지 여부
function isStaticLangSupported(code) {
    return Object.prototype.hasOwnProperty.call(HANGUL_LANG_NAMES, code) && code !== 'en';
}

function getSavedUserLang() {
    try {
        return localStorage.getItem(USER_LANG_KEY) || 'en';
    } catch (e) {
        return 'en';
    }
}

function saveUserLang(code) {
    try {
        localStorage.setItem(USER_LANG_KEY, code);
    } catch (e) { /* ignore */ }
}

// ---- 전역 "내 급수" 설정 (사이드바 셀렉트) — 기본값 1급 ----
const USER_GRADE_KEY = 'lingoPowerHangul_grade';

function getSavedGrade() {
    try {
        const v = parseInt(localStorage.getItem(USER_GRADE_KEY), 10);
        return (v >= 1 && v <= 6) ? v : 1;
    } catch (e) {
        return 1;
    }
}

function saveGrade(grade) {
    try {
        localStorage.setItem(USER_GRADE_KEY, String(grade));
    } catch (e) { /* ignore */ }
}

// WORD_TRANSLATIONS[word] 항목에서 "현재 설정 언어" 값을 꺼내되,
// 그 언어로 번역이 없는 단어면 영어로 자동 대체합니다.
// 반환값: { text, lang, isFallback }
function pickUserLangMeaning(entry) {
    const lang = getSavedUserLang();
    if (entry && entry[lang]) {
        return { text: entry[lang], lang, isFallback: false };
    }
    if (entry && entry.en) {
        return { text: entry.en, lang: 'en', isFallback: lang !== 'en' };
    }
    return { text: '(뜻 준비 중)', lang, isFallback: false };
}
