//animation for the header nav

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


//show the form of search bar

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

//hide the form of search bar

const crossArrow = document.querySelector(".crossMenuHeader");

crossArrow.addEventListener("click", () => {
  searchBar.style.opacity = "0";
  searchBar.style.zIndex = "-1";
});


const pubLink = document.querySelector(".pub a");
const pubImg = document.querySelector(".pub img");

//show ad

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

setInterval(() => {
    switch (randomNumber(1, 5)) {
        case 1:
        pubLink.setAttribute("href", "https://www.rolex.org/fr/rolex-awards/application?cmpid=dsp_ROLEX_INTL_PerpetualPlanet-2023RAERecruiting_2022_FR_rlx2201939");
        pubImg.setAttribute("src", "/img/pub/rolex(1).PNG");
            break;
    
        case 2: 
        pubLink.setAttribute("href", "https://www.nationalgeographic.fr/video/programmes-tv-national-geographic-national-geographic-wild");
        pubImg.setAttribute("src", "https://tpc.googlesyndication.com/simgad/425001798813073066");
        break;
    
        case 3:
        pubLink.setAttribute("href", "https://www.disneyplus.com/fr-fr/series/the-dropout/5C0gjGwyRTeZ?cid=DTCI-Synergy-TWDC-Site-Awareness-DisneyPlus-FR-Star-NA-FR-DisplayAd-THE_DROPOUT_LAUNCH-NA");
        pubImg.setAttribute("src", "https://tpc.googlesyndication.com/simgad/7506250100607603173")
        break;
    
        case 4:
            pubLink.setAttribute("href", "https://app.powster.com/marvel/drs-2/fr/");
            pubImg.setAttribute("src", "https://tpc.googlesyndication.com/simgad/13788261754804701679");
        default:
            pubLink.setAttribute("href", "https://www.rolex.org/fr/rolex-awards/application?cmpid=dsp_ROLEX_INTL_PerpetualPlanet-2023RAERecruiting_2022_FR_rlx2201939");
            pubImg.setAttribute("src", "/img/pub/rolex(2).PNG");
            break;
    }
}, randomNumber(5000, 10000))

