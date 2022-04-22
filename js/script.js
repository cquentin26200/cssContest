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
})

