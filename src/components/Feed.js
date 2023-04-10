// import { loginGoogle } from '../lib/autenticar';
// import { onNavigate } from '../router/index';

export const Feed = () => {
  const HomeDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = 'Bienvenida MaMa Geniales';
  const buttonHome = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  buttonLoginGoogle.addEventListener('click', () => onNavigate('/feed'));

  //HomeDiv.append(h3,buttonHome, buttonLoginGoogle); este lo comentamos al final y pusimos el return h3
  //HomeDiv.appendChild(buttonLogin);

  return h3;
};
