/* eslint-disable max-len */
import { initializeApp } from 'firebase/app';
import {
  collection, addDoc, getFirestore, setDoc, doc, getDocs, query, onSnapshot, orderBy,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
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
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Guardar Display Name
export const updateName = (displayName) => {
  updateProfile(auth.currentUser, { displayName });
};
// FUNCIÓN GUARADR DATOS USUARIO
export const savedUser = (displayName, email, password, petName, petSpecie, uid) => setDoc(doc(db, 'users', uid), {
  displayName,
  email,
  password,
  petName,
  petSpecie,
  uid,
});

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);

/* salir */
export const logOut = () => signOut(auth);

/* cambiar el status */
onAuthStateChanged(auth, (user) => {
  console.log(user);
});

/* leer posts */
export const colRef = collection(db, 'userpost');

/* guardar post */
export const post = async (postText) => {
  const docRef = await addDoc(collection(db, 'userpost'), {
    text: postText,
    userEmail: auth.currentUser.email,
    userId: auth.currentUser.uid,
    userName: auth.currentUser.displayName,
    likes: [],
  });
  console.log('Document written with ID: ', docRef.id);
};

/* capturar post */
export const readPosts = () => query(colRef, orderBy('dateCreated', 'desc'));
export const listenToPosts = (callback) => {
  onSnapshot(readPosts(), (snapshot) => {
    const allPosts = [];
    snapshot.docs.forEach((docPost) => {
      allPosts.push({ ...docPost.data(), id: doc.id });
    });
    callback(allPosts);
  });
};

export const read = getDocs(colRef);
export const addPost = (callback) => {
  onSnapshot(colRef, (snapshot) => {
    const allPosts = [];
    snapshot.docs.forEach((docPost) => {
      allPosts.push({ ...docPost.data(), id: docPost.id });
    });
    callback(allPosts);
  });
};

/* onSnapshot(colRef, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    const post = { ...doc.data(), id: doc.id };
    const postElement = createPostElement(post);
    postsContainer.appendChild(postElement);
  });
}); */
