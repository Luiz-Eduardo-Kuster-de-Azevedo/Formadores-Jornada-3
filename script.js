// Exemplo de interatividade simples com JavaScript
//document.addEventListener("DOMContentLoaded", function () {
   // const portfolioItems = document.querySelectorAll(".portfolio-item");
   // portfolioItems.forEach(item => {
       // item.addEventListener("mouseenter", function () {
          //  this.classList.add("hovered");
      //  });
     //   item.addEventListener("mouseleave", function () {
     //       this.classList.remove("hovered");
     //   });
   // });
//});
const buttons = document.querySelectorAll(".container-botoes button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const targetSection = event.target.textContent.toLowerCase();

    // Scroll suave para a seção
    document.querySelector("#" + targetSection).scrollIntoView({
      behavior: "smooth",
    });

    // Adicione um efeito de espera
    const loader = document.createElement("div");
    loader.classList.add("loader");
    document.body.appendChild(loader);

    setTimeout(() => {
      loader.parentNode.removeChild(loader);
    }, 1000);
  });
});

