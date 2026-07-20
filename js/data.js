// Lingo Power: Hangul Learning for TOPIK — stroke and vocabulary data
// Coordinate system: 100x100 box, points expressed as [x, y] within 60..160 range on a 220x220 viewBox

const STROKE_DATA = {
  "ㄱ": [[[60,60],[160,60],[160,160]]],
  "ㄴ": [[[60,60],[60,160],[160,160]]],
  "ㄷ": [[[160,60],[60,60]],[[60,60],[60,160],[160,160]]],
  "ㄹ": [[[60,60],[140,60],[140,95]],[[140,95],[60,95],[60,130]],[[60,130],[140,130],[140,160]]],
  "ㅁ": [[[60,60],[60,160],[160,160],[160,60],[60,60]]],
  "ㅂ": [[[60,60],[60,160]],[[160,60],[160,160]],[[60,100],[160,100]],[[60,160],[160,160]]],
  "ㅅ": [[[110,60],[60,160]],[[110,60],[160,160]]],
  "ㅇ": [[[110,60],[150,80],[150,140],[110,160],[70,140],[70,80],[110,60]]],
  "ㅈ": [[[60,60],[160,60]],[[90,60],[60,160]],[[90,60],[140,110],[160,160]]],
  "ㅊ": [[[100,45],[110,60]],[[60,80],[160,80]],[[100,80],[60,160]],[[100,80],[140,120],[160,160]]],
  "ㅋ": [[[60,60],[160,60],[160,110]],[[100,110],[160,110]]],
  "ㅌ": [[[60,60],[160,60]],[[60,110],[160,110]],[[60,110],[60,160],[160,160]]],
  "ㅍ": [[[60,70],[160,70]],[[60,70],[60,160]],[[160,70],[160,160]],[[60,150],[160,150]]],
  "ㅎ": [[[95,45],[105,55]],[[70,80],[150,80]],[[110,60],[110,100],[150,100],[150,140],[110,160],[70,140],[70,100],[110,100]]]
};

const VOWEL_DATA = {
  "ㅏ": [[[70,40],[70,180]],[[70,110],[130,110]]],
  "ㅑ": [[[70,40],[70,180]],[[70,90],[130,90]],[[70,130],[130,130]]],
  "ㅓ": [[[150,40],[150,180]],[[150,110],[90,110]]],
  "ㅕ": [[[150,40],[150,180]],[[150,90],[90,90]],[[150,130],[90,130]]],
  "ㅗ": [[[40,70],[180,70]],[[110,70],[110,130]]],
  "ㅛ": [[[40,150],[180,150]],[[90,90],[90,150]],[[130,90],[130,150]]],
  "ㅜ": [[[40,150],[180,150]],[[110,90],[110,150]]],
  "ㅠ": [[[40,70],[180,70]],[[90,70],[90,130]],[[130,70],[130,130]]],
  "ㅡ": [[[40,110],[180,110]]],
  "ㅣ": [[[110,40],[110,180]]]
};

const CONSONANT_NAMES = {
  "ㄱ":"기역","ㄴ":"니은","ㄷ":"디귿","ㄹ":"리을","ㅁ":"미음","ㅂ":"비읍","ㅅ":"시옷",
  "ㅇ":"이응","ㅈ":"지읒","ㅊ":"치읓","ㅋ":"키읔","ㅌ":"티읕","ㅍ":"피읖","ㅎ":"히읗"
};

const VOWEL_READING = {
  "ㅏ":"아","ㅑ":"야","ㅓ":"어","ㅕ":"여","ㅗ":"오","ㅛ":"요","ㅜ":"우","ㅠ":"유","ㅡ":"으","ㅣ":"이"
};

// Revised Romanization of Korean — used to show a phonetic reading like 가방 (gabang)
const RR_CHO_LIST = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const RR_JUNG_LIST = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const RR_JONG_LIST = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

const RR_CHO = { 'ㄱ':'g','ㄲ':'kk','ㄴ':'n','ㄷ':'d','ㄸ':'tt','ㄹ':'r','ㅁ':'m','ㅂ':'b','ㅃ':'pp','ㅅ':'s','ㅆ':'ss','ㅇ':'','ㅈ':'j','ㅉ':'jj','ㅊ':'ch','ㅋ':'k','ㅌ':'t','ㅍ':'p','ㅎ':'h' };
const RR_JUNG = { 'ㅏ':'a','ㅐ':'ae','ㅑ':'ya','ㅒ':'yae','ㅓ':'eo','ㅔ':'e','ㅕ':'yeo','ㅖ':'ye','ㅗ':'o','ㅘ':'wa','ㅙ':'wae','ㅚ':'oe','ㅛ':'yo','ㅜ':'u','ㅝ':'wo','ㅞ':'we','ㅟ':'wi','ㅠ':'yu','ㅡ':'eu','ㅢ':'ui','ㅣ':'i' };
const RR_JONG = { '':'','ㄱ':'k','ㄲ':'k','ㄳ':'k','ㄴ':'n','ㄵ':'n','ㄶ':'n','ㄷ':'t','ㄹ':'l','ㄺ':'k','ㄻ':'m','ㄼ':'l','ㄽ':'l','ㄾ':'l','ㄿ':'p','ㅀ':'l','ㅁ':'m','ㅂ':'p','ㅄ':'p','ㅅ':'t','ㅆ':'t','ㅇ':'ng','ㅈ':'t','ㅊ':'t','ㅋ':'k','ㅌ':'t','ㅍ':'p','ㅎ':'t' };
// When a batchim is followed by a null-onset syllable (ㅇ), its sound liaises into that syllable instead of using the terminal form
const RR_LIAISON = { 'ㄱ':'g','ㄲ':'kk','ㄴ':'n','ㄷ':'d','ㄹ':'r','ㅁ':'m','ㅂ':'b','ㅅ':'s','ㅆ':'ss','ㅈ':'j','ㅊ':'ch','ㅋ':'k','ㅌ':'t','ㅍ':'p','ㅎ':'h' };

function highlightWord(word, targetJamo, mode) {
  let html = '';
  for (const ch of word) {
    const code = ch.codePointAt(0) - 0xAC00;
    if (code < 0 || code > 11171) {
      html += ch;
      continue;
    }
    const cho = RR_CHO_LIST[Math.floor(code / (21 * 28))];
    const jung = RR_JUNG_LIST[Math.floor((code % (21 * 28)) / 28)];
    const match = mode === 'consonant' ? cho === targetJamo : jung === targetJamo;
    html += match ? '<span class="hl">' + ch + '</span>' : ch;
  }
  return html;
}

function renderJamoBreakdown(jamoStr, targetJamo) {
  if (!jamoStr) return '';
  const syllables = jamoStr.split('|');
  let html = '';
  syllables.forEach((syl, si) => {
    if (si > 0) html += '<span class="jamo-sep"> </span>';
    const parts = syl.split('^');
    parts.forEach(part => {
      part.split('+').forEach(ch => {
        html += (ch === targetJamo) ? '<span class="hl">' + ch + '</span>' : '<span>' + ch + '</span>';
      });
    });
  });
  return html;
}

function romanizeWord(word) {
  const syllables = [];
  for (const ch of word) {
    const code = ch.codePointAt(0) - 0xAC00;
    if (code < 0 || code > 11171) continue;
    syllables.push({
      cho: RR_CHO_LIST[Math.floor(code / (21 * 28))],
      jung: RR_JUNG_LIST[Math.floor((code % (21 * 28)) / 28)],
      jong: RR_JONG_LIST[code % 28]
    });
  }
  let out = '';
  syllables.forEach((syl, i) => {
    const next = syllables[i + 1];
    out += RR_CHO[syl.cho] + RR_JUNG[syl.jung];
    if (syl.jong) {
      if (next && next.cho === 'ㅇ' && syl.jong !== 'ㅇ' && RR_LIAISON[syl.jong]) {
        out += RR_LIAISON[syl.jong];
      } else {
        out += RR_JONG[syl.jong];
      }
    }
  });
  return out;
}
