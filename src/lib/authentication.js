//para autentficar cuando el usuario se meta 
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js'

export const signInWithPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
export const registerWithEmail = (email, password) => { 
return createUserWithEmailAndPassword(auth, email, password);
};
