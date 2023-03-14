import { home } from './components/home.js';
import { login } from './components/login.js';
import { register } from './components/register.js';

const root = document.getElementById('root');

const routes = {
  '/': home,
  '/login': login,
  '/register': register,

};
const onNavigate = (pathname, paramRoutes = routes) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  return root.replaceChildren(paramRoutes[pathname]());
  // root.removeChild(root.firstChild);
  // root.appendChild(paramRoutes[pathname]);
};
const component = routes[window.location.pathname];
window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.appendChild(component(onNavigate));
};

root.appendChild(component(onNavigate));

// aqui exportaras las funciones que necesites
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

// *Este es el codigo del ejemplo del video min :36
// export const onNavigate = (pathname) => {
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname,
//   );
//   rootDiv.appendChild(routes[pathname]());
// };

// *Intentando pasar window como un argumento
// export const onNavigate = (pathname, Objwindow) => {
//   Objwindow.history.pushState(
//     {},
//     pathname,
//     Objwindow.location.origin + pathname,
//   );
// };

// export const onNavigate = (pathname, window) => {
//   console.log(pathname, window, 'que estres');
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname,
//   );
// };

// console.log('Hola mundo!');
