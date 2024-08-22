document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "smallpreview") {
            thumbnailElement.className = "";
        } else {
            thumbnailElement.className = "smallpreview";
        }
      });
});

// utiliser [i] dans une boucle pour appliquer le fonctionnement à tous 
// les éléments de la liste de getElementByClassName
// ==> chercher alternative avec foreach