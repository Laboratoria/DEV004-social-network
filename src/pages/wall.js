import { onSnapshot } from 'firebase/firestore';
import { onNavigate } from '../router';
import {
  createPost, q, eliminarPost, actulizarPost, signOutUser, auth
} from '../lib/firebase';

export const wall = () => {
  console.log(auth.currentUser);
  // div encabezado
  const headerWall = document.createElement('header');
  headerWall.className = 'header';
  // logo
  const logo = document.createElement('img');
  logo.className = 'logotop';
  logo.src = './img/logo.png';
  headerWall.appendChild(logo);
  // button logout
  const logout = document.createElement('button');
  logout.innerText = 'Cerrar Sesión';
  logout.className = 'logout';
  headerWall.appendChild(logout);
  logout.addEventListener('click', () => {
    signOutUser()
      .then(() => {
        onNavigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        return errorCode;
      });
  });

  // crea contenedor principal
  const wallContainer = document.createElement('div');
  // modifica propiedades de los elemento
  wallContainer.className = 'wall';
  const bg = document.createElement('div');
  bg.className = 'bgTop';
  wallContainer.append(bg, headerWall);

  // titulo de post
  const title = document.createElement('h2');
  title.innerHTML = 'Cual es tu ruta hoy ?';
  title.className = 'title';
  wallContainer.appendChild(title);

  // input de post
  const post = document.createElement('textarea');
  post.className = 'post';
  wallContainer.appendChild(post);

  // usuario pst
  const str = document.createElement('strong');
  // eslint-disable-next-line no-undef
  str.textContent = auth?.currentUser?.displayName;

  // Botón para publicar posts
  const btnPost = document.createElement('button');
  btnPost.innerHTML = 'Publicar';
  btnPost.className = 'btnPost';
  wallContainer.appendChild(btnPost);
  const postContainer = document.createElement('article');
  wallContainer.appendChild(postContainer);
  // Evento para publica post
  btnPost.addEventListener('click', () => {
    const valuePost = post.value;
    if (valuePost === '') {
      // eslint-disable-next-line no-alert
      alert('¡Olvidaste ingresar tu post!');
    } else if (createPost(valuePost)) {
      post.value = '';
    }
    return false;
  });
  onSnapshot(q, (arrayQuerySnapshot) => {
    postContainer.innerHTML = '';
    postContainer.className = 'postContainer';
    arrayQuerySnapshot.forEach((doc) => {
      // eslint-disable-next-line no-console
      console.log(doc.id.userName);
      const container = document.createElement('article');
      const inputEdit = document.createElement('input');
      inputEdit.style.display = 'none';
      const p = document.createElement('p');
      p.textContent = doc.data().post;
      const btnDelete = document.createElement('button');
      btnDelete.className = 'btnDelete';
      btnDelete.value = doc.id;
      btnDelete.textContent = 'Eliminar';
      const btnEdit = document.createElement('button');
      btnEdit.className = 'btnEdit';
      btnEdit.value = doc.id;
      btnEdit.textContent = 'Editar';
      const btnGuardar = document.createElement('button');
      btnGuardar.className = 'btnGuardar';
      btnGuardar.value = doc.id;
      btnGuardar.textContent = 'Guardar';
      btnGuardar.style.display = 'none';
      container.append(str, p, inputEdit, btnDelete, btnEdit, btnGuardar);
      container.className = 'postContainerP';
      postContainer.appendChild(container);
      btnEdit.addEventListener('click', () => {
        /// ocultar p
        p.style.display = 'none';
        // crear y mostrar un input
        inputEdit.style.display = 'block';
        btnGuardar.style.display = 'block';
        // input recibe valor de p
        inputEdit.value = doc.data().post;
        //
        console.log(doc.id, 'btnEditar');
      });
      btnGuardar.addEventListener('click', () => {
        actulizarPost(doc.id, { post: inputEdit.value }).then((resp) => {
          p.style.display = 'block';
          inputEdit.style.display = 'none';
          btnGuardar.style.display = 'none';
        });
      });

      // añadir evento al boton eliminar
      btnDelete.addEventListener('click', () => {
      // enviar el value del boton a la funcion para borror post
      // la funcion que borrra los post deleteDoc de firestore
        eliminarPost(doc.id);
      });
    });
  });

  // retorna el elemento
  return wallContainer;
};
