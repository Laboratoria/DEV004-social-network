export const registerPage = () => {
  //* Aqui estamos creando lo que va en HTML.
  const signInSeccion = document.createElement('seccion');
  const coverImg = document.createElement('img');
  const signInHeader = document.createElement('h1');
  const nameInput = document.createElement('input');
  const emailInput = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const SignInBtn = document.createElement('button');

  //* Estamos asignandi atributos para todos los elementos creados.
  signInSeccion.setAttribute('id', 'signInSeccion');

  signInHeader.innerHTML = 'Crea una cuenta';

  coverImg.setAttribute('id', 'LogoPetropolis');
  coverImg.setAttribute('src', './Img/LogoPetropolisSF.png');
  coverImg.setAttribute('alt', 'LogoPetropolis');

  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Escribe tu nombre');

  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('placeholder', 'mascota@petropolis.com');

  passwordLabel.setAttribute('id', 'password');
  passwordLabel.setAttribute('name', 'password');
  passwordLabel.innerHTML = 'Contraseña:';

  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'password');
  passwordInput.setAttribute('name', 'password');

  SignInBtn.setAttribute('id', 'SignInBtn');
  SignInBtn.textContent = 'Registrarse';

  //* Aqui estamos agregando todo a la sección de SignInPage
  signInSeccion.appendChild(signInHeader);
  signInSeccion.appendChild(coverImg);
  signInSeccion.appendChild(nameInput);

  signInSeccion.appendChild(emailInput);
  signInSeccion.appendChild(passwordLabel);
  signInSeccion.appendChild(passwordInput);
  signInSeccion.appendChild(SignInBtn);
  return signInSeccion;
};

//* Aqui lo llevamos todo a root.html.
// document.getElementById('root').appendChild(signInPage);
