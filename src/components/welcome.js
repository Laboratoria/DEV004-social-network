import { logo, welcomePic } from './img';

// const name = register().querySelector(nameInput.value);
export const welcome = (onNavigate) => {
  //* Aqui estamos creando lo que va en HTML.
  const welcomeSection = document.createElement('section');
  const coverImg = document.createElement('img');
  const welcomeContainer = document.createElement('p');
  const divwelcome = document.createElement('div');
  const CircleLogo = document.createElement('img');
  const nextButton = document.createElement('button');
  const logOutButton = document.createElement('button');

  //* Estamos asignandi atributos para todos los elementos creados.

  welcomeSection.setAttribute('id', 'welcomeSection');

  coverImg.setAttribute('id', 'LogoPetropolis');
  coverImg.src = logo;
  coverImg.setAttribute('alt', 'LogoPetropolis');

  welcomeContainer.setAttribute('id', 'welcomeContainer');
  welcomeContainer.innerHTML = ` <span style="color: black;"><b>Hola!</b></span>
  <span id ='Hola'><b>${localStorage.getItem('name')}</b></span>
  <span style="color: black;">,te damos la bienvenida a </span>
  <span id ='Hola' ><b>PETROPOLIS</b></span>
  <span style="color: black;">donde podrás compartir y publicar información de tus mascotas</span>
  `;

  divwelcome.setAttribute('id', 'divwelcome');

  CircleLogo.setAttribute('id', 'CircleLogo');
  CircleLogo.src = welcomePic;
  CircleLogo.setAttribute('alt', 'Circle Logo');

  nextButton.setAttribute('id', 'nextButton');
  nextButton.setAttribute('alt', 'Next Button');
  nextButton.textContent = 'Continuar';

  logOutButton.setAttribute('id', 'logOutButton');

  //* Aqui estamos agregando todo a la sección de SignInPage
  welcomeSection.appendChild(coverImg);
  welcomeSection.appendChild(welcomeContainer);
  welcomeSection.appendChild(divwelcome);
  divwelcome.appendChild(CircleLogo);
  divwelcome.appendChild(nextButton);
  nextButton.addEventListener('click', () => onNavigate('/timeline'));
  return welcomeSection;
};
