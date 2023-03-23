import { signInWithGoogle, signInWithPassword } from '../lib/authentication';
import { navigateTo } from '../router';

export const Login = () => {
  // Create a div element to hold the login component
  const div = document.createElement('div');
  div.innerHTML = `<form id="loginForm">
  <div class='container'>

    <div class='loginTitle'>
      <h1>Ingresa a Reda</h1>
    </div>

    <div class="imputLogin">
      <label  for="username"><b>Correo electrónico</b></label>
      <input type="text" placeholder="Correo electrónico" name="username" id="username" required>
    </div>
    
    <div>
    <label class="imputLogin" for="psw"><b>Contraseña</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
    </div>

   <div class="sendBtn">
    <button class="enviar btn">Enviar</button>
    </div>
    <div class="googleBtn">
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
      <a href="#" class="google btn"><i  class="fa fa-google fa-fw">
            </i> <img src= 'https://i.ibb.co/1nDpBf4/btn-google-signin-light-pressed-web.png'></a>
    </div>
</div>
</div>
</div>
    <div class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p></p>
      </div>
    </div>
  </form>`;
  // Function to open modal
  const openModal = (message) => {
    div.querySelector('.modal').style.display = 'block';
    div.querySelector('.modal-content > p:nth-child(2)').textContent = message;
  };

  // Add event listeners to the login component

  div.querySelector('.google').addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then(
        (useCredential) => {
          navigateTo('/home');
          console.log(useCredential);
        },
        (error) => {
          openModal(error.message);
        },
      );
  });
  // para accionar el boton enviar
  div.querySelector('.enviar').addEventListener('click', (e) => {
    e.preventDefault();
    e.preventDefault();
    const username = div.querySelector('#username').value;
    const password = div.querySelector('#psw').value;
    signInWithPassword(username, password)
      .then(
        (useCredential) => {
          console.log(useCredential);
          navigateTo('/home');
        },
        (error) => {
          openModal(error.message);
        },
      );
  });

  div.querySelector('.close').addEventListener('click', (e) => {
    e.preventDefault();
    div.querySelector('.modal').style.display = 'none';
  });

  // Return the div element
  return div;
};

// export const login = () => {
//   const HomeDiv = document.createElement('div');
//   HomeDiv.textContent = 'Bienvenida al login';
//   const buttonHome = document.createElement('button');
//   buttonHome.textContent = 'Regresar al Home';
//   buttonHome.addEventListener('click', () => {
//     navigateTo('/');
//   });
//   HomeDiv.appendChild(buttonHome);
//   return HomeDiv;
// };
