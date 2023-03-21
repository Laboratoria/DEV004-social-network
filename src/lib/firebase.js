import { initializeApp } from 'firebase/app';
import {
  getFirestore, setDoc, doc, addDoc, collection,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA3k7Vss44vD0x4ynHhUD288WTXc6WTIIc',
  authDomain: 'social-network-sn8-d7612.firebaseapp.com',
  projectId: 'social-network-sn8-d7612',
  storageBucket: 'social-network-sn8-d7612.appspot.com',
  messagingSenderId: '409716892814',
  appId: '1:409716892814:web:5d3567a56c1ff718d255df',
  measurementId: 'G-9HY48VZDN0',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// FUNCIÓN REGISTRO
// eslint-disable-next-line max-len
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// FUNCIÓN GUARADR DATOS USUARIO
export const savedUser = (displayName, email, password, petName, petSpecie, uid) => setDoc(doc(db, 'users', uid), {
  displayName,
  email,
  password,
  petName,
  petSpecie,
  uid,
});

/* inicio de sesión con email y contraseña */
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

/* inicio de sesión con google */
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);

export const post = async (postText) => {
  const docRef = await addDoc(collection(db, 'userpost'), {
    text: postText,
    userEmail: auth.currentUser.email,
    userId: auth.currentUser.uid,
    likes: [],
  });
  console.log('Document written with ID: ', docRef.id);
};

/* salir */
export const logOut = () => signOut(auth);

/* cambiar el status */
onAuthStateChanged(auth, (user) => {
  console.log(user);
});
