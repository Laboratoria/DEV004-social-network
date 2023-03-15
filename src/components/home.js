import { singIn } from '../lib/firebase';

const root = document.getElementById('root');
export const home = () => {
  const singInDiv = document.createElement('div');
  singInDiv.classList.add('login');
  singInDiv.innerHTML += `<header>
  <img src="./img/logo.png"><h1 id="welcome">Bienvenida</h1></header><section class="register-container">
  </header>
  <h1>Inicio de sesión</h1>
  <input type="email" id="email" placeholder="Ingrese su correo" /> 
  <input type="password" id="password" placeholder="Ingrese su contraseña"/>
  <button type="submit" id="signin-button">Iniciar Sesión</button>
  <p>¿No tienes cuenta?,</p><a id="here">Registrate aquí</a>`;
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
        window.location.href('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
};
