import { onSnapshot } from 'firebase/firestore';
import {
  savePublic,
  postData,
  auth,
} from '../lib/firebaseConfig';
import { signOff } from '../lib/authentication';

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
      const user = auth.currentUser;
      const name = user.displayName;

      await savePublic(inputPost.value, 0, name);
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
    onNavigate('/login');
  });

  onSnapshot(postData(), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      const pComent = document.createElement('p');
      pComent.textContent = `${doc.data().name}: ${doc.data().publicacion}`;
      commentSection.append(pComent);
    });
  });
  return bodyHTML;
};
