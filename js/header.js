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
    showMenu ? header.style.transition = 'margin-top .3s ease-in-out' : header.style.transition = 'none';

    window.pageYOffset < 26 && (header.style.marginTop = showMenu ? '155px' : '0');

    !showMenu && (header.style.marginTop = '0');
    }
}

menuButton.addEventListener('click', showOrHide);
navMenu.addEventListener('click', showOrHide);

window.addEventListener('scroll', () => {
    if (window.innerWidth >= 760 && showMenu) {
        header.style.marginTop = '0px';
        showMenu = false;
    }
})

// window.addEventListener('scroll', () => {
//     let offset = window.pageYOffset;
//     console.log(window.pageYOffset);
//     console.log(height)

//     if (offset < 150) {
//         changeColorFunc('rgb(89, 255, 209)')
//         console.log('Första')
//     }
//     else if (offset > 150 && offset < height) {
//         changeColorFunc('rgb(55, 18, 202)')
//         console.log('andra')
//     }

//     else if (offset > height && offset < height * 2) {
//         changeColorFunc('rgb(89, 255, 209)')
//     }
//     else if (offset > height * 2 && offset < height *3) {
//         changeColorFunc('rgb(55, 18, 202)')
//         console.log('tredje')
//     }
//     else if (offset > height * 3) {
//         changeColorFunc('rgb(89, 255, 209)')
//     }


//     // if (offset > height) {
//     //     buttonSpans.forEach(span => {
//     //         span.style.backgroundColor = 'white'
//     //         console.log(span)
//     // })
//     // }
// })