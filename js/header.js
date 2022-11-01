const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');
const body = document.body;
let showMenu = false;

const showOrHide = () => {
    showMenu = !showMenu;
    navMenu.style.visibility = showMenu ? 'visible' : 'hidden';
    navMenu.style.top = showMenu ? '0' : '-155px';
    showMenu ? header.style.transition = 'margin-top .3s ease-in-out' : header.style.transition = 'none';

    window.pageYOffset < 26 && (header.style.marginTop = showMenu ? '155px' : '0');

    !showMenu && (header.style.marginTop = '0');
}

menuButton.addEventListener('click', showOrHide);

navMenu.addEventListener('click', showOrHide);