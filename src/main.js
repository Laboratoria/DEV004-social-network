/* eslint-disable import/no-unresolved */
import { home } from './components/Home.js';
import { register } from './components/Register.js';
import { feed } from './components/feed';
/* import { auth } from './lib/firebase.js'; */

const root = document.getElementById('root');
const routes = {
  '/': home,
  '/register': register,
  '/feed': feed,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  root.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];
root.append(component(onNavigate));
