import { onNavigate } from '../router';
import { entrarConGoogle } from '../firebaseConfig';

export const home = () => {
  // crea contenedor principal
  divAbout.appendChild(p);

  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('singIn');
  // buttonGoogle.textContent = 'Inicia sesión con Google';

  const divButton = document.createElement('div');
  divButton.setAttribute('id', 'img-btn');
  const imgGoogle = document.createElement('img');
  imgGoogle.src = 'imagenes/logo-google.png';
  imgGoogle.setAttribute('id', 'img-google'); // agregamos un id a la imagen
  divButton.append(imgGoogle); // ingresamos img dentro del div dentro del boton

  const spanButton = document.createElement('span'); // creamos un  span para el texto
  spanButton.textContent = 'Inicia sesión con Google';
  divButton.append(spanButton); // lo agregamos al div dentro del boton

  buttonGoogle.append(divButton); // el div lo ponemos dentro del botn

  body.append(h1, img, divAbout, buttonGoogle);

  article.append(body);
  buttonGoogle.addEventListener('click', () => {
    entrarConGoogle().then(() => {
    });
  });
  return article;
};
