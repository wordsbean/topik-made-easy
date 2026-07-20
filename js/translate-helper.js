// Lingo Power: Hangul Learning for TOPIK — 실시간 번역 헬퍼 (공용 모듈)
// translate-helper.js
//
// index.html의 makeTapToListen()에 있던 구글 무료(비공식) 번역 로직을
// 다른 화면(wordcross/wordfinder/fillblank 등)에서도 재사용할 수 있게 분리했습니다.
// API 키 불필요, translate_a/single 엔드포인트 사용.
//
// 의존성: js/lang-pref-hangul.js (getSavedUserLang) — 없어도 동작은 하지만
// 그 경우 skipLang 체크 없이 항상 번역을 시도합니다.

const translateCache = {}; // "text|lang" -> 번역결과 (같은 문장 반복요청 방지, 페이지 내에서만 유지)

async function translateText(text, targetLang, sourceLang) {
    sourceLang = sourceLang || 'ko';
    const cacheKey = sourceLang + '|' + text + '|' + targetLang;
    if (translateCache[cacheKey]) return translateCache[cacheKey];
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
        sourceLang + '&tl=' + targetLang + '&dt=t&q=' + encodeURIComponent(text);
    const res = await fetch(url);
    const data = await res.json();
    const translated = data[0].map(seg => seg[0]).join('');
    translateCache[cacheKey] = translated;
    return translated;
}

const wordMeaningCache = {}; // "id|lang" -> {word, meaning}

// 단어(모국어 표기)+뜻을 구해줌:
//  - 10개국(정적 지원) 언어면 topik_lang_XX.js에서 가져온 값(staticEntry)을 그대로 씀 (무료 API 호출 없음)
//  - 그 외(기타 언어) 언어면 한글단어→목표언어(word), 영어의미→목표언어(meaning)를 실시간 번역해서 채움
// staticEntry: { word, meaning } | null/undefined (topik_lang_XX.js[id], 정적 지원 언어일 때만 넘겨주면 됨)
async function getNativeWordMeaning(id, koWord, engMeaning, langCode, staticEntry) {
    if (langCode === 'en') return { word: null, meaning: engMeaning || '', isLive: false };
    if (staticEntry && staticEntry.word) {
        return { word: staticEntry.word, meaning: staticEntry.meaning || '', isLive: false };
    }

    const cacheKey = id + '|' + langCode;
    if (wordMeaningCache[cacheKey]) return wordMeaningCache[cacheKey];

    try {
        const [word, meaning] = await Promise.all([
            translateText(koWord, langCode, 'ko'),
            engMeaning ? translateText(engMeaning, langCode, 'en') : Promise.resolve(''),
        ]);
        const result = { word, meaning, isLive: true };
        wordMeaningCache[cacheKey] = result;
        return result;
    } catch (err) {
        return { word: null, meaning: engMeaning || '', isLive: false };
    }
}

// 토글이 아니라 "한 번만 채우고 유지" — 듣기 버튼처럼 여러 번 눌러도
// 이미 번역된 내용이 있으면 다시 요청하지 않고 그대로 둠.
async function fillTranslationOnce(targetEl, korText) {
    if (!targetEl || !korText) return;
    if (targetEl.dataset.filled === '1') return; // 이미 채워져 있으면 재요청 안 함

    const userLang = (typeof getSavedUserLang === 'function') ? getSavedUserLang() : 'en';
    if (userLang === 'en' || userLang === 'ko') return;

    targetEl.style.display = '';
    targetEl.textContent = '번역 중...';
    targetEl.dataset.filled = '1';
    try {
        targetEl.textContent = await translateText(korText, userLang);
    } catch (err) {
        targetEl.textContent = '(번역 실패)';
        targetEl.dataset.filled = '0'; // 실패한 경우엔 다음 클릭 때 재시도 가능하게
    }
}
// targetEl 안의 내용을 토글: 비어있으면 번역해서 채우고, 이미 채워져 있으면 비움 (fillblank.html에서 사용).
// 사용자 언어가 'en'/'ko'면 (이미 영어예문이 따로 있거나 원문 자체이므로) 아무 것도 안 함.
// 반환값: 실제로 번역을 시도했는지 여부 (true/false)
async function toggleTranslationInto(targetEl, korText) {
    if (!targetEl || !korText) return false;

    if (targetEl.dataset.filled === '1') {
        targetEl.textContent = '';
        targetEl.style.display = 'none';
        targetEl.dataset.filled = '0';
        return false;
    }

    const userLang = (typeof getSavedUserLang === 'function') ? getSavedUserLang() : 'en';
    if (userLang === 'en' || userLang === 'ko') return false;

    targetEl.style.display = '';
    targetEl.textContent = '번역 중...';
    targetEl.dataset.filled = '1';
    try {
        targetEl.textContent = await translateText(korText, userLang);
    } catch (err) {
        targetEl.textContent = '(번역 실패)';
    }
    return true;
}
