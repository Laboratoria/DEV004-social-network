import { navigateTo } from '../router';

export const home = () => {
  const headerHome = document.createElement('div');
  const square = document.createElement('div');
  const welcome = document.createElement('p');
  const reda = document.createElement('p');
  const img = document.createElement('img');
  const footerHome = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonRegister.textContent = 'Regístrate';
  reda.textContent = 'Reda©️';
  welcome.textContent = 'Únete a la red de cuidadores más grande de Latinoamérica…';
  img.setAttribute('class', 'logo');
  img.setAttribute('src', 'https://i.ibb.co/bWGQN64/REDA-1.png');
  welcome.setAttribute('class', 'welcome');
  reda.setAttribute('class', 'marca');
  square.setAttribute('class', 'square');
  headerHome.setAttribute('class', 'headerHome');
  footerHome.setAttribute('class', 'footerHome');
  buttonLogin.setAttribute('class', 'btnLogin');
  buttonRegister.setAttribute('class', 'btnRegister');
  square.appendChild(headerHome);
  headerHome.appendChild(img);
  square.appendChild(welcome);
  square.appendChild(buttonLogin);
  square.appendChild(buttonRegister);
  footerHome.appendChild(reda);
  square.appendChild(footerHome);
  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });
  return square;
};
