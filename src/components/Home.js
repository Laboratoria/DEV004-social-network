import { onNavigate } from "../router/index";

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia Sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register')); 
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonLogin);
  const header = document.createElement('header');
  const img = document.createElement('img');
  img.setAttribute('src', './img/logo.png');
  img.setAttribute('alt', 'Logo de la marca MaMá Genial');
  img.id = 'logoEncabezado';
  header.appendChild(img);
  HomeDiv.appendChild(header);

  return HomeDiv;
};
