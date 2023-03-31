import { home } from '../src/components/home';
import { register } from '../src/components/register';
import { registerWithEmail } from '../src/lib/authentication';
import { login } from '../src/components/login';

describe('home', () => {
  it('se agregan los elementos HTML a la sección de inicio correctamente', async () => {
    const onNavigate = jest.fn();
    const homeSection = home(onNavigate);
    document.body.appendChild(homeSection);

    const welcomeHeader = homeSection.querySelector('h1');
    const coverImg = homeSection.querySelector('#LogoPetropolis');
    const loginButton = homeSection.querySelector('#loginButton');
    const signInButton = homeSection.querySelector('#signInButton');
    const ImgLove = homeSection.querySelector('#ImgLove');

    expect(welcomeHeader.innerHTML).toBe('Bienvenido');
    expect(coverImg.getAttribute('src')).toBe('./Img/LogoPetropolisSF.png');
    expect(loginButton.textContent).toBe('Iniciar Sesión');
    expect(signInButton.textContent).toBe('Registrarse');
    expect(ImgLove.getAttribute('src')).toBe('./Img/AM LOS ANIMALES.png');
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

    setTimeout(() => {
      expect(onNavigate).toHaveBeenCalledWith('/login');
      // eslint-disable-next-line no-undef
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
      // eslint-disable-next-line no-undef
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
      // eslint-disable-next-line no-undef
      done();
    }, 0);
  });
});
