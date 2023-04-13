import { navigateTo } from '../router';
import { signInWithGoogle, signInWithPassword, } from '../helpers/accederCongmail';

export const Login = () => {
  // Create a div element to hold the login component
  document.body.classList.add('others-background');
  document.body.classList.remove('home-background');
  const div = document.createElement('div');
  div.className = 'contenedor-login';
  div.innerHTML = `
  <picture>
  <source media="(max-width: 600px)" srcset="assets/logo.png">
  <img src="assets/logo1.png" alt="Descripción de la imagen" class="logoForm">
  </picture>
  <form id="loginForm" class="loginForm">
  <button class="google-btn">
  <div class="contenido-google">
  <span>
  <img class="icono-google" src="assets/google.png">
  </span>
  <p style="color: black;"class="texto-google">Continuar con Google</p>
  </div>
  </button>
  <p>o</p>
  <input type="email" id="username" name="username" placeholder="Correo electrónico " required>
  <div style="height: 16px;"></div>
  <input type="password" id="password" name="password" placeholder="Contraseña" required>
  <div style="height: 32px;"></div>
  <button class="btn-registros">Iniciar sesión</button>
  <div style="height: 16px;"></div>
  <div class="col">
  <div>
  <a href="#" class="btn" >¿Olvidaste tu contraseña ? <span class="olvidaste-contraseña-btn" style="color: #66DA5F;">Recuperala</span></a>
  </div>
  <div style="height: 16px;"></div>
  <div>
  <a href="#" class="signup-btn">¿No tienes una cuenta? <span  style="color: #66DA5F;">Registrate</span></a>
  </div>
  <div style="height: 16px;"></div>
  </div>
  </form>
  <div class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>
</div>`;

  // Function to open modal
  const openModal = (message) => {
    div.querySelector('.modal').style.display = 'block';
    div.querySelector('.modal-content > p:nth-child(2)').textContent = message;
    div.querySelector('.modal-content > p:nth-child(2)').style.color = 'black';
  };
  // funcion para ocultar el modal
  div.querySelector('.close').addEventListener('click', (e) => {
    e.preventDefault();
    div.querySelector('.modal').style.display = 'none';
  });

  // Add event listeners to the login component

  div.querySelector('#loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = div.querySelector('#username').value;
    const password = div.querySelector('#password').value;
    signInWithPassword(username, password).then(
      (useCredential) => {
        navigateTo('/home');
      },
      (error) => {
        openModal(error.message);
      },
    );
  });

  div.querySelector('.google-btn').addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle().then(
      (useCredential) => {
        navigateTo('/home');
      },
      (error) => {
        openModal(error.message);
      },
    );
  });
  div.querySelector('.signup-btn').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/register');
  });
  div.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/restablecer');
  });

  // Return the div element
  return div;
};
