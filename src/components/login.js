import { onNavigate } from "../main.js";

export const login = () => {
  /* const homeDiv = `<h2>Inicia Sesión  </h2>
  <input type='email' id='email'  placeholder='Correo electrónico' />
  <input type='password' id='password' placeholder='Contraseña' />          
      <p id='alertLogin'></p>                  
      <button class='logInUser' id='logInUser'> Ingresar </button>`;*/
const homeDiv = document.createElement('section')
  homeDiv.textContent = 'Bienvenido al Registro';
  const buttonHome = document.createElement('button'); 
  
  const container = document.createElement('div');
  container.innerHTML = homeDiv;
  

  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
