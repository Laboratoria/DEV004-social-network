import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCjLRggO4nm5RYFKjQKUjA7g69MfIEAxJ4',
  authDomain: 'wanderlust-edc27.firebaseapp.com',
  projectId: 'wanderlust-edc27',
  storageBucket: 'wanderlust-edc27.appspot.com',
  messagingSenderId: '828427249355',
  appId: '1:828427249355:web:5284d5c1824c78086b5d4e',
  measurementId: 'G-0RJ1R9SWL7',
};

export const initFirebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return {
    app,
    auth,
    db,
  };
};
