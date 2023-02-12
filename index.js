const iconMenuMobile = document.querySelector(".menu-container-icon");
const links = document.querySelector(".menu-container-links");
const iconCloseMobile = document.querySelector(".menu-closeMobile");


iconMenuMobile.addEventListener("click", ()=> {
    links.classList.toggle("mostrar");
});

iconCloseMobile.addEventListener("click", ()=> {
    links.classList.toggle("mostrar");
});