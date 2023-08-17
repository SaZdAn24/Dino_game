const dino = document.getElementById("dino");
const kaktus = document.getElementById("caktus");

document.addEventListener("keydown", function (event) {
    jump()   
});

function jump () {
     if (dino.classList != "jump"){
        dino.classList.add("jump")
     }
     setTimeout (function () {
        dino.classList.remove("jump") 
     }, 300)
}
let isAlive = setInterval (function () {
    let dinoTop = parseInt (window.getComputedStyle(dino).getPropertyValue("top"));
    let caktusLeft = parseInt (window.getComputedStyle(cactus).getPropertyValue("left"));
        if (caktusLeft < 50 && caktusLeft > 0 && dinoTop >=40) {
            alert ("GAME OVER!!")
        }
})



