window.onload = function() {
  console.log("load");
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(function(registration) {
        console.log(registration);
      })
      .catch(function(e) {
        console.error(e);
      });
  } else {
    console.log("Service Worker is not supported in this browser.");
  }
};
window.addEventListener("load", () => {
  let menuOpen = false;
  let menuIcon = document.querySelector(".menuIcon");
  let menu = document.querySelector(".menu");
  let bars = menuIcon.querySelectorAll("rect");
  let appbar = document.querySelector(".appbar");
  menuIcon.addEventListener("click", toggleMenu);

  function toggleMenu() {
    menuOpen = !menuOpen;
    bars[0].classList.toggle("rotateDown");
    bars[1].classList.toggle("fadeOut");
    bars[2].classList.toggle("rotateUp");
    menu.classList.toggle("hidden");
    appbar.classList.toggle("shadow");
    window.addEventListener("load", () => {});
  }
});

function showLoader() {
  let loader = document.querySelector(".container");
  loader.classList.remove("hiddenloader");
}

function hideLoader() {
  let loader = document.querySelector(".container");
  loader.classList.add("hiddenloader");
}
