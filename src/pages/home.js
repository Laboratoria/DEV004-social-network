import { onNavigate } from '../router';

export const home = () => {
  // crea contenedor principal
  const article = document.createElement('article');
  const buttonRegister = document.createElement('button');
  const buttonWall = document.createElement('button');
  // modifica propiedades de los elemento
  buttonRegister.textContent = 'Ir a register';
  buttonWall.textContent = 'Ir al muro';
  // añade evento a los botones
  buttonRegister.addEventListener('click', () => {
    // llama funcion navigate y pasa string con la ruta
    onNavigate('/register');
  });
  buttonWall.addEventListener('click', () => {
    // llama funcion navigate y pasa string con la ruta
    onNavigate('/wall');
  });
  // suman elementos a contenedor madre
  article.append(buttonRegister, buttonWall);
  // retorna contenedor madre
  return article;
};
