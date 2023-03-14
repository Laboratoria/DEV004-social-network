import { home } from './components/home.js';
import { register } from './components/register.js';

const root = document.getElementById('root');
const routes = {
  '/': home,
  '/register': register,
};
const onNavigate = (pathname, paramRoutes = routes) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.removeChild(root.firstChild);
  root.appendChild(paramRoutes[pathname]);
};
const component = routes[window.location.pathname];
window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.appendChild(component(onNavigate));
};

root.appendChild(component(onNavigate));
// // aqui exportaras las funciones que necesites
// const routes = {
//   '/': home,
//   '/register': register,
// };
// const rootDiv = document.getElementById('root');

// export const onNavigate = (pathname) => {
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname,
//   );
//   rootDiv.appendChild(routes[pathname]);
// };


export const addRoutes = (routes) => {
  Object.keys(routes).reduce((currentRoutes, pathname) => {
    currentRoutes[pathname] = routes[pathname];
    return currentRoutes;
  }, ROUTES);
};

console.log('Hola mundo!');
