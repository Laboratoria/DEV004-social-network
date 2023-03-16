import {
  createUser,
  loginWithGoogle,
  provider,
  singIn,
} from '../lib/firebase';

const root = document.getElementById('root');
export const home = () => {
  const singInDiv = document.createElement('div');
  singInDiv.classList.add('login');
  singInDiv.innerHTML += `<header>
  <img src="./img/logo.png" id="logo"><h1 id="welcome">Bienvenida</h1></header><section class="register-container">
  </header>
  <h1>Inicio de sesión</h1>
  <input type="email" id="email" placeholder="Ingrese su correo" /> 
  <input type="password" id="password" placeholder="Ingrese su contraseña"/>
  <button type="submit" id="signin-button">Iniciar Sesión</button>
  <p>¿No tienes cuenta?,</p><a id="here">Registrate aquí</a>
  <img src="./img/google.png" id="google">`;
  root.appendChild(singInDiv);

  const signInHere = document.getElementById('here');
  signInHere.addEventListener('click', () => {
    window.location.href = '/register';
  });

  const submitButton = document.getElementById('signin-button');
  submitButton.addEventListener('click', () => {
    const signInEmail = document.getElementById('email').value;
    const signInPassword = document.getElementById('password').value;

    singIn(signInEmail, signInPassword)
      .then((usercredentials) => {
        const user = usercredentials.user;
        localStorage.setItem('idUser', user);
        window.location.href = '/';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    const submitGoogle = document.getElementById('google');
    submitGoogle.addEventListener('click', () => {
      loginWithGoogle().then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = provider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem('user', JSON.stringify(user));
        createUser(user, user.displayName);
      }); /* .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      }); */
    });
  });
  return singInDiv;
};
