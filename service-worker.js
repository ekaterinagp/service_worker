var CACHE_VERSION = "v1";
var urlsToCache = [
  "/",
  "style.css",
  "artwork.html",
  "/cart.html",
  "/index.js",
  "/cart.js",
  "/about.html",
  "/anim.js",
  "/contact.html",
  "/gallery.js",
  "/index.html",
  "/loader.js",
  "/loader.html",
  "/recentart.js",
  "/menu.js",
  "/sendMail.php",
  "/sendEmail.php",
  "/subpage.html",
  "/subpage.js",
  "/thanks.html",
  "/img/bla.PNG",
  "/img/bla1.PNG",
  "/img/cart.png",
  "/img/fb.png",
  "/img/icons.png",
  "/img/inst.png",
  "/img/loader-01.svg",
  "/img/logo_black.svg",
  "/img/Logo_yellow.svg",
  "/img/no-image.png",
  "/img/piccc.png",
  "/img/selv.png",
  "/img/three_venus.png",
  "/img/venus.png",
  "/img/1.png",
  "/img/desktop.gif",
  "/img/mobile.gif",
  "/img/tablet.gif",
  "/fonts/jaapokki/regular/jaapokki-regular.otf",
  "/fonts/printclearly.otf"
];

self.addEventListener("install", function(event) {
  console.log("install");
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      console.log("Opened cache");
      return cache
        .addAll(urlsToCache)
        .then(() => console.log("Assets added to cache"))
        .catch(err => console.log("Error while fetching assets", err));
    })
  );
});

self.addEventListener("fetch", function(event) {
  console.log("Fetch event: ", event);
  console.log("Fetch event for ", event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        if (response) {
          console.log("Found ", event.request.url, " in cache");
          return response;
        }
        console.log("Network request for ", event.request.url);
        return fetch(event.request).then(function(response) {
          if (response.status === 404) {
            return caches.match("fourohfour.html");
          }
          return caches.open(urlsToCache).then(function(cache) {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });
      })
      .catch(function(error) {
        console.log("Error, ", error);
        return caches.match("offline.html");
      })
  );
});

self.addEventListener("activate", function(event) {
  console.log("activate!");
  var expectedCacheNames = Object.keys(CACHE_VERSION).map(function(key) {
    return CACHE_VERSION[key];
  });
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(key, i) {
          if (expectedCacheNames.indexOf(key) === -1) {
            return caches.delete(keys[i]);
          }
        })
      );
    })
  );
});
