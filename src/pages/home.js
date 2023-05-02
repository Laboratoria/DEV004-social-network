import { onNavigate } from '../router';
import logo from '../img/logo.png';
import { entrarconGoogle } from '../lib/firebase';

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
  const buttonRegister = document.createElement('button');

  const img = document.createElement('img');
  const h1 = document.createElement('h1');
  img.src = logo;
  img.id = 'prueba';
  h1.textContent = 'Bikefy';
  div.appendChild(h1);
  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Entrar con Google';
  buttonGoogle.addEventListener('click', () => {
    entrarconGoogle().then(() => {
      onNavigate('/wall');
    });
  });

  // modifica propiedades de los elemento
  buttonRegister.textContent = 'Ir a register';

  // añade evento a los botones
  buttonRegister.addEventListener('click', () => {
    // llama funcion navigate y pasa string con la ruta
    onNavigate('/register');
  });

  // suman elementos a contenedor madre
  article.append(img, div, buttonRegister, buttonGoogle);
  // retorna contenedor madre
  return article;
};
