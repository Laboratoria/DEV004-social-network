import { addRoutes, onNavigate } from './router/index.js';
import { home } from './pages/home.js';
import { register } from './pages/register.js';
import { wall } from './pages/wall.js';

addRoutes({
  '/DEV004-social-network/': home,
  '/': home,
  '/register': register,
  '/wall': wall,

});

// Lógica de la aplicacion
window.onload = () => {
  console.log(window.location.pathname)
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
