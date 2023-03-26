/* eslint-disable no-alert */
import { createUser, savedUser, updateName } from '../lib/firebase';

const root = document.getElementById('root');
export const register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.classList.add('log');
  registerDiv.innerHTML += `<header>
  <img src="./img/logo.png" id="logo"></header>
  <section class="register-container">
    <h1>Tú</h1>
      <input type="text" id="register-name" placeholder="Ingrese su nombre" />
      <input type="email" id="register-email" placeholder="Ingrese su email" required=""/>
      <input type="password" id="register-password" placeholder="Ingrese una contraseña"/>
      <input type="password" id="register-password2" placeholder="Repita su contraseña"/>
    <h1>Tu mascota</h1>
      <input type="text" id="pet-name" placeholder="Nombre de mascota" />
      <input type="text" id="specie-name" placeholder="Especie" />
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
    // eslint-disable-next-line no-use-before-define
    const formOK = validateData();
    if (!formOK) {
      return;
    }
    createUser(signUpEmail, signUpPassword)
      .then((usercredentials) => {
        const user = usercredentials.user;
        if (displayName) {
          updateName(displayName);
        }
        return savedUser(displayName, signUpEmail, signUpPassword, petName, petSpecie, user.uid);
      })
      .then(() => {
        window.location.href = '/feed';
      });
  });

  const buttonBack = document.getElementById('back-button');
  buttonBack.addEventListener('click', () => {
    window.location.href = '/';
  });
  return registerDiv;
};

function validateData() {
  const displayName = document.getElementById('register-name').value;
  const signUpEmail = document.getElementById('register-email').value;
  const signUpPassword = document.getElementById('register-password').value;
  const petName = document.getElementById('pet-name').value;
  const petSpecie = document.getElementById('specie-name').value;
  const signUpRepeatPssword = document.getElementById('register-password2').value;
  const capitalLeters = signUpPassword.match(/[A-Z]/g);
  const lowercase = signUpPassword.match(/[a-z]/g);
  const numbers = signUpPassword.match(/[0-9]/g);
  const characters = signUpPassword.match(/[\W]/g);
  const validateEmail = /\S+@\S+/.test(signUpEmail);
  const validatePetName = /[0-9]/g.test(petName);
  const validatePetSpecie = /[0-9]/g.test(petSpecie);
  if (displayName === '') {
    alert('Ingrese su nombre');
    return false;
  } if (signUpEmail === '') {
    alert('Ingrese email');
    return false;
  } if (validateEmail === false) {
    alert('Ingrese email correcto');
    return false;
  } if (signUpPassword === '') {
    alert('Ingrese contraseña');
    return false;
  } if (signUpPassword.length < 8) {
    alert('Ingrese 8 digitos');
    return false;
  } if (capitalLeters < 2 || lowercase < 2 || numbers < 2 || characters < 2) {
    alert('debe incluir como minimos: 2 mayusculas, 2 minusculas, 2 numeros, 2 simbolos');
    return false;
  } if (signUpRepeatPssword === '') {
    alert('Ingrese la repeticion de la contraseña');
    return false;
  } if (signUpPassword !== signUpRepeatPssword) {
    alert('Las contraseñas no son iguales');
    return false;
  } if (petName === '') {
    alert('Ingrese nombre de la mascota');
    return false;
  } if (validatePetName === true) {
    alert('Ingrese nombre: solo letras');
    return false;
  } if (petSpecie === '') {
    alert('Ingrese la especie de la mascota');
    return false;
  } if (validatePetSpecie === true) {
    alert('Ingrese especie: solo letras');
    return false;
  }
  return true;
}
