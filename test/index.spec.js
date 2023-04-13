import { home } from '../src/components/home';
import { register } from '../src/components/register';
import { registerWithEmail, signOff } from '../src/lib/authentication';
import { login } from '../src/components/login';
import { timeline } from '../src/components/timeline';
import { savePublic, postData } from '../src/lib/firestore';

describe('home', () => {
  it('se agregan los elementos HTML a la sección de inicio correctamente', async () => {
    const onNavigate = jest.fn();
    const homeSection = home(onNavigate);
    document.body.appendChild(homeSection);

    const welcomeHeader = homeSection.querySelector('h1');
    // const coverImg = homeSection.querySelector('#LogoPetropolis');
    const loginButton = homeSection.querySelector('#loginButton');
    const signInButton = homeSection.querySelector('#signInButton');
    // const ImgLove = homeSection.querySelector('#ImgLove');

    expect(welcomeHeader.innerHTML).toBe('Bienvenido');
    // expect(coverImg.getAttribute('src')).toBe('./Img/LogoPetropolisSF.png');
    expect(loginButton.textContent).toBe('Iniciar Sesión');
    expect(signInButton.textContent).toBe('Registrarse');
    // expect(ImgLove.getAttribute('src')).toBe('./Img/amolosanimales.png');
  });
  it('si el usuario llama al evento clic  manda llamar la funcion onNavigate con el parametro register', async () => {
    const onNavigate = jest.fn();
    const signInButton = document.createElement('button');

    home(onNavigate);
    signInButton.dispatchEvent(new Event('click'));

    setTimeout((done) => {
      expect(onNavigate).toHaveBeenCalledWith('/register');

      done();
    }, 0);
  });
  it('si el usuario llama al evento clic  manda llamar la funcion onNavigate con el parametro login', async () => {
    const onNavigate = jest.fn();
    const loginButton = document.createElement('button');

    home(onNavigate);
    loginButton.dispatchEvent(new Event('click'));

    setTimeout((done) => {
      expect(onNavigate).toHaveBeenCalledWith('/login');
      done();
    }, 0);
  });
});
jest.mock('../src/lib/authentication');

describe('register', (done) => {
  it('se registra a un nuevo usuario', async () => {
    const onNavigate = jest.fn();
    const email = 'user@example.com';
    const password = 'password123';
    const UserCredentials = { user: { uid: '123' } };
    registerWithEmail.mockResolvedValueOnce(UserCredentials);

    const form = document.createElement('form');
    const emailInput = document.createElement('input');
    emailInput.value = email;
    const passwordInput = document.createElement('input');
    passwordInput.value = password;
    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    register(onNavigate);
    form.dispatchEvent(new Event('submit'));
    setTimeout(() => {
      expect(registerWithEmail).toHaveBeenCalledWith(email, password);

      done();
    }, 0);
    setTimeout(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith('name', '');
      done();
    }, 0);
    setTimeout(() => {
      expect(onNavigate).toHaveBeenCalledWith('/welcome');
      done();
    }, 0);
  });

  it('si el usuario se registrò correctamente debe mandar llamar la funcion onNavigate con el parametro welcome', async () => {
    const onNavigate = jest.fn();
    const SignInBtn = document.createElement('button');

    register(onNavigate);
    SignInBtn.dispatchEvent(new Event('click'));

    setTimeout(() => {
      expect(onNavigate).toHaveBeenCalledWith('/welcome');
      done();
    }, 0);
  });

  it('si el usuario ya tiene cuenta  debe mandar llamar la funcion onNavigate con el parametro welcome', async () => {
    const onNavigate = jest.fn();
    const loginBtn = document.createElement('button');

    register(onNavigate);
    loginBtn.dispatchEvent(new Event('click'));

    setTimeout(() => {
      expect(onNavigate).toHaveBeenCalledWith('/login');
      done();
    }, 0);
  });
});

jest.mock('firebase/auth');

describe('login', (done) => {
  it('si el usuario inicia sesión  correctamente debe mandar llamar la funcion onNavigate con el parametro welcome', async () => {
    const onNavigate = jest.fn();
    const loginBtn = document.createElement('button');

    login(onNavigate);
    loginBtn.dispatchEvent(new Event('click'));

    setTimeout(() => {
      expect(onNavigate).toHaveBeenCalledWith('/welcome');

      done();
    }, 0);
  });
});

jest.mock('../src/lib/firestore', () => ({
  postData: jest.fn(() => ({
    forEach: (callback) => {
      callback({
        data: () => ({
          likes: [],
          name: 'Mariano',
          email: 'mariano@example.com',
          publicacion: 'Hello',
        }),
      });
    },
  })),
}));

describe('timeline', (done) => {
  it('se muestra la publicación', async () => {
    document.body.innerHTML = `
      <div id="feedSection"></div>
    `;

    timeline(() => { });
    setTimeout(() => {
      expect(postData).toHaveBeenCalled();

      done();
    }, 0);
    expect(document.getElementById('feedSection').innerHTML).toContain('Hello');
  });

  jest.mock('../src/lib/firestore', () => ({
    savePublic: jest.fn(() => {
      throw new Error('Some error');
    }),
  }));

  it('Error en la funcion  savePublic', async () => {
    document.body.innerHTML = `
      <form id="inputContainer">
        <textarea id="inputPost"></textarea>
        <button id="postButton"></button>
      </form>
      <div id="feedSection"></div>
    `;

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const postButton = document.getElementById('postButton');
    postButton.click();
    await Promise.resolve();
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith(new Error('error'));

      done();
    }, 0);
    consoleSpy.mockRestore();
  });
  jest.mock('../src/lib/authentication', () => ({
    signOff: jest.fn(),
  }));

  it('se llama a signOff ', async () => {
    document.body.innerHTML = `
      <footer id="footerHTML">
        <img id="logOutIcon">
      </footer>
    `;

    const logOutIcon = document.getElementById('logOutIcon');
    logOutIcon.click();
    await Promise.resolve();
    setTimeout(() => {
      expect(signOff).toHaveBeenCalled();

      done();
    }, 0);
  });
});

jest.mock('../src/lib/firestore', () => ({
  savePublic: jest.fn(),
}));
describe('savePublic', () => {
  test('Debe guardar la publicación', async () => {
    const mockSavePublic = savePublic.mockResolvedValueOnce();
    const post = 'Esto es un post';
    const name = 'Mariano';
    const email = 'mariano@example.com';
    const timestamp = Date.now();

    await savePublic(post, name, email, timestamp);

    expect(mockSavePublic).toHaveBeenCalledWith(post, name, email, timestamp);
  });
});
