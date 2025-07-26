function showMenu() {
  const menu = document.getElementById('hamburguer');
  menu.classList.toggle('show');
}

// Fecha ao clicar fora
document.addEventListener('click', function (event) {
  const menu = document.getElementById('hamburguer');
  const button = document.querySelector('button');

  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove('show');
  }
});
