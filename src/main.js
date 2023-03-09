// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { home } from './components/home';
import { registerPage } from './components/register';

myFunction();

const routes = {
  '/': home,
  '/register': registerPage,
};

const rootDiv = document.getElementById('root');
const component = routes[window.location.pathname];
rootDiv.appendChild(component());
