// Configuración Firebase al inicializar

// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
} from 'firebase/firestore';

// eslint-disable-next-line spaced-comment
//import { getFirestore } from 'firebase/firestore';

const firebaseConfig = ({
  apiKey: 'AIzaSyBcpc0XpJaCMqOokhULjNp6Ul-AEaGc9CY',
  authDomain: 'social-network-c7eeb.firebaseapp.com',
  projectId: 'social-network-c7eeb',
  storageBucket: 'social-network-c7eeb.appspot.com',
  messagingSenderId: '118477723389',
  appId: '1:118477723389:web:452bdd1d47bf5805c45094',
});

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore();

const savePublic = (publicacion, cantidaddelikes, name) => addDoc(collection(db, 'publication'), { publicacion, cantidaddelikes, name });

const postData = query(collection(db, 'publication'));

const unsubscribe = (callBack) => onSnapshot(postData, callBack);

export {
  auth,
  provider,
  db,
  savePublic,
  unsubscribe,
};
