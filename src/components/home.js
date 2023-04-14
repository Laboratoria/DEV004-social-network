import { getAuth, signOut } from 'firebase/auth';
import {
  collection, query, getDocs, addDoc,
} from 'firebase/firestore';
import { initFirebase } from '../helpers/firebase';
import { navigateTo } from '../router';

export const Home = () => {
  document.body.classList.add('home-background');
  document.body.classList.remove('others-background');
  const div = document.createElement('div');
  div.className = 'muro';
  div.innerHTML = `
    <header class="header-muro">
      <img class="img-logo" src="assets/logoPrincipal.png">
      <h1>Wanderlust</h1>
      <img class="btnCerrarSesion" src="assets/logOutIcon.png" alt="Cerrar sesión">
    </header>
    <h1>Bienvenido a wanderlust</h1>
    <div class="container-post">
      <form id="post-form">
        <p>¿Cuál ha sido tu destino de viaje favorito hasta ahora y por qué lo recomendarías?</p>
        <textarea id="post-content" placeholder="Cuéntanos tus aventuras......" required></textarea>
        <button type="submit">Publicar</button>
      </form>
      <div id="post-list"></div>
    </div>
  `;

  const postList = div.querySelector('#post-list');
  const { db } = initFirebase(); // obtener la referencia al objeto db

  // eslint-disable-next-line no-unused-vars
  div.querySelector('.btnCerrarSesion').addEventListener('click', (e) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigateTo('/');
        // eslint-disable-next-line no-console
        console.log('Sesión cerrada con éxito');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  });

  const mostrarPublicaciones = (publicaciones) => {
    postList.innerHTML = '';

    publicaciones.forEach((publicacion) => {
      // eslint-disable-next-line no-console
      console.log(publicacion);
      const postDiv = document.createElement('div');
      postDiv.className = 'post';
      postDiv.innerHTML = ` 
      <header class="post-header">
          <img class="post-author-photo" src="${publicacion.autorPhotoURL ? publicacion.autorPhotoURL : `https://ui-avatars.com/api/?name=${publicacion.autor}&size=96&background=007bff&color=fff&rounded=true`}" alt="Foto de perfil de ${publicacion.autor}">
          <p>Publicado por ${publicacion.autor} el ${publicacion.fecha_creacion.toDate().toLocaleString()}</p>
        </header>
        <p>${publicacion.descripcion}</p>
      `;
      postList.appendChild(postDiv);
    });
  };

  const obtenerPublicaciones = async () => {
    const q = query(collection(db, 'publicaciones'));
    const querySnapshot = await getDocs(q);
    const publicaciones = [];
    querySnapshot.forEach((doc) => {
      publicaciones.push({ id: doc.id, ...doc.data() });
    });
    return publicaciones;
  };

  obtenerPublicaciones().then((publicaciones) => {
    mostrarPublicaciones(publicaciones);
  });

  const postForm = div.querySelector('#post-form');

  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const postContent = postForm.querySelector('#post-content').value;
    const auth = getAuth();
    const user = auth.currentUser;
    const post = {
      autorPhotoURL: user.photoURL || `https://ui-avatars.com/api/?name=${user.email.split('@')[0]}&size=96&background=007bff&color=fff&rounded=true`,
      descripcion: postContent,
      autor: user.displayName || user.email.split('@')[0], // utilizar displayName si está definido, si no utilizar el nombre de usuario basado en el correo electrónico
      fecha_creacion: new Date(),
    };

    // agregar la publicación a la base de datos
    try {
      const docRef = await addDoc(collection(db, 'publicaciones'), post);
      // eslint-disable-next-line no-console
      console.log('Publicación agregada con ID:', docRef.id);
    // eslint-disable-next-line no-shadow
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error al agregar la publicación:', e);
    }

    // obtener y mostrar las publicaciones actualizadas
    const publicaciones = await obtenerPublicaciones();
    mostrarPublicaciones(publicaciones);

    // resetear el formulario
    postForm.reset();
  });

  return div;
};
