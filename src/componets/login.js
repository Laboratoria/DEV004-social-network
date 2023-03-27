import { signInWithGoogle, signInWithPassword } from '../lib/authentication';
import { navigateTo } from '../router';

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
    <div id="wrong"></div>
    <div class='footerlog'<p>Reda©️</p> </div>
</div>
    <div class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p></p>
      </div>
    </div>
  </div>
  <div id="wrong"></div>
  </form>`;
  // Function to open modal
  const openModal = (message) => {
    div.querySelector('.modal').style.display = 'block';
    div.querySelector('.modal-content > p:nth-child(2)').textContent = message;
  };// cambiar el text contente por el inner para probar que pasa
  // Add event listeners to the login component
  // const wrongAnswerd = (stop) => {
  //   div.querySelector('.wrong').style.display = 'block';
  //   div.querySelector('.modal-content > p:nth-child(2)').innerHTML = stop;
  // };

  div.querySelector('.google').addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then(
        (useCredential) => {
          navigateTo('/feed');
          console.log(useCredential);
        },
        (error) => {
          openModal(error.message);
        },
      );
  });
  // para accionar el boton enviar
  div.querySelector('.btnEnviarLogin').addEventListener('click', (e) => {
    e.preventDefault();
    e.preventDefault();
    const username = div.querySelector('#username').value;
    const password = div.querySelector('#psw').value;
    signInWithPassword(username, password)
      .then(
        (useCredential) => {
          console.log(useCredential);
          navigateTo('/feed');
        },
        (error) => {
          console.log(error.message);
          console.log(error.code);
          if (error.code === 'auth/user-not-found') {
            const wrong = document.getElementById('wrong');
            wrong.innerHTML = ('&#10060 &#128064 Correo Invalido');//cambiar los alert por inner y no es equivalente al modal
          } else if (error.code === 'auth/wrong-password') {
            const wrong = document.getElementById('wrong');
            wrong.innerHTML = ('Contraseña Incorrecta');
          } else if (error.code) {
            const wrong = document.getElementById('wrong');
            wrong.innerHTML = ('Ups! Algo salio mal');
          }
        },
      );
  });

  div.querySelector('.close').addEventListener('click', (e) => {
    e.preventDefault();
    div.querySelector('.modal,').style.display = 'none';
  });

  // Return the div element
  return div;
};
