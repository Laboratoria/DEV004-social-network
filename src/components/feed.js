import {
  post, auth, logOut, addPost,
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

      const textElement = document.createElement('p3');
      textElement.textContent = feedPosts.text;
      postElement.appendChild(textElement);

      postsContainer.appendChild(postElement);
    });
  });
  return feedDiv;
};
