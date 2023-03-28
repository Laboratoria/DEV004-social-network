import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';

initializeApp(firebaseConfig);

export const createUser = (email, password) => { // recibe paramatros
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log(user);
      // ...
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage);
      // ..
      return error
    });
};
export const loginUser = () => {

};

export const loginGoogle = () =>{
  
}
