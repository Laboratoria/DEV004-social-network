import { navigateTo } from '../router';
// import { createpost, getpost, eliminatePost } from '../lib/firebase.js';
import {
  createpost, getpost, exitApp, auth, deletePost, updatePost, addLike, updatelike,

} from '../lib/firebase.js';

// console.log('estamos en feed', auth);
export const feed = () => {
  const squareF = document.createElement('div');
  squareF.setAttribute('class', 'squareF');
  squareF.setAttribute('id', 'squareFPerro');
  const squareHeaderF = document.createElement('header');
  squareHeaderF.setAttribute('class', 'squareHeaderF');
  const logoF = document.createElement('img');
  logoF.setAttribute('src', 'https://i.ibb.co/bWGQN64/REDA-1.png');
  logoF.setAttribute('class', 'logoF');
  const userInfoF = document.createElement('div');
  userInfoF.setAttribute('class', 'userInfoDivF');
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
  const parseUser = JSON.parse(currentUserEmail);
  const currentUserEmailDraw = document.createElement('p');
  currentUserEmailDraw.innerHTML = parseUser.email;
  currentUserEmailDraw.setAttribute('class', 'currentUserMail');
  // console.log('esto es parseUser', parseUser);
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

  const btnLogOut = document.createElement('button');
  btnLogOut.setAttribute('class', 'btnLogOut');
  btnLogOut.innerHTML = 'Cerrar sesión';

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
  userInfoF.appendChild(currentUserEmailDraw);
  squareF.appendChild(postContainer);
  postContainer.appendChild(postTitle);
  postContainer.appendChild(post);
  postContainer.appendChild(likeIcon);
  postContainer.appendChild(commentIcon);
  squareF.appendChild(subsquareF);
  postContainer.appendChild(btnPubF);
  subsquareF.appendChild(btnHomeF);
  squareHeaderF.appendChild(btnLogOut);

  btnHomeF.addEventListener('click', () => {
    navigateTo('/home');
  });

  btnLogOut.addEventListener('click', () => {
    exitApp()
      .then(() => {
        navigateTo('/home');
      });
  });

  postContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(postContainer);
    const feedTitle = e.target.elements.postTitle.value;
    const feedPost = e.target.elements.post.value;
    // console.log(parseUser.email);
    const feedUser = parseUser.email;
    // console.log(feedTitle);
    // console.log(feedPost);
    // acá es importante el orden de los atributos, par saber como se imprimen.
    const dibujar = () => {
      const myPromise = getpost();
      // const formularioPost = document.getElementById('squareFPerro');
      squareF.innerHTML = '';
      myPromise.then((showPost) => {
      // nos aseguramos que la data provenga de feed.js y no de
      // firebase.
        // console.log('feed', showPost);
        // esto filtra todo los post que no tengan like
        showPost.filter((p) => p.likes !== undefined).forEach((postD) => {
          // const postForm = document.createElement('form');
          const form = document.createElement('form');
          form.classList.add('formularioEditar');
          form.setAttribute('data-id', postD.id);
          form.setAttribute('id', 'form');

          form.innerHTML = `<div class="contenedorCurrentUser"> <text disabled>
          Autor: ${postD.usuario}
          </text>
          <div class="contenedorPostCompleto">
          <input name="titulo" id="titulo-${postD.id}" class="tituloEdit" value="${postD.titulo}" disabled />
          <textarea name="descripcion" class="descriptionEdit" id="${postD.id}"  disabled />
  ${postD.descripcion}
          </textarea>
          </div>
          <div class="contenedorIconosPost">
          <ion-icon name="trash-outline" type="button" id="btnDeletePost" class="${auth.currentUser.email === postD.usuario ? 'show' : 'noShow'}" data-id="${postD.id}" value="Borrar"></ion-icon>
          <ion-icon name="create-outline" type="button" id="btnEditPost" value="Editar" class="${auth.currentUser.email === postD.usuario ? 'show' : 'noShow'}" data-id="${postD.id}"></ion-icon> 
          <ion-icon name="save-outline" type="button" id="btnSaveEditPost" value="Guardar" class="${auth.currentUser.email === postD.usuario ? 'show' : 'noShow'}"></ion-icon>
          <ion-icon class="corazonIcon" name="${(postD.likes || []).includes(auth.currentUser.email) ? 'heart' : 'heart-outline'}" id="like-${postD.id}" ></ion-icon>  ${postD.likes.length}.
          </div>
          <div class="nuevoPostContainer">
          <a href="/feed">publicar nuevamente</a> 
          </div>
          
          
          </div>`;

          // Oh con coni:?? significa que si el primer arreglo no existe
          // retorna el array vacio.(nullish)
          // <ion-icon name="heart-outline"></ion-icon>
          // ojo con los dos signos de interrogaciòn juntos, no son un operador ternario
          // <ion-icon class="like"  name="${(postD.likes ?? []).includes(auth.currentUser.email)?
          // 'heart' :'heart-outline' }" data-id="${postD.id}"></ion-icon>
          console.log(form);
          const saveBtn = form.querySelector('#btnSaveEditPost');
          saveBtn.addEventListener('click', (event) => {
            event.preventDefault();
            // guardar en firebase
            console.log(event);
            // aca cambiamos la manera de obtener los elementos del form,
            // porque al hacerlo desde el boton, no lograbamos obtener nada.
            const postId = form.dataset.id;
            const newTitle = form.elements.titulo.value;
            const newDescription = form.elements.descripcion.value;
            const newtitleEd = document.querySelector('.tituloEdit');
            const newdescripEd = document.querySelector('.descriptionEdit');
            const newPost = {
              titulo: newTitle,
              descripcion: newDescription,
            };
            console.log(postId);
            console.log(newPost);
            updatePost(postId, newPost);
            newtitleEd.setAttribute('disabled', '');
            console.log(newtitleEd);
            newdescripEd.setAttribute('disabled', '');
          });
          const like = form.querySelector(`#like-${postD.id}`);
          // console.log(like);
          like.addEventListener('click', (event) => {
            event.preventDefault();
            // console.log(e);
            // console.log(auth.currentUser.email);
            // este like representa un booleano
            const postLike = (postD.likes || []).includes(auth.currentUser.email);
            if (postLike === true) {
              const newLikes = postD.likes.filter((email) => email !== auth.currentUser.email);
              updatelike(postD.id, newLikes).then(() => {
                dibujar();
              });
            } else {
              addLike(postD.id, [...postD.likes, auth.currentUser.email]).then(() => {
                console.log(postD.likes, 'esto es el array de likes');
                dibujar();
                console.log(postD.likes, 'esto es el array de likes');
              });
            }
          });
          squareF.appendChild(form);
        });

        const btnsDeletePost = document.querySelectorAll('#btnDeletePost');
        console.log(btnsDeletePost);
        btnsDeletePost.forEach((btn) => {
          btn.addEventListener('click', (event) => {
            event.preventDefault();
            const btnId = btn.getAttribute('data-id');
            // console.log(btnId);
            const shouldDeletePost = window.confirm('¿Estás seguro de que deseas eliminar este post?');
            if (shouldDeletePost) {
              const formToRemove = document.getElementById('form');
              formToRemove.remove();
              // console.log(formToRemove);
              deletePost(btnId);
            }
          });
        });

        const btnsEditar = document.querySelectorAll('#btnEditPost');
        btnsEditar.forEach((btn) => {
          btn.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(e);
            const postId = btn.getAttribute('data-id');
            const postTitulo = `titulo-${postId}`;
            const textAreaPublication = document.getElementById(postId);
            const inputPublication = document.getElementById(postTitulo);
            console.log(inputPublication);
            textAreaPublication.removeAttribute('disabled');
            inputPublication.removeAttribute('disabled');
          });
        });
      });
    };

    createpost(feedUser, feedTitle, feedPost)
    // el dibjuar post debe estar dentro de una promesa para que dibuje
      .then(() => {
        dibujar();
        // document.querySelector('class', 'postContainer').reset();
        postContainer.reset();
      });
    // revisar este error para de dibujar;
  });

  return squareF;
};
