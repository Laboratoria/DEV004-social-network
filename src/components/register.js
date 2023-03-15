import { createUser } from '../lib/firebase';

const root = document.getElementById('root');
export const register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.classList.add('log');
  registerDiv.innerHTML += `<header>
  <img src="./img/logo.png"></header><section class="register-container">
  </header>
  <section class="register-container">
    <h1>Tú</h1>
    <input type="text"
    id="register-name"
    name=""
    placeholder="Ingrese su nombre" />
        <input type="email"
          id="register-email"
          name=""
          placeholder="Ingrese su email" required=""/>
        <input type="password"
          id="register-password"
          placeholder="Ingrese una contraseña"/>
          <input type="password"
          id="register-password2"
          placeholder="Repita su contraseña"/>
          <h1>Tu mascota</h1>
          <input type="text"
          id="pet-name"
          name=""
          placeholder="Nombre de mascota" />
          <input type="text"
          id="specie-name"
          name=""
          placeholder="Especie" />
        <button type="submit" id="create-account">Registrarse</button>
        <button type="submit" id="back-button">Volver a incio</button>
        </section>`;
  root.appendChild(registerDiv);

  document.querySelector('#create-account').addEventListener('click', () => {
    const signUpEmail = document.getElementById('register-email').value;
    const signUpPassword = document.getElementById('register-password').value;
    createUser(signUpEmail, signUpPassword)
      .then(() => {
        window.location.href = '/';
      });
  });
  const buttonBack = document.getElementById('back-button');
  buttonBack.addEventListener('click', () => {
    window.location.href = '/';
  });
  return registerDiv;
};
