
// Recherche dans bdd
var modal = document.getElementsByClassName("modalClass");
var cardspan = document.getElementsByClassName("cardspan");
var cardp = document.getElementsByClassName("cardp");
var carda = document.getElementsByClassName("carda");
var carda2 = document.getElementsByClassName("carda2");
var btn = document.getElementsByClassName("myBtn");
var span = document.getElementsByClassName("close");
var boutonclose= document.getElementsByClassName("boutonclose");
var cardimg= document.getElementsByClassName("cardimg");
var cardimgmini = document.getElementsByClassName("cardimgmini");
var cardimgminiarray= [...document.getElementsByClassName("cardimgmini")]
console.log(cardimg);
console.log(cardimgmini);
console.log(cardimgminiarray);
console.log(btn[0]);
console.log(span);
console.log(cardp);
console.log(carda);


for (const btnelement of btn) {

btnelement.onclick = function(event) {
var btnArray=[...document.getElementsByClassName("myBtn")];
var index = btnArray.indexOf(event.target);
console.log(index);
var montableau = Object.keys(fiches)
.map (function(cle){
    return [fiches[cle]];
})
 console.log(montableau[0][0]);
for (const cardimgelement of cardimg) {
      cardimgelement.src= montableau[index][0].image;   
}
for (const cardspanelement of cardspan) {
      cardspanelement.innerText= montableau[index][0].titre;
}
for (const cardpelement of cardp) {
cardpelement.innerText= montableau[index][0].description;
}

for (const cardaelement of carda) {
    var chaine = cardaelement.href;
    chaine = montableau[index][0].url[0];
    var regex = /\s?([\/])\s?/;
    var resultat = chaine.split(regex);
    cardaelement.innerText=resultat[4]; 
    cardaelement.href=chaine;
}
for (const cardaelement2 of carda2) {
  var chaine = cardaelement2.href;
  chaine = montableau[index][0].url[1];
  var regex = /\s?([\/])\s?/;
  var resultat = chaine.split(regex);
  cardaelement2.innerText=resultat[4]; 
  cardaelement2.href=chaine;
}

//fermeture fiche
for (const modalelement of modal) {
modalelement.style.display === "block" ? modalelement.style.display = "none" : modalelement.style.display = "block";
console.log(modalelement.style.display)
}

for (const spanelement of span) {
spanelement.onclick = function() {
  for (const modalelement of modal) {
  modalelement.style.display = "none";
  }
}
  }

for (const boutoncloseelement of boutonclose) {
  boutoncloseelement.onclick = function() {
    for (const modalelement of modal) {
    modalelement.style.display = "none";
    }
  }
}
}
}


//Ouverture modal crédit

$(document).ready(function(){
  $('.modal').modal();
});
        
