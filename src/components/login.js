// import { signInWithGoogle, signInWithPassword } from '../lib/authentication';
import { navigateTo } from '../router';

export const login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida al login';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => {
    navigateTo('/');
  });
  HomeDiv.appendChild(buttonHome);
  return HomeDiv;
};
