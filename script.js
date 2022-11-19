// Scroll Reveal
window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
});



// Botão voltar ao topo



function animationScroll(){
  const halfWindow = window.innerHeight * 3.5;
  console.log(halfWindow);
  const scrollAnimation = document.querySelector('[data-anima="scroll"]');
  const topItem = scrollAnimation.getBoundingClientRect().top;

  const itemVisible = topItem - halfWindow < 0;
  if(itemVisible){
    scrollAnimation.classList.add("show-button");
  } else {
    scrollAnimation.classList.remove("show-button");
  };
        
};

window.addEventListener('scroll', animationScroll);



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
