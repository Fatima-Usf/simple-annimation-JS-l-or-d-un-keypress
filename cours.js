// Question 1 : écrire la fonction compterElements


function compterElements(selecteur){
  var selctElts = document.querySelectorAll(selecteur).length;
  return selctElts;
}
console.log(compterElements("section"));  //4
console.log(compterElements("#footer-area .footer-segment")); //4
console.log(compterElements("#sidebar a")); //6

// Question 2:

//afficher :
//le nombre total de liens dans la page web ;
//la cible du premier et du dernier lien.
var link = document.getElementsByTagName("a");
var NbrA= link.length;
console.log(NbrA); //22


console.log(link[0].href); //file:///C:/Users/Admin/Desktop/WEB/projettp/Acceuil.html
console.log(link[NbrA -1].href); // file:///C:/Users/Admin/Desktop/WEB/projettp/fin.html

//Question 3:

//Modifiez le fichier cours.js afin d'ajouter sous la liste Liens importants un paragraphe contenant
//un lien vers l'URL suivante : https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation.
//voir le fichier index.html

// Création des element 'li' et 'a'
var newLine = document.createElement('li');
var newLink = document.createElement('a');
var newLinkText = document.createTextNode("Lien ajouté");

//Remplire l'element a par un lien
newLink.href ="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
// ajouté la variable qui contient le titre dans l'element a
newLink.appendChild(newLinkText);
// ajouté a à la fin de la liste
newLine.appendChild(newLink);
// finalement selectionné ou est c que je veux ajouté ça
document.querySelector("#sidebar ul").appendChild(newLine);

//Question 4

//avec le code initial ci-dessous, qui définit un tableau de chaînes de caractères.
// Liste de nos pages web
var contact = ["http://Facebook.fr/compagnie", "http://Twitter/compagnie", "http://Google+/compagnie"];

for (var i = 0; i < contact.length; i++) {
  var newLine = document.createElement('li');
  var newLink = document.createElement('a');
  var link = document.createTextNode(contact[i]);

  newLink.href ='contact[i]';

  newLink.appendChild(link);


  newLine.appendChild(newLink);
  document.querySelector("#sidebar div ul").appendChild(newLine);
}
// TODO : ajouter la liste de ces pages, dans la div "asides" Nous rejoindre

// Complétez ce fichier afin d'ajouter la liste des liens sur la page web.
// Vous devez utiliser le tableau  contact et chaque lien doit être cliquable.﻿﻿
//changez la taille au besoin



//Question 5

/*ajouter du code qui permet de modifier la couleur de la bordure des quatre éléments div
lorsque l'utilisateur appuie sur la touche S qui indique la grande section (rouge), H qui indique header
(jaune), F qui indique footer (vert) ,N qui indique nav (noir) , a aside en (bleu).
 */


// utiliser cette indication
/*
// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});
*/
/*
document.addEventListener("keypress", function (e) {
       console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));

});*/

document.addEventListener("keypress", function (e) {
       console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
        var monElt = "";
        var code = String.fromCharCode(e.charCode);
        switch(code){
            case 'h': document.querySelector("header").style.border = "2px solid yellow";
            break;
            case 's': document.querySelector("#content").style.border = "4px solid red"; break;
            case 'a': document.querySelector("aside").style.border = "4px solid blue";; break;
            case 'n': document.querySelector("nav").style.border = "4px solid black";; break;
            case 'f': document.querySelector("footer").style.border = "4px solid green";; break;
        }

});
