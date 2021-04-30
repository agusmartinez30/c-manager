const btnclick = document.getElementById("btn-icon");
const navbar = document.querySelector('.navbar');

/* let s1 = 1;
let s2 = 2;
const Resul = s1 + s2;
console.log(Resul);
 */


let cont = 0;
btnclick.onclick = function () {
  if (cont == 0) {
    /* navbar.classList.add("show"); */
    navbar.classList.add("fondo-nav");
    console.log('ANDA');
    cont = 1;
  } else if (cont == 1) {
   /*  navbar.classList.remove("show"); */
    navbar.classList.remove("fondo-nav");
    cont = 0;
  }
};

// function Mostrarmodal(){
//   $("#exampleModal").modal();
// }

// var btn = document.getElementById('btn')
// let modal = document.querySelector('.modal')

//   elemento.addEventListener('click' , () => {
    
    
      
   
//   });

    
$(document).ready(function(){

  $('.card-img').hover(function(){
    $(this).find('.oculto').fadeIn();
    $(this).find('.img-hover').addClass('zoom');
  },function(){
      $('.oculto').fadeOut();
      $('.img-hover').removeClass('zoom');
  })

  })


document.querySelector('.btn-cerrar').addEventListener('click', () => {
    overlay.classList.remove('activo');
})

let cambiarModal = document.querySelectorAll('.modal-title');

cambiarModal.textContent = "Contactanos!";