// Este es el punto de entrada de tu aplicacion

import { register } from './componets/register.js';

const component = register();
const rootDiv = document.getElementById('root');
rootDiv.append(component);