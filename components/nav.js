fetch('nav.html')
.then(res => res.text())
.then(text => {
    let old_element = document.querySelector("script#replace_with_navbar");
    let new_element = document.createElement("div");
    new_element.innerHTML = text;
    old_element.parentNode.replaceChild(new_element,old_element);
})