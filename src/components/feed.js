/* import { signOut } from 'firebase/auth'; */
import {
  post, auth, logOut, addPost, deleteDocData, updatePost
} from '../lib/firebase';

const root = document.getElementById('root');
export const feed = () => {
  const feedDiv = document.createElement('div');
  feedDiv.classList.add('feed-container');
  feedDiv.innerHTML += `
    <header id='head-feed'>
      <h1></h1><button class='logout'>salir</button>
    </header>
    <section class='timeline'>
      <section class='create-post-container'>
        <section class='create-post'>
          <textarea id='status-description' placeholder=' ¿Que hizo tu animal de compañía hoy?' maxlength='300'></textarea>
          <div class='post-button-container'>
            <button class='post'>Publicar</button>
          </div>
        </section>
      </section>
    </section>
    <section id='posts-container'>  </section>
    `;
  root.appendChild(feedDiv);

  /*   Botón para salir */
  const logOutButton = document.querySelector('.logout');
  logOutButton.addEventListener('click', () => {
    logOut(auth).then(() => {
      window.location.href = '/';
      console.log('the user is signed out');
    });
  });

  /*  Crear post */
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

  /*   Mostrar post en timeline */
  const postsContainer = document.getElementById('posts-container');
  addPost((posts) => {
    postsContainer.innerHTML = '';
    posts.forEach((feedPosts) => {
      const postElement = document.createElement('div');
      postElement.classList.add('eachPost');

      const userNameElement = document.createElement('p1');
      userNameElement.textContent = feedPosts.userName;
      postElement.appendChild(userNameElement);

      const textElement = document.createElement('p3');
      textElement.textContent = feedPosts.text;
      postElement.appendChild(textElement);

      const likeButton = document.createElement('img');
      likeButton.classList.add('like');
      likeButton.addEventListener('click', () => {
        console.log(feedPosts.likes+"like");
      });

      if (feedPosts.userId === auth.currentUser.uid) {
        const updateButton = document.createElement('img');
        updateButton.classList.add('update-btn');
        updateButton.textContent = 'Editar';
        updateButton.value = feedPosts.id;

        const editSection = document.createElement('section');
        editSection.classList.add('edit.section');
        editSection.style.display = 'none';
        postElement.appendChild(editSection);

        const updateInput = document.createElement('input');
        updateInput.classList.add('update-input');
        updateInput.id = feedPosts.id;
        updateInput.textContent = feedPosts.text;
        editSection.appendChild(updateInput);

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Guardar cambio';
        editSection.appendChild(saveButton);

        const cancelButton = document.createElement('button');
        saveButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancelar';
        editSection.appendChild(cancelButton);

        updateButton.addEventListener('click', () => {
          editSection.style.display = 'block';
        });
        saveButton.addEventListener('click', () => {
          const newPostText = document.getElementById(feedPosts.id);
          const refPostId = feedPosts.id;
          console.log(refPostId);
          updatePost(refPostId, { text: newPostText.value })
            .then(() => {
              editSection.style.display = 'none';
            });
        });
        cancelButton.addEventListener('click', () => {
          editSection.style.display = 'none';
        });
        postElement.appendChild(updateButton, editSection);

        // Borrar Post
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
      }

      postsContainer.appendChild(postElement);
      postsContainer.appendChild(postElement);
      postElement.appendChild(likeButton);
    });
  });
  return feedDiv;
};
