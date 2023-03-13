export const register = () => {
  //* Aqui estamos creando lo que va en HTML.
  const signInSection = document.createElement('section');
  const coverImg = document.createElement('img');
  const signInHeader = document.createElement('h1');
  const nameInput = document.createElement('input');
  const emailInput = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const SignInBtn = document.createElement('button');
  const BtnGoogle = document.createElement('img');
  const loginBtn = document.createElement('button'); //* Estamos asignandi atributos para todos los elementos creados.

  signInSection.setAttribute('id', 'signInSeccion');
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

  loginBtn.innerHTM = 'Ya tienes cuenta?';
  loginBtn.setAttribute('id', 'loginBtn');
  loginBtn.textContent = 'Entrar';

  BtnGoogle.setAttribute('id', 'BtnGoogle');
  BtnGoogle.setAttribute('src', './Img/BtnGoogle.png');
  BtnGoogle.setAttribute('alt', 'BtnGoogle');
  //* Aqui estamos agregando todo a la sección de SignInPage
  signInSection.appendChild(signInHeader);
  signInSection.appendChild(coverImg);
  signInSection.appendChild(nameInput);
  signInSection.appendChild(emailInput);
  signInSection.appendChild(passwordLabel);
  signInSection.appendChild(passwordInput);
  signInSection.appendChild(SignInBtn);
  signInSection.appendChild(loginBtn);
  signInSection.appendChild(BtnGoogle);

  // eslint-disable-next-line func-names
  loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    const username = nameInput.value;
    console.log(username);
    const password = passwordInput.value;
    console.log(password);
  });
  return signInSection;
};
