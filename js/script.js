document.addEventListener("DOMContentLoaded", function () {
  // Nombre éléments
  const nombreElements = document.getElementById("nombreElements");

  // Texte

  const textElement = document.getElementById("textElement");

  // Boutons

  const btAjoutTexte = document.getElementById("ajouterTexte");
  btAjoutTexte.addEventListener("click", ajouterTextClick);

  const container = document.getElementById("container");

  const btAjout = document.getElementById("ajouterElement");
  btAjout.addEventListener("click", ajouterElementClick);

  const btSupprimer = document.getElementById("supprimerElement");
  btSupprimer.addEventListener("click", supprimerElementClick);
  btSupprimer.disabled = true;

  let elementSelectionne = null;



  
});


