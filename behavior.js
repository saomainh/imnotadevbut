document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "smallpreview") {
            thumbnailElement.className = "";
        } else {
            thumbnailElement.className = "smallpreview";
        }
      });

      var button1 = document.getElementById("button1");
      button1.addEventListener("click", function() {
        alert('Hello!');
      });
});