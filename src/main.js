
import { addRoutes, onNavigate } from './router/index.js';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Register} from './components/Register';
import { Feed } from './components/Feed';
import { authStateChangedevent} from './lib/autenticar'

addRoutes({
  '/': Home,
  '/login': Login,
  '/register': Register,
  '/feed': Feed,
});
// Lógica de la aplicacion
window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};

authStateChangedevent((user)=>{
  if(user){
    onNavigate('/feed')
  }else{
    onNavigate('/')
  }
})