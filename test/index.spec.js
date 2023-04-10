/* eslint-disable jest/no-focused-tests */
import { home } from '../src/components/home';
import * as firebaseFn from '../src/lib/firebase';

jest.mock('../src/lib/firebase.js', () => ({
  signIn: jest.fn(),
  loginWithGoogle: jest.fn(),
  singInHere: jest.fn(),
}));

beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

describe('Sing In', () => {
  it('si el usurio se logea con éxito se redirige a /feed', (done) => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    const mockNavigate = jest.fn();
    const section = home(mockNavigate);
    section.querySelector('#email').value = 'test@test.com';
    section.querySelector('#password').value = 'TEst12$%';
    section.querySelector('#signin-button').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/feed');
      done();
    }, 0);
  });

  it('si el usuario deja el campo de email vacio arroja una alerta', () => {
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = home();
    section.querySelector('#email').value = '';
    section.querySelector('#password').value = 'TEst12$%';
    section.querySelector('#signin-button').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese su email');
    });
  });

  it('si el usuario deja el campo de contraseña vacio arroja una alerta', () => {
    jest.clearAllMocks();
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = home();
    section.querySelector('#email').value = 'test@test.com';
    section.querySelector('#password').value = '';
    section.querySelector('#signin-button').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese su contraseña');
    }, 0);
  });

  it('si el usuario introduce un email incorrecto arroja una alerta', () => {
    jest.clearAllMocks();
    firebaseFn.signIn.mockResolvedValueOnce({ user: { email: 'test@test.com' } });
    global.alert = jest.fn();
    const section = home();
    section.querySelector('#email').value = 'test.com';
    section.querySelector('#password').value = 'TEst12$%';
    section.querySelector('#signin-button').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith('Ingrese email correcto');
    }, 0);
  });
});

describe('Log In con Google', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  it('si el usuario se logea con éxito se redirige a /feed', () => {
    firebaseFn.loginWithGoogle.mockResolvedValueOnce({ user: { uid: 'user-id' } });
    const mockNavigate = jest.fn();
    const section = home(mockNavigate);
    section.querySelector('#google').dispatchEvent(new Event('click'));
    return Promise.resolve().then(() => { expect(mockNavigate).toHaveBeenCalledWith('/feed'); });
  });
});

describe('Ir a registro', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  it('El usuario quiere ir a registrarse', (done) => {
    const mockNavigate = jest.fn();
    const section = home(mockNavigate);
    section.querySelector('#here').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/register');
      done();
    }, 0);
  });
});
