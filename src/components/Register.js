import { createUser } from '../lib/autenticar';
import { onNavigate } from '../router/index';

export const Register = () => {
  const HomeDiv = document.createElement('main');
  HomeDiv.textContent = 'Bienvenida al registro';
  const inputName = document.createElement('input');
  inputName.placeholder = 'Ingresa tu Nombre';
  inputName.setAttribute('type', 'email');
  const inputEmail = document.createElement('input');
  inputEmail.placeholder = 'Ingresa tu correo';
  inputEmail.setAttribute('type', 'email');
  const inputPassword = document.createElement('input');
  inputPassword.placeholder = 'Ingresa tu contraseña';
  inputPassword.setAttribute('type', 'password');
  const buttonHome = document.createElement('button');
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'registrate';

  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  buttonRegister.addEventListener('click', () => {
    if (inputEmail.value === '' || inputPassword.value === '') {
      swal({
        title: 'Verifica tus datos?',
        text: 'la contraseña debe ser mayo a 6',
        icon: 'warning',
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

  HomeDiv.append(inputName, inputEmail, inputPassword, buttonRegister, buttonHome);

  return HomeDiv;
};
