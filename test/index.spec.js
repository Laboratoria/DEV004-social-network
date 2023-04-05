/* eslint-disable max-len */
/* eslint-disable no-import-assign */
/* import { signInWithEmailAndPassword } from 'firebase/auth'; */
/* import firebaseFn from '../src/lib/firebase.js' */
/* import * as firebase from '../src/lib/firebase.js';

import { home } from '../src/components/home.js';
import { * } from '../src/main.js';

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
}); */

import { home } from '../src/components/home';
import * as firebaseFn from '../src/lib/firebase';

jest.mock('../src/lib/firebase.js', () => ({
  signIn: jest.fn(),
}));
describe('Sing In', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  it('si el usurio se logea se redirige a /feed', (done) => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    const section = home();
    section.querySelector('#email').value = 'test@test.com';
    section.querySelector('#password').value = 'TEst12$%';
    section.querySelector('#signin-button').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(window.location.pathname).toBe('/feed');
      done();
    });
  });
});
