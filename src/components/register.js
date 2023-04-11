import { navigateTo } from '../router.js';
import { registerWithEmail } from '../helpers/accederCongmail.js';

export const Register = () => {
  const div = document.createElement('div');
  div.className = 'contenedor-registro';
  div.innerHTML = `
  <picture>
  <source media="(max-width: 600px)" srcset="assets/logoPrincipal.png">
  <img src="assets/iconoNavegador.png" alt="Descripción de la imagen" class="icono-register">
</picture>
    <p>Únete a nuestra comunidad de viajeros y comparte tus aventuras con el mundo. ¡Viaja sin límites!</p>
    <form id="registerForm" class="register-Form">
    <h1>Registro</h1>
        <input type="text" placeholder="Correo electrónico" name="email" id="email" required>
        <div style="height: 16px;"></div>
        <input type="password" maxlength="16" minlength="6"  placeholder="Contraseña" name="psw" id="psw" required>
        <div style="height: 16px;"></div>
        <button  class="btn-registros">Crear</button>
        <div style="height: 32px;"></div>
        <a href="#" style="color: black;" class="btn"> ¿ Ya tienes una cuenta?<br><span style="color: #3e8ed0; ">Ingresa</span></a>
    </form>`;
  div.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/');
  });

  div.querySelector('#registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.psw.value;
    registerWithEmail(email, password)
      .then(() => {
        navigateTo('/home');
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  });

  return div;
};
