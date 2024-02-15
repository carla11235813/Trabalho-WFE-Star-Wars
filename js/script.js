navbar = document.querySelector(".navbar__lista");
btnHamburguer = document.querySelector(".hamburguer");

// evento menu hamburguer
btnHamburguer.addEventListener("click", () => {
    console.log("click")
    navbar.classList.toggle("active")
})