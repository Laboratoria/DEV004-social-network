/* eslint-disable max-len */
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA3k7Vss44vD0x4ynHhUD288WTXc6WTIIc',
  authDomain: 'social-network-sn8-d7612.firebaseapp.com',
  projectId: 'social-network-sn8-d7612',
  storageBucket: 'social-network-sn8-d7612.appspot.com',
  messagingSenderId: '409716892814',
  appId: '1:409716892814:web:5d3567a56c1ff718d255df',
  measurementId: 'G-9HY48VZDN0',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
/* export const userDB = getFirestore(); */

export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const savedUser = (displayName, email, password, petName, petSpecie, uid) => setDoc(doc(db, 'users', uid), {
  displayName,
  email,
  password,
  petName,
  petSpecie,
  uid,
});

export const singIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);

export function authStateChangedEvent(cb) {
  onAuthStateChanged(auth, (user) => cb(user));
}
