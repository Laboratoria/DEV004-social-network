import { navigateTo } from '../router.js';
import { registerWithEmail } from '../helpers/accederCongmail.js';

export const Register = () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <img class="iconoRegister" src="assets/logoPrincipal.png" alt="Icono-Wanderlust">
    <p>Únete a nuestra comunidad de viajeros y comparte tus aventuras con el mundo. ¡Viaja sin límites!</p>
    <form id="registerForm" class="registerForm">
    <h1>Registro</h1>
    <div class="bottom-container">
        <input type="text" placeholder="Correo electrónico" name="email" id="email" required>
        <input type="password" placeholder="Contraseña" name="psw" id="psw" required>
        <input type="submit" class="btn-register" value="Crear"/>
        <a href="#" style="color: black;" class="btn"> ¿ Ya tienes una cuenta?<br><span style="color: #3e8ed0; ">Ingresa</span></a>
      </div>   
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
