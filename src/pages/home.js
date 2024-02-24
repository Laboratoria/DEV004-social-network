import { onNavigate } from '../router';
import logo from '../img/logo.png';
import { entrarconGoogle, iniciarSesion } from '../lib/firebase';

export const home = () => {
  // crea contenedor principal
  const article = document.createElement('article');
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = 'Tu App de Rutas';
  const h1 = document.createElement('h1');
  h1.textContent = 'Iniciar Sesión';
  h1.classList.add('inS');

  const inputEmail = document.createElement('input');
  inputEmail.className = 'inEmail';
  const inputPass = document.createElement('input');
  inputPass.className = 'inPass';
  const buttonIngresar = document.createElement('button');
  buttonIngresar.className = 'btnIngresar';
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
  const divIn = document.createElement('div');
  divIn.append(inputEmail, inputPass, buttonIngresar);
  divIn.classList.add('divIn');
  // contenedor principal para css
  const img = document.createElement('img');
  img.src = logo;
  img.id = 'prueba';
  article.id = 'arHome';
  div.appendChild(h1);

  // boton de google
  // const buttonGoogle = document.createElement('button');
  // buttonGoogle.textContent = 'Entrar con Google';
  const bGoogle = `<button id='googleButton'>
  <img width='25' src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' /> Ingresa con Google
</button>`;

  const buttonGoogle = document.createElement('div');
  buttonGoogle.innerHTML = bGoogle;
  buttonGoogle.className = 'btn-G';
  buttonGoogle.addEventListener('click', () => {
    entrarconGoogle().then(() => {
      onNavigate('/wall');
    });
  });

  const textRegister = document.createElement('h5');
  textRegister.className = 'regisText';
  const buttonRegister = document.createElement('div');
  buttonRegister.className = 'regisBtn';
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
  article.append(img, h3, div, divIn, buttonGoogle, divLogin);
  // retorna contenedor madre
  return article;
};
