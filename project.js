const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
hamburger.addEventListener("click", () => {
    humberger.classList.toggle("active");
    navMenu.classList.toggle("active");        
}) 
document.addEventListener(".ul-items").forEach(n => n.addEventListener("click", () => {
    humberger.classList.remove("active");
    navMenu.classList.remove("active");
}));