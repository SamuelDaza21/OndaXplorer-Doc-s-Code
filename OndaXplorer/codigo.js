//comandos para el registro y la creacion de cuenta de OndaXplorer
// Selección de elementos
const loginCard = document.querySelector('.card-login');
const registerCard = document.querySelector('.card-register');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

// Mostrar la tarjeta de registro
showRegister.addEventListener('click', () => {
  loginCard.classList.remove('active');
  registerCard.classList.add('active');
});

// Mostrar la tarjeta de login
showLogin.addEventListener('click', () => {
  registerCard.classList.remove('active');
  loginCard.classList.add('active');
});

//PAGINAS

document.addEventListener('DOMContentLoaded', () => {
  const paginaregistro = document.querySelector('.paginaregistro');
  const paginaprincipal = document.querySelector('.paginaprincipal');

  function showMainContent() {
    paginaregistro.classList.add('hide');
    paginaprincipal.classList.add('show');
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      showMainContent();
    }
  });

  //document.addEventListener('click', showMainContent);
});

//Tarjetas del Inicio.
function toggleCards() {
  const wrapper = document.getElementById('cards-wrapper');
  const content = document.getElementById('content');
  const mainCard = document.getElementById('main-card');

  const wrapperVisibility = window.getComputedStyle(wrapper).visibility;

  if (wrapperVisibility === 'visible') {
      // Ocultar tarjetas y contenido
      wrapper.style.visibility = 'hidden';
      wrapper.style.opacity = '0';  // Para hacer una transición suave
      content.style.display = 'none';
      mainCard.style.display = 'block';
  } else {
      // Mostrar tarjetas
      wrapper.style.visibility = 'visible';
      wrapper.style.opacity = '1';  // Asegurar que sea visible con opacidad
      mainCard.style.display = 'none';
  }
}



function showContent(cardId) {
  const content = document.getElementById('content');
  const contentCard = document.getElementById(`content-${cardId}`);

  // Ocultar todas las tarjetas de contenido
  document.querySelectorAll('.content-card').forEach(card => card.style.display = 'none');

  // Mostrar la tarjeta de contenido seleccionada
  contentCard.style.display = 'block';
  content.style.display = 'flex';
}
