// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCL88D8QNKU0NS9GTvFMfO3DKatXHE4Fcw',
  authDomain: 'friendly-pets-fc642.firebaseapp.com',
  databaseURL:
    'https://friendly-pets-fc642-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'friendly-pets-fc642',
  storageBucket: 'friendly-pets-fc642.appspot.com',
  messagingSenderId: '777707018405',
  appId: '1:777707018405:web:5807a05bcc841cc4ed554c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// firebase.initializeApp(firebaseConfig);
// Initialize Firestore
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
auth.languageCode = 'es';
const provider = new GoogleAuthProvider();

// para loguearse con google
/* function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
} */
export const entrarConGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode, errorMessage, email, credential);
  });
