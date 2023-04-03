/* eslint-disable no-import-assign */
/* import { signInWithEmailAndPassword } from 'firebase/auth'; */
/* import firebaseFn from '../src/lib/firebase.js' */
import * as firebase from '../src/lib/firebase.js';

import { home } from '../src/components/home.js';
/* import { * } from '../src/main.js'; */

describe('Pruebas de login', () => {
  it('Autenticación con correo electrónico y contraseña correcta, debería redireccionar a /feed', () => {
  });

  firebase.createUser = jest.fn().mockResolvedValue({ user: { uid: 'user-uid' } });

  const loginDiv = home();

  loginDiv.querySelector('#username').value = 'ssinuco@gmail.com';
  loginDiv.querySelector('#password').value = '123456';

  loginDiv.querySelector('#loginForm').dispatchEvent(new Event('submit'));

  it('Autenticación con correo electrónico y contraseña incorrecta, NO debería redireccionar a /home', () => {

  });
});
