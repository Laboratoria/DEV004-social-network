import { onNavigate } from '../router';
import logo from '../img/logo.png';
import { entrarconGoogle, iniciarSesion } from '../lib/firebase';

export const home = () => {
  /* <div id="loginDiv" class="loginContenedor">
      <img src="./img/logo.png"/>
      <div class="login-border">
        <h1>Bikefy</h1>
      </div>
  <p class='message'>¿Aún no tienes una cuenta? <a href='#' id='register'
  class='btn-register'>Registrarme </a></p>
      </div> */
  // crea contenedor principal
  const article = document.createElement('article');
  const div = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.textContent = 'Iniciar Sesión';
  h1.classList.add('inS');

  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonIngresar = document.createElement('button');
  buttonIngresar.textContent = 'Ingresar';
  buttonIngresar.addEventListener('click', () => {
    iniciarSesion(inputEmail.value, inputPass.value).then(() => {
      onNavigate('/wall');
    });
  });
  inputEmail.setAttribute('type', 'email');
  inputPass.setAttribute('type', 'password');
  inputEmail.placeholder = 'Correo';
  inputPass.placeholder = 'Contraseña';

  // contenedor principal para css
  const img = document.createElement('img');
  img.src = logo;
  img.id = 'prueba';
  article.id = 'arHome';
  div.appendChild(h1);

  // boton de google
  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Entrar con Google';
  buttonGoogle.addEventListener('click', () => {
    entrarconGoogle().then(() => {
      onNavigate('/wall');
    });
  });

  const textRegister = document.createElement('h5');
  const buttonRegister = document.createElement('button');
  textRegister.textContent = 'Todavía no tienes una cuenta ?';
  buttonRegister.textContent = 'Regístrate';

  // modifica propiedades de los elemento

  // añade evento a los botones
  buttonRegister.addEventListener('click', () => {
    // llama funcion navigate y pasa string con la ruta
    onNavigate('/register');
  });
  const divLogin = document.createElement('div');
  divLogin.append(textRegister, buttonRegister);

  divLogin.classList.add('divLogin');

  // suman elementos a contenedor madre
  article.append(img, div, inputEmail, inputPass, buttonIngresar, buttonGoogle, divLogin);
  // retorna contenedor madre
  return article;
};
