// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCL88D8QNKU0NS9GTvFMfO3DKatXHE4Fcw',
  authDomain: 'friendly-pets-fc642.firebaseapp.com',
  databaseURL: 'https://friendly-pets-fc642-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'friendly-pets-fc642',
  storageBucket: 'friendly-pets-fc642.appspot.com',
  messagingSenderId: '777707018405',
  appId: '1:777707018405:web:5807a05bcc841cc4ed554c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// para loguearse con google
const provider = new GoogleAuthProvider();
