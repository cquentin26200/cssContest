const secondNavHeader = document.querySelector(".secondNavHeader");
const planetPossible = document.querySelector(".planet-possible");

document.addEventListener("scroll", () => {
  if (window.scrollY >= planetPossible.offsetTop) {
    secondNavHeader.style.position = "fixed";
    secondNavHeader.style.top = "0";
    secondNavHeader.style.transition = "all .50s ease";
  } else {
    secondNavHeader.style.top = "-10rem";
    secondNavHeader.style.position = "static";
  }
});

const activeSearchBar = document.querySelector(".activeSearchBar");
const searchBar = document.querySelector(".searchBar");
const divSearchBar = document.querySelector(".searchBar div");

searchBar.style.opacity = "0";
searchBar.style.zIndex = "-1";

activeSearchBar.addEventListener("click", () => {
  searchBar.style.position = "fixed";
  searchBar.style.opacity = "1";
  searchBar.style.zIndex = "100";
});

const crossArrow = document.querySelector(".crossMenuHeader");

crossArrow.addEventListener("click", () => {
  searchBar.style.opacity = "0";
  searchBar.style.zIndex = "-1";
});
