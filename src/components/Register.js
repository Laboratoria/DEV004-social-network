import { createUser } from '../lib/autenticar';
import { onNavigate } from '../router/index';

export const Register = () => {
  /*const HomeDiv = document.createElement('section');
  const header = document.createElement('header');
  const img = document.createElement('img');
  img.setAttribute('src', './img/logo.png');
  img.setAttribute('alt', 'Logo de la marca MaMá Genial');
  img.id = 'logoEncabezado';
  header.appendChild(img);
  HomeDiv.appendChild(header);*/
  const HomeDiv = document.createElement('main');
  const img = document.createElement('img');
  img.setAttribute('src', './img/logo.png');
  img.setAttribute('alt', 'Logo de la marca MaMá Genial');
  img.id = 'logoEncabezado';
  const h2 = document.createElement('h2');
  h2.textContent = 'Bienvenida al registro';
  const inputName = document.createElement('input');
  inputName.placeholder = 'Ingresa tu Nombre';
  inputName.setAttribute('type', 'text');
  const inputEmail = document.createElement('input');
  inputEmail.placeholder = 'Ingresa tu correo';
  inputEmail.setAttribute('type', 'email');
  const inputPassword = document.createElement('input');
  inputPassword.placeholder = 'Ingresa tu contraseña';
  inputPassword.setAttribute('type', 'password');
  const buttonHome = document.createElement('button');
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';

  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  buttonRegister.addEventListener('click', () => {
    if (inputEmail.value === '' || inputPassword.value === '') {
      swal({
        title: '¡Completa todos los campos!',
        text: 'la contraseña debe ser mayor a 6 digitos',
        icon: 'info',
        dangerMode: true,
      });
    } else {
      console.log(inputName.value, inputEmail.value, inputPassword.value); // promesa pendiente
      createUser(inputName.value, inputEmail.value, inputPassword.value)
        .then((res) => { // then para promesa cumplida
        // enviarlo al muro
          console.log(res);
        })
        .catch((error) => { // para promesa fallida
          console.log(error);
        });
    }
  });

  HomeDiv.append(img, h2, inputName, inputEmail, inputPassword, buttonRegister, buttonHome);

  return HomeDiv;
};
