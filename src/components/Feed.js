import { logOut, crearPost, refPost } from '../lib/autenticar';
import { onNavigate } from '../router/index';
import { onSnapshot } from '@firebase/firestore';


// CREAR ELEMENTOS DEL MURO
export const Feed = () => {
  const HomeDiv = document.createElement('div');
  const header = document.createElement('header');
  header.id = 'encabezadoFeed';
  const img = document.createElement('img');
  img.setAttribute('src', './img/bannerM.png');
  img.setAttribute('alt', 'Banner Mamá Genial');
  img.id = 'banner';
  header.appendChild(img);
  //HomeDiv.appendChild(header);
  const main = document.createElement('main');
  main.id = 'muro';
  const inputFeed = document.createElement('input');
  inputFeed.id = 'inputComentarios';
  inputFeed.placeholder = '¿Cómo te sientes hoy?';
  const buttonPublicar = document.createElement('button');
  buttonPublicar.id = 'publicar';
  buttonPublicar.textContent = 'Publicar';
  buttonPublicar.addEventListener('click', () => {
  crearPost(inputFeed.value)
  });
  main.append(inputFeed, buttonPublicar);
  onSnapshot(refPost(), (querySnapshot) =>{
    const articlePost = document.createElement('article')
querySnapshot.forEach((post)=>{
  console.log(post.data().email, post.data().comentario)
  const p = document.createElement('p')
  p.textContent = post.data().comentario
  const strong = document.createElement('strong')
  strong.textContent = post.data().email
  articlePost.append(p, strong)
  HomeDiv.appendChild(articlePost)
})
  })
  const nav = document.createElement('nav')
  const buttonCerrarSesion = document.createElement('button');
  buttonCerrarSesion.id = 'cerrarSesion';
  // BOTON CERRAR SESIÓN Y EVENTO (interacción)
  buttonCerrarSesion.textContent = 'Cerrar Sesión';
  buttonCerrarSesion.addEventListener('click', () => {
    logOut().then((resp) => onNavigate('/'));
  });
 nav.appendChild(buttonCerrarSesion)
HomeDiv.append(header, nav, main);

  //HomeDiv.append(img, inputFeed, buttonPublicar, buttonCerrarSesion); // este lo comentamos al final y pusimos el return h3

  // HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
