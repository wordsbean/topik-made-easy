// Lingo Power: Hangul Learning for TOPIK — shared Korean TTS helper
// app.js에 있던 것과 동일한 로직을 분리했습니다 (grade.html 등 새 화면에서 재사용).
// app.js 자체는 그대로 두었으니 기존 0급 화면 동작에는 영향 없습니다.

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

    utter.onerror = e => console.error('TTS error:', e.error);
    speechSynthesis.speak(utter);
}

// 여러 문장을 순서대로 읽음. speechSynthesis.speak()는 여러 번 호출하면
// 자동으로 큐에 쌓여 순차재생되므로, 중간에 cancel()을 부르지 않는 게 핵심.
function speakKoreanSequence(texts) {
    if (!('speechSynthesis' in window) || !texts || !texts.length) return;
    speechSynthesis.cancel();

    const voices = speechSynthesis.getVoices();
    const koVoice = voices.find(v => v.lang === 'ko-KR') || voices.find(v => v.lang && v.lang.startsWith('ko'));

    texts.filter(Boolean).forEach(text => {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'ko-KR';
        utter.rate = 0.9;
        if (koVoice) utter.voice = koVoice;
        utter.onerror = e => console.error('TTS error:', e.error);
        speechSynthesis.speak(utter);
    });
}

// 토글 재생: 이미 읽는 중이면 멈추고, 아니면 시작.
function toggleSpeakKoreanSequence(texts) {
    if ('speechSynthesis' in window && speechSynthesis.speaking) {
        speechSynthesis.cancel();
        return false; // 멈춤
    }
    speakKoreanSequence(texts);
    return true; // 시작함
}
