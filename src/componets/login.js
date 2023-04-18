import { signInWithGoogle, signInWithPassword } from '../lib/authentication';
import { navigateTo, showError } from '../router';

export const Login = () => {
  // Create a div element to hold the login component
  const div = document.createElement('div');
  div.innerHTML = `<form id="loginForm">
  <div class='contenedorMadre'>
    <div class='contenedorlogo'>
      <img src= 'https://i.ibb.co/bWGQN64/REDA-1.png' class='loginLogo' alt='Logo Reda' />
    </div>
    <h1>Únete a la red de cuidadores más grande de Latinoamérica…</h1>
    <div class="inputLogin">
      <label class='labelogin'  for="username"><b>Usuario</b></label>
      <input type="text" placeholder="Correo electrónico" name="username" id="username" required>
      <label class='labelogin'for="psw"><b>Contraseña</b></label>
      <input type="password" placeholder="Contraseña" name="psw" id="psw" required>
    </div>
    <div class="sendBtn">
      <button class="btnEnviarLogin">Enviar</button>
    </div>
    <div class="googleBtn">
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
      <a href="#" class="google btn"><i  class="fa fa-google fa-fw">
            </i> <img src= 'https://i.ibb.co/1nDpBf4/btn-google-signin-light-pressed-web.png'></a>
    </div>
    <div id="wrong">
    </div>
    <div class='footerlog'>
      <p>Reda©️</p>
    </div>
  </div>
  <div id="wrong"></div>
</form>`;

  div.querySelector('.google').addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then(
        (userCredential) => {
          navigateTo('/feed');
          const user = userCredential.user;
          console.log('esto es .user', user);
          console.log('esto es el correo del usuario', userCredential.user.email);
        },
      )
      .catch(
        (error) => {
          showError(error.code);
        },
      );
  });
  // para accionar el boton enviar
  div.querySelector('.btnEnviarLogin').addEventListener('click', (e) => {
    console.log('se hizo click en login');
    e.preventDefault();
    const username = div.querySelector('#username').value;
    const password = div.querySelector('#psw').value;
    signInWithPassword(username, password)
      .then(
        (userCredential) => {
          console.log('esto es userCredential', userCredential);
          navigateTo('/feed');
        },
      )
      .catch(
        (error) => {
          showError(error.code);
        },
      );
  });
  // Return the div element
  return div;
};
