export const login = () => {
  //* Aqui estamos creando lo que va en HTML.
  const loginSection = document.createElement('section');
  const coverImg = document.createElement('img');
  const loginHeader = document.createElement('h1');
  const nameInput = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const loginBtn = document.createElement('button');

  //* Estamos asignandi atributos para todos los elementos creados.
  loginSection.setAttribute('id', 'loginSection');

  loginHeader.innerHTML = 'Ingresa tus datos';

  coverImg.setAttribute('id', 'LogoPetropolis');
  coverImg.setAttribute('src', './Img/LogoPetropolisSF.png');
  coverImg.setAttribute('alt', 'LogoPetropolis');

  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Escribe tu nombre');

  passwordLabel.setAttribute('id', 'password');
  passwordLabel.setAttribute('name', 'password');
  passwordLabel.innerHTML = 'Contraseña:';

  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'password');
  passwordInput.setAttribute('name', 'password');

  loginBtn.setAttribute('id', 'loginBtn');
  loginBtn.textContent = 'Entrar';

  //* Aqui estamos agregando todo a la sección de SignInPage
  loginSection.appendChild(loginHeader);
  loginSection.appendChild(coverImg);
  loginSection.appendChild(nameInput);
  loginSection.appendChild(passwordLabel);
  loginSection.appendChild(passwordInput);
  loginSection.appendChild(loginBtn);
  return loginSection;
};
