// importamos la funcion que vamos a testear
import { register } from '../src/componets/register';
import { navigateTo, registerError, showError } from '../src/router';
import { Login } from '../src/componets/login';
import { signInWithPassword, registerWithEmail, signInWithGoogle } from '../src/lib/authentication';
import { saveUsers, createpost, updatePost, addLike, getpost, deletePost } from '../src/lib/firebase';
import { feed } from '../src/componets/feed';

jest.mock('../src/lib/authentication', () => ({
  signInWithPassword: jest.fn().mockImplementation(() => Promise.resolve()),
  registerWithEmail: jest.fn().mockImplementation(() => Promise.resolve()),
  signInWithGoogle: jest.fn().mockImplementation(() => Promise.resolve()),
}));
jest.mock('../src/router', () => ({
  navigateTo: jest.fn(),
  registerError: jest.fn(),
  showError: jest.fn(),

}));

jest.mock('../src/lib/firebase', () => ({
  saveUsers: jest.fn().mockImplementation(() => Promise.resolve()),
  createpost: jest.fn().mockImplementation(() => Promise.resolve()),
  getpost: jest.fn().mockImplementation(() => Promise.resolve(
    [{
      id: '1',
      usuario: 'prueba@gmail.com',
      titulo: 'titulo',
      descripcion: 'post',
      likes: [],
    }],
  )),
  // este es un obejeto, no una funcion
  auth: { currentUser: { email: 'correo@gmail.com' } },
  updatelike: jest.fn().mockImplementation(() => Promise.resolve()),
  addLike: jest.fn().mockImplementation(() => Promise.resolve()),
  deletePost: jest.fn().mockImplementation(() => Promise.resolve()),
  updatePost: jest.fn().mockImplementation(() => Promise.resolve()),
  // auth: jest.fn(() => ({ currentUser: { email: 'correo@gmail.com' } })),
  // auth: jest.fn().mockImplementation(() => ({ currentUser: { email: 'correo@gmail.com' } }))
  // auth: jest.fn().mockReturnValue(true),
}));

jest.spyOn(Storage.prototype, 'getItem');
jest.spyOn(window, 'confirm');
Storage.prototype.getItem = jest.fn(() => {
  console.log('hola Mock');
  return JSON.stringify({ email: 'reda@gmail.com' });
});
// class SessionStorageMock {
//   constructor() {
//     this.store = {};
//   }
// }
// const sessionStorageMockInstance = new SessionStorageMock();
// sessionStorageMockInstance.getItem = jest.fn(() => {
//   console.log('hola Mock');
//   return JSON.stringify({ email: 'reda@gmail.com' });
// });
// global.sessionStorage = sessionStorageMockInstance;

describe('register', () => {
  it('si el usuario se registrò correctamente debe direccionarse a home', (done) => {
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
    setTimeout(() => {
      expect(saveUsers).toHaveBeenCalled();
      expect(navigateTo).toHaveBeenCalledWith('/home');
      done();
    });
  });
});

it('si el usuario no comepleta los datos correctamente envia error ', (done) => {
  registerWithEmail.mockRejectedValue({ code: 'error' });
  document.body.appendChild(register());
  document.querySelector('#btnregister').click();
  setTimeout(() => {
    expect(registerError).toHaveBeenCalled();
    done();
  });
});

describe('login', () => {
  it('si el usuario se loguea correctamente debe direccionarse a feed', (done) => {
    // no entiendo si esta linea es necesaria, la 59
    signInWithPassword.mockResolvedValue(Promise.resolve());
    document.body.appendChild(Login());
    document.querySelector('#username').value = 'reda@gmail.com';
    document.querySelector('#psw').value = '12345';
    document.querySelector('.btnEnviarLogin').dispatchEvent(new Event('click'));
    // document.querySelector('.btnEnviarLogin').click()
    // router.navigateTo = jest.fn().mockImplementation(() => {
    expect(signInWithPassword).toHaveBeenCalledWith(expect.any(String), expect.any(String));
    setTimeout(() => {
      expect(navigateTo).toHaveBeenCalledWith('/feed');
      done();
    });
    // });
  });

  it('el login falla con un error', (done) => {
    // showError = jest.fn().mockImplementation(() => {
    signInWithPassword.mockRejectedValue({ code: 'error' });
    document.body.appendChild(Login());
    document.querySelector('.btnEnviarLogin').click();
    setTimeout(() => {
      expect(showError).toHaveBeenCalled();
      done();
    });
  });
});

describe('login with google', () => {
  it('si el usuario se registrò correctamente con google debe direccionarse a feed', (done) => {
    // router.navigateTo = jest.fn().mockImplementation(() => {
    signInWithGoogle.mockResolvedValue(Promise.resolve());
    document.body.appendChild(Login());
    document.querySelector('.google').dispatchEvent(new Event('click'));
    expect(signInWithGoogle).toHaveBeenCalled();
    setTimeout(() => {
      expect(navigateTo).toHaveBeenCalledWith('/feed');
      done();
    });

    // document.querySelector('.btnEnviarLogin').click()
  });

  it('el login de google falla con un error', (done) => {
    signInWithGoogle.mockResolvedValue({ code: 'error' });
    document.body.appendChild(Login());
    document.querySelector('.google').click();
    setTimeout(() => {
      expect(showError).toHaveBeenCalled();
      done();
    });
  });
});
describe('feed', () => {
  it('el usuario retorna un post y llama a la funcion dibujar después del crear el post', (done) => {
    document.body.appendChild(feed());
    document.querySelector('#post').value = 'post';
    document.querySelector('#postTitle').value = 'titulo';
    document.querySelector('.postContainer').submit();
    createpost.mockResolvedValue();
    // auth.mockReturnValue({ currentUser: { email: 'correo@gmail.com' } });
    setTimeout(() => {
      expect(createpost).toHaveBeenCalled();
      done();
    });
  });

  it('el usuario da like en un post', (done) => {
    document.body.appendChild(feed());
    document.querySelector('#post').value = 'post';
    document.querySelector('#postTitle').value = 'titulo';
    document.querySelector('.postContainer').submit();
    createpost.mockResolvedValue();
    addLike.mockResolvedValue();
    // obtener un post y darle like
    document.querySelector('#like-1').click();

    // auth.mockReturnValue({ currentUser: { email: 'correo@gmail.com' } });
    setTimeout(() => {
      expect(addLike).toHaveBeenCalledWith('1', ['correo@gmail.com']);
      done();
    });
  });

  it('el usuario elimina su post', (done) => {
    document.body.appendChild(feed());
    document.querySelector('#post').value = 'post';
    document.querySelector('#postTitle').value = 'titulo';
    document.querySelector('.postContainer').submit();
    createpost.mockResolvedValue();
    window.confirm.mockReturnValue(true);
    document.querySelector('#btnDeletePost').click();

    // auth.mockReturnValue({ currentUser: { email: 'correo@gmail.com' } });
    setTimeout(() => {
      expect(window.confirm).toHaveBeenCalled();
      expect(deletePost).toHaveBeenCalled();
      done();
    });
  });

  it('el usuario edita su post', (done) => {
    document.body.appendChild(feed());
    document.querySelector('#post').value = 'post';
    document.querySelector('#postTitle').value = 'titulo';
    document.querySelector('.postContainer').submit();
    createpost.mockResolvedValue();

    document.querySelector('#btnEditPost').click();

    // auth.mockReturnValue({ currentUser: { email: 'correo@gmail.com' } });
    setTimeout(() => {
      expect(document.getElementById('1').getAttribute('disabled')).toBeNull();
      expect(document.getElementById('titulo-1').getAttribute('disabled')).toBeNull();
      done();
    });
  });

  it('el usuario guarda su post', (done) => {
    document.body.appendChild(feed());
    document.querySelector('#post').value = 'post';
    document.querySelector('#postTitle').value = 'titulo';
    document.querySelector('.postContainer').submit();
    createpost.mockResolvedValue();

    document.querySelector('#btnEditPost').click();
    document.querySelector('#btnSaveEditPost').click();

    // auth.mockReturnValue({ currentUser: { email: 'correo@gmail.com' } });
    setTimeout(() => {
      expect(updatePost).toHaveBeenCalled();
      done();
    });
  });
});
