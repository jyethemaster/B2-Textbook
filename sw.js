// Offline app shell. Each release gets its own cache so a refresh can never mix
// an old index.html with newer assets. Bump VERSION for every shipped build.
const VERSION = "v2";
const CACHE = "nederlands-b2-" + VERSION;
const FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(FILES))
      .then(() => self.skipWaiting())
  );
});

// Only this app's own caches are ever removed.
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => /^nederlands-b2-/.test(key) && key !== CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Cache-first app shell, so a refresh never needs the network.
  event.respondWith(
    caches.open(CACHE).then(c => c.match(event.request)).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => caches.open(CACHE).then(c => c.match("./index.html")));
    })
  );
});
