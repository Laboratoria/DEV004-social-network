// importamos la funcion que vamos a testear
import { register } from '../src/componets/register';
import { navigateTo } from '../src/router';
import { Login } from '../src/componets/login';
import { signInWithPassword, registerWithEmail, signInWithGoogle } from '../src/lib/authentication';
import { saveUsers } from '../src/lib/firebase';

jest.mock('../src/lib/authentication', () => ({
  signInWithPassword: jest.fn().mockImplementation(() => Promise.resolve()),
  registerWithEmail: jest.fn().mockImplementation(() => Promise.resolve()),
  signInWithGoogle: jest.fn().mockImplementation(() => Promise.resolve()),
}));
jest.mock('../src/router', () => ({
  navigateTo: jest.fn(),
}));
jest.mock('../src/lib/firebase', () => ({
  saveUsers: jest.fn().mockImplementation(() => Promise.resolve()),
}));

describe('register', () => {
  it('si el usuario se registrò correctamente debe direccionarse a home', () => {
    // router.navigateTo = jest.fn().mockImplementation(() => {
    // expect(router.navigateTo).toHaveBeenCalled();
    //   done();
    // });
    // registerWithEmail.mockResolvedValue(Promise.resolve());
    document.body.appendChild(register());
    document.querySelector('#name').value = 'reda';
    document.querySelector('#email').value = 'reda@gmail.com';
    document.querySelector('#psw').value = '123456';
    document.querySelector('#nationality').value = 'nacional';
    document.querySelector('#Bdate').value = '12-12-2003';
    document.querySelector('#ocupation').value = 'teacher';
    document.querySelector('#redaRol').value = 'especialista';
    document.querySelector('#btnregister').click();
    // document.querySelector('#btnregister').dispatchEvent(new Event('submit'));
    expect(registerWithEmail).toHaveBeenCalledWith(expect.any(String), expect.any(String));
    expect(saveUsers).toHaveBeenCalledWith()
    Promise.resolve().then(() => { expect(navigateTo).toHaveBeenCalledWith('/home')});
  });
});
it('si el usuario no comepleta los datos correctamente envia error ', (done) => {
  registerWithEmail.mockResolvedValue(Promise.reject({ code: 'error' }));
  document.body.appendChild(register());
  document.querySelector('#btnregister').submit();
  router.registerError = jest.fn().mockImplementation(() => {
    expect(router.registerError).toHaveBeenCalled();
    done();
  });
});


describe('login', () => {
  it('si el usuario se registrò correctamente debe direccionarse a feed', (done) => {
    signInWithPassword.mockResolvedValue(Promise.resolve());
    document.body.appendChild(Login());
    document.querySelector('#username').value = 'reda@gmail.com';
    document.querySelector('#psw').value = '12345';
    document.querySelector('.btnEnviarLogin').dispatchEvent(new Event('submit'));
    // document.querySelector('.btnEnviarLogin').click()
    router.navigateTo = jest.fn().mockImplementation(() => {
      expect(router.navigateTo).toHaveBeenCalled();
      done();
    });
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
    document.querySelector('.google').dispatchEvent(new Event('submit'));
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
