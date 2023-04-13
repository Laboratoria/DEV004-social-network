import { Register } from './components/register';
import { Login } from './components/login';
import { Home } from './components/home';
import { RecuperarContrasena } from './components/restablecer';


export const ROUTES = {
  '/': Login,
  '/register': Register,
  '/home': Home,
  '/restablecer': RecuperarContrasena,
};
