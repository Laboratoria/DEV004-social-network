/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-promise-executor-return */
/* eslint-disable no-import-assign */
/* eslint-disable import/no-unresolved */
import * as router from '../src/main';
import { home } from './components/home.js';
/* import { register } from './components/register'; */
import * as authentication from '../src/authentication'; // missing import statement

describe('Pruebas de login', () => {
  beforeEach(() => {
    // missing functions in the mock objects result in undefined functions
    authentication.signInWithGoogle = jest.fn(() => Promise.resolve());
    authentication.signInWithPassword = jest.fn(() => Promise.resolve());
    /* router.navigateTo = jest.fn(() => console.log('mock de navigateTo usado')); */
  });

  it('Autenticación con correo electrónico y contraseña correcta, debería redireccionar a /home', async () => { // asynchronous test
    // preparamos el mock
    authentication.signInWithPassword.mockResolvedValueOnce({ user: { email: 'ssinuco@gmail.com' } });

    // Paso 1: Visualizar el formulario de login.
    const loginDiv = home(); // corrected variable name

    // Paso 2: Completamos el formulario con un correo electrónico y contraseña correctos.
    loginDiv.querySelector('#username').value = 'ssinuco@gmail.com';
    loginDiv.querySelector('#password').value = '123456';

    // Paso 3: Enviamos el formulario dando clic en el botón `Login`.
    loginDiv.querySelector('#loginForm').dispatchEvent(new Event('submit'));

    // Paso 4: Verificamos visualmente que la aplicación redirija a `/home`.
    await new Promise((resolve) => setTimeout(resolve, 500)); // Timeout needed for the router to navigate
    expect(router.navigateTo).toHaveBeenCalledWith('/home');
  });
});
