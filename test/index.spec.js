import { createUserWithEmailAndPassword } from 'firebase/auth';
import { home } from '../src/components/home';
import { register } from '../src/components/register';
import { auth } from '../src/lib/firebaseConfig';

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
});
jest.mock('firebase/auth');

describe('register', (done) => {
  it('se registra a un nuevo usuario', async () => {
    const onNavigate = jest.fn();
    const email = 'user@example.com';
    const password = 'password123';
    const UserCredentials = { user: { uid: '123' } };
    createUserWithEmailAndPassword.mockResolvedValueOnce(UserCredentials);

    const form = document.createElement('form');
    const emailInput = document.createElement('input');
    emailInput.value = email;
    const passwordInput = document.createElement('input');
    passwordInput.value = password;
    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    await register(onNavigate);
    form.dispatchEvent(new Event('submit'));
    setTimeout(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);

      done();
    }, 0);
    setTimeout(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith('name', '');
      // eslint-disable-next-line no-undef
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

    await register(onNavigate);
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

    await register(onNavigate);
    loginBtn.dispatchEvent(new Event('click'));

    setTimeout(() => {
      expect(onNavigate).toHaveBeenCalledWith('/login');
      done();
    }, 0);
  });
});
