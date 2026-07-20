// Lingo Power: 공통 로마자 표기 유틸
// 국어의 로마자 표기법(공식 규칙) + 겹받침 연음 반영판.
// romanize-double-batchim-fix.js를 그대로 base로 삼고, 문장 전체용 romanizeSentence()를 추가함.
//
// 의존성: 없음 (RR_CHO_LIST 등 자모 순서 테이블을 이 파일 안에서 자체적으로 정의함 —
//         js/data.js가 로드됐든 안 됐든 항상 동작하도록 독립적으로 구성)
//
// 이 파일이 제공하는 전역 함수:
//   romanizeWord(word)      : 한글 단어 하나 -> 로마자 (예: "읽어요" -> "ilgeoyo")
//   romanizeSentence(text)  : 한글이 섞인 문장 -> 한글 부분만 로마자로, 나머지는 그대로
//                              (예: "그는 빵을 먹었다." -> "geuneun ppangeul meogeotda.")
//
// 사용법: 다른 스크립트보다 먼저 로드하면 됩니다.
//   <script src="js/romanize.js"></script>

(function () {
  const RR_CHO_LIST = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
  const RR_JUNG_LIST = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
  const RR_JONG_LIST = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

  const RR_CHO = { 'ㄱ':'g','ㄲ':'kk','ㄴ':'n','ㄷ':'d','ㄸ':'tt','ㄹ':'r','ㅁ':'m','ㅂ':'b','ㅃ':'pp','ㅅ':'s','ㅆ':'ss','ㅇ':'','ㅈ':'j','ㅉ':'jj','ㅊ':'ch','ㅋ':'k','ㅌ':'t','ㅍ':'p','ㅎ':'h' };
  const RR_JUNG = { 'ㅏ':'a','ㅐ':'ae','ㅑ':'ya','ㅒ':'yae','ㅓ':'eo','ㅔ':'e','ㅕ':'yeo','ㅖ':'ye','ㅗ':'o','ㅘ':'wa','ㅙ':'wae','ㅚ':'oe','ㅛ':'yo','ㅜ':'u','ㅝ':'wo','ㅞ':'we','ㅟ':'wi','ㅠ':'yu','ㅡ':'eu','ㅢ':'ui','ㅣ':'i' };
  const RR_JONG = { '':'','ㄱ':'k','ㄲ':'k','ㄳ':'k','ㄴ':'n','ㄵ':'n','ㄶ':'n','ㄷ':'t','ㄹ':'l','ㄺ':'k','ㄻ':'m','ㄼ':'l','ㄽ':'l','ㄾ':'l','ㄿ':'p','ㅀ':'l','ㅁ':'m','ㅂ':'p','ㅄ':'p','ㅅ':'t','ㅆ':'t','ㅇ':'ng','ㅈ':'t','ㅊ':'t','ㅋ':'k','ㅌ':'t','ㅍ':'p','ㅎ':'t' };
  const RR_LIAISON = { 'ㄱ':'g','ㄲ':'kk','ㄴ':'n','ㄷ':'d','ㄹ':'r','ㅁ':'m','ㅂ':'b','ㅅ':'s','ㅆ':'ss','ㅈ':'j','ㅊ':'ch','ㅋ':'k','ㅌ':'t','ㅍ':'p','ㅎ':'h' };

  const DOUBLE_JONG_SPLIT = {
    'ㄳ': ['ㄱ','ㅅ'], 'ㄵ': ['ㄴ','ㅈ'], 'ㄶ': ['ㄴ','ㅎ'], 'ㄺ': ['ㄹ','ㄱ'], 'ㄻ': ['ㄹ','ㅁ'],
    'ㄼ': ['ㄹ','ㅂ'], 'ㄽ': ['ㄹ','ㅅ'], 'ㄾ': ['ㄹ','ㅌ'], 'ㄿ': ['ㄹ','ㅍ'], 'ㅀ': ['ㄹ','ㅎ'], 'ㅄ': ['ㅂ','ㅅ'],
  };

  const ROMANIZATION_OVERRIDES = {
    "한글": "Hangul", "김치": "Kimchi", "태권도": "Taekwondo",
  };

  function decomposeSyllables(word) {
    const syllables = [];
    for (const ch of word) {
      const code = ch.codePointAt(0) - 0xAC00;
      if (code < 0 || code > 11171) continue;
      syllables.push({
        cho: RR_CHO_LIST[Math.floor(code / (21 * 28))],
        jung: RR_JUNG_LIST[Math.floor((code % (21 * 28)) / 28)],
        jong: RR_JONG_LIST[code % 28],
      });
    }
    return syllables;
  }

  function applyDoubleBatchimLiaison(syllables) {
    const result = syllables.map(s => ({ ...s }));
    for (let i = 0; i < result.length - 1; i++) {
      const cur = result[i], next = result[i + 1];
      const split = DOUBLE_JONG_SPLIT[cur.jong];
      if (split && next.cho === 'ㅇ') { cur.jong = split[0]; next.cho = split[1]; }
    }
    return result;
  }

  function romanizeSyllable(syl, next) {
    let out = RR_CHO[syl.cho] + RR_JUNG[syl.jung];
    if (syl.jong) {
      if (next && next.cho === 'ㅇ' && syl.jong !== 'ㅇ' && RR_LIAISON[syl.jong]) out += RR_LIAISON[syl.jong];
      else out += RR_JONG[syl.jong] || '';
    }
    return out;
  }

  /**
   * 한글 단어 하나를 로마자로 변환. (input: "읽어요" / output: "ilgeoyo")
   * 관용 표기 예외(한글->Hangul 등)는 ROMANIZATION_OVERRIDES를 먼저 확인.
   */
  function romanizeWord(word) {
    if (!word) return '';
    if (ROMANIZATION_OVERRIDES[word]) return ROMANIZATION_OVERRIDES[word];
    const syllables = applyDoubleBatchimLiaison(decomposeSyllables(word));
    let out = '';
    syllables.forEach((syl, i) => { out += romanizeSyllable(syl, syllables[i + 1]); });
    return out;
  }

  /**
   * 한글이 섞인 문장 전체를 로마자로 변환. 한글 덩어리만 바꾸고
   * 띄어쓰기/문장부호/영문 등은 그대로 둔다.
   * (input: "그는 빵을 먹었다." / output: "geuneun ppangeul meogeotda.")
   */
  function romanizeSentence(text) {
    if (!text) return '';
    return text.replace(/[가-힣]+/g, (chunk) => romanizeWord(chunk));
  }

  // 전역으로 노출 (다른 스크립트/페이지에서 그냥 함수명으로 바로 사용)
  window.romanizeWord = romanizeWord;
  window.romanizeSentence = romanizeSentence;
  window.ROMANIZATION_OVERRIDES = ROMANIZATION_OVERRIDES;
})();
