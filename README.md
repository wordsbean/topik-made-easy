# TOPIK Made Easy — Lingo Power: Hangul Learning for TOPIK

한글 자모부터 TOPIK 1~6급 단어(10,000여 개)까지, 플래시카드와 여러 퍼즐 형식으로 배우는
설치형 웹앱(PWA)입니다. 순수 정적 사이트(HTML/CSS/JS)로, 별도 서버나 빌드 과정 없이
그대로 호스팅하면 동작합니다.

## 기능

- **홈 · TOPIK 카드** (`index.html`) — 플래시카드(뒤집기/펼쳐보기/예문더보기), 급수별 학습, 즐겨찾기·학습이력
- **한글 자모 배우기** (`level0.html`) — 획순 애니메이션 + 따라쓰기
- **한글 쓰기 연습** (`worksheet.html`) — 자음/쌍자음/모음/이중모음 쓰기 워크시트
- **워드크로스 / 워드파인더** (`wordcross.html` / `wordfinder.html`)
- **빈칸채우기** (`fillblank.html`) — 예문 속 단어 빈칸 맞히기
- **문장 스크램블** (`sentencescramble.html`) — 단어 순서 재조립
- **공통단어 찾기** (`commonword.html`) — 여러 예문에 공통으로 들어가는 단어 맞히기
- **리스닝 퀴즈** (`listening.html`) — 단어/문장 듣고 고르기
- **학습 이력** (`progress.html`) — 캘린더, 즐겨찾기, 더 이상 안 보기 목록

## 언어 지원

- **정식 지원 10개 언어** (사전 번역 데이터 포함): 일본어, 중국어, 스페인어, 프랑스어, 베트남어,
  태국어, 인도네시아어, 러시아어, 아랍어, 몽골어
- **기타 언어** (한국 고용허가제 주요 송출국 기준, 실시간 번역): 네팔어, 크메르어, 미얀마어,
  우즈베크어, 벵골어, 필리핀어, 싱할라어, 우르두어, 라오어, 키르기스어
- 화면 UI 자체도 한국어/영어 전환 가능 (학습 콘텐츠 언어와는 별개 설정)

## 로컬에서 실행하기

빌드 과정이 없어서 정적 파일 서버만 있으면 됩니다.

```bash
python -m http.server 8000
# 또는
npx serve .
```

브라우저에서 `http://localhost:8000` 접속.

## 배포 (GitHub Pages)

1. 이 저장소를 GitHub에 push
2. 저장소 **Settings → Pages** 에서 Source를 `main` 브랜치 `/ (root)`로 설정
3. 몇 분 후 `https://<username>.github.io/<repo>/`에서 접속 가능

## 폴더 구조

```
/
├── index.html, level0.html, worksheet.html, ...   각 화면
├── css/            화면별 스타일시트
├── js/             공용 로직 (언어설정, UI현지화, 번역헬퍼, 로마자변환 등)
├── data/           TOPIK 단어/예문/번역 데이터 (topik_core.js, nvsentences.js, topik_lang_*.js)
├── images/icons/   PWA 아이콘 (192/512)
├── manifest.json   PWA 매니페스트
└── service-worker.js  오프라인 캐싱
```

## 기술 스택

바닐라 HTML/CSS/JavaScript. 프레임워크·빌드 도구 없음. TTS는 Web Speech API,
실시간 번역은 구글 번역 비공식 엔드포인트(API 키 불필요) 사용.
