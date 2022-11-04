const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');
const body = document.body;
const buttonSpans = Array.from(document.querySelector('.menu-button').children);


const height = window.innerHeight;
let showMenu = false;

const changeColorFunc = (color) => {
    buttonSpans.forEach(span => {
        span.style.backgroundColor = color;
    })
}

const showOrHide = () => {
    if (window.innerWidth < 760) {
    showMenu = !showMenu;
    navMenu.style.visibility = showMenu ? 'visible' : 'hidden';
    navMenu.style.top = showMenu ? '0' : '-155px';
    header.style.transition = showMenu ?'margin-top .3s ease-in-out' : 'none';
    // showMenu ? header.style.transition = 'margin-top .3s ease-in-out' : header.style.transition = 'none';

    window.pageYOffset < 26 && (header.style.marginTop = showMenu ? '155px' : '0');

    !showMenu && (header.style.marginTop = '0');
    }
}

menuButton.addEventListener('click', showOrHide);
navMenu.addEventListener('click', showOrHide);

window.addEventListener('scroll', () => {
    console.log('Scroll')
    if (window.innerWidth >= 760 && showMenu) {
        header.style.marginTop = '0px';
        showMenu = false;
    }
    if (pageYOffset > 200 && window.innerWidth >= 760) {
        navMenu.classList.add('fake-sticky')
        header.style.marginTop = '64px';
    }
    else if (pageYOffset <= 200 && window.innerWidth >= 760) {
        navMenu.classList.remove('fake-sticky');
        header.style.marginTop = '0'
    }
})

window.addEventListener('resize', () => {
    // Om fönstret är bredare än 760 så lägg till visible osv
    if (window.innerWidth >= 760 ) {
        navMenu.style.transition = 'none'
        navMenu.style.visibility = 'visible'
        header.style.marginTop = '0'
        console.log('fdsafdsa')

    }
    // Är det mindre kolla mot showmenu-boolen
})