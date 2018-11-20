"use strict";

var CACHE_VERSION = "v1";
var urlsToCache = [
  "/",
  "/style.css",
  "/artwork.html",
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
  "/fonts/jaapokki/regular/jaapokki-regular.otf",
  "/fonts/printclearly.otf",
  "/animation/test-tablet15.jpg",
  "animation/testing0.jpg",
  "animation/testing1.jpg",
  "animation/testing10.jpg",
  "animation/testing11.jpg",
  "animation/testing12.jpg",
  "animation/testing13.jpg",
  "animation/testing14.jpg",
  "animation/testing15.jpg",
  "animation/testing16.jpg",
  "animation/testing17.jpg",
  "animation/testing18.jpg",
  "animation/testing19.jpg",
  "animation/testing2.jpg",
  "animation/testing20.jpg",
  "animation/testing21.jpg",
  "animation/testing22.jpg",
  "animation/testing23.jpg",
  "animation/testing24.jpg",
  "animation/testing25.jpg",
  "animation/testing26.jpg",
  "animation/testing27.jpg",
  "animation/testing28.jpg",
  "animation/testing29.jpg",
  "animation/testing3.jpg",
  "animation/testing30.jpg",
  "animation/testing31.jpg",
  "animation/testing32.jpg",
  "animation/testing33.jpg",
  "animation/testing34.jpg",
  "animation/testing35.jpg",
  "animation/testing36.jpg",
  "animation/testing37.jpg",
  "animation/testing38.jpg",
  "animation/testing39.jpg",
  "animation/testing4.jpg",
  "animation/testing40.jpg",
  "animation/testing41.jpg",
  "animation/testing42.jpg",
  "animation/testing43.jpg",
  "animation/testing44.jpg",
  "animation/testing45.jpg",
  "animation/testing46.jpg",
  "animation/testing47.jpg",
  "animation/testing48.jpg",
  "animation/testing49.jpg",
  "animation/testing5.jpg",
  "animation/testing50.jpg",
  "animation/testing51.jpg",
  "animation/testing52.jpg",
  "animation/testing53.jpg",
  "animation/testing54.jpg",
  "animation/testing55.jpg",
  "animation/testing56.jpg",
  "animation/testing57.jpg",
  "animation/testing6.jpg",
  "animation/testing7.jpg",
  "animation/testing8.jpg",
  "animation/testing9.jpg",
  "animation/testing-mobile0.jpg",
  "animation/testing-mobile1.jpg",
  "animation/testing-mobile10.jpg",
  "animation/testing-mobile11.jpg",
  "animation/testing-mobile12.jpg",
  "animation/testing-mobile13.jpg",
  "animation/testing-mobile14.jpg",
  "animation/testing-mobile15.jpg",
  "animation/testing-mobile16.jpg",
  "animation/testing-mobile17.jpg",
  "animation/testing-mobile18.jpg",
  "animation/testing-mobile19.jpg",
  "animation/testing-mobile2.jpg",
  "animation/testing-mobile20.jpg",
  "animation/testing-mobile21.jpg",
  "animation/testing-mobile22.jpg",
  "animation/testing-mobile23.jpg",
  "animation/testing-mobile24.jpg",
  "animation/testing-mobile25.jpg",
  "animation/testing-mobile26.jpg",
  "animation/testing-mobile27.jpg",
  "animation/testing-mobile28.jpg",
  "animation/testing-mobile29.jpg",
  "animation/testing-mobile3.jpg",
  "animation/testing-mobile30.jpg",
  "animation/testing-mobile31.jpg",
  "animation/testing-mobile32.jpg",
  "animation/testing-mobile33.jpg",
  "animation/testing-mobile34.jpg",
  "animation/testing-mobile35.jpg",
  "animation/testing-mobile36.jpg",
  "animation/testing-mobile37.jpg",
  "animation/testing-mobile38.jpg",
  "animation/testing-mobile39.jpg",
  "animation/testing-mobile4.jpg",
  "animation/testing-mobile40.jpg",
  "animation/testing-mobile41.jpg",
  "animation/testing-mobile42.jpg",
  "animation/testing-mobile43.jpg",
  "animation/testing-mobile44.jpg",
  "animation/testing-mobile45.jpg",
  "animation/testing-mobile46.jpg",
  "animation/testing-mobile47.jpg",
  "animation/testing-mobile48.jpg",
  "animation/testing-mobile49.jpg",
  "animation/testing-mobile5.jpg",
  "animation/testing-mobile50.jpg",
  "animation/testing-mobile51.jpg",
  "animation/testing-mobile52.jpg",
  "animation/testing-mobile53.jpg",
  "animation/testing-mobile54.jpg",
  "animation/testing-mobile55.jpg",
  "animation/testing-mobile56.jpg",
  "animation/testing-mobile57.jpg",
  "animation/testing-mobile6.jpg",
  "animation/testing-mobile7.jpg",
  "animation/testing-mobile8.jpg",
  "animation/testing-mobile9.jpg",
  "animation/test-tablet0.jpg",
  "animation/test-tablet1.jpg",
  "animation/test-tablet10.jpg",
  "animation/test-tablet11.jpg",
  "animation/test-tablet12.jpg",
  "animation/test-tablet13.jpg",
  "animation/test-tablet14.jpg",
  "animation/test-tablet16.jpg",
  "animation/test-tablet17.jpg",
  "animation/test-tablet18.jpg",
  "animation/test-tablet19.jpg",
  "animation/test-tablet2.jpg",
  "animation/test-tablet20.jpg",
  "animation/test-tablet21.jpg",
  "animation/test-tablet22.jpg",
  "animation/test-tablet23.jpg",
  "animation/test-tablet24.jpg",
  "animation/test-tablet25.jpg",
  "animation/test-tablet26.jpg",
  "animation/test-tablet27.jpg",
  "animation/test-tablet28.jpg",
  "animation/test-tablet29.jpg",
  "animation/test-tablet3.jpg",
  "animation/test-tablet30.jpg",
  "animation/test-tablet31.jpg",
  "animation/test-tablet32.jpg",
  "animation/test-tablet33.jpg",
  "animation/test-tablet34.jpg",
  "animation/test-tablet35.jpg",
  "animation/test-tablet36.jpg",
  "animation/test-tablet37.jpg",
  "animation/test-tablet38.jpg",
  "animation/test-tablet39.jpg",
  "animation/test-tablet4.jpg",
  "animation/test-tablet40.jpg",
  "animation/test-tablet41.jpg",
  "animation/test-tablet42.jpg",
  "animation/test-tablet43.jpg",
  "animation/test-tablet44.jpg",
  "animation/test-tablet45.jpg",
  "animation/test-tablet46.jpg",
  "animation/test-tablet47.jpg",
  "animation/test-tablet48.jpg",
  "animation/test-tablet49.jpg",
  "animation/test-tablet5.jpg",
  "animation/test-tablet50.jpg",
  "animation/test-tablet51.jpg",
  "animation/test-tablet52.jpg",
  "animation/test-tablet53.jpg",
  "animation/test-tablet54.jpg",
  "animation/test-tablet55.jpg",
  "animation/test-tablet56.jpg",
  "animation/test-tablet57.jpg",
  "animation/test-tablet6.jpg",
  "animation/test-tablet7.jpg",
  "animation/test-tablet8.jpg",
  "animation/test-tablet9.jpg"
];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      requestBackend(event);
    })
  );
});

function requestBackend(event) {
  var url = event.request.clone();
  return fetch(url).then(function(res) {
    //if not a valid response send the error
    if (!res || res.status < 400 || res.type !== "basic") {
      return res;
    }

    var response = res.clone();

    caches.open(CACHE_VERSION).then(function(cache) {
      cache.put(event.request, response);
    });

    return res;
  });
}

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(key, i) {
          if (key !== CACHE_VERSION) {
            return caches.delete(keys[i]);
          }
        })
      );
    })
  );
});
