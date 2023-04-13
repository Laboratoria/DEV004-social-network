/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import {
  post, auth, logOut, addPost, deleteDocData, updatePost, like, disLike,
} from '../lib/firebase';

export const feed = (onNavigate) => {
  const root = document.getElementById('root');
  const feedDiv = document.createElement('div');
  feedDiv.classList.add('feed-container');
  feedDiv.innerHTML += `
    <header id='head-feed'>
      <img src="./img/logo.png" id="logo">
      <img src="./img/salir.png" id="salir">
    </header>
    <section class='timeline'>
      <section class='create-post-container'>
        <section class='create-post'>
          <h2>Tú</h2>
          <textarea id='status-description' placeholder=' ¿Que hizo tu animal de compañía hoy?' maxlength='300'></textarea>
        </section>
      </section>
    </section>
    <div class='post-button-container'>
      <button class='post'>Publicar</button>
    </div>
    <section id='posts-container'>
    </section>
    `;
  root.appendChild(feedDiv);

  /* Botón para salir */
  const logOutButton = document.getElementById('salir');
  logOutButton.addEventListener('click', () => {
    logOut(auth).then(() => {
      onNavigate('/');
      /* console.log('the user is signed out'); */
    });
  });

  /* Crear post */
  const postButton = feedDiv.querySelector('.post');

  postButton.addEventListener('click', async () => {
    const statusDescription = feedDiv.querySelector('#status-description');
    const postText = statusDescription.value;
    const validatePost = document.getElementById('status-description').value;
    if (validatePost === '') {
      alert('Ingrese post');
      return false;
    }
    await post(postText);
    statusDescription.value = '';
  });

  /* Mostrar post en timeline */
  const postsContainer = document.getElementById('posts-container');

  addPost((posts) => {
    postsContainer.innerHTML = '';
    posts.forEach((feedPosts) => {
      const postElement = document.createElement('section');
      postElement.classList.add('eachPost');
      postsContainer.appendChild(postElement);

      const userNameElement = document.createElement('p');
      userNameElement.classList.add('p1');
      userNameElement.textContent = feedPosts.userName;
      postElement.appendChild(userNameElement);

      const textElement = document.createElement('p');
      textElement.classList.add('p3');
      textElement.textContent = feedPosts.text;
      postElement.appendChild(textElement);

      /* Like y DisLike */
      const likeButton = document.createElement('img');
      likeButton.classList.add('like');
      const disLikeButton = document.createElement('img');
      disLikeButton.classList.add('disLike');
      // disLikeButton.style.display = 'none';
      if (feedPosts.likes.includes(auth.currentUser.uid)) {
        postElement.appendChild(likeButton);
      } else {
        postElement.appendChild(disLikeButton);
      }
      likeButton.addEventListener('click', async () => {
        if (likeButton.classList.toggle('disLike')) {
          disLike(feedPosts.id, auth.currentUser.uid);
        }
      });
      disLikeButton.addEventListener('click', async () => {
        if (disLikeButton.classList.toggle('like')) {
          like(feedPosts.id, auth.currentUser.uid);
        }
      });

      /* Contador de like y dislike */
      const counterLike = document.createElement('p');
      counterLike.classList.add('p2');
      counterLike.textContent = feedPosts.likes.length;
      postElement.appendChild(counterLike);

      /* verificar si es nuestro usuario ingresado es igual al del post */
      if (feedPosts.userId === auth.currentUser.uid) {
        /* Borrar Post */
        const deleteButton = document.createElement('img');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Eliminar';
        deleteButton.value = feedPosts.id;
        deleteButton.addEventListener('click', () => {
          const shouldDelete = window.confirm('¿Estás seguro de que deseas eliminar este post?');
          if (shouldDelete) {
            deleteDocData(feedPosts.id);
          }
        });
        postElement.appendChild(deleteButton);

        /* Editar post */
        const updateButton = document.createElement('img');
        updateButton.classList.add('update-btn');
        updateButton.value = feedPosts.id;
        postElement.appendChild(updateButton);

        const editSection = document.createElement('section');
        editSection.classList.add('edit-section');
        editSection.style.display = 'none';
        postElement.appendChild(editSection);

        const updateInput = document.createElement('input');
        updateInput.classList.add('update-input');
        updateInput.id = feedPosts.id;
        updateInput.textContent = feedPosts.text;
        editSection.appendChild(updateInput);

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Guardar';
        editSection.appendChild(saveButton);

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancelar';
        editSection.appendChild(cancelButton);

        updateButton.addEventListener('click', () => {
          editSection.style.display = 'block';
        });
        saveButton.addEventListener('click', () => {
          const newPostText = document.getElementById(feedPosts.id);
          const refPostId = feedPosts.id;
          /* console.log(refPostId); */
          updatePost(refPostId, { text: newPostText.value })
            .then(() => {
              editSection.style.display = 'none';
            });
        });
        cancelButton.addEventListener('click', () => {
          editSection.style.display = 'none';
        });
        postElement.appendChild(editSection);
      }
    });
  });
  return feedDiv;
};
