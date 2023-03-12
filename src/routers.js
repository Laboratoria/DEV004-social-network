import { home } from './components/home';
import { register } from './components/register.js';

export const routes = {
  '/': home,
  '/register': register,
};

const rootDiv = document.getElementById('root');

const component = routes[window.location.pathname];
rootDiv.appendChild(component());
