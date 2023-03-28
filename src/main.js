
import { addRoutes, onNavigate } from './router/index.js';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Register} from './components/Register';

addRoutes({
  '/': Home,
  '/login': Login,
  '/register': Register,
});
// Lógica de la aplicacion
window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
