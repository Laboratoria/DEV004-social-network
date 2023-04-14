/**
 * @jest-environment jsdom
 */
import * as prueba from '../src/router';
import { Login } from '../src/components/login';
import { signInWithPassword } from '../src/helpers/accederCongmail';

jest.mock('../src/helpers/accederCongmail');

describe('Pruebas de login', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-import-assign
    prueba.navigateTo = jest.fn(() => console.log('ok'));
  });

  it('Autenticación con correo electrónico y contraseña correcta, debería redireccionar a /home', () => {
    // preparamos el mock
    signInWithPassword.mockResolvedValueOnce({ user: { email: 'ssinuco@gmail.com' } });

    // Paso 1: Visualizar el formulario de login.
    const loginDiv = Login();

    // Paso 2: Completamos el formulario con un correo electrónico y contraseña correctos.
    loginDiv.querySelector('#username').value = 'ssinuco@gmail.com';
    loginDiv.querySelector('#password').value = '123456';

    // // Sobrescribimos la función signInWithPassword con un mock
    signInWithPassword.mockImplementation(() => Promise.resolve({ user: { email: 'ssinuco@gmail.com' } }));

    // // Paso 3: Enviamos el formulario dando clic en el botón `Login`.
    loginDiv.querySelector('#loginForm').dispatchEvent(new Event('submit'));

    // // Paso 4: Verificamos visualmente que la aplicación redija a `/home`.
    return Promise.resolve().then(() => {
      expect(prueba.navigateTo).toHaveBeenCalledWith('/home');
    });
  });
});
