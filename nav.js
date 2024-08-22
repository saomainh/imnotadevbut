fetch('nav.html')
// récupère le contenu envoyé par l'URL (promise)
.then(res => res.text())
// quand la promise a été faite : extraire le texte du résultat (renvoie une autre promise)
.then(text => {
    let old_element = document.querySelector("script#replace_with_navbar");
    // créer variable old_element et mettre le contenu de ce qu'a trouvé document.queryScelector 
    // document.querySelector cherche le tag script qui a pour id replace_with_navbar
    let new_element = document.createElement("div");
    // ajouter une div dans le document et on la référence par new_element
    new_element.innerHTML = text;
    // dans la div créée, coller le texte récupéré dans nav.html
    old_element.parentNode.replaceChild(new_element,old_element);
    // parentNode = remonter d'un cran (nav) et remplacer l'enfant old_element par new_element
})

// chercher : promise, 