import { onNavigate } from '../router/index';
import { loginUser } from '../lib/autenticar';

export const Home = () => {
  const HomeDiv = document.createElement('section');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia Sesión';
  buttonLoginGoogle.textContent = 'Continua con Google'
  const header = document.createElement('header');
  const img = document.createElement('img');
  img.setAttribute('src', './img/logo.png');
  img.setAttribute('alt', 'Logo de la marca MaMá Genial');
  img.id = 'logoEncabezado';
  header.appendChild(img);
  HomeDiv.appendChild(header);

  const main = document.createElement('main');
  const article = document.createElement('article');
  const h1 = document.createElement('h1');
  h1.textContent = 'Para Continuar, Inicia Sesión';
  /*const inputGoogle = document.createElement('input');
  inputGoogle.placeholder = 'Continua con Google';
  inputGoogle.setAttribute('type', 'email');*/
  buttonLoginGoogle.addEventListener('click', () => onNavigate('/feed'));
  //
  const inputEmail = document.createElement('input');
  inputEmail.placeholder = 'Ingresa tu correo';
  inputEmail.setAttribute('type', 'email');
  const inputPassword = document.createElement('input');
  inputPassword.placeholder = 'Ingresa tu contraseña';
  inputPassword.setAttribute('type', 'password');
  /* img.setAttribute('alt', 'Logo de la marca MaMá Genial');
  img.id = 'logoEncabezado'; */
  article.append(h1, buttonLoginGoogle, inputEmail, inputPassword, buttonLogin, buttonRegister);
  main.appendChild(article);
  HomeDiv.appendChild(main);
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => {
    if (inputEmail.value === '' || inputPassword.value === '') {
      swal({
        title: "¡Verifica tus datos!",
        text: "la contraseña debe ser mayor a 6 digitos",
        icon: "info",
        dangerMode: true,
      });
    }else{
      console.log(inputEmail.value, inputPassword.value)
      loginUser(inputEmail.value, inputPassword.value)
      .then((res) => { // then para promesa cumplida
        // enviarlo al muro
          console.log(res);
        })
        .catch((error) => { // para promesa fallida
          console.log(error.message);
          swal({
            title: "¡Usuario no registrado!",
            text: "Crea una cuenta",
            icon: "info",
            dangerMode: true,
          });
        });
    }
  });
  return HomeDiv;
};

