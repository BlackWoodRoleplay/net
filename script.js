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
