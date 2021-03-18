// Black & White background
let button = document.querySelectorAll("nav button");


// Selection des h3 et body et nav
let h3 = document.querySelectorAll("h3");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
console.log(nav)
// Bouton blanc : [1], le bg devient normal + titre noir
button[1].addEventListener("click", () => {
    body.style = "background-color : white";
    h3[1].style = "color: black";
    h3[2].style = "color: black";
    nav.classList.remove("navbar-dark");
    nav.classList.add("navbar-light");
    
});
// Bouton noir : [2], le bg devient noir + titre blanc
button[2].addEventListener("click", () => {
    body.style = "background-color : gray";
    h3[1].style = "color: white";
    h3[2].style = "color: white";
    nav.style = "color: white";
    nav.classList.remove("navbar-light");
    nav.classList.add("navbar-dark");
});

export {button, h3, body, nav}