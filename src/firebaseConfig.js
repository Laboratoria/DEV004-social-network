// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs,addDoc } from 'firebase/firestore';
import { getStorage, ref ,uploadBytes } from "firebase/storage";
//import { addDoc } from "firebase/firestore";

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
async function getPost() {
  const postCol = collection(db, 'users');
  const postSnapshot = await getDocs(postCol);
  const posts = postSnapshot.docs.map((doc) => doc.data());
  console.log(posts);
  return posts;
}

const p = getPost();
console.log(p);

// firebase.initializeApp(firebaseConfig);
// Initialize Firestore
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
auth.languageCode = 'es';
const provider = new GoogleAuthProvider();

//Crea una mascota en firebase
export const createUser =  (name, rase, age, file) =>{
  
  let  email = localStorage['email'] // recuperamos email
  uploadPhoto(file);
 addDoc(collection(db,'users'),{name,rase,age,email,photo:file.name});
 
}

export const createPost = (body)=>{
  addDoc(collection(db,"posts"),{body});
}


function uploadPhoto(file){
 
  const storageRef = ref(storage, file.name);
  
  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('foto subida!');
  });




}


// para loguearse con google
/* function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
} */
export const entrarConGoogle = () => signInWithPopup(auth, provider)
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
