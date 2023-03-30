import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';

import { auth } from './firebaseConfig';

export const signInWithPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const authGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());

export const signOff = () => signOut(auth);
