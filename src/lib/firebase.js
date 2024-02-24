import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  Timestamp, getFirestore, orderBy, query,
  collection, addDoc, updateDoc,
  doc, deleteDoc,
} from 'firebase/firestore';
// eslint-disable-next-line import/no-duplicates
import { signOut } from 'firebase/auth';

const provider = new GoogleAuthProvider();
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgYHtpn9GNiek_dK-qKcTjEQqqvuS0uuI',
  authDomain: 'fb-socialnetwork.firebaseapp.com',
  projectId: 'fb-socialnetwork',
  storageBucket: 'fb-socialnetwork.appspot.com',
  messagingSenderId: '1044249075485',
  appId: '1:1044249075485:web:73c4702b0e99159bad4bf4',
  measurementId: 'G-DMGC30SBJS',
};

const app = initializeApp(firebaseConfig);
export const entrarconGoogle = () => {
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
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
      // ...
    });
};
export const registrarUsuaria = (email, password) => {
  console.log(email, password);
  // traer los metodos de firebase

  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

// Iniciar sesion
export const iniciarSesion = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const db = getFirestore(app);
export const auth = getAuth(app);

// Funcion crear post
export const createPost = (data) => {
  const docRef = addDoc(collection(db, 'posts'), {
    userName: auth.currentUser.displayName || 'Anonimx',
    post: data,
    date: Timestamp.now(), // fecha de creacion
  });
  console.log('Document written with ID: ', docRef.id);
  return docRef;
};

// createPost();

export const q = query(collection(db, 'posts'), orderBy('date', 'desc'));

// Funcion DELETEDOC:
export const eliminarPost = (id) => deleteDoc(doc(db, 'posts', id));

export const actulizarPost = (id, text) => updateDoc(doc(db, 'posts', id), text);

// Funcion singOut

export const signOutUser = () => signOut(auth);
