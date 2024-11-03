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

// Mostrar el contenido principal si es necesario
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      // Acción cuando se presiona "Enter" o "Espacio"
      console.log("Iniciar sesión o registro.");
    }
  });
});


//temporal cambio de pantalla
document.addEventListener('DOMContentLoaded', () => {
  // Función para manejar la navegación
  const navigateToPage = () => {
      const contenido = document.querySelector('.paginaregistro');
      
      // Añadir clase para la animación
      contenido.classList.add('slide-out');

      // Esperar a que termine la animación antes de redirigir
      setTimeout(() => {
          window.location.href = 'inicio.html'; // Cambia a la URL deseada
      }, 500); // Duración de la animación en milisegundos
  };

  // Evento para teclas específicas
  document.addEventListener('keydown', (event) => {
      if (event.key === ' ') { // Si se presiona la barra espaciadora
          event.preventDefault(); // Evitar el comportamiento por defecto
          navigateToPage();
      }
  });
});

//BACKEND

document.addEventListener("DOMContentLoaded", () => {
  // Formulario de registro
  document.querySelector(".card-register form").addEventListener("submit", async (e) => {
      e.preventDefault();

      const nombre = e.target.querySelector("input[name='nombre']").value;
      const correo = e.target.querySelector("input[name='correo']").value;
      const contrasena = e.target.querySelector("input[name='contrasena']").value;

      try {
          const response = await fetch('/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ nombre, correo, contrasena })
          });
          
          const message = await response.text();
          alert(message);
      } catch (error) {
          console.error("Error en el registro:", error);
      }
  });

  // Formulario de inicio de sesión
  document.querySelector(".card-login form").addEventListener("submit", async (e) => {
      e.preventDefault();

      const correo = e.target.querySelector("input[name='correo']").value;
      const contrasena = e.target.querySelector("input[name='contrasena']").value;

      try {
          const response = await fetch('/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ correo, contrasena })
          });

          const message = await response.text();
          if (response.ok) {
              alert("Inicio de sesión exitoso");
          } else {
              alert(message);
          }
      } catch (error) {
          console.error("Error en el inicio de sesión:", error);
      }
  });
});
