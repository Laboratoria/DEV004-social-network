export const home = () => {
  const divHome = document.createElement('div');
  const header = document.createElement('header');
  const square = document.createElement('div');
  const welcome = document.createElement('p');
  const img = document.createElement('img');

  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const footer = document.createElement('footer');
  buttonLogin.textContent = 'Regístrate';
  buttonRegister.textContent = 'Iniciar Sesión';
  welcome.textContent = 'Bienvenidos a Reda';
  img.setAttribute('id', 'logo');
  img.setAttribute('src', 'https://i.pinimg.com/564x/ed/67/9a/ed679a1a5874f2cf95bb5fcad09d6cf7.jpg');
  welcome.setAttribute('id', 'welcome');
  header.setAttribute('class', 'header');
  footer.setAttribute('class', 'footer');
  divHome.appendChild(square);
  square.appendChild(header);
  square.appendChild(footer);
  square.appendChild(img);
  square.appendChild(welcome);
  square.appendChild(buttonLogin);
  square.appendChild(buttonRegister);
  return divHome;
};
