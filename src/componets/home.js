import { navigateTo } from '../router';

export const home = () => {
  const divHome = document.createElement('div');
  const header = document.createElement('header');
  const square = document.createElement('div');
  const welcome = document.createElement('p');
  const img = document.createElement('img');

  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const footer = document.createElement('footer');
  buttonLogin.textContent = 'Iniciar sesiòn';
  buttonRegister.textContent = 'Regìstrate';
  welcome.textContent = 'Únete a la red de cuidadores más grande de Latinoamérica…';
  img.setAttribute('id', 'logo');
  img.setAttribute('src', 'https://i.ibb.co/bWGQN64/REDA-1.png');
  welcome.setAttribute('class', 'welcome');
  header.setAttribute('class', 'headerHome');
  footer.setAttribute('class', 'footerHome');
  buttonLogin.setAttribute('class', 'btnLogin');
  buttonRegister.setAttribute('class', 'btnRegister');
  divHome.appendChild(square);
  square.appendChild(header);
  square.appendChild(footer);
  square.appendChild(img);
  square.appendChild(welcome);
  square.appendChild(buttonLogin);
  square.appendChild(buttonRegister);
  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });
  return divHome;
};
