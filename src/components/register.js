import { createUser } from '../lib/firebase';

const root = document.getElementById('root');
export const register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.classList.add('log');
  registerDiv.innerHTML += `
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
        </section>`;
  root.appendChild(registerDiv);
};
register();

document.querySelector('#create-account').addEventListener('click', () => {
  const signUpName = document.getElementById('register-name').value;
  const signUpEmail = document.getElementById('register-email').value;
  const signUpPassword = document.getElementById('register-password').value;

  try {
    createUser(signUpEmail, signUpPassword, signUpName);
    console.log(signUpEmail, signUpPassword);
  } catch (error) {
    console.log('error');
  }
/* signUp(signUpEmail,signUpPassword); */
});
