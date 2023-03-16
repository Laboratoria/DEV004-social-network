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
  welcome.textContent = 'Bienvenidos a Reda';
  img.setAttribute('id', 'logo');
  img.setAttribute('src','')
  welcome.setAttribute('id', 'welcome');
  header.setAttribute('class', 'header');
  footer.setAttribute('class', 'footer');
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
