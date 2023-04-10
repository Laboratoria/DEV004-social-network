import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//import {  auth } from "firebase/auth";

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
export const loginUser = (email, password) => {
   const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
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

const provider = new GoogleAuthProvider();
export const loginGoogle = () =>{
  const auth = getAuth();
return signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(credential);
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    return credential
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    return error
    // ...
  });
};

  

  

