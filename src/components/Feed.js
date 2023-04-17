import { loginGoogle, logOut } from '../lib/autenticar';
import { onNavigate } from '../router/index';

// CREAR ELEMENTOS DEL MURO
export const Feed = () => {
  const HomeDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = 'Bienvenida al login';
  const buttonHome = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');
  const buttonCerrarSesion = document.createElement('button');

  // buttonHome.textContent = "Regresar al Home";
  // buttonHome.addEventListener('click', () => onNavigate('/'));

  // BOTON CERRAR SESIÓN Y EVENTO (interacción)
  buttonCerrarSesion.textContent = 'Cerrar Sesión';
  // buttonLoginGoogle.addEventListener("click", () => onNavigate("/feed"));

  buttonCerrarSesion.addEventListener('click', () => {
    logOut().then((resp) => onNavigate('/'));
  });
  HomeDiv.append(h3, buttonCerrarSesion); // este lo comentamos al final y pusimos el return h3
  // HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
