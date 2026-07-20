// Lingo Power: Hangul Learning for TOPIK — 학습 이력(캘린더) 저장소
// progress-topik.js
//
// 즐겨찾기(topik_favorites)/더 이상 안 보기(topik_dismissed)는
// js/flashcard-render.js에 이미 있는 키를 그대로 재사용합니다(중복 선언 금지).
// 여기서는 "날짜별로 어떤 단어(id)를 봤는지"만 새로 기록합니다.
//
// 사용법: index.html의 flashcard-render.js renderCard()에서 카드가 바뀔 때마다
// logStudy(word.id)를 한 번 호출해주면 됩니다.

const STUDY_LOG_KEY = 'lingoPowerHangul_studyLog_v1';

function getTodayKey() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function getStudyLog() {
    try {
        return JSON.parse(localStorage.getItem(STUDY_LOG_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function saveStudyLog(log) {
    try {
        localStorage.setItem(STUDY_LOG_KEY, JSON.stringify(log));
    } catch (e) {
        console.warn('학습 기록 저장 실패:', e);
    }
}

// 카드 id 하나를 "오늘 학습함"으로 기록 (같은 날 중복 id는 한 번만 카운트)
function logStudy(id) {
    if (id === null || id === undefined || id === '') return;
    id = String(id);
    const log = getStudyLog();
    const key = getTodayKey();
    if (!log[key]) log[key] = [];
    if (!log[key].includes(id)) {
        log[key].push(id);
        saveStudyLog(log);
    }
}

function clearStudyLog() {
    localStorage.removeItem(STUDY_LOG_KEY);
}

// ---- 더 이상 안 보기(topik_dismissed) 복구 ----
// flashcard-render.js는 dismissWord(id)만 제공하고 복구 함수가 없어서 여기 추가.
function restoreDismissed(id) {
    if (id === null || id === undefined || id === '') return;
    id = String(id);
    let dismissed = JSON.parse(localStorage.getItem('topik_dismissed') || '[]');
    dismissed = dismissed.filter(x => x !== id);
    localStorage.setItem('topik_dismissed', JSON.stringify(dismissed));
}

function clearDismissed() {
    localStorage.removeItem('topik_dismissed');
}

function clearFavorites() {
    localStorage.removeItem('topik_favorites');
}
