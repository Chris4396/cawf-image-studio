const CACHE_NAME = 'cawf-image-studio-v21';
const APP_SHELL = [
  './',
  './index.html',
  './src/main.js?v=advanced-layout-4',
  './src/styles.css?v=advanced-layout-4',
  './assets/cawf-logo.png',
  './icons/app-icon-192.png',
  './icons/app-icon-512.png',
  './manifest.webmanifest?v=advanced-layout-4',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
