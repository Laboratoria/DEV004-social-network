import { loginGoogle, logOut } from '../lib/autenticar';
import { onNavigate } from '../router/index';

// CREAR ELEMENTOS DEL MURO
export const Feed = () => {
  const HomeDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = 'Bienvenida al login';
  const header = document.createElement('header');
  const img = document.createElement('img');
  img.setAttribute('src', './img/bannerMaMaGenial.png');
  img.setAttribute('alt', 'Logo de la marca MaMá Genial');
  img.id = 'logoEncabezado';
  const buttonCerrarSesion = document.createElement('button');

  // buttonHome.textContent = "Regresar al Home";
  // buttonHome.addEventListener('click', () => onNavigate('/'));

  // BOTON CERRAR SESIÓN Y EVENTO (interacción)
  buttonCerrarSesion.textContent = 'Cerrar Sesión';
  // buttonLoginGoogle.addEventListener("click", () => onNavigate("/feed"));

  buttonCerrarSesion.addEventListener('click', () => {
    logOut().then((resp) => onNavigate('/'));
  });
  HomeDiv.append(h3, header, img, buttonCerrarSesion); // este lo comentamos al final y pusimos el return h3
  // HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
