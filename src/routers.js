import { home } from './components/home';
import { register } from './components/register';
import { login } from './components/login';

export const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

// Obtener el elemento raíz y agregar el componente correspondiente
const rootDiv = document.getElementById('root');
const component = routes[window.location.pathname];
rootDiv.appendChild(component());
