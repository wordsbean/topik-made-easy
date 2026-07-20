// Lingo Power: Hangul Learning for TOPIK — shared home button + nav drawer
//
// index.html / level0.html / progress.html / wordcross.html / wordfinder.html /
// fillblank.html / sentencescramble.html / commonword.html / listening.html 공통으로 씁니다.
//
// 의존성: js/lang-pref-hangul.js (HANGUL_LANG_NAMES, getSavedUserLang, saveUserLang,
//         getSavedGrade, saveGrade)가 이 파일보다 먼저 로드되어 있어야 합니다.
// js/ui-i18n-hangul.js(t 함수)가 있으면 드로어 문구도 화면 UI 언어에 맞춰집니다(없어도 한국어로 동작).

function _navT(key, fallback) {
    return (typeof t === 'function') ? t(key) : fallback;
}

const HANGUL_NAV_ITEMS = [
    { href: 'index.html', icon: '🏠', i18nKey: 'navHome', label: '홈 · TOPIK 카드' },
    { href: 'level0.html', icon: '🔤', i18nKey: 'navLevel0', label: '한글 자모 배우기 (0급)' },
    { href: 'worksheet.html', icon: '✍️', i18nKey: 'navWorksheet', label: '한글 쓰기 연습' },
    { href: 'wordcross.html', icon: '🧩', i18nKey: 'navWordcross', label: '워드크로스' },
    { href: 'wordfinder.html', icon: '🔍', i18nKey: 'navWordfinder', label: '워드파인더' },
    { href: 'fillblank.html', icon: '📝', i18nKey: 'navFillblank', label: '빈칸채우기' },
    { href: 'sentencescramble.html', icon: '🔀', i18nKey: 'navSentencescramble', label: '문장 스크램블' },
    { href: 'commonword.html', icon: '🔎', i18nKey: 'navCommonword', label: '공통단어 찾기' },
    { href: 'listening.html', icon: '🎧', i18nKey: 'navListening', label: '리스닝 퀴즈' },
    { href: 'progress.html', icon: '📅', i18nKey: 'navProgress', label: '학습 이력' },
];

(function initHangulNav() {
    const currentPage = location.pathname.split('/').pop() || 'index.html';

    const btn = document.createElement('button');
    btn.className = 'hbh-btn';
    btn.setAttribute('aria-label', _navT('menuOpen', '메뉴 열기'));
    btn.textContent = '☰';

    const overlay = document.createElement('div');
    overlay.className = 'hbh-overlay';

    const drawer = document.createElement('nav');
    drawer.className = 'hbh-drawer';

    let html = `
        <div class="hbh-header">
            <p class="hbh-brand">Lingo Power</p>
            <p class="hbh-title">Hangul Learning for TOPIK</p>
        </div>
        <div class="hbh-section-label">${_navT('navSectionMove', '이동')}</div>
    `;

    HANGUL_NAV_ITEMS.forEach(item => {
        const isActive = item.href === currentPage;
        html += `
            <a class="hbh-link${isActive ? ' is-active' : ''}" href="${item.href}">
                <span class="hbh-icon">${item.icon}</span>
                <span>${_navT(item.i18nKey, item.label)}</span>
            </a>
        `;
    });

    drawer.innerHTML = html;

    // --- 급수 선택 (js/lang-pref-hangul.js의 getSavedGrade/saveGrade, 기본값 1급) ---
    // 예전엔 grade-select.html이라는 별도 페이지였는데, 자주 쓰는 설정이라 드로어로 옮겼습니다.
    if (typeof getSavedGrade === 'function' && typeof saveGrade === 'function') {
        const gradeLabel = document.createElement('div');
        gradeLabel.className = 'hbh-section-label';
        gradeLabel.textContent = '⚙️ ' + _navT('sectionGrade', '설정 · 급수');
        drawer.appendChild(gradeLabel);

        const gradeWrap = document.createElement('div');
        gradeWrap.className = 'hbh-lang-wrap';
        const gradeOptions = [1, 2, 3, 4, 5, 6]
            .map(g => `<option value="${g}">${g}급</option>`)
            .join('');
        gradeWrap.innerHTML = `<select id="hbhGradeSelect">${gradeOptions}</select>`;
        drawer.appendChild(gradeWrap);

        const gradeSelectEl = gradeWrap.querySelector('#hbhGradeSelect');
        gradeSelectEl.value = String(getSavedGrade());
        gradeSelectEl.addEventListener('change', () => {
            saveGrade(Number(gradeSelectEl.value));
            // index.html은 급수를 URL로도 관리하므로 거기로 이동, 그 외 화면은 새로고침해서 반영
            if (currentPage === 'index.html' || currentPage === '') {
                location.href = 'index.html?grade=' + gradeSelectEl.value;
            } else {
                location.reload();
            }
        });
    }

    // --- 학습 콘텐츠 언어 선택 (js/lang-pref-hangul.js가 로드돼 있을 때만) ---
    if (typeof HANGUL_LANG_NAMES !== 'undefined' && typeof getSavedUserLang === 'function') {
        const langLabel = document.createElement('div');
        langLabel.className = 'hbh-section-label';
        langLabel.textContent = '⚙️ ' + _navT('sectionMyLang', '설정 · 내 언어');
        drawer.appendChild(langLabel);

        const langWrap = document.createElement('div');
        langWrap.className = 'hbh-lang-wrap';

        const staticOptions = Object.entries(HANGUL_LANG_NAMES)
            .map(([code, label]) => `<option value="${code}">${label}</option>`)
            .join('');
        let extraGroupHtml = '';
        if (typeof HANGUL_EXTRA_LANG_NAMES !== 'undefined') {
            const extraOptions = Object.entries(HANGUL_EXTRA_LANG_NAMES)
                .map(([code, label]) => `<option value="${code}">${label}</option>`)
                .join('');
            extraGroupHtml = `<optgroup label="기타 언어 (실시간 번역)">${extraOptions}</optgroup>`;
        }

        langWrap.innerHTML = `<select id="hbhLangSelect">
            <optgroup label="정식 지원 (10개 언어)">${staticOptions}</optgroup>
            ${extraGroupHtml}
        </select>`;
        drawer.appendChild(langWrap);

        const select = langWrap.querySelector('#hbhLangSelect');
        select.value = getSavedUserLang();
        select.addEventListener('change', () => {
            saveUserLang(select.value);
            location.reload(); // 카드 화면에 바로 반영되도록 새로고침
        });
    }

    // --- 화면 UI 언어(한국어/영어) 선택 (js/ui-i18n-hangul.js가 로드돼 있을 때만) ---
    // 이건 학습 콘텐츠 언어와는 별개로, 버튼/헤더 같은 "화면 문구"만 바꿉니다.
    if (typeof getUILangHangul === 'function' && typeof setUILangHangul === 'function') {
        const uiLabel = document.createElement('div');
        uiLabel.className = 'hbh-section-label';
        uiLabel.textContent = '⚙️ ' + _navT('sectionUiLang', '설정 · 화면 언어 (UI)');
        drawer.appendChild(uiLabel);

        const uiLangWrap = document.createElement('div');
        uiLangWrap.className = 'hbh-lang-wrap';
        uiLangWrap.innerHTML = `<select id="hbhUiLangSelect">
            <option value="ko">한국어</option>
            <option value="en">English</option>
        </select>`;
        drawer.appendChild(uiLangWrap);

        const uiSelect = uiLangWrap.querySelector('#hbhUiLangSelect');
        uiSelect.value = getUILangHangul();
        uiSelect.addEventListener('change', () => {
            setUILangHangul(uiSelect.value);
            location.reload();
        });
    }

    function openDrawer() {
        drawer.classList.add('is-open');
        overlay.classList.add('is-open');
    }
    function closeDrawer() {
        drawer.classList.remove('is-open');
        overlay.classList.remove('is-open');
    }

    btn.addEventListener('click', openDrawer);
    overlay.addEventListener('click', closeDrawer);

    document.body.appendChild(btn);
    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
})();

// ---- 서비스워커 등록 (PWA 오프라인 지원) ----
// nav-hangul.js가 거의 모든 페이지에서 로드되기 때문에 여기서 한 번만 등록해두면
// 사이트 전체 범위(scope)에 적용됩니다. level0.html은 이 파일을 안 쓰므로 자체 등록 필요.
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').catch((err) => {
            console.warn('서비스워커 등록 실패:', err);
        });
    });
}
