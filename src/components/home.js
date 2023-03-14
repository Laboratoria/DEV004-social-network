// import { onNavigate } from '../onNavigate';
// import { onNavigate } from '../main';

export const home = (onNavigate) => {
  //* Aqui estamos creando lo que va en HTML.
  const homeSection = document.createElement('section');
  const welcomeHeader = document.createElement('h1');
  const coverImg = document.createElement('img');
  const loginButton = document.createElement('button');
  const signInButton = document.createElement('button');
  const ImgLove = document.createElement('img');
  //* Asignando atributos para todos los elementos creados.
  homeSection.setAttribute('id', 'homeSection');

  welcomeHeader.innerHTML = 'Bienvenido';

  coverImg.setAttribute('id', 'LogoPetropolis');
  coverImg.setAttribute('src', './Img/LogoPetropolisSF.png');
  coverImg.setAttribute('alt', 'LogoPetropolis');
  coverImg.classList.add('cover-img');

  loginButton.setAttribute('id', 'loginButton');
  loginButton.textContent = 'Iniciar Sesión';

  signInButton.setAttribute('id', 'signInButton');
  signInButton.textContent = 'Registrarse';
  ImgLove.setAttribute('id', 'ImgLove');
  ImgLove.setAttribute('src', './Img/AM LOS ANIMALES.png');
  ImgLove.setAttribute('alt', 'ImgLove');
  //* Agregando todo a la sección de homeSection
  homeSection.appendChild(welcomeHeader);
  homeSection.appendChild(coverImg);
  homeSection.appendChild(loginButton);
  homeSection.appendChild(signInButton);
  homeSection.appendChild(ImgLove);

  //* Asignando un evento a los botones Iniciar Sesión y Registrarse
  loginButton.addEventListener('click', () => onNavigate('/login'));
  signInButton.addEventListener('click', () => onNavigate('/register'));

  return homeSection;
};
