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
};
feed();

const postButton = document.querySelector('.post');

postButton.addEventListener('click', () => {
  const statusDescription = document.querySelector('#status-description');
  const postText = statusDescription.value;
  /* root.innerHTML = ''; */
  statusDescription.value = '';

  console.log(postText);
});

// Estoy haciendolo en mi visual para verlo - Sol //
