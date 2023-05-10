import { onNavigate } from '../router';
import { entrarConGoogle } from '../firebaseConfig';

export const home = () => {
  // crea contenedor principal
  const article = document.createElement('article');
  article.setAttribute('id', 'homeScreen');

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

  /* const t = document.createElement('t');
  t.textContent = 'Un poco de nosotros'; */

  const p = document.createElement('p');
  p.textContent = 'Cómo amantes de los animales quisimos crear una app diseñada especialmente para ayudarte a encontrar la pareja perfecta para tu amigo peludo. Imagina a tu mascota feliz y enamorado! Que adorable! Registrate hoy y unete a nuestra comunidad de mascotas y sus adorables amigos.Esperamos verte aquí y ver a tus mascotas encontrar el amor!';
  divAbout.appendChild(p);


  


  // ranking de mascotas
  const ranking =document.createElement("h1")
  ranking.textContent="Ranking de mascotas";
  ranking.classList.add("ranking");

  const perritos = document.createElement('h1');
  perritos.textContent = 'Perritos';
  perritos.classList.add('perritos');

  const patitas5 = document.createElement('img');
  patitas5.src = 'imagenes/patita5.png';
  patitas5.classList.add('patitas5');

  const gatos = document.createElement('h1');
  gatos.textContent = 'Gatitos';
  gatos.classList.add('gatos');

  const patitas4 = document.createElement('img');
  patitas4.src = 'imagenes/patita4.png';
  patitas4.classList.add('patitas4');

  const tortuga = document.createElement('h1');
  tortuga.textContent = 'Tortuga';
  tortuga.classList.add('tortuga');

  const patitas3 = document.createElement('img');
  patitas3.src = 'imagenes/patita3.png';
  patitas3.classList.add('patitas3');

  const erizo = document.createElement('h1');
  erizo.textContent = 'Erizo';
  erizo.classList.add('erizo');

  const patitas2 = document.createElement('img');
  patitas2.src = 'imagenes/patita2.png';
  patitas2.classList.add('patitas2');

  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList.add('singIn');


  const divButton = document.createElement('div');
  divButton.setAttribute('id', 'img-btn');

  const imgGoogle = document.createElement('img');
  imgGoogle.src = 'imagenes/logo-google.png';
  imgGoogle.setAttribute('id', 'img-google'); // agregamos un id a la imagen
  divButton.append(imgGoogle); // ingresamos img dentro del div dentro del boton

  const spanButton = document.createElement('span'); // creamos un  span para el texto
  spanButton.textContent = 'Inicia sesión con Google';
  divButton.append(spanButton); // lo agregamos al div dentro del boton

  buttonGoogle.append(divButton); // el div lo ponemos dentro del boton
  body.append(h1, img, divAbout, buttonGoogle);

  article.append(body);

  body.append(
    h1,
    img,
    divAbout,ranking,
    perritos,
    patitas5,
    gatos,
    patitas4,
    tortuga,
    patitas3,
    erizo,
    patitas2,
    buttonGoogle,
  );
  article.append(body);

  buttonGoogle.addEventListener('click', () => {
    entrarConGoogle().then(() => { // then nos permite loguearnos
      onNavigate('/wall');
    });
  });
  return article;
};
