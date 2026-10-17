/* Offline app-shell, versioned when releases are published. */
const VERSION = 'football-academy-2026-10-17-install-compact-release-1';
const CORE = [
  './', './index.html', './manifest.webmanifest', './css/styles.css',
  './js/app.js', './js/curriculum.js', './js/positions.js', './js/labs.js', './js/coaching.js', './js/question-banks.js', './js/college.js', './js/position-advanced.js', './js/play-structure.js', './js/advanced-checks.js', './js/football-library.js', './js/studio-engine.js', './js/studio-ui.js', './js/position-pathways.js',
  './js/advanced-checks.js?release=2026-10-17-install-compact-release-1', './js/app.js?release=2026-10-17-install-compact-release-1', './js/coaching.js?release=2026-10-17-install-compact-release-1', './js/college.js?release=2026-10-17-install-compact-release-1', './js/curriculum.js?release=2026-10-17-install-compact-release-1', './js/football-library.js?release=2026-10-17-install-compact-release-1', './js/labs.js?release=2026-10-17-install-compact-release-1', './js/play-structure.js?release=2026-10-17-install-compact-release-1', './js/position-advanced.js?release=2026-10-17-install-compact-release-1', './js/position-pathways.js?release=2026-10-17-install-compact-release-1', './js/positions.js?release=2026-10-17-install-compact-release-1', './js/question-banks.js?release=2026-10-17-install-compact-release-1', './js/studio-engine.js?release=2026-10-17-install-compact-release-1', './js/studio-ui.js?release=2026-10-17-install-compact-release-1',
  './assets/icon-192.png', './assets/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('football-academy-') && key !== VERSION).map(key => caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) { const copy = response.clone(); caches.open(VERSION).then(cache => cache.put('./index.html', copy)); }
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  // Network-first for executable code and styles prevents a stale PWA from remaining broken online.
  // The versioned cache still serves the same files without a connection.
  const isCode = /\.(js|css)$/i.test(url.pathname);
  if (isCode) {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) {const copy=response.clone();caches.open(VERSION).then(cache=>cache.put(request,copy)).catch(()=>{});}
      return response;
    }).catch(async () => (await caches.match(request)) || Response.error()));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok) { const copy = response.clone(); caches.open(VERSION).then(cache => cache.put(request, copy)).catch(()=>{}); }
    return response;
  })));
});
