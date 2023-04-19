import { onNavigate } from '../router';
import { entrarConGoogle } from '../firebaseConfig';

export const home = () => {
  // crea contenedor principal
  const article = document.createElement('article');
  const body = document.createElement('body');

  const h1 = document.createElement('h1');
  h1.textContent = 'Bienvenidos a Friendly Pets!';

  const img = document.createElement('img');
  img.src = 'imagenes/logo-final (1).png';
  img.classList.add('logo'); // crea la clase logo
  body.append(h1, img);

  const divAbout = document.createElement('div');
  divAbout.setAttribute('id', 'aboutContainer'); // se crea el atributo id
  const p = document.createElement('p');
  p.textContent = 'Cómo amantes de los animales quisimos crear una app diseñada especialmente para ayudarte a encontrar la pareja perfecta para tu amigo peludo. Imagina a tu mascota feliz y enamorado! Que adorable! Registrate hoy y unete a nuestra comunidad de mascotas y sus adorables amigos.Esperamos verte aquí y ver a tus mascotas encontrar el amor!';
  divAbout.appendChild(p);

  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('singIn');
  buttonGoogle.textContent = 'Inicia sesión con Google';
  article.append(body, divAbout, buttonGoogle);
  buttonGoogle.addEventListener('click', () => {
    entrarConGoogle().then(() => {
      onNavigate('/wall');
    });
  });
  return article;
};
