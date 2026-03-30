const CACHE_NAME = 'e3bpm-gestao-v1';
const assets = ['./index.html', './manifest-gestao.json', './icon-gestao-192.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
