import { login } from '../components/login.js';
import { registro } from '../components/registro.js';
import { timeline } from '../components/timeline';

export const rutas = {
        '/' : login,
        '/registro' : registro,
        '/timeline' : timeline,
}
