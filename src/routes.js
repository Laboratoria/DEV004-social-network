import { Register } from './components/register';
import { Login } from './components/login';
import { Home } from './components/home';

export const ROUTES = {
  '/': Login,
  '/register': Register,
  '/home': Home,
};
