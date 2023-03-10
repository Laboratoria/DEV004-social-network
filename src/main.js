// Este es el punto de entrada de tu aplicacion
// Aquì se importa las funciones de los componentes


//import { myFunction } from './lib/index.js';
import { home } from './componets/home.js';

//myFunction();
// const routes = {
  //   '/':home,
  // };
  // const components = routes[window.location.pathname];

const component = home();
const rootDiv = document.getElementById('root');
rootDiv.append(component);
