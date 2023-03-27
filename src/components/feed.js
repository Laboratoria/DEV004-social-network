import {
  post, auth, logOut, addPost, deleteDocData, updatePost,
} from '../lib/firebase';

const root = document.getElementById('root');
export const feed = () => {
  const feedDiv = document.createElement('div');
  feedDiv.classList.add('feed-container');
  feedDiv.innerHTML += `
    <header id='head-feed'>
      <img src="./img/logo.png" id="logo">
      <img src="./img/salir.png" id="logout">
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
  const logOutButton = document.querySelector('#logout');
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

    await post(postText);
    statusDescription.value = '';
  });

  const postsContainer = document.getElementById('posts-container');

  addPost((posts) => {
    postsContainer.innerHTML = '';
    posts.forEach((feedPosts) => {
      const postElement = document.createElement('div');
      postElement.classList.add('eachPost');

      const userNameElement = document.createElement('p1');
      userNameElement.textContent = feedPosts.userName;
      postElement.appendChild(userNameElement);
      userNameElement.innerHTML += '<br>';

      const textElement = document.createElement('p3');
      textElement.textContent = feedPosts.text;
      postElement.appendChild(textElement);

      // Editar Post
      const updateButton = document.createElement('button');
      updateButton.classList.add('update-btn');
      updateButton.textContent = 'Editar';
      updateButton.value = feedPosts.id;

      const editSection = document.createElement('section');
      editSection.classList.add('edit.section');
      editSection.style.display = 'none';
      postElement.appendChild(editSection);

      const updateInput = document.createElement('input');
      updateInput.classList.add('update-input');
      updateInput.id = 'new-post';
      updateInput.text = feedPosts.text;
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
        const newPostText = document.getElementById('new-post');
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
      const deleteButton = document.createElement('button');
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

      postsContainer.appendChild(postElement);
      postsContainer.appendChild(postElement);
    });
  });
  return feedDiv;
};
