// importar las funciones especificas de firebase a utilizar.
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import {
  getFirestore, collection, addDoc, getDocs, deleteDoc, doc,
  onSnapshot, serverTimestamp, orderBy, query,
} from 'firebase/firestore';
// import { userState } from './authentication';

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

// inicializamos la autenticacion de usuario
// obtener el usuario con sesion activa, revisar documetacion.
export const auth = getAuth(app);
onSnapshot(q, (snapshot) => {
  const arrPostData = [];
  snapshot.docs.forEach((doc) => {
    arrPostData.push({ ...doc.data(), id: doc.id, userState: auth.currentUser });
  });
  console.log('esto es arrPost', arrPostData);
});

export const saveUsers = (
  name,
  email,
  password,
  nationality,
  Bdate,
  ocupation,
  redaRol,
) => addDoc((colRef), {
  name, email, password, nationality, Bdate, ocupation, redaRol,
});
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

// guardar user
// const user = firebase.auth().currentUser;
// guardar el id del current user,
// si el usuario existe, me devuelve su id.
// let uid;
// if (user != null) {
//   uid = user.uid;
// }
// console.log(uid);

// obtener los post de un usuario en particular. 
export const createpost = (titulo, descripcion) => addDoc((colRef), {
  titulo,
  descripcion,
  createdAt: serverTimestamp(Date),
  userId: auth.currentUser.uid,
});
// postsRef.add({ title: "Mi publicación", content: "Este es el contenido de mi publicación.", userId: uid })
//   .then(function(docRef)
//   { console.log("Documento escrito con ID: ", docRef.id); }) 
//   .catch(function(error) 
//   { console.error("Error al escribir el documento: ",
//    error); }); 

// cerrar sesion:
export const exitApp = () => signOut(auth)
  .then(() => {
    console.log('the user signed out');
  })
  .catch((err) => {
    console.log(err.message);
  });
