import { onSnapshot } from 'firebase/firestore';

import {
  savePublic,
  postData,
  getTimestamp,
  deletePost,
  updatePost,
} from '../lib/firestore';
import { signOff } from '../lib/authentication';
import { auth } from '../lib/firebaseConfig';

export const timeline = (onNavigate) => {
  //* Aqui estamos creando lo que va en HTML.
  const bodyHTML = document.createElement('body');
  const headerHTML = document.createElement('header');
  const timelineSection = document.createElement('main');
  const commentSection = document.createElement('div');
  const headerTitle = document.createElement('nav');
  const createPostSection = document.createElement('section');
  const profileImg = document.createElement('img');
  const inputContainer = document.createElement('form');
  const inputPost = document.createElement('textarea');
  const postButton = document.createElement('button');
  const homeIcon = document.createElement('img');
  const profileIcon = document.createElement('img');
  const logOutIcon = document.createElement('img');
  const footerHMTL = document.createElement('footer');

  //* Estamos asignandi atributos para todos los elementos creados.
  bodyHTML.setAttribute('id', 'bodyHTML');
  headerHTML.setAttribute('id', 'headerHTML');
  timelineSection.setAttribute('id', 'timelineSection');
  commentSection.setAttribute('id', 'commentSection');

  createPostSection.setAttribute('id', 'createPostSection');

  headerTitle.setAttribute('id', 'headerTitle');
  headerTitle.textContent = 'timeline';

  profileImg.setAttribute('id', 'profileImg');
  profileImg.setAttribute('src', '../Img/CircleLogo.png');

  inputContainer.setAttribute('id', 'inputContainer');

  inputPost.setAttribute('id', 'inputPost');
  inputPost.setAttribute('placeholder', 'Escribe tu mensaje');

  postButton.setAttribute('id', 'postButton');
  postButton.textContent = 'Publicar';

  homeIcon.setAttribute('id', 'homeIcon');
  homeIcon.setAttribute('src', '../Img/homeIcon.png');
  homeIcon.setAttribute('alt', 'Home Icon');

  profileIcon.setAttribute('id', 'profileIcon');
  profileIcon.setAttribute('src', '../Img/profileIcon.png');
  profileIcon.setAttribute('alt', 'Profile Icon');

  logOutIcon.setAttribute('id', 'logOutIcon');
  logOutIcon.setAttribute('src', '../Img/LogOutIcon.png');
  logOutIcon.setAttribute('alt', 'Log Out Icon');

  footerHMTL.setAttribute('id', 'footerHTML');

  //* Aqui estamos agregando todo a la sección de SignInPage
  bodyHTML.appendChild(headerHTML);
  headerHTML.appendChild(headerTitle);

  bodyHTML.appendChild(timelineSection);
  timelineSection.appendChild(createPostSection);
  timelineSection.appendChild(commentSection);

  createPostSection.appendChild(profileImg);
  createPostSection.appendChild(inputContainer);
  inputContainer.appendChild(inputPost);
  inputContainer.appendChild(postButton);

  bodyHTML.appendChild(footerHMTL);
  footerHMTL.appendChild(homeIcon);
  footerHMTL.appendChild(profileIcon);
  footerHMTL.appendChild(logOutIcon);

  inputContainer.addEventListener('submit', async (e) => {
    e.preventDefault(); // cancela el evento
    try {
      const name = auth.currentUser.displayName;
      await savePublic(inputPost.value, 0, name, getTimestamp());
      const post = document.createElement('p');
      // textContent devuelve o establece el contenido de texto de un elemento
      post.textContent = inputPost.value;
      commentSection.appendChild(post);
      inputContainer.reset();
    } catch (error) {
      console.log(error);
    }
  });

  postButton.addEventListener('click', async () => {});

  homeIcon.addEventListener('click', () => onNavigate('/'));
  profileIcon.addEventListener('click', () => onNavigate('/welcome'));

  logOutIcon.addEventListener('click', async () => {
    await signOff();
    onNavigate('/');
  });

  onSnapshot(postData(), (querySnapshot) => {
    commentSection.innerHTML = '';
    querySnapshot.forEach((docum) => {
      console.log(docum.data());
      const postSection = document.createElement('section');
      const pComent = document.createElement('p');
      const editBtn = document.createElement('button');
      const DeleteBtn = document.createElement('button');

      postSection.setAttribute('id', 'postSection');
      pComent.textContent = `${docum.data().name}: ${docum.data().publicacion}`;
      postSection.appendChild(pComent);

      editBtn.textContent = 'Editar';
      DeleteBtn.textContent = 'Eliminar';

      postSection.appendChild(editBtn);
      postSection.appendChild(DeleteBtn);
      commentSection.appendChild(postSection);
      DeleteBtn.addEventListener('click', () => {
        console.log(docum.id);
        // const docRef = doc(db, 'publication', docum.id);
        deletePost(docum.id)
          .then(() => {
            console.log('res');
          }).catch((err) => console.warn(err));
      });
      console.log(docum.id);
      // commentSection.append(pComent); //?Este es el original

      // editBtn.addEventListener('click', () => {
      //   const newPublication = prompt('Ingrese una nueva publicación:');
      //   const docRef = doc(db, 'publication', docum.id);
      //   updateDoc(docRef, {
      //     publicacion: newPublication,
      //   })
      //     .then(() => {
      //       console.log('res');
      //     }).catch((err) => console.warn(err));
      // });

      editBtn.addEventListener('click', () => {
        const editPub = document.createElement('input');
        editPub.value = docum.data().publicacion;
        pComent.replaceWith(editPub);

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Guardar';
        postSection.appendChild(saveBtn);

        saveBtn.addEventListener('click', () => {
          // const docRef = doc(db, 'publication', docum.id);
          updatePost(docum.id, {
            publicacion: editPub.value,
          });
          console.log(docum.id)
            .then(() => {
              console.log('res');
              console.log('Documento actualizado con éxito');
              pComent.textContent = `${editPub.value}`;
              editPub.replaceWith(pComent);
              saveBtn.remove();
            })
            .catch((error) => {
              console.error('Error al actualizar el documento', error);
            });
        });
      });
    });
  });
  return bodyHTML;
};
