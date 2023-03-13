import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
const db = getFirestore(app);
const auth = getAuth();

const newUser = (displayName, email, password, uid) => {
  setDoc(doc(db, 'users', uid), {
    displayName,
    email,
    password,
    uid,
  });
};

export const createUser = (displayName, email, password) => {
  createUserWithEmailAndPassword(auth, displayName, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      newUser(displayName, email, password, user.uid);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return error(errorCode, errorMessage);
    });
};
