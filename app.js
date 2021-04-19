const btnclick = document.getElementById("btn-icon");
const navbar = document.getElementById("nav");
let cont = 0;
btnclick.onclick = function () {
  if (cont == 0) {
    navbar.classList.add("show");
    cont = 1;
  } else if (cont == 1) {
    navbar.classList.remove("show");
    cont = 0;
  }
};

