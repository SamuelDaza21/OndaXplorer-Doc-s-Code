// Seleccionamos los elementos necesarios
const mainCard = document.getElementById('main-card');
const cardsWrapper = document.getElementById('cards-wrapper');
const cardItems = document.querySelectorAll('.card-item');
const contentCards = document.querySelectorAll('.content-card');

// Mostrar las tarjetas cuando se haga clic en el icono de inicio
mainCard.addEventListener('click', () => {
  cardsWrapper.classList.toggle('show');
  cardsWrapper.classList.toggle('hide');
  
  // Si las tarjetas están visibles, ocultamos el ícono de inicio
  if (cardsWrapper.classList.contains('show')) {
    mainCard.style.display = 'none';
  }
});

// Agregamos el evento a cada tarjeta para que al hacer clic muestre el contenido correspondiente
cardItems.forEach((card) => {
  card.addEventListener('click', () => {
    // Ocultamos todos los contenidos antes de mostrar el seleccionado
    contentCards.forEach((contentCard) => {
      contentCard.classList.remove('show');
    });

    // Mostramos el contenido correspondiente al hacer clic en una tarjeta
    const contentId = card.getAttribute('data-content');
    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('show');
  });
});
