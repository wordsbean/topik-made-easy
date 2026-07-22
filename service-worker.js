// TOPIK Made Easy — Lingo Power: Hangul Learning for TOPIK
// service-worker.js
//
// 설계 방침: 파일 목록을 통째로 하드코딩해서 미리 캐싱(precache)하지 않습니다.
// 이 프로젝트는 파일이 자주 늘어나고(퀴즈 페이지 추가 등) 오래된/중복 파일도 섞여 있어서,
// 목록을 일일이 관리하면 금방 어긋납니다. 대신 "실제로 요청되는 것들을 그때그때 캐싱"하는
// 런타임 캐싱 전략을 씁니다. 업데이트할 때는 CACHE_VERSION 숫자만 올리면 됩니다.

const CACHE_VERSION = 'v1';
const SHELL_CACHE = `topik-shell-${CACHE_VERSION}`;
const DATA_CACHE = `topik-data-${CACHE_VERSION}`;
const IMAGE_CACHE = `topik-images-${CACHE_VERSION}`;
const RUNTIME_CACHE = `topik-runtime-${CACHE_VERSION}`;
const ALL_CACHES = [SHELL_CACHE, DATA_CACHE, IMAGE_CACHE, RUNTIME_CACHE];

// 오프라인일 때 페이지 이동 실패하면 최소한 이거라도 보여줌 (앱의 진입점)
const OFFLINE_FALLBACK_URL = './index.html';

// 설치 시점에 딱 이 정도만 미리 캐싱 (앱의 "뼈대") — 나머지는 방문하면서 자연스럽게 채워짐
const PRECACHE_URLS = [
    './index.html',
    './manifest.json',
    './images/icons/icon-192.png',
    './images/icons/icon-512.png',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(SHELL_CACHE)
            .then((cache) => cache.addAll(PRECACHE_URLS))
            .catch((err) => console.warn('[SW] precache 일부 실패(무시하고 진행):', err))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) => !ALL_CACHES.includes(key))
                    .map((key) => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

function isDataRequest(url) {
    // data/topik_core.js, data/nvsentences.js, data/topik_lang_XX.js 등 (용량 큰 학습 데이터)
    return url.pathname.includes('/data/');
}

function isImageRequest(url) {
    return url.pathname.includes('/images/');
}

function isTranslateApi(url) {
    // 구글 번역 API는 항상 최신 응답이어야 해서 캐싱하면 안 됨
    return url.hostname === 'translate.googleapis.com';
}

function isSameOriginAsset(url) {
    return url.origin === self.location.origin;
}

// ---- 캐싱 전략들 ----

// Cache First + 백그라운드 갱신 (Stale-While-Revalidate): 일단 캐시에서 즉시 응답,
// 그 사이 네트워크로 최신본을 받아와서 다음 번을 위해 캐시를 갱신해둠.
async function staleWhileRevalidate(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    const networkFetch = fetch(request)
        .then((response) => {
            if (response && response.ok) cache.put(request, response.clone());
            return response;
        })
        .catch(() => null);
    return cached || (await networkFetch) || Response.error();
}

// Cache First: 캐시에 있으면 그것만 쓰고, 없을 때만 네트워크 (이미지처럼 안 바뀌는 것용)
async function cacheFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (cached) return cached;
    try {
        const response = await fetch(request);
        if (response && response.ok) cache.put(request, response.clone());
        return response;
    } catch (err) {
        return cached || Response.error();
    }
}

// Network First: 온라인이면 항상 최신 페이지, 실패하면 캐시 → 그것도 없으면 index.html
async function networkFirstForNavigation(request) {
    const cache = await caches.open(SHELL_CACHE);
    try {
        const response = await fetch(request);
        if (response && response.ok) cache.put(request, response.clone());
        return response;
    } catch (err) {
        const cached = await cache.match(request);
        return cached || (await cache.match(OFFLINE_FALLBACK_URL)) || Response.error();
    }
}

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') return; // POST 등은 그대로 통과 (예: 없음, 안전장치)

    const url = new URL(request.url);

    // 구글 번역 API는 절대 캐싱하지 않고 그대로 통과
    if (isTranslateApi(url)) return;

    // 페이지 이동(HTML 문서 요청): network-first
    if (request.mode === 'navigate') {
        event.respondWith(networkFirstForNavigation(request));
        return;
    }

    if (!isSameOriginAsset(url)) {
        // 구글 폰트 등 외부 리소스: stale-while-revalidate로 오프라인에도 최대한 버티게
        event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
        return;
    }

    if (isDataRequest(url)) {
        event.respondWith(staleWhileRevalidate(request, DATA_CACHE));
        return;
    }

    if (isImageRequest(url)) {
        event.respondWith(cacheFirst(request, IMAGE_CACHE));
        return;
    }

    // 나머지 같은 출처 자산(css/js): stale-while-revalidate
    event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
});
