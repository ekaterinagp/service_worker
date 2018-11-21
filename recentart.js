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
  // hideLoader();
  document.querySelector(".page").classList.remove("hiddenloader");
});

function fetchArtPieces() {
  fetch(
    "https://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/artist?_embed&per_page=3"
  )
    .then(e => e.json())
    .then(showArt);
}

function showArt(data) {
  console.log(data);
  data.forEach(showSinglePiece);
}

function showLoader() {
  let loader = document.querySelector(".container");
  loader.classList.remove("hiddenloader");
}

function hideLoader() {
  let loader = document.querySelector(".container");
  loader.classList.add("hiddenloader");
}

showLoader();

let handleProjectItemHover = function(projectItemElement, option) {
  projectItemElement.children[1].style.display = option;
};

function showArt(data) {
  hideLoader();
  console.log(data);
  data.forEach(showSinglePiece);
}

function showContent(event) {
  console.log("showContent: event: ", event);
}

console.log("recentstart");

function showSinglePiece(aPiece) {
  // console.log(aPiece._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
  let template = document.querySelector("#recenttemp").content;
  let clone = template.cloneNode(true);
  let recentItem = clone.querySelector(".recentitem");

  clone.querySelector(".title").innerHTML = aPiece.title.rendered;
  clone.querySelector(".medium").textContent = aPiece.acf.medium;

  recentItem.setAttribute("id", aPiece.id);

  recentItem.addEventListener("mouseover", function() {
    console.log("mouseover recentItem: ", recentItem);
    handleProjectItemHover(recentItem, "block");
  });
  recentItem.addEventListener("mouseout", function() {
    console.log("mouseout recentItem: ", recentItem);
    handleProjectItemHover(recentItem, "none");
  });

  clone
    .querySelector(".artworkimg")
    .setAttribute(
      "src",
      aPiece._embedded["wp:featuredmedia"][0].media_details.sizes.medium
        .source_url
    );

  let recentpiece = document.querySelector("#recentpiece");

  clone.querySelector(".more").href = "subpage.html?id=" + aPiece.id;

  recentpiece.appendChild(clone);
}
fetchArtPieces();
