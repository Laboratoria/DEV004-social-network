import { navigateTo } from '../router';
import { signInWithFacebook, signInWithGoogle, signInWithPassword } from '../helpers/accederCongmail';

export const Login = () => {
  // Create a div element to hold the login component
  const div = document.createElement('div');
  div.className = 'contenedor-inicio-sesion';
  div.innerHTML = `
  <img src="assets/logo1.png" class="logoForm" alt="logo-Wanderlust">
  <form id="loginForm" class="loginForm">
  <button class="google-btn">
  <div class="contenido-google">
  <span>
  <img class="icono-google" src="assets/google.png">
  </span>
  <p class="texto-google">Continuar con Google</p>
  </div>
  </button>
  <p>o</p>
  <input type="text" id="username" name="username" placeholder="Correo electrónico " required>
  <div style="height: 16px;"></div>
  <input type="password" id="password" name="contraseña" placeholder="Password" required>
  <div style="height: 32px;"></div>
  <input type="submit"  class="login" value="Iniciar sesión">

  <div class="col">
  <a href="#" style="color:white" class="btn">¿Olvidaste tu contraseña ? <span><br>Recuperala</span></a>
  </div>
  <div class="col">
  <a href="#" style="color: white;" class="signup-btn">¿No tienes una cuenta? <span><br>Registrate</span></a>
  </div>
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

  /* div.querySelector('.fb-btn').addEventListener('click', (e) => {
    e.preventDefault();
    signInWithFacebook().then(
      (useCredential) => {
        navigateTo('/home');
      },
      (error) => {
        openModal(error.message);
      },
    );
  }); */

  div.querySelector('.signup-btn').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/register');
  });

  // Return the div element
  return div;
};
