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
searchBar.style.position = "absolute";

activeSearchBar.addEventListener("click", () => {
  searchBar.style.position = "fixed";
  searchBar.style.opacity = "1";
  searchBar.style.zIndex = "100";
  document.body.style.overflow = "hidden";
});

//hide the form of search bar and hide the newletter

const crossArrow = document.querySelectorAll(".crossMenuHeader");

crossArrow.forEach((element) => {
  element.addEventListener("click", () => {
    searchBar.style.opacity = "0";
    searchBar.style.zIndex = "-1";
    newsletter.style.opacity = "0";
    newsletter.style.zIndex = "-1";
    document.body.style.overflow = "visible";
  });
});

//show the newsletter

const activeNewsLetter = document.querySelector(".activeNewsLetter");
const newsletter = document.querySelector(".newsLetter");

newsletter.style.opacity = "0";
newsletter.style.zIndex = "-1";

activeNewsLetter.addEventListener("click", () => {
  newsletter.style.position = "fixed";
  newsletter.style.opacity = "1";
  newsletter.style.zIndex = "100";
  document.body.style.overflow = "hidden";
});

//check uncheck the case in newsletter

const checkbox = document.querySelectorAll(".checkbox");

checkbox.forEach((element) => {
  element.classList.add("select");
  element.addEventListener("click", () => {
    const verify = document.createElement("span");
    verify.classList.add("selected");
    if (element.classList.contains("select")) {
      element.appendChild(verify);
      element.classList.remove("select");
    } else {
      element.removeChild(element.firstChild);
      element.classList.add("select");
    }
  });

  const submitNewsletter = document.querySelector("header #submit");
  const fieldsEmail = document.querySelector("header #email");
  submitNewsletter.addEventListener("click", (event) => {
    const validationConfidentiality = document.querySelector(
      ".validationConfidentiality"
    );
    const validationAge = document.querySelector(".validationAge");
    const errorFoField = document.querySelector(".errorForm .errorForFields");
    const errorEmail = document.querySelector(".errorForm .errorForEmail");

    if (
      validationAge.classList.contains("select") &&
      !validationConfidentiality.classList.contains("select")
    ) {
        errorFoField.innerHTML = "Vous devez remplir le deuxième champ";
        validationAge.parentElement.lastElementChild.classList.add("errorHeader");
        validationConfidentiality.parentElement.lastElementChild.classList.remove("errorHeader");
      
    } else if (
      validationConfidentiality.classList.contains("select") &&
      !validationAge.classList.contains("select")
    ) {
        errorFoField.innerHTML = "Vous devez remplir le premier champ";
        validationConfidentiality.parentElement.lastElementChild.classList.add("errorHeader");
        validationAge.parentElement.lastElementChild.classList.remove("errorHeader");
    } else if (
      validationAge.classList.contains("select") &&
      validationConfidentiality.classList.contains("select")
    ) {
        errorFoField.innerHTML = "Veuillez remplir tous les champs obligatoire";
        validationAge.parentElement.lastElementChild.classList.add("errorHeader");
        validationConfidentiality.parentElement.lastElementChild.classList.add("errorHeader");

    } else {
        errorFoField.innerHTML = "";
        validationAge.parentElement.lastElementChild.classList.remove("errorHeader");
        validationConfidentiality.parentElement.lastElementChild.classList.remove("errorHeader");
    }

    if (fieldsEmail.value == "") {
      errorEmail.innerHTML = "Entrez une adresse mail valide";
    } else {
      errorEmail.innerHTML = "";
    }
    console.log(fieldsEmail.value == "");
    event.preventDefault()
  });
});

//check if the case is check or not

//show ad

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const pubLink = document.querySelector(".pub a");
const pubImg = document.querySelector(".pub img");

setInterval(() => {
  switch (randomNumber(1, 5)) {
    case 1:
      pubLink.setAttribute(
        "href",
        "https://www.rolex.org/fr/rolex-awards/application?cmpid=dsp_ROLEX_INTL_PerpetualPlanet-2023RAERecruiting_2022_FR_rlx2201939"
      );
      pubImg.setAttribute("src", "/img/pub/rolex(1).PNG");
      break;

    case 2:
      pubLink.setAttribute(
        "href",
        "https://www.nationalgeographic.fr/video/programmes-tv-national-geographic-national-geographic-wild"
      );
      pubImg.setAttribute(
        "src",
        "https://tpc.googlesyndication.com/simgad/425001798813073066"
      );
      break;

    case 3:
      pubLink.setAttribute(
        "href",
        "https://www.disneyplus.com/fr-fr/series/the-dropout/5C0gjGwyRTeZ?cid=DTCI-Synergy-TWDC-Site-Awareness-DisneyPlus-FR-Star-NA-FR-DisplayAd-THE_DROPOUT_LAUNCH-NA"
      );
      pubImg.setAttribute(
        "src",
        "https://tpc.googlesyndication.com/simgad/7506250100607603173"
      );
      break;

    case 4:
      pubLink.setAttribute("href", "https://app.powster.com/marvel/drs-2/fr/");
      pubImg.setAttribute(
        "src",
        "https://tpc.googlesyndication.com/simgad/13788261754804701679"
      );
    default:
      pubLink.setAttribute("href", "https://eu.patagonia.com/fr/fr/shop/alpine-rock-hike-pants?gclid=EAIaIQobChMI0-7U-dSs9wIVWt3VCh3qMQJAEAEYASAAEgK1A_D_BwE");
      pubImg.setAttribute(
        "src",
        "/img/pub/hike.PNG"
      );
  }
}, randomNumber(3000, 10000));
