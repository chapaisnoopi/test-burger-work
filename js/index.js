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

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     button.onclick = () => menu.classList.toggle('show');
// } else {
//     button.onmouseover = () => menu.classList.add('show');
//     button.onclick = () => menu.classList.toggle('show');
//     menu.onmouseleave = () => menu.classList.remove('show');
// }

// if ('ontouchstart' in document.documentElement) {
//     button.onclick = () => menu.classList.toggle('show');
//     menu.onmouseleave = () => menu.classList.remove('show');
// } else {
//     button.onmouseover = () => menu.classList.add('show');
//     button.onclick = () => menu.classList.toggle('show');
//     menu.onmouseleave = () => menu.classList.remove('show');
// }

button.addEventListener('click', () => {
    menu.classList.toggle('show');
});

document.addEventListener('click', (event) => {
       event.target.classList.contains('a')
    || event.target.classList.contains('button')
    || event.target.parentNode.classList
    && event.target.parentNode.classList.contains('button')
    || menu.classList.remove('show');
});


