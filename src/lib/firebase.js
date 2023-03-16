// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
// el taller considera una funcion donde estan todos los servicios de firebase y la importa, nosotras no.
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDG0CfYFCo1QM8MFTFUJdhVPZSUkmDU958',
  authDomain: 'reda-d08aa.firebaseapp.com',
  projectId: 'reda-d08aa',
  storageBucket: 'reda-d08aa.appspot.com',
  messagingSenderId: '761765204956',
  appId: '1:761765204956:web:50f457c05bf2988ec17519',
};

// Initialize Firebase
// tutorial utiliza export, taller lo une todo en una sola funcion y la exporta. 
//se inicilza
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//functiòn crear post que reciba los paràmetros y exportarla e importarla a el fedd
//a qui pondrìa los parametros internos consultar
//export const createPost = (titulo, descripcion) => { ... addDoc  


// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
