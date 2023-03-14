import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDG0CfYFCo1QM8MFTFUJdhVPZSUkmDU958',
  authDomain: 'reda-d08aa.firebaseapp.com',
  projectId: 'reda-d08aa',
  storageBucket: 'reda-d08aa.appspot.com',
  messagingSenderId: '761765204956',
  appId: '1:761765204956:web:50f457c05bf2988ec17519'
};
export const initFirebase = () => {
// Initialize Firebase
const app = initializeApp(firebaseConfig);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    // Import the functions you need from the SDKs you need
}