/* eslint-disable quotes */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
// eslint-disable-next-line import/no-unresolved
} from 'firebase/auth';

export const signInWithPassword = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmail = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};
