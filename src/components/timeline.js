import {
  onSnapshot,
} from 'firebase/firestore';

import { onAuthStateChanged } from 'firebase/auth';

import {
  savePublic,
  postData,
  getTimestamp,
  deletePost,
  updatePost,
  like,
  dislike,
} from '../lib/firestore';
import { signOff } from '../lib/authentication';
import { auth } from '../lib/firebaseConfig';

let myCurrentUser = null;

onAuthStateChanged(auth, (user) => {
  if (user) myCurrentUser = user;
});

export const timeline = (onNavigate) => {
  //* Aqui estamos creando lo que va en HTML.
  const bodyHTML = document.createElement('body');
  const headerHTML = document.createElement('header');
  const timelineSection = document.createElement('main');
  const feedSection = document.createElement('div');
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
  feedSection.setAttribute('id', 'feedSection');

  createPostSection.setAttribute('id', 'createPostSection');

  headerTitle.setAttribute('id', 'headerTitle');
  headerTitle.textContent = 'Timeline';

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
  timelineSection.appendChild(feedSection);

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
      console.log("authCurrentEnTimeline", myCurrentUser);
      await savePublic(inputPost.value, [], name, getTimestamp());
      const post = document.createElement('p');
      // textContent devuelve o establece el contenido de texto de un elemento
      post.textContent = inputPost.value;
      feedSection.appendChild(post);
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
    feedSection.innerHTML = '';
    querySnapshot.forEach((docum) => {
      // console.log(docum.data());
      const postSection = document.createElement('section');
      const halfpComment = document.createElement('div');
      const pComment = document.createElement('p');
      const halfBtns = document.createElement('div');
      const editBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
      const divlike = document.createElement('div');
      const likePawZero = document.createElement('img');
      const likePaw = document.createElement('img');

      divlike.setAttribute('id', 'divlike');
      divlike.innerHTML = `${docum.data().likes.length}`;

      postSection.setAttribute('id', 'postSection');
      halfpComment.setAttribute('id', 'halfpComment');
      pComment.setAttribute('id', 'pComment');
      halfBtns.setAttribute('id', 'halfBtns');
      editBtn.setAttribute('id', 'editBtn');
      deleteBtn.setAttribute('id', 'deleteBtn');
      likePawZero.setAttribute('id', 'likePawZero');
      likePawZero.setAttribute('src', '../Img/likePawZero.png');
      likePawZero.setAttribute('alt', 'likePawZero');
      likePaw.setAttribute('id', 'likePaw');
      likePaw.setAttribute('src', '../Img/likePaw.png');
      likePaw.setAttribute('alt', 'likePaw');
      // console.log(docum.data());
      pComment.textContent = `${docum.data().name}: ${docum.data().publicacion}`;
      postSection.appendChild(pComment);

      editBtn.textContent = 'Editar';
      deleteBtn.textContent = 'Eliminar';
      halfpComment.appendChild(pComment);
      halfBtns.appendChild(editBtn);
      halfBtns.appendChild(deleteBtn);
      halfBtns.appendChild(likePawZero);
      likePawZero.appendChild(likePaw);
      halfBtns.appendChild(divlike);
      postSection.appendChild(halfpComment);
      postSection.appendChild(halfBtns);
      feedSection.appendChild(postSection);

      deleteBtn.addEventListener('click', () => {
        console.log(docum.id);
        deletePost(docum.id)
          .then(() => {
          }).catch((err) => console.warn(err));
      });
      console.log(docum.id);

      likePawZero.addEventListener('click', () => {
        const user = auth.currentUser.uid;
        const likes = docum.data().likes;
        console.log(auth.currentUser.uid);

        if (!likes.includes(user)) {
          like(docum, auth);
          likePawZero.replaceWith(likePaw);
        } else {
          dislike(docum, auth);
          likePaw.replaceWith(likePawZero);
        }
      });

      editBtn.addEventListener('click', () => {
        const editPub = document.createElement('input');
        editPub.setAttribute('id', 'editPub');
        editPub.value = docum.data().publicacion;
        pComment.replaceWith(editPub);

        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('id', 'saveBtn');
        saveBtn.textContent = 'Guardar';
        halfBtns.appendChild(saveBtn);

        saveBtn.addEventListener('click', () => {
          updatePost(docum.id, {
            publicacion: editPub.value,
          }).then(() => {
            console.log('Documento actualizado con éxito');
            pComment.textContent = `${editPub.value}`;
            editPub.replaceWith(pComment);
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
