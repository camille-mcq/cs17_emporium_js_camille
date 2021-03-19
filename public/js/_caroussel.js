// Exporte tes variables
//Importe dans le MAIN

// Les images sont là (de 0 à 6)
let img = document.querySelectorAll("#cinq_section>.carousel>div");
// Les bouttons de direction
let btn = document.querySelectorAll("#cinq_section>div>button");

// Bouton 1
btn[0].addEventListener("click", () => {
    img[0].style.transform ='translateX(0%)'
    img[1].style.transform ='translateX(0%)'
    img[2].style.transform ='translateX(0%)'
    img[3].style.transform ='translateX(0%)'
    img[4].style.transform ='translateX(0%)'
    img[5].style.transform ='translateX(0%)'
    img[6].style.transform ='translateX(0%)'
});

// Bouton 2
btn[1].addEventListener("click", () => {
    img[0].style.transform ='translateX(-200%)'
    img[1].style.transform ='translateX(-200%)'
    img[2].style.transform ='translateX(-200%)'
    img[3].style.transform ='translateX(-200%)'
    img[4].style.transform ='translateX(-200%)'
    img[5].style.transform ='translateX(-200%)'
    img[6].style.transform ='translateX(-200%)'
});

//bouton 3
btn[2].addEventListener('click',()=>{
    img[0].style.transform ='translateX(-400%)'
    img[1].style.transform ='translateX(-400%)'
    img[2].style.transform ='translateX(-400%)'
    img[3].style.transform ='translateX(-400%)'
    img[4].style.transform ='translateX(-400%)'
    img[5].style.transform ='translateX(-400%)'
    img[6].style.transform ='translateX(-400%)'

});
btn[3].addEventListener('click',()=>{
    img[0].style.transform ='translateX(-600%)'
    img[1].style.transform ='translateX(-600%)'
    img[2].style.transform ='translateX(-600%)'
    img[3].style.transform ='translateX(-600%)'
    img[4].style.transform ='translateX(-600%)'
    img[5].style.transform ='translateX(-600%)'
    img[6].style.transform ='translateX(-600%)'

}); 

btn[4].addEventListener('click',()=>{
    img[0].style.transform ='translateX(-400%)'
    img[1].style.transform ='translateX(-400%)'
    img[2].style.transform ='translateX(-400%)'
    img[3].style.transform ='translateX(-400%)'
    img[4].style.transform ='translateX(-400%)'
    img[5].style.transform ='translateX(-400%)'
    img[6].style.transform ='translateX(-400%)'

}); 
btn[5].addEventListener('click',()=>{
    img[0].style.transform ='translateX(-600%)'
    img[1].style.transform ='translateX(-600%)'
    img[2].style.transform ='translateX(-600%)'
    img[3].style.transform ='translateX(-200%)'
    img[4].style.transform ='translateX(-400%)'
    img[5].style.transform ='translateX(-400%)'
    img[6].style.transform ='translateX(-400%)'

}); 

export {img, btn};