// romanizeWord 개선판: 겹받침(두 자음짜리 받침) 뒤에 모음이 올 때
// 앞 자음은 그대로 받침으로 남고 뒷 자음만 다음 음절 초성으로 넘어가는
// 연음 규칙을 반영합니다.
//
// 예: 읽어요 -> ilgeoyo (기존: ikeoyo, 틀림)
//     앉아요 -> anjayo
//     삶아요 -> salmayo
//
// 사용법: js/data.js 로드 다음에 이 파일을 로드하면 romanizeWord()가
// 자동으로 이 개선판으로 교체됩니다. (input: 한글 단어 string, output: 로마자 string)

// 겹받침 -> [앞자음(받침으로 남음), 뒷자음(다음 음절 초성으로 이동)]
const DOUBLE_JONG_SPLIT = {
  'ㄳ': ['ㄱ', 'ㅅ'],
  'ㄵ': ['ㄴ', 'ㅈ'],
  'ㄶ': ['ㄴ', 'ㅎ'],
  'ㄺ': ['ㄹ', 'ㄱ'],
  'ㄻ': ['ㄹ', 'ㅁ'],
  'ㄼ': ['ㄹ', 'ㅂ'],
  'ㄽ': ['ㄹ', 'ㅅ'],
  'ㄾ': ['ㄹ', 'ㅌ'],
  'ㄿ': ['ㄹ', 'ㅍ'],
  'ㅀ': ['ㄹ', 'ㅎ'],
  'ㅄ': ['ㅂ', 'ㅅ'],
};

/**
 * 한글 단어를 초성/중성/종성 음절 배열로 분해한다.
 * @param {string} word - 한글 단어
 * @returns {{cho:string, jung:string, jong:string}[]}
 */
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

/**
 * 음절 배열에서, 겹받침 뒤에 모음(ㅇ초성)으로 시작하는 음절이 오면
 * 뒷자음을 다음 음절의 초성으로 옮기고 앞자음만 받침으로 남긴다.
 * (원본 배열은 건드리지 않고 새 배열을 반환 - 순수 함수)
 * @param {{cho:string, jung:string, jong:string}[]} syllables
 * @returns {{cho:string, jung:string, jong:string}[]}
 */
function applyDoubleBatchimLiaison(syllables) {
  const result = syllables.map(s => ({ ...s }));
  for (let i = 0; i < result.length - 1; i++) {
    const cur = result[i];
    const next = result[i + 1];
    const split = DOUBLE_JONG_SPLIT[cur.jong];
    if (split && next.cho === 'ㅇ') {
      const [stay, move] = split;
      cur.jong = stay;
      next.cho = move; // 다음 음절의 초성을 이 자음으로 교체
    }
  }
  return result;
}

/**
 * 음절 하나를 로마자로 변환한다. (초성/중성/받침, 받침은 연음 여부 고려)
 * @param {{cho:string, jung:string, jong:string}} syl
 * @param {{cho:string, jung:string, jong:string}|undefined} next - 다음 음절(연음 판단용)
 * @returns {string}
 */
function romanizeSyllable(syl, next) {
  let out = RR_CHO[syl.cho] + RR_JUNG[syl.jung];
  if (syl.jong) {
    if (next && next.cho === 'ㅇ' && syl.jong !== 'ㅇ' && RR_LIAISON[syl.jong]) {
      out += RR_LIAISON[syl.jong];
    } else {
      out += RR_JONG[syl.jong] || '';
    }
  }
  return out;
}

/**
 * 한글 단어를 국어의 로마자 표기법(공식 규칙) 기준으로 변환한다.
 * 겹받침 뒤 모음 연음까지 반영한 개선판.
 * @param {string} word - input: 한글 단어 (예: "읽어요")
 * @returns {string} output: 로마자 표기 (예: "ilgeoyo")
 */
function romanizeWordImproved(word) {
  const syllables = applyDoubleBatchimLiaison(decomposeSyllables(word));
  let out = '';
  syllables.forEach((syl, i) => {
    out += romanizeSyllable(syl, syllables[i + 1]);
  });
  return out;
}

// 기존 전역 romanizeWord를 이 개선판으로 교체
romanizeWord = romanizeWordImproved;
