const button = document.querySelector('.button');
button.addEventListener('click', clicked);
function clicked() {
    document.querySelector('.menu').classList.toggle( 'show' );
}

// document.querySelector('.button').addEventListener('click', 
//     function () {
//         document.querySelector('.menu').classList.toggle( 'show' );
//     });

// if(window.matchMedia('(min-width: 700px)').matches){
//     document.querySelector('.menu').classList.remove( 'show' );
// }
