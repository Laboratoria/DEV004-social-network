// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
// import { addDoc } from 'firebase/firestore';

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
const storage = getStorage();

// Get a list of post from your database
export async function getPost() {
  const postCol = collection(db, 'posts');
  const postSnapshot = await getDocs(postCol);
  const posts = postSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return posts;
}

export async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const auth = getAuth();
auth.languageCode = 'es';
const provider = new GoogleAuthProvider();

export const createPost = (body) => {
  addDoc(collection(db, 'posts'), body ).then(() => {
    alert('Post creado ');
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  })
  .catch(() => {
    console.error('Error al crear post');
  });
};

// Elimina Post
export async function deletePost(id) {
  const docRef = doc(db, 'posts', id);
  deleteDoc(docRef)
    .then(() => {
      alert('Post Eliminado ', id);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    })
    .catch(() => {
      console.error('Error al eliminar post', id);
    });
}


export const entrarConGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;

      localStorage['email'] = user.email;
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
