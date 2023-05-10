import { addRoutes, onNavigate } from './router/index.js';
import { home } from './pages/home.js';
import { register } from './pages/register.js';
import { wall } from './pages/wall.js';

addRoutes({
  '/': home,
  '/register': register,
  '/wall': wall,

});

// Lógica de la aplicacion
window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
