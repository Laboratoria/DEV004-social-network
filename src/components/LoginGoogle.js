import { loginGoogle } from '../lib/autenticar';
import { onNavigate } from '../router/index';

export const LoginGoogle = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent = 'Bienvenida al login';
    const buttonHome = document.createElement('button');
    const buttonLoginGoogle = document.createElement('button');
  
    buttonHome.textContent = 'Regresar al Home';
    buttonHome.addEventListener('click', () => onNavigate('/'));
    buttonLoginGoogle.addEventListener('click', () => onNavigate('/loginGoogle'));

 
    HomeDiv.append(buttonHome, buttonLoginGoogle);
    // HomeDiv.appendChild(buttonLogin);
  
    return HomeDiv;
};
  