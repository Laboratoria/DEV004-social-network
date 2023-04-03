import { getAuth, signOut } from 'firebase/auth';
import { navigateTo } from '../router';

export const Home = () => {
  // Create a div element to hold the login component
  const div = document.createElement('div');
  div.innerHTML = `
  
  <h1>Bienvenido a wanderlust</h1>
  <button class="btnCerrarSesion">cerrar sesion</button>
  <div class="container">
  <form id="post-form">
    <textarea id="post-content" placeholder="¿Qué estás pensando?"></textarea>
    <button type="submit">Publicar</button>
  </form>
  <div id="post-list"></div>
</div>
  `;

  /* const postList = div.querySelector('#post-list'); */

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
  return div;
};
