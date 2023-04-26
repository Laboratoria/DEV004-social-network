import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// import {  auth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import {
  getFirestore,
  query,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
initializeApp(firebaseConfig);

// FUNCIONES DE FIREBASE/PRESENTES EN HOME (crearUser, LoginUser, loginGoogle)

export const createUser = (name, email, password) => {
  // recibe paramatros
  console.log(name, email, password);
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log(user);
      // ...
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage);
      // ..
      return error;
    });
};
export const loginUser = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(credential);
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      return credential;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      return errorCode;
      // ...
    });
};
export const logOut = () => {
  const auth = getAuth();
  return signOut(auth);
};


export const authStateChangedevent = (cb) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => cb(user));
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const actualUser = () => {
  const auth = getAuth(app);
  //console.log(auth.currentUser)
  return auth.currentUser
}

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const crearPost = (text) => {
  //crearPost.innerHTML = ''
  // Add a new document with a generated id.
  const docRef = addDoc(collection(db, "post"), {
    comentario: text,
    email: getAuth().currentUser.email,
  });
  //const q = query(docRef, orderBy("post", "desc"));
  //console.log("Document written with ID: ", text);
  return docRef;
};

export const refPost = () => {
  return query(collection(db, "post"));
};


export const editRef = (id, text) => {
return updateDoc(doc(db, "post", id), text) };
