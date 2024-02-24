import { onNavigate } from '../router';
import { registrarUsuaria } from '../lib/firebase';

export const register = () => {
  // crea contenedor principal
  const section = document.createElement('section');
  // titulo Registro
  const tittleReg = document.createElement('h2');
  tittleReg.textContent = 'Registrate';
  tittleReg.className = 'tittleReg';
  // h4
  const inputName = document.createElement('input');
  inputName.placeholder = ' Nombre';
  inputName.className = 'inpName';

  // Email
  const inputEmail = document.createElement('input');
  inputEmail.placeholder = 'E-mail';
  inputEmail.className = 'inpEmail';

  // Password
  const inputPassword = document.createElement('input');
  inputPassword.placeholder = 'Contraseña';
  inputPassword.className = 'inpPass';

  // Confirma
  const confirm = document.createElement('input');
  confirm.placeholder = 'Confirma tu contraseña';
  confirm.className = 'confirm';

  // btn Register
  const buttonRegister = document.createElement('button');
  const buttonHome = document.createElement('button');
  // COMO OCUPO EL SECTION PARA EL CSS;
  section.id = 'sectionRegister';
  // modifica propiedades de los elemento
  inputEmail.setAttribute('type', 'email');
  inputPassword.setAttribute('type', 'password');
  confirm.setAttribute('type', 'password');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.className = 'btnReg';
  buttonHome.textContent = 'Volver al home';
  buttonHome.className = 'btnBack';
  buttonRegister.addEventListener('click', () => {
    registrarUsuaria().then(() => {
      onNavigate('/wall');
    });

    registrarUsuaria(inputEmail.value, inputPassword.value);
  });
  buttonHome.addEventListener('click', () => {
    // llama funcion navigate y pasa string con la ruta
    onNavigate('/');
  });
  // suman elementos a contenedor madre
  // eslint-disable-next-line max-len
  section.append(tittleReg, inputName, inputEmail, inputPassword, confirm, buttonRegister, buttonHome);
  // retorna contenedor madre
  return section;
};
