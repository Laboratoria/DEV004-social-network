import { onNavigate } from "../main.js";
export const register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenido al Registro';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
