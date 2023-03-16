import { nameInput } from './register.js';

// const name = register().querySelector(nameInput.value);
export const welcome = () => {
  //* Aqui estamos creando lo que va en HTML.
  const welcomeSection = document.createElement('section');
  const coverImg = document.createElement('img');
  const welcomeContainer = document.createElement('p');
  const CircleLogo = document.createElement('img');
  const nextButton = document.createElement('button');

  //* Estamos asignandi atributos para todos los elementos creados.

  welcomeSection.setAttribute('id', 'welcomeSection');

  coverImg.setAttribute('id', 'LogoPetropolis');
  coverImg.setAttribute('src', './Img/LogoPetropolisSF.png');
  coverImg.setAttribute('alt', 'LogoPetropolis');

  welcomeContainer.setAttribute('id', 'welcomeContainer');
  welcomeContainer.innerHTML = `Hola ${localStorage.getItem("name")}
  te damos la bienvenida a Petropolis donde podras compartir
   y publicar información de tus mascotas`;

  CircleLogo.setAttribute('id', 'CircleLogo');
  CircleLogo.setAttribute('src', './Img/CircleLogo.png');
  CircleLogo.setAttribute('alt', 'Circle Logo');

  nextButton.setAttribute('id', 'nextButton');
  nextButton.setAttribute('alt', 'Next Button');
  nextButton.textContent = 'Continuar';
  //* Aqui estamos agregando todo a la sección de SignInPage
  welcomeSection.appendChild(coverImg);
  welcomeSection.appendChild(welcomeContainer);
  welcomeSection.appendChild(CircleLogo);
  welcomeSection.appendChild(nextButton);
  //   nextButton.addEventListener('click', () => onNavigate('/home'));
  return welcomeSection;
};
