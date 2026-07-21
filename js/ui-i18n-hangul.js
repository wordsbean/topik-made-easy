// Lingo Power: Hangul Learning for TOPIK — UI 현지화(i18n)
// ui-i18n-hangul.js
//
// ⚠️ 이건 "학습 콘텐츠 언어"(topik_lang_XX.js, lang-pref-hangul.js)와는 완전히 별개입니다.
// 여기는 순수하게 버튼/헤더 같은 "화면 UI 문구"를 한국어/영어로만 바꿉니다.
// (구 800단어 앱의 ui-i18n.js와 동일한 방식: data-i18n + t())
//
// 사용법: HTML에 data-i18n="key" 넣어두면 applyI18n()이 자동으로 채워줍니다.
// JS에서 동적으로 만드는 문구(표 헤더, 버튼 텍스트 등)는 t('key')를 직접 씁니다.

const UI_LANG_KEY_HANGUL = 'lingoPowerHangul_uiLang';

const UI_DICT_HANGUL = {
    ko: {
        home: '홈으로',
        newPuzzle: '새 퍼즐 만들기',
        generating: '만드는 중...',
        loadingWords: '단어 불러오는 중...',
        showAnswer: '정답 보기',
        showProblem: '문제 보기',
        print: '인쇄',
        answerSummary: '정답 요약',
        wordAnswerSummary: '단어 정답 요약',
        sentAnswerSummary: '예문 정답 요약',
        listenAll: '전체듣기',
        listenWord: '단어 발음',
        listenSentence: '문장 듣기',
        listenAgain: '🔊 듣기',
        romanToggle: '로마자 표시',
        colWord: '단어',
        colRoman: '로마자',
        colEnglish: '영어',
        colEnglishMeaning: '영어뜻',
        colNative: '모국어',
        colSentence: '한글 예문',
        colSentenceTranslation: '영어 해석',
        wordSection: '🔤 단어 듣기 (1~5)',
        sentSection: '📖 예문 듣기 (1~5)',

        navSectionMove: '이동',
        navHome: '홈 · TOPIK 카드',
        navLevel0: '한글 자모 배우기 (0급)',
        navWorksheet: '한글 쓰기 연습',
        navWordcross: '워드크로스',
        navWordfinder: '워드파인더',
        navFillblank: '빈칸채우기',
        navSentencescramble: '문장 스크램블',
        navCommonword: '공통단어 찾기',
        navListening: '리스닝 퀴즈',
        navProgress: '학습 이력',
        sectionMyLang: '설정 · 내 언어',
        sectionUiLang: '설정 · 화면 언어 (UI)',
        sectionGrade: '설정 · 급수',
        menuOpen: '메뉴 열기',

        flipHint: '눌러서 예문 보기',
        tabFlip: '뒤집기',
        tabFlat: '펼쳐보기',
        tabExamples: '예문 더보기',
        traceMode: '따라쓰기',
        wpDone: '지나온',
        wpTodo: '남은',
        wpMastered: '완료한 단어',
        wordfinderHidden: '숨겨진 단어',
        fillblankTitle: '다음에 들어갈 단어는',
        commonwordTitle: '공통으로 들어갈 단어는',
        gradeBadge: '{n}급',
        batchBadge: '제 {n}회',
        grade1Label: '1급 (초급)',
        grade2Label: '2급 (초급)',
        grade3Label: '3급 (중급)',
        grade4Label: '4급 (중급)',
        grade5Label: '5급 (고급)',
        grade6Label: '6급 (고급)',
        weekdaySun: '일', weekdayMon: '월', weekdayTue: '화', weekdayWed: '수',
        weekdayThu: '목', weekdayFri: '금', weekdaySat: '토',
        progressTotalWords: '누적 학습 단어',
        progressDaysLearned: '학습한 날',
        progressToday: '오늘 학습',
        progressFavorites: '즐겨찾기',
        progressDismissed: '더 이상 안 보기',
        progressTagline: '캘린더로 보는 내 TOPIK 단어 학습 기록',

        prevWord: '이전',
        nextWord: '다음',
        listenPronunciation: '발음 듣기',
        listenWithTranslation: '듣기 (번역포함)',
    },
    en: {
        home: 'Home',
        newPuzzle: 'New Puzzle',
        generating: 'Generating...',
        loadingWords: 'Loading words...',
        showAnswer: 'Show Answers',
        showProblem: 'Show Questions',
        print: 'Print',
        answerSummary: 'Answer Summary',
        wordAnswerSummary: 'Word Answer Summary',
        sentAnswerSummary: 'Sentence Answer Summary',
        listenAll: 'Listen All',
        listenWord: 'Pronounce Word',
        listenSentence: 'Listen to Sentence',
        listenAgain: '🔊 Listen',
        romanToggle: 'Show Romanization',
        colWord: 'Word',
        colRoman: 'Romanization',
        colEnglish: 'English',
        colEnglishMeaning: 'English Meaning',
        colNative: 'Native',
        colSentence: 'Korean Sentence',
        colSentenceTranslation: 'English Translation',
        wordSection: '🔤 Word Listening (1-5)',
        sentSection: '📖 Sentence Listening (1-5)',

        navSectionMove: 'Navigate',
        navHome: 'Home · TOPIK Cards',
        navLevel0: 'Learn Hangul Basics (Grade 0)',
        navWorksheet: 'Hangul Writing Practice',
        navWordcross: 'WordCross',
        navWordfinder: 'WordFinder',
        navFillblank: 'Fill in the Blank',
        navSentencescramble: 'Sentence Scramble',
        navCommonword: 'Common Word',
        navListening: 'Listening Quiz',
        navProgress: 'Progress',
        sectionMyLang: 'Settings · My Language',
        sectionUiLang: 'Settings · UI Language',
        sectionGrade: 'Settings · Grade',
        menuOpen: 'Open menu',

        flipHint: 'Tap to see example',
        tabFlip: 'Flip',
        tabFlat: 'Expand',
        tabExamples: 'More Examples',
        traceMode: 'Trace Writing',
        wpDone: 'Done',
        wpTodo: 'Remaining',
        wpMastered: 'Completed Words',
        wordfinderHidden: 'Hidden Words',
        fillblankTitle: 'What word goes here?',
        commonwordTitle: 'What word fits all blanks?',
        gradeBadge: 'GR{n}',
        batchBadge: 'Round {n}',
        grade1Label: 'Grade 1 (Beginner)',
        grade2Label: 'Grade 2 (Beginner)',
        grade3Label: 'Grade 3 (Intermediate)',
        grade4Label: 'Grade 4 (Intermediate)',
        grade5Label: 'Grade 5 (Advanced)',
        grade6Label: 'Grade 6 (Advanced)',
        weekdaySun: 'Sun', weekdayMon: 'Mon', weekdayTue: 'Tue', weekdayWed: 'Wed',
        weekdayThu: 'Thu', weekdayFri: 'Fri', weekdaySat: 'Sat',
        progressTotalWords: 'Total Words Learned',
        progressDaysLearned: 'Days Studied',
        progressToday: 'Studied Today',
        progressFavorites: 'Favorites',
        progressDismissed: 'Hidden Words',
        progressTagline: 'Your TOPIK vocabulary study calendar',

        prevWord: 'Prev',
        nextWord: 'Next',
        listenPronunciation: 'Listen',
        listenWithTranslation: 'Listen (with translation)',
    },
};

// UI 언어 기본값: 사용자가 명시적으로 고른 적 없으면 학습 언어(getSavedUserLang)가
// 'en'일 때만 영어로, 그 외에는 한국어로 (한국어 UI가 기준 화면이라서).
function getUILangHangul() {
    try {
        const stored = localStorage.getItem(UI_LANG_KEY_HANGUL);
        if (stored === 'ko' || stored === 'en') return stored;
    } catch (e) { /* ignore */ }
    const contentLang = (typeof getSavedUserLang === 'function') ? getSavedUserLang() : 'ko';
    return contentLang === 'en' ? 'en' : 'ko';
}

function setUILangHangul(lang) {
    if (lang !== 'ko' && lang !== 'en') return;
    try {
        localStorage.setItem(UI_LANG_KEY_HANGUL, lang);
    } catch (e) { /* ignore */ }
}

function t(key) {
    const dict = UI_DICT_HANGUL[getUILangHangul()] || UI_DICT_HANGUL.ko;
    return dict[key] || UI_DICT_HANGUL.ko[key] || key;
}

// HTML에 data-i18n="key" / data-i18n-title="key" 붙여둔 요소들을 일괄 채워줌
function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        el.title = t(el.dataset.i18nTitle);
    });
}

document.addEventListener('DOMContentLoaded', applyI18n);

// "{n}급" / "Level {n}" 처럼 숫자 삽입이 필요한 문구용 헬퍼 (모든 퀴즈 페이지 공용)
function tGradeBadge(grade) {
    const tpl = (typeof t === 'function') ? t('gradeBadge') : '{n}급';
    return tpl.replace('{n}', grade);
}
function tBatchBadge(n) {
    const tpl = (typeof t === 'function') ? t('batchBadge') : '제 {n}회';
    return tpl.replace('{n}', n);
}

// 툴바에 "EN / 한국어" 전환 버튼을 넣어줌 — 로마자 토글이랑 같은 자리에 나란히 쓰라고 만든 것.
// 클릭하면 setUILangHangul()로 저장하고 새로고침해서 바로 반영.
let __uiLangStyleInjected = false;
function initUILangToggle(containerEl) {
    if (!containerEl) return;
    if (!__uiLangStyleInjected) {
        __uiLangStyleInjected = true;
        const style = document.createElement('style');
        style.textContent = `
            .ui-lang-toggle {
                display: inline-flex; align-items: center;
                background: #fff; border: 1px solid #e2e8f0; border-radius: 999px;
                padding: 6px 12px; font-size: 12px; font-weight: 700; color: #2563eb;
                cursor: pointer;
            }
            .ui-lang-toggle:hover { background: #eff6ff; }
        `;
        document.head.appendChild(style);
    }

    const current = getUILangHangul();
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ui-lang-toggle';
    btn.textContent = current === 'en' ? '한국어' : 'EN';
    btn.title = current === 'en' ? '한국어 화면으로 전환' : 'Switch to English screen';
    btn.addEventListener('click', () => {
        setUILangHangul(current === 'en' ? 'ko' : 'en');
        location.reload();
    });
    containerEl.appendChild(btn);
}
