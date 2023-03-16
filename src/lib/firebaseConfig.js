// Configuración Firebase al inicializar
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// eslint-disable-next-line spaced-comment
//import { getFirestore } from 'firebase/firestore';

const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyBcpc0XpJaCMqOokhULjNp6Ul-AEaGc9CY',
  authDomain: 'social-network-c7eeb.firebaseapp.com',
  projectId: 'social-network-c7eeb',
  storageBucket: 'social-network-c7eeb.appspot.com',
  messagingSenderId: '118477723389',
  appId: '1:118477723389:web:452bdd1d47bf5805c45094',
});

export const app = firebaseConfig;

export const auth = getAuth(app);
