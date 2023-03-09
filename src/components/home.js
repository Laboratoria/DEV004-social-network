export const home = () => {
  //* Aqui estamos creando lo que va en HTML.
  const homeSeccion = document.createElement('seccion');
  const welcomeHeader = document.createElement('h1');
  const coverImg = document.createElement('img');
  const loginButton = document.createElement('button');
  const signInButton = document.createElement('button');

  //* Estamos asignandi atributos para todos los elementos creados.
  homeSeccion.setAttribute('id', 'homeSeccion');

  welcomeHeader.innerHTML = 'Bienvenido';

  coverImg.setAttribute('id', 'LogoPetropolis');
  coverImg.setAttribute('src', './Img/LogoPetropolisSF.png');
  coverImg.setAttribute('alt', 'LogoPetropolis');

  loginButton.setAttribute('id', 'loginButton');
  loginButton.textContent = 'Iniciar Sesión';

  signInButton.setAttribute('id', 'signInButton');
  signInButton.textContent = 'Registrarse';

  //* Aqui estamos agregando todo a la sección de SignInPage
  homeSeccion.appendChild(welcomeHeader);
  homeSeccion.appendChild(coverImg);
  homeSeccion.appendChild(loginButton);
  homeSeccion.appendChild(signInButton);

  return homeSeccion;
};
