import { home } from './components/home.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { welcome } from './components/welcome.js';
import { timeline } from './components/timeline.js';

const root = document.getElementById('root');

const routes = {
  '/': home,
  '/login': login,
  '/register': register,
  '/welcome': welcome,
  '/timeline': timeline,
};
const onNavigate = (pathname, paramRoutes = routes) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  return root.replaceChildren(paramRoutes[pathname]());
  // root.removeChild(root.firstChild);
  // root.appendChild(paramRoutes[pathname]);
};

window.onpopstate = () => {
  root.innerHTML = '';
  const component = routes[window.location.pathname];
  root.appendChild(component(onNavigate));
};

window.onload = () => {
  const component = routes[window.location.pathname];
  root.appendChild(component(onNavigate));
};
