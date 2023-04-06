import { navigateTo } from '../router';
// import { createpost, getpost, eliminatePost } from '../lib/firebase.js';
import {
  createpost, getpost, exitApp, auth,
} from '../lib/firebase.js';
import { updateCurrentUser } from 'firebase/auth';
console.log ('estamos en feed', auth);
export const feed = () => {
  const squareF = document.createElement('div');
  squareF.setAttribute('class', 'squareF');
  const squareHeaderF = document.createElement('header');
  squareHeaderF.setAttribute('class', 'squareHeaderF');
  const logoF = document.createElement('img');
  logoF.setAttribute('src', 'https://i.ibb.co/bWGQN64/REDA-1.png');
  logoF.setAttribute('class', 'logoF');
  const userInfoF = document.createElement('div');
  const userAvatar = document.createElement('img');
  userAvatar.setAttribute(
    'src',
    'https://cdn-icons-png.flaticon.com/512/4140/4140047.png',
  );
  userAvatar.setAttribute('class', 'userAvatar');
  const userExpertChecked = document.createElement('img');
  userExpertChecked.setAttribute(
    'src',
    'https://cdn-icons-png.flaticon.com/512/5610/5610944.png',
  );
  // aca estas llamando al setItem con getItem.
  const currentUserEmail = sessionStorage.getItem('currentUser');
  // 
  const parseUser = JSON.parse(currentUserEmail);
  const currentUserEmailDraw = document.createElement('p');
  currentUserEmailDraw.innerHTML = parseUser.email;
  console.log('esto es parseUser', parseUser);
  userExpertChecked.setAttribute('class', 'userExpertChecked');
  userInfoF.setAttribute('class', 'userInfoF');
  const postContainer = document.createElement('form');
  postContainer.setAttribute('class', 'postContainer');
  const postTitle = document.createElement('textarea');

  postTitle.setAttribute('class', 'postTitle');
  postTitle.setAttribute('rows', '2');
  postTitle.setAttribute('cols', '2');
  postTitle.setAttribute('placeholder', 'Escribe el título de tu post.');
  const post = document.createElement('textarea');
  post.setAttribute('class', 'post');
  post.setAttribute('rows', '10');
  post.setAttribute('cols', '1');
  post.setAttribute('placeholder', 'Escribe tu post.');
  postTitle.setAttribute('id', 'postTitle');
  post.setAttribute('id', 'post');
  const subsquareF = document.createElement('div');
  subsquareF.setAttribute('class', 'subsquareF');
  const btnHomeF = document.createElement('button');
  btnHomeF.setAttribute('class', 'btnHomeF');
  const btnPubF = document.createElement('button');
  btnPubF.setAttribute('class', 'btnPubF');
  btnPubF.textContent = 'publicar';
  btnHomeF.textContent = 'inicio';
  const likeIcon = document.createElement('img');
  // likeIcon.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png');
  likeIcon.setAttribute('class', 'likeIcon');
  const commentIcon = document.createElement('img');
  // commentIcon.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png');
  commentIcon.setAttribute('class', 'commentIcon');
  const squareFooterF = document.createElement('footer');
  squareFooterF.setAttribute('class', 'squareFooterF');
  squareFooterF.textContent = 'Reda©️';
  squareF.appendChild(squareHeaderF);
  squareHeaderF.appendChild(logoF);
  squareF.appendChild(userInfoF);
  userInfoF.appendChild(userAvatar);
  squareF.appendChild(currentUserEmailDraw);
  squareF.appendChild(postContainer);
  postContainer.appendChild(postTitle);
  postContainer.appendChild(post);
  postContainer.appendChild(likeIcon);
  postContainer.appendChild(commentIcon);
  squareF.appendChild(subsquareF);
  postContainer.appendChild(btnPubF);
  subsquareF.appendChild(btnHomeF);
  btnHomeF.addEventListener('click', () => {
    navigateTo('/home');
  });
  postContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(postContainer);
    const feedTitle = e.target.elements.postTitle.value;
    const feedPost = e.target.elements.post.value;
    // console.log(feedTitle);
    // console.log(feedPost);
    createpost(feedTitle, feedPost)
    // el dibjuar post debe estar dentro de una promesa para que dibuje
      .then(() => {
        dibujar();
      });
  });
  const dibujar = () => {
    const myPromise = getpost();
    myPromise.then((showPost) => {
    // nos aseguramos que la data provenga de feed.js y no de
    // firebase.
      // console.log('feed', showPost);
      showPost.forEach((post) => {
        // const postForm = document.createElement('form');
        const form = document.createElement('form');

        form.innerHTML = `<textarea id= 'mostrar!'>
        ${post.titulo}
        ${post.descripcion}
        ${post.userid}
  
        </textarea> 
        <input type="submit" class="btnDeletePost" data-id = "${post.id}" value="Borrar"/>
        <input type="submit" id="btnEditPost" value="Editar"/>
          `;

        form.setAttribute('id', 'form1');
        squareF.appendChild(form);
      });
      const btnsDeletePost = document.querySelectorAll('.btnDeletePost');
      console.log(btnsDeletePost);
      btnsDeletePost.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
        });
      });
    });
    const btnBox = document.createElement('div');
    squareF.appendChild(btnBox);
    const btnLogOut = document.createElement('button');
    btnLogOut.setAttribute('class', 'btnLogOut');
    btnLogOut.innerHTML = 'Cerrar sesion';
    btnBox.appendChild(btnLogOut);
    const exitBtn = document.querySelector('.btnLogOut');
    exitBtn.addEventListener('click', () => {
      exitApp()
        .then(() => {
          navigateTo('/home');
        });
    });
  };
  return squareF;
};
