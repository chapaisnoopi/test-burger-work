const button = document.querySelector('button');
button.addEventListener('click', clicked);
let i = 'hide';
function clicked() {
    if (i === 'hide') {
        document.querySelector('.menu').classList.add( 'show' );
        document.querySelector('.menu').classList.remove( 'hide' );
        i = 'show';
    } else {
        document.querySelector('.menu').classList.add( 'hide' );
        document.querySelector('.menu').classList.remove( 'show' );
        i = 'hide';
    }
}