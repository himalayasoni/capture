// Capture service worker: keeps the app usable offline.
const VERSION = 'capture-v2';
const RUNTIME = 'capture-runtime';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL.map(u => new Request(u, {cache: 'reload'})))));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== RUNTIME).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Own files: serve from cache straight away, refresh in the background
// (so a new version shows up the next time the app is opened).
function staleWhileRevalidate(req, cacheKey) {
  return caches.open(VERSION).then(async cache => {
    const hit = await cache.match(cacheKey || req);
    const net = fetch(new Request(req.url, {cache: 'no-cache', credentials: 'same-origin'}))
      .then(res => { if (res.ok) cache.put(cacheKey || req, res.clone()); return res; })
      .catch(() => null);
    return hit || (await net) || cache.match('./index.html');
  });
}
// Fonts never change for a given URL: cache them once.
function cacheFirst(req) {
  return caches.open(RUNTIME).then(async cache => {
    const hit = await cache.match(req);
    if (hit) return hit;
    const res = await fetch(req);
    if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
    return res;
  });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    e.respondWith(staleWhileRevalidate(req, req.mode === 'navigate' ? './index.html' : undefined));
    return;
  }
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') e.respondWith(cacheFirst(req));
  // Everything else (the Claude API) goes straight to the network.
});
