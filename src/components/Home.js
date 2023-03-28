import { onNavigate } from '../router/index';

export const Home = () => {
  const HomeDiv = document.createElement('section');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia Sesión';
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
  h1.textContent = 'Para continuar, inicia sesión';
  const inputEmail = document.createElement('input');
  inputEmail.placeholder = 'Ingresa tu correo';
  inputEmail.setAttribute('type', 'email');
  const inputPassword = document.createElement('input');
  inputPassword.placeholder = 'Ingresa tu contraseña';
  inputPassword.setAttribute('type', 'password');
  /* img.setAttribute('alt', 'Logo de la marca MaMá Genial');
  img.id = 'logoEncabezado'; */
  article.append(h1, inputEmail, inputPassword, buttonLogin, buttonRegister);
  main.appendChild(article);
  HomeDiv.appendChild(main);
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => {
    if (inputEmail.value === '' || inputPassword.value === '') {
      swal({
        title: "Verifica tus datos?",
        text: "la contraseña debe ser mayo a 6",
        icon: "warning",
        dangerMode: true,
      });
    }else{
      console.log(inputEmail.value, inputPassword.value)
    }
  });
  return HomeDiv;
};
