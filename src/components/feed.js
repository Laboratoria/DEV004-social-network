import { post } from '../lib/firebase';

const root = document.getElementById('root');
export const feed = () => {
  const feedDiv = document.createElement('div');
  feedDiv.classList.add('feed-container');
  feedDiv.innerHTML += `
      <header id="head-feed">
      <h1></h1>
    </header>
    <section class="timeline">
      <section class="create-post-container">
        <section class="create-post">
          <textarea id="status-description" placeholder=" ¿Que hizo tu animal de compañía hoy?" maxlength="300"></textarea>
          <div class="post-button-container">
            <button class="post">Publicar</button>
          </div>
        </section>
      </section>
    </section>`;
  root.appendChild(feedDiv);

  const postButton = feedDiv.querySelector('.post');

  postButton.addEventListener('click', async () => {
    const statusDescription = feedDiv.querySelector('#status-description');
    const postText = statusDescription.value;

    await post(postText);

    statusDescription.value = '';
  });

  return feedDiv;
};

feed();
