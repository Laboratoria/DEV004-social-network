// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
// el taller considera una funcion donde estan todos los servicios de firebase y
// la importa, nosotras no.
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
// 1 importar firestore
// import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc} from 'firebase/firestore';
import {
  getFirestore, collection, addDoc, getDocs, deleteDoc, doc,
} from 'firebase/firestore';

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
// 2se inicializa
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// cerrar sesion:
export const exitApp = () => signOut(auth)
  .then(() => {
    console.log('the user signed out');
  })
  .catch((err) => {
    console.log(err.message);
  });

//    // Initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(app);

// functiòn crear post que reciba los paràmetros y exportarla e importarla a el fedd
// a qui pondrìa los parametros internos consultar
// export const createPost = (titulo, descripcion) => { ... addDoc
export const createpost = (titulo, descripcion) => addDoc(collection(db, 'post'), {
  titulo, descripcion,
});

export const saveUsers = (name, email, password, nationality, Bdate, ocupation, redaRol) => addDoc(collection(db, 'users'), {
  name, email, password, nationality, Bdate, ocupation, redaRol,
});

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

export const getpost = () => getDocs(collection(db, 'post'))
  .then(
    (snapshot) => {
      const showPost = [];
      console.log('esto es showPost');
      snapshot.forEach((docu) => {
        showPost.push({ ...docu.data(), id: docu.id });
      });
      return (showPost);
    },
  )
  .catch((err) => {
    console.log(err.message);
  });
export const deletePost = (id) => deleteDoc(doc(db, 'post', id))
  .then(() => {
    console.log('todo ok');
  })
  .catch((err) => {
    console.log('error');
  });

// borrar post
// export const eliminatePost = () => {
//   return deleteDoc(collection(db, 'post'))
//   .then(
//     (snapshot) => {
//       const showPost = [];
//       console.log('esto es DeletePost');
//       snapshot.forEach((doc) => {
//         showPost.push({ ...doc.data(), id: doc.id });
//       });
//       return (showPost);
//     },
//   )
//   .catch((err) => {
//     console.log(err.message);
//   });
// };
