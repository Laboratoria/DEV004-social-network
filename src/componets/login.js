export const login =() => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida al login';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);
  return HomeDiv;
};
