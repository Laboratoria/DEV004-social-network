import { home } from './componets/home';
import { Login } from './componets/login';
import { register } from './componets/register';
import { feed } from './componets/feed';

export const ROUTES = {
  '/': home,
  '/home': home,
  '/login': Login,
  '/register': register,
  '/feed': feed,

};
