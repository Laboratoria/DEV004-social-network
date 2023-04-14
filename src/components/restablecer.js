/* eslint-disable no-unused-vars */
import { mostrarVentanaRecuperarContraseña } from '../helpers/accederCongmail.js';
import { navigateTo } from '../router.js';

export const RecuperarContrasena = () => {
  document.body.classList.add('others-background');
  document.body.classList.remove('home-background');
  const div = document.createElement('div');
  div.className = 'contenedor-restablecer-contraseña';
  div.innerHTML = `
    <picture>
      <source media="(max-width: 600px)" srcset="assets/logoPrincipal.png">
      <img src="assets/iconoNavegador.png" alt="Descripción de la imagen" class="icono-register">
    </picture>
    <p>¡No te preocupes, te ayudaremos a recuperar tu contraseña!</p>
    <form id="recuperar-Form" class="register-Form">
      <h2>Recuperar contraseña</h2>
      <input type="email" placeholder="Correo electrónico" name="email" id="email" required>
      <div style="height: 16px;"></div>
      <button class="btn-registros">Enviar</button>
      <div style="height: 32px;"></div>
      <a href="#" style="color: black;" class="btn">
        ¿Ya tienes una cuenta?<br>
        <span style="color: #3e8ed0;">Ingresa</span>
      </a>
    </form>
    <div class="mensaje-envio-container modal">
    <div id="contenedor-msj" class="modal-content">
      <span class="close">&times;</span>
      <div id="mensaje-envio"></div>
    <button id="volver-inicio" class="btn-registros">Volver a la página de inicio</button>
    </div>
  </div>
   `;
  div.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/');
  });

  const formulario = div.querySelector('#recuperar-Form');
  const mensajeEnvio = div.querySelector('#mensaje-envio');
  const mensajeEnvioContainer = div.querySelector('.mensaje-envio-container');
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    mostrarVentanaRecuperarContraseña(email)
      .then(() => {
        // mostrar mensaje de éxito
        mensajeEnvio.textContent = 'Correo enviado correctamente, revise su bandeja de gmail';
        mensajeEnvioContainer.style.display = 'flex';
      })
      .catch((error) => {
        mensajeEnvio.textContent = 'Error al enviar el correo. Por favor, intenta de nuevo más tarde.';
        mensajeEnvioContainer.style.display = 'flex';
      });
  });

  // Función para mostrar el modal de recuperación de contraseña
  const mostrarModalRecuperarContraseña = (mensaje) => {
    mensajeEnvio.textContent = mensaje;
    mensajeEnvioContainer.style.display = 'flex';
  };

  // función para ocultar el modal de recuperación de contraseña
  div.querySelector('.close').addEventListener('click', (e) => {
    e.preventDefault();
    mensajeEnvioContainer.style.display = 'none';
  });

  const botonVolverInicio = div.querySelector('#volver-inicio');
  botonVolverInicio.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/');
  });
  return div;
};
