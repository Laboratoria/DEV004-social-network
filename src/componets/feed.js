import { navigateTo } from '../router';
import {createpost} from '../lib/firebase.js';
export const feed = () => {
  const square = document.createElement('div');
  const button = document.createElement('button');
  button.textContent = 'inicio';
  square.appendChild(button);
  button.addEventListener('click', () => {
    navigateTo('/home');
  });





  
  return square;

};
