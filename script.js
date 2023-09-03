let menuVisible = false;
function mostrarOcultarMenu() {
  const navElement = document.getElementById("nav");
  if (menuVisible) {
    navElement.classList.remove("responsive");
    menuVisible = false;
  } else {
    navElement.classList.add("responsive");
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}