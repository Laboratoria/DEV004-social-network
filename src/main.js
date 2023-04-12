import { home } from "./components/home";
import { register } from "./components/register";
import { login } from "./components/login";

const rootDiv = document.getElementById ('root');

const routes = {
    '/': home,
    '/register': register,
    '/login': login,
};

const component = routes[window.location.pathname]; 
rootDiv.appendChild(component());
