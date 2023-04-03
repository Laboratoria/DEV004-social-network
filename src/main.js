// Este es el punto de entrada de tu aplicacion
import { initFirebase } from './helpers/firebase';
import { initRouter } from './router';
import { ROUTES } from './routes';

// Initialize Router
initRouter(ROUTES);
initFirebase();
