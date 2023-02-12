const iconMenuMobile = document.querySelector(".icon-menu-mobile");
const menuContainer = document.querySelector(".menu-container");

iconMenuMobile.addEventListener("click", ()=> {
    menuContainer.classList.toggle("show-menuMobile");
});
