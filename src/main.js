import { home } from './components/home';
import { register } from './components/register';
import { login } from './components/login';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
window.onpopstate = () => {
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component());
