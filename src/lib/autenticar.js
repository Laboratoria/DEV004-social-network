import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./firebase";
import {
  getFirestore,
  query,
  collection,
  addDoc,
  doc,
  updateDoc,
  orderBy,
  Timestamp
} from "firebase/firestore";
initializeApp(firebaseConfig);

// FUNCIONES DE FIREBASE/PRESENTES EN HOME (crearUser, LoginUser, loginGoogle)

// Regitrar Usuario
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
// Ingreso de susuario ya registrado
export const loginUser = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // Esto le da un token de acceso de Google. Puede usarlo para acceder a la API de Google.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(credential);
      // La información del usuario registrado.
      const user = result.user;
      // Datos de IdP disponibles mediante getAdditionalUserInfo(resultado)
      // ...
      return credential;
    })
    .catch((error) => {
      // Manejar errores aquí.
      const errorCode = error.code;
      const errorMessage = error.message;
      // El correo electrónico de la cuenta de usuario utilizada.
      const email = error.customData.email;
      // El tipo AuthCredential que se utilizó.
      const credential = GoogleAuthProvider.credentialFromError(error);
      return errorCode;
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

// Inicializo Firebase
const app = initializeApp(firebaseConfig);

export const actualUser = () => {
  const auth = getAuth(app);
  //console.log(auth.currentUser)
  return auth.currentUser
}

// Inicialice Cloud Firestore y obtenga una referencia al servicio
export const db = getFirestore(app);

export const crearPost = (text) => {
  // Agregue un nuevo documento con una identificación generada.
  const docRef = addDoc(collection(db, "post"), {
    comentario: text,
    email: getAuth().currentUser.email,
    dateCreate: Timestamp.now(),
  });

  return docRef;
};

export const refPost = () => {
  return query(collection(db, "post"), orderBy('dateCreate', 'desc'));
};

export const editRef = (id, text) => {
return updateDoc(doc(db, "post", id), text) };
