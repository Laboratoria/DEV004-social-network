export const register = () => {
  const navDiv = document.createElement('nav');
  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
  navDiv.innerHTML = ('Bienvenida al Registro');
  const HomeDiv = document.createElement('div');
  
  
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'enviar';
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  HomeDiv.appendChild(input);
  HomeDiv.appendChild(buttonHome);
  return HomeDiv;
};