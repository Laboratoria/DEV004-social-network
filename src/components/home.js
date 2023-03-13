import { onNavigate } from '../onNavigate';

export const home = () => {
  //* Aqui estamos creando lo que va en HTML.
  const homeSection = document.createElement('section');
  const welcomeHeader = document.createElement('h1');
  const coverImg = document.createElement('img');
  const loginButton = document.createElement('button');
  const signInButton = document.createElement('button');

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

  //* Agregando todo a la sección de homeSection
  homeSection.appendChild(welcomeHeader);
  homeSection.appendChild(coverImg);
  homeSection.appendChild(loginButton);
  homeSection.appendChild(signInButton);

  //* Asignando un evento a los botones Iniciar Sesión y Registrarse
  signInButton.addEventListener('click', () => onNavigate('/register'));
  loginButton.addEventListener('click', () => onNavigate('/login'));

  return homeSection;
};

// console.log(home());
// ? La función se esta ejecutando.
// const rootDiv = document.getElementById('root');
// rootDiv.appendChild(home());
