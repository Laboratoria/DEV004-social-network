// import { initFirebase } from "./lib/firebase";
import { initRouter } from './router';
import { ROUTES } from './routes';


// Initialize Firebase
// initFirebase();

// Initialize Router
initRouter(ROUTES);

import { home } from './componets/home.js';
import { login } from './componets/login.js';
import { register } from './componets/register.js';

import {
    // navigate,
    setRoutes,
    handlePopState,
    renderComponent,
  } from './index.js'

  const routes = [
    {
      pathname: '/',
      component: home,
    },
    {
      pathname: '/register',
      component: register,
    },
    {
      pathname: '/login',
      component: login,
    },
    // {
    //   pathname: '*', // ruta por defecto
    //   component: NotFound,
    // },
  ]
  

// const component = login();
// const rootDiv = document.getElementById('root');
// rootDiv.append(component)
// rootDiv.innerHTML = routes[window.location.pathname];

