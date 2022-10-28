const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');
let showMenu = false;

menuButton.addEventListener('click', () => {
    showMenu = !showMenu;
    // navMenu.style = showMenu ? openAttr : closedAttr;
    navMenu.style.visibility = showMenu ? 'visible' : 'hidden';
    navMenu.style.top = showMenu ? '0' : '-100vh';
    window.pageYOffset > 87 && (header.style.transition = 'margin-top .3s ease-in-out')

    header.style.marginTop = showMenu ? '100px' : '0';

    // window.pageYOffset === 0 && window.scrollTo(0, 100);
})