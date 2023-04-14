// importar las funciones especificas de firebase a utilizar.
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  orderBy,
  query,
  updateDoc,
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
const q = query(colRef, orderBy('createdAt', 'desc'));
// llamamos a la coleccion de datos.

// inicializamos la autenticacion de usuario
// obtener el usuario con sesion activa, revisar documetacion.
export const auth = getAuth(app);
onSnapshot(q, (snapshot) => {
  const arrPostData = [];
  snapshot.docs.forEach((docAuth) => {
    arrPostData.push({ ...docAuth.data(), id: docAuth.id, userState: auth.currentUser });
  });
  //console.log('esto es arrPost', arrPostData);
});
export const saveUsers = (name, email, password, nationality, Bdate, ocupation, redaRol) => addDoc(collection(db, 'users'), {
  name,
  email,
  password,
  nationality,
  Bdate,
  ocupation,
  redaRol,
  userId: auth.currentUser.uid,
  like: [],
});

export const getpost = () => getDocs(q)
  .then(
    (snapshot) => {
      const showPost = [];
      //console.log('esto es showPost');
      snapshot.forEach((docu) => {
        showPost.push({ ...docu.data(), id: docu.id });
      });
      return (showPost);
    },
  )
  .catch((err) => {
    console.log(err.message);
  });

// eliminar post
export const deletePost = (id) => deleteDoc(doc(db, 'post', id))
  .then(() => {
    console.log('todo ok');
  })
  .catch((error) => {
    console.log(error.message);
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

export const createpost = (usuario, titulo, descripcion) => addDoc((colRef), {
  usuario,
  titulo,
  descripcion,
  createdAt: serverTimestamp(Date),
  userId: auth.currentUser.uid,
  likes: [],
});

// cerrar sesion:
export const exitApp = () => signOut(auth)
  .then(() => {
    console.log('the user signed out');
  })
  .catch((err) => {
    console.log(err.message);
  });

export const updatePost = (id, newPost) => updateDoc(doc(db, 'post', id), newPost);

export const addLike = (id, emails) => updateDoc(doc(db, 'post', id), { likes: emails });
export const updatelike = (id, emails) => updateDoc(doc(db, 'post', id), { likes: emails });
