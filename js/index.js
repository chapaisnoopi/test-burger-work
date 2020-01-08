// const button = document.querySelector('.button');
// button.addEventListener('click', clicked);
// function clicked() {
//     document.querySelector('.menu').classList.toggle('show');
// }

const button = document.querySelector('.button');
const menu = document.querySelector('.menu');
// button.addEventListener('mouseover', () => menu.classList.add('show') );
// button.addEventListener('click', () => menu.classList.toggle('show') );
// menu.addEventListener('mouseleave', () => menu.classList.remove('show') );


// button.onmouseover = () => menu.classList.add('show');
// button.onclick = () => menu.classList.toggle('show');
// menu.onmouseleave = () => menu.classList.remove('show');

// if(window.matchMedia('(min-width: 700px)').matches){

// } else {

// }

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     button.onclick = () => menu.classList.toggle('show');
// } else {
//     button.onmouseover = () => menu.classList.add('show');
//     button.onclick = () => menu.classList.toggle('show');
//     menu.onmouseleave = () => menu.classList.remove('show');
// }

if ('ontouchstart' in document.documentElement) {
    button.onclick = () => menu.classList.toggle('show');
} else {
    button.onmouseover = () => menu.classList.add('show');
    button.onclick = () => menu.classList.toggle('show');
    menu.onmouseleave = () => menu.classList.remove('show');

}