import { getAuth, signOut } from 'firebase/auth';

export const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
// eslint-disable-next-line no-unused-vars
}).catch((error) => {
  // An error happened.
});
