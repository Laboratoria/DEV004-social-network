import { getAuth, signOut } from 'firebase/auth';
import {
  collection, query, getDocs, addDoc,
} from 'firebase/firestore';
import { initFirebase } from '../helpers/firebase';
import { navigateTo } from '../router';

export const Home = () => {
  const div = document.createElement('div');
  div.className = 'muro';
  div.innerHTML = `
    <header class="header-muro">
      <img class="img-logo" src="assets/logoPrincipal.png">
      <h1>Wanderlust</h1>
      <img class="btnCerrarSesion" src="assets/logOutIcon.png" alt="Cerrar sesión">
    </header>
    <h2>Bienvenido a wanderlust</h2>
    <div class="container-post">
      <form id="post-form">
        <p>¿Cuál ha sido tu destino de viaje favorito hasta ahora y por qué lo recomendarías?</p>
        <textarea id="post-content" placeholder="Cuéntanos tus aventuras......"></textarea>
        <button type="submit">Publicar</button>
      </form>
      <div id="post-list"></div>
    </div>
  `;

  const postList = div.querySelector('#post-list');
  const { db } = initFirebase(); // obtener la referencia al objeto db

  div.querySelector('.btnCerrarSesion').addEventListener('click', (e) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigateTo('/');
        console.log('Sesión cerrada con éxito');
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const mostrarPublicaciones = (publicaciones) => {
    postList.innerHTML = '';

    publicaciones.forEach((publicacion) => {
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
      console.log(`https://ui-avatars.com/api/?name=${publicacion.autor}&size=96&background=007bff&color=fff&rounded=true`);
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
      autorPhotoURL: user.photoURL,
      descripcion: postContent,
      autor: user.displayName,
      fecha_creacion: new Date(),
    };

    // agregar la publicación a la base de datos
    try {
      const docRef = await addDoc(collection(db, 'publicaciones'), post);
      console.log('Publicación agregada con ID:', docRef.id);
    } catch (e) {
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
