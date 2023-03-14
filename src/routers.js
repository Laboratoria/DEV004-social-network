import { home } from './components/home';
import { register } from './components/register';
import { login } from './components/login';

export const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

const rootDiv = document.getElementById('root');

const component = routes[window.location.pathname];

rootDiv.appendChild(component());
