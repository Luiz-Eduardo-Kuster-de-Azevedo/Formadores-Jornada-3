// Exemplo de interatividade simples com JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.classList.add("hovered");
        });
        item.addEventListener("mouseleave", function () {
            this.classList.remove("hovered");
        });
    });
});
