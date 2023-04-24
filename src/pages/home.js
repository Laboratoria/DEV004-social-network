import { onNavigate } from '../router';
import { entrarConGoogle } from '../firebaseConfig';
export const home = () => {
  // crea contenedor principal
  const article = document.createElement('article');
  article.setAttribute('id','principal');
  const body = document.createElement('body');
  body.setAttribute('id', 'container'); // agregamos id al body
  const h1 = document.createElement('h1');
  h1.textContent = 'Bienvenidos a Friendly Pets!';
  h1.classList.add('Bienvenidos');
  const img = document.createElement('img');
  img.src = 'imagenes/logo.png';
  img.classList.add('logo'); // crea la clase logo
  const divAbout = document.createElement('div');
  divAbout.setAttribute('id', 'aboutContainer'); // se crea el atributo id
  const p = document.createElement('p');
  p.textContent =
    'Cómo amantes de los animales quisimos crear una app diseñada especialmente para ayudarte a encontrar la pareja perfecta para tu amigo peludo. Imagina a tu mascota feliz y enamorado! Que adorable! Registrate hoy y unete a nuestra comunidad de mascotas y sus adorables amigos.Esperamos verte aquí y ver a tus mascotas encontrar el amor!';
  divAbout.appendChild(p);
  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('singIn');
  //buttonGoogle.textContent = 'Inicia sesión con Google';
  const divButton = document.createElement('div');
  divButton.setAttribute('id', 'img-btn');
  const imgGoogle = document.createElement('img');
  imgGoogle.src = 'imagenes/logo-google.png';
  imgGoogle.setAttribute('id', 'img-google'); //agregamos un id a la imagen
  divButton.append(imgGoogle); //ingresamos img dentro del div dentro del boton
  const spanButton = document.createElement('span'); // creamos un  span para el texto
  spanButton.textContent = 'Inicia sesión con Google';
  divButton.append(spanButton); // lo agregamos al div dentro del boton
  buttonGoogle.append(divButton); // el div lo ponemos dentro del botn
  body.append(h1, img, divAbout, buttonGoogle);
  article.append(body);
  buttonGoogle.addEventListener('click', () => {
    entrarConGoogle().then(() => {
      onNavigate('/register');
    });
  });
  return article;
};