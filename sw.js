const PRECACHE = 'precache-v1.45';
const RUNTIME = 'runtime-v1.45';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  
  /* index page */
  './',

  /* surah pages */
  './1', './2', './3', './4', './5', './6', './7', './8', './9', './10', 
  './11', './12', './13', './14', './15', './16', './17', './18', './19', './20', 
  './21', './22', './23', './24', './25', './26', './27', './28', './29', './30', 
  './31', './32', './33', './34', './35', './36', './37', './38', './39', './40', 
  './41', './42', './43', './44', './45', './46', './47', './48', './49', './50', 
  './51', './52', './53', './54', './55', './56', './57', './58', './59', './60', 
  './61', './62', './63', './64', './65', './66', './67', './68', './69', './70', 
  './71', './72', './73', './74', './75', './76', './77', './78', './79', './80', 
  './81', './82', './83', './84', './85', './86', './87', './88', './89', './90', 
  './91', './92', './93', './94', './95', './96', './97', './98', './99', './100', 
  './101', './102', './103', './104', './105', './106', './107', './108', './109', 
  './110', './111', './112', './113', './114',

  /* surah json files */
  './assets/data/1.json', './assets/data/2.json', './assets/data/3.json', './assets/data/4.json', './assets/data/5.json', 
  './assets/data/6.json', './assets/data/7.json', './assets/data/8.json', './assets/data/9.json', './assets/data/10.json', 
  './assets/data/11.json', './assets/data/12.json', './assets/data/13.json', './assets/data/14.json', './assets/data/15.json', 
  './assets/data/16.json', './assets/data/17.json', './assets/data/18.json', './assets/data/19.json', './assets/data/20.json', 
  './assets/data/21.json', './assets/data/22.json', './assets/data/23.json', './assets/data/24.json', './assets/data/25.json', 
  './assets/data/26.json', './assets/data/27.json', './assets/data/28.json', './assets/data/29.json', './assets/data/30.json', 
  './assets/data/31.json', './assets/data/32.json', './assets/data/33.json', './assets/data/34.json', './assets/data/35.json', 
  './assets/data/36.json', './assets/data/37.json', './assets/data/38.json', './assets/data/39.json', './assets/data/40.json', 
  './assets/data/41.json', './assets/data/42.json', './assets/data/43.json', './assets/data/44.json', './assets/data/45.json', 
  './assets/data/46.json', './assets/data/47.json', './assets/data/48.json', './assets/data/49.json', './assets/data/50.json', 
  './assets/data/51.json', './assets/data/52.json', './assets/data/53.json', './assets/data/54.json', './assets/data/55.json', 
  './assets/data/56.json', './assets/data/57.json', './assets/data/58.json', './assets/data/59.json', './assets/data/60.json', 
  './assets/data/61.json', './assets/data/62.json', './assets/data/63.json', './assets/data/64.json', './assets/data/65.json', 
  './assets/data/66.json', './assets/data/67.json', './assets/data/68.json', './assets/data/69.json', './assets/data/70.json', 
  './assets/data/71.json', './assets/data/72.json', './assets/data/73.json', './assets/data/74.json', './assets/data/75.json', 
  './assets/data/76.json', './assets/data/77.json', './assets/data/78.json', './assets/data/79.json', './assets/data/80.json', 
  './assets/data/81.json', './assets/data/82.json', './assets/data/83.json', './assets/data/84.json', './assets/data/85.json', 
  './assets/data/86.json', './assets/data/87.json', './assets/data/88.json', './assets/data/89.json', './assets/data/90.json', 
  './assets/data/91.json', './assets/data/92.json', './assets/data/93.json', './assets/data/94.json', './assets/data/95.json', 
  './assets/data/96.json', './assets/data/97.json', './assets/data/98.json', './assets/data/99.json', './assets/data/100.json', 
  './assets/data/101.json', './assets/data/102.json', './assets/data/103.json', './assets/data/104.json', './assets/data/105.json', 
  './assets/data/106.json', './assets/data/107.json', './assets/data/108.json', './assets/data/109.json', './assets/data/110.json', 
  './assets/data/111.json', './assets/data/112.json', './assets/data/113.json', './assets/data/114.json',

  /* stylesheets */
  './assets/css/style.css', './assets/css/dark.css', './assets/css/normal.css', './assets/css/index.css',  

  /* javascripts */
  './assets/js/bundle.js', './assets/js/main.js', 

  /* fonts */
  './assets/fonts/Cabin-Bold.eot', './assets/fonts/Cabin-Bold.ttf', './assets/fonts/Cabin-Bold.woff', './assets/fonts/Cabin-Bold.woff2', './assets/fonts/IndoPak.woff', './assets/fonts/IndoPak.woff2', './assets/fonts/Uthmani.woff', './assets/fonts/Uthmani.woff2', 

  /* images */
  './assets/images/bismillah.png', './assets/images/chevron.svg', './assets/images/loading.png', './assets/images/play.png', './assets/images/pause.png', './assets/images/sajda.png', 

  /* other stuff */
  './assets/data/translation.json'

];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
    .then(function() { 
      self.clients.matchAll().then(all => all.forEach(client => {
          client.postMessage("registered");
      }));
    })
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) return cachedResponse;
        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});