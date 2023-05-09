import { onNavigate } from '../router';
import { registrarUsuaria } from '../lib/firebase';

export const register = () => {
  // crea contenedor principal
  const section = document.createElement('section');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const buttonHome = document.createElement('button');
  // COMO OCUPO EL SECTION PARA EL CSS;
  section.id = 'sectionRegister';
  // modifica propiedades de los elemento
  inputEmail.setAttribute('type', 'email');
  inputPassword.setAttribute('type', 'password');
  buttonRegister.textContent = 'Registrate';
  buttonHome.textContent = 'Volver al home';
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
  section.append(inputEmail, inputPassword, buttonRegister, buttonHome);
  // retorna contenedor madre
  return section;
};
