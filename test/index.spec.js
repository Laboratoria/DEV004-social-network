// importamos la funcion que vamos a testear
import { register } from '../src/componets/register';
import * as router from '../src/router';
import { Login } from '../src/componets/login';
import { signInWithPassword, registerWithEmail, signInWithGoogle } from '../src/lib/authentication';

jest.mock('../src/lib/authentication');

describe('register', () => {
  it('si el usuario se registrò correctamente debe direccionarse a home', () => {
    router.navigateTo = jest.fn().mockImplementation(() => {
      expect(router.navigateTo).toHaveBeenCalled();
      done();
    });
    registerWithEmail.mockResolvedValue(Promise.resolve());
    document.body.appendChild(register());
    document.querySelector('#name').value = 'reda';
    document.querySelector('#email').value = 'reda@gmail.com';
    document.querySelector('#psw').value = '123456';
    document.querySelector('#nationality').value = 'nacional';
    document.querySelector('#Bdate').value = '12-12-2003';
    document.querySelector('#ocupation').value = 'teacher';
    document.querySelector('#redaRol').value = 'especialista';
    document.querySelector('#btnregister').dispatchEvent(new Event('click'));
  });
});

describe('login', () => {
  it('si el usuario se registrò correctamente debe direccionarse a feed', (done) => {
    router.navigateTo = jest.fn().mockImplementation(() => {
      expect(router.navigateTo).toHaveBeenCalled();
      done();
    });
    signInWithPassword.mockResolvedValue(Promise.resolve());
    document.body.appendChild(Login());
    document.querySelector('#username').value = 'reda@gmail.com';
    document.querySelector('#psw').value = '12345';
    document.querySelector('.btnEnviarLogin').dispatchEvent(new Event('click'));
    // document.querySelector('.btnEnviarLogin').click()
  });

  it('el login falla con un error', (done) => {
    router.showError = jest.fn().mockImplementation(() => {
      expect(router.showError).toHaveBeenCalled();
      done();
    });
    signInWithPassword.mockResolvedValue(Promise.reject({ code: 'error' }));
    document.body.appendChild(Login());
    document.querySelector('.btnEnviarLogin').click();
    console.log('wrong');
  });
});

describe('login with google', () => {
  it('si el usuario se registrò correctamente con google debe direccionarse a feed', (done) => {
    router.navigateTo = jest.fn().mockImplementation(() => {
      expect(router.navigateTo).toHaveBeenCalled();
      done();
    });
    signInWithGoogle.mockResolvedValue(Promise.resolve());
    document.body.appendChild(Login());
    document.querySelector('.google').dispatchEvent(new Event('click'));
    // document.querySelector('.btnEnviarLogin').click()
  });

  it('el login falla con un error', (done) => {
    router.showError = jest.fn().mockImplementation(() => {
      expect(router.showError).toHaveBeenCalled();
      done();
    });
    signInWithGoogle.mockResolvedValue(Promise.reject({ code: 'error' }));
    document.body.appendChild(Login());
    document.querySelector('.google').click();
    console.log('wrong');
  });
});
