import { navigateTo } from '../router';
import {createpost} from '../lib/firebase.js';

export const feed = () => {
  const squareF = document.createElement('div');
  squareF.setAttribute('class', 'squareF');
  const squareHeaderF = document.createElement('header');
  squareHeaderF.setAttribute('class', 'squareHeaderF');
  const logoF = document.createElement('img');
  logoF.setAttribute('src', 'https://i.ibb.co/bWGQN64/REDA-1.png');
  logoF.setAttribute('class', 'logoF');
  const userCredential = document.createElement('div');
  userCredential.setAttribute('class', 'userInfo');
  const postTitle = document.createElement('textarea');
  postTitle.setAttribute('class', 'postTitle');
  const post = document.createElement('textarea');
  post.setAttribute('class', 'post');
  const btnHomeF = document.createElement('button');
  const btnPubF = document.createElement('button');
  const subsquareF = document.createElement('div');
  subsquareF.setAttribute('class', 'subsquareF');
  const squareFooterF = document.createElement('div');
  btnPubF.textContent = 'publicar';
  btnHomeF.textContent = 'inicio';
  squareHeaderF.appendChild(logoF);
  subsquareF.appendChild(btnHomeF);
  subsquareF.appendChild(btnPubF);
  squareF.appendChild(squareHeaderF);
  squareF.appendChild(userCredential);
  squareF.appendChild(squareFooterF);
  squareF.appendChild(post);
  squareF.appendChild(postTitle);
  squareF.appendChild(subsquareF);
  btnHomeF.addEventListener('click', () => {
    navigateTo('/home');
  });
  return squareF;
};
