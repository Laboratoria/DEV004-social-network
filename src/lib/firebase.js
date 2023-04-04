// importar las funciones especificas de firebase a utilizar.
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import {
  getFirestore, collection, addDoc, getDocs, deleteDoc, doc,
  onSnapshot, serverTimestamp, orderBy, query,
} from 'firebase/firestore';

// configuración del proyecto:
const firebaseConfig = {
  apiKey: 'AIzaSyDG0CfYFCo1QM8MFTFUJdhVPZSUkmDU958',
  authDomain: 'reda-d08aa.firebaseapp.com',
  projectId: 'reda-d08aa',
  storageBucket: 'reda-d08aa.appspot.com',
  messagingSenderId: '761765204956',
  appId: '1:761765204956:web:50f457c05bf2988ec17519',
};
// se inicializa firebase utilizando la funcion oficial
// la configuración del proyecto pasa como parametro.
// conecta el front end con el back end.
export const app = initializeApp(firebaseConfig);

// la base de datos queda representada en la const db.
export const db = getFirestore(app);

// referencia a la colección de la db.
export const colRef = collection(db, 'post');
// queries fecha de creacion del post
const q = query(colRef, orderBy('createdAt'));


// llamamos a la coleccion de datos.
onSnapshot(q, (snapshot) => {
  const arrPostData = [];
  snapshot.docs.forEach((doc) => {
    arrPostData.push({ ...doc.data(), id: doc.id });
  });
  console.log('esto es arrPost', arrPostData);
});
// inicializamos la autenticacion de usuario
export const auth = getAuth(app);

export const createpost = (titulo, descripcion) => addDoc((colRef), {
  titulo,
  descripcion,
  createdAt: serverTimestamp(Date),
});


export const saveUsers = (name, email, password, nationality, Bdate, ocupation, redaRol) => addDoc((colRef), {
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
  .catch((error) => {
    console.log(error.message);
  });

// cerrar sesion:
export const exitApp = () => signOut(auth)
  .then(() => {
    console.log('the user signed out');
  })
  .catch((err) => {
    console.log(err.message);
  });
  