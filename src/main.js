// Este es el punto de entrada de tu aplicacion
// Importar las funciones necesarias

import { onNavigate, addRoutes } from './onNavigate';
import { home } from './components/home';
import { register } from './components/register';
import { login } from './components/login';

addRoutes({
  '/': home,
  '/register': register,
  '/login': login,
});

window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
