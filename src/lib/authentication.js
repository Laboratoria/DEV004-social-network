// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebase.js';
// para autentficar cuando el usuario se meta

export const signInWithPassword = (email, password) => (
  signInWithEmailAndPassword(auth, email, password)
);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
export const registerWithEmail = (email, password) => (
  createUserWithEmailAndPassword(auth, email, password)
);
