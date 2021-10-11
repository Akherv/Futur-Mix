// Recherche dans bdd
var modal = document.getElementsByClassName("modalClass");
var cardspan = document.getElementsByClassName("cardspan");
var cardp = document.getElementsByClassName("cardp");
var carda = document.getElementsByClassName("carda");
var carda2 = document.getElementsByClassName("carda2");
var btn = document.getElementsByClassName("myBtn");
var boutonclose = document.getElementsByClassName("close");
var cardimg = document.getElementsByClassName("cardimg");
var cardimgmini = document.getElementsByClassName("cardimgmini");
var cardimgminiarray = [...document.getElementsByClassName("cardimgmini")];
var nav = document.querySelector('#navbar');
var submitButton= document.querySelector('#button');

submitButton.addEventListener("click", function(e) {
  e.preventDefault()
});

for (const btnelement of btn) {
  btnelement.onclick = function (event) {
    nav.style.display="none";

    var btnArray = [...document.getElementsByClassName("myBtn")];
    var index = btnArray.indexOf(event.target);
    var montableau = Object.keys(fiches).map(function (cle) {
      return [fiches[cle]];
    });
    for (const cardimgelement of cardimg) {
      cardimgelement.src = montableau[index][0].image;
    }
    for (const cardspanelement of cardspan) {
      cardspanelement.innerText = montableau[index][0].titre;
    }
    for (const cardpelement of cardp) {
      cardpelement.innerText = montableau[index][0].description;
    }

    for (const cardaelement of carda) {
      var chaine = cardaelement.href;
      chaine = montableau[index][0].url[0];
      var regex = /\s?([\/])\s?/;
      var resultat = chaine.split(regex);
      cardaelement.innerText = resultat[4];
      cardaelement.href = chaine;
    }
    for (const cardaelement2 of carda2) {
      var chaine = cardaelement2.href;
      chaine = montableau[index][0].url[1];
      var regex = /\s?([\/])\s?/;
      var resultat = chaine.split(regex);
      cardaelement2.innerText = resultat[4];
      cardaelement2.href = chaine;
    }

    //fermeture fiche
    for (const modalelement of modal) {
      modalelement.style.display === "flex"
        ? (modalelement.style.display = "none")
        : (modalelement.style.display = "flex");
    }

    for (const spanelement of boutonclose) {
      spanelement.onclick = function () {
        for (const modalelement of modal) {
          nav.style.display="flex";
          modalelement.style.display = "none";
        }
      };
    }
  };
}

//Ouverture modal crédit

$(document).ready(function () {
  $(".modal").modal();
});
