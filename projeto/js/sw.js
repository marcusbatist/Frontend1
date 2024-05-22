// Service Worker para tornar a aplicação um PWA
const cacheName = 'todo-app-cache-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/main.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
