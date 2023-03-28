import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { auth, provider } from './firebaseConfig';

export const signInWithPassword = (email, password) => {
  // eslint-disable-next-line no-shadow
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmail = (email, password) => {
  // eslint-disable-next-line no-shadow
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export const authGoogle = () => signInWithPopup(auth, provider);

export const signOff = () => signOut(auth);
