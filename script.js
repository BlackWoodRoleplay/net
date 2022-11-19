// Scroll Reveal
window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
});

// Página Classes

function show(id) {
        if (document.getElementById(id).style.display !== "none") {
          document.getElementById(id).style.display = "none";
          return;
        }
        Array.from(document.getElementsByClassName("hidden")).forEach(
          div => (div.style.display = "none")
        );
        document.getElementById(id).style.display = "block";
}
