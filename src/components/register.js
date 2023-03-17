import { createUser, savedUser } from '../lib/firebase';

const root = document.getElementById('root');
export const register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.classList.add('log');
  registerDiv.innerHTML += `<header>
  <img src="./img/logo.png" id="logo"></header>
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
    const displayName = document.getElementById('register-name').value;
    const signUpEmail = document.getElementById('register-email').value;
    const signUpPassword = document.getElementById('register-password').value;
    const petName = document.getElementById('pet-name').value;
    const petSpecie = document.getElementById('specie-name').value;
    createUser(signUpEmail, signUpPassword)
      .then((usercredentials) => {
        const user = usercredentials.user;
        savedUser(displayName, signUpEmail, signUpPassword, petName, petSpecie, user.uid);
        window.location.href = '/';
      })
      // eslint-disable-next-line consistent-return
      .catch((error) => {
        const signUpName = document.getElementById('register-name').value;
        const signUpRepeatPssword = document.getElementById('register-password2').value;
        const signUpPetName = document.getElementById('pet-name').value;
        const signUpSpecieName = document.getElementById('specie-name').value;
        const capitalLeters = signUpPassword.match(/[A-Z]/g);
        const lowercase = signUpPassword.match(/[a-z]/g);
        const numbers = signUpPassword.match(/[0-9]/g);
        const characters = signUpPassword.match(/[\W]/g);
        const validateEmail = /\S+@\S+/.test(signUpEmail);
        if (signUpName === '') {
          // eslint-disable-next-line no-alert
          alert('Ingrese su nombre');
          return false;
        } if (signUpEmail === '') {
          // eslint-disable-next-line no-alert
          alert('Ingrese email');
          return false;
        } if (validateEmail === false) {
          // eslint-disable-next-line no-alert
          alert('Ingrese email correcto');
          return false;
        } if (signUpPassword === '') {
          // eslint-disable-next-line no-alert
          alert('Ingrese contraseña');
          return false;
        } if (signUpPassword.length < 8) {
          // eslint-disable-next-line no-alert
          alert('Ingrese 8 digitos');
          return false;
        } if (capitalLeters < 2 || lowercase < 2 || numbers < 2 || characters < 2) {
          // eslint-disable-next-line no-alert
          alert('debe incluir como minimos: 2 mayusculas, 2 minusculas, 2 numeros, 2 simbolos');
          return false;
        } if (signUpRepeatPssword === '') {
          // eslint-disable-next-line no-alert
          alert('Ingrese la repeticion de la contraseña');
          return false;
        } if (signUpPassword !== signUpRepeatPssword) {
          // eslint-disable-next-line no-alert
          alert('Las contraseñas no son iguales');
          return false;
        } if (signUpPetName === '') {
          // eslint-disable-next-line no-alert
          alert('Ingrese nombre de la mascota');
          return false;
        } if (signUpSpecieName === '') {
          // eslint-disable-next-line no-alert
          alert('Ingrese la especie de la mascota');
          return false;
        }
        return error;
      });
  });

  const buttonBack = document.getElementById('back-button');
  buttonBack.addEventListener('click', () => {
    window.location.href = '/';
  });
  return registerDiv;
};
