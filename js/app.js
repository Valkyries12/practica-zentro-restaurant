const MENU_ICON = document.querySelector(".menu-icon");
const NAV_BAR = document.querySelector(".nav__div--navbar");
MENU_ICON.addEventListener("click", function(){
    NAV_BAR.classList.toggle("visible");
});