import { addRoutes, onNavigate } from './router/index.js';
import { home } from './pages/home.js';
import { register } from './pages/register.js';
import { wall } from './pages/wall.js';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgYHtpn9GNiek_dK-qKcTjEQqqvuS0uuI",
  authDomain: "fb-socialnetwork.firebaseapp.com",
  projectId: "fb-socialnetwork",
  storageBucket: "fb-socialnetwork.appspot.com",
  messagingSenderId: "1044249075485",
  appId: "1:1044249075485:web:73c4702b0e99159bad4bf4",
  measurementId: "G-DMGC30SBJS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

addRoutes({
  '/': home,
  '/register': register,
  '/wall': wall,
});

// Lógica de la aplicacion
window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
