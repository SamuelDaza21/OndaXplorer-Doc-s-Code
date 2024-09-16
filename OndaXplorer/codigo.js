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

  document.addEventListener('click', showMainContent);
});



