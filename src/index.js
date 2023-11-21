import './style.css'

const btnMenu = document.getElementById('btn-menu')
const collapsableMenu = document.getElementById("collapsable-menu");
let clickFlag = true;

const submenu1 = document.getElementById("submenu-1");
const ul1 = document.getElementById('ul-1');
const submenu2 = document.getElementById("submenu-2");
const ul2 = document.getElementById('ul-2');
const submenu3 = document.getElementById("submenu-3");
const ul3 = document.getElementById('ul-3');

submenuEventListeners(submenu1, ul1);
submenuEventListeners(submenu2, ul2);
submenuEventListeners(submenu3, ul3);

// -----------------------------------------------------------------------------
// Shows/hides the main menu (click button)
// -----------------------------------------------------------------------------
btnMenu.addEventListener('click', () => {

    if (clickFlag) {
        collapsableMenu.removeAttribute("hidden");
        clickFlag = false;
    } else {
        collapsableMenu.setAttribute("hidden", true);
        clickFlag = true;
    }
})

// -----------------------------------------------------------------------------
// Shows/hides the submenus on mouse hover
// -----------------------------------------------------------------------------
function submenuEventListeners(submenuElement, ulElement) {
    submenuElement.addEventListener('mouseover', () => {
        ulElement.removeAttribute('hidden');
    })
    submenuElement.addEventListener('mouseout', () => {
        ulElement.setAttribute('hidden', true);
    })
}