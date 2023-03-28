import { updateProfile } from 'firebase/auth';
import { authGoogle, registerWithEmail } from '../lib/authentication';
import { auth } from '../lib/firebaseConfig';

export const register = (onNavigate) => {
  //* Aqui estamos creando lo que va en HTML.
  const signInSection = document.createElement('section');
  const coverImg = document.createElement('img');
  const signInHeader = document.createElement('h1');
  const nameInput = document.createElement('input');
  const formRegister = document.createElement('form');
  const emailInput = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const SignInLabel = document.createElement('label');
  const SignInBtn = document.createElement('button');
  const BtnGoogle = document.createElement('img');
  const loginBtn = document.createElement('button');

  //* Estamos asignandi atributos para todos los elementos creados.
  signInSection.setAttribute('id', 'signInSeccion');
  signInHeader.innerHTML = 'Crea una cuenta';

  coverImg.setAttribute('id', 'LogoPetropolis');
  coverImg.setAttribute('src', './Img/LogoPetropolisSF.png');
  coverImg.setAttribute('alt', 'LogoPetropolis');

  formRegister.setAttribute('id', 'form');

  nameInput.setAttribute('type', 'text');

  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Escribe tu nombre');

  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('placeholder', 'mascota@petropolis.com');

  passwordLabel.setAttribute('id', 'password');
  passwordLabel.setAttribute('name', 'password');
  passwordLabel.innerHTML = 'Contraseña:';

  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'password');
  passwordInput.setAttribute('name', 'password');

  SignInBtn.setAttribute('id', 'SignInBtn');
  SignInBtn.textContent = 'Registrarse';

  SignInLabel.setAttribute('id', 'SignInLabel');
  SignInLabel.setAttribute('name', 'SignInLabel');
  SignInLabel.innerHTML = '¿Ya tienes cuenta?';

  loginBtn.setAttribute('id', 'loginBtn');
  loginBtn.textContent = 'Iniciar Sesión';

  BtnGoogle.setAttribute('id', 'BtnGoogle');
  BtnGoogle.setAttribute('src', './Img/BtnGoogle.png');
  BtnGoogle.setAttribute('alt', 'BtnGoogle');
  //* Aqui estamos agregando todo a la sección de SignInPage
  signInSection.appendChild(signInHeader);
  signInSection.appendChild(coverImg);
  formRegister.appendChild(nameInput);
  formRegister.appendChild(emailInput);
  formRegister.appendChild(passwordLabel);
  formRegister.appendChild(passwordInput);
  formRegister.appendChild(SignInBtn);
  formRegister.appendChild(SignInLabel);
  formRegister.appendChild(loginBtn);
  formRegister.appendChild(BtnGoogle);
  signInSection.appendChild(formRegister);

  loginBtn.addEventListener('click', () => onNavigate('/login'));
  formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const name = nameInput.value;
    console.log(email, password);

    try {
      const UserCredentials = await registerWithEmail(email, password);

      updateProfile(auth.currentUser, {
        displayName: nameInput.value,
        // photoURL: 'https://example.com/john-doe/profile.jpg',
      }).then(() => {
        // Profile updated!
      }).catch((error) => {
        console.log(error);
      });

      localStorage.setItem('name', name);
      onNavigate('/welcome');
      // eslint-disable-next-line no-console
      console.log(UserCredentials);
    } catch (error) {
      if (error.code === 'auth/weak-password') {
        alert('error en contraseña');
      }
      if (error.code === 'auth/email-alre-in-use') {
        alert('El correo ya está registrado');
      }
    }
  });

  BtnGoogle.addEventListener('click', async () => {
    try {
      await authGoogle();
      onNavigate('/welcome');
      const user = auth.currentUser;
      const name = user.displayName;
      localStorage.setItem('name', name);
    } catch (error) {
      alert('Google error');
    }
  });

  return signInSection;
};
