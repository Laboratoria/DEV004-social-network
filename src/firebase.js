// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb8mX1MfAFUW1fBR0FmHpJBq83OLvEUGc",
  authDomain: "social-network-mgm.firebaseapp.com",
  projectId: "social-network-mgm",
  storageBucket: "social-network-mgm.appspot.com",
  messagingSenderId: "1081949202453",
  appId: "1:1081949202453:web:73891ba943f655bf2cc61c",
  measurementId: "G-37LWLR8JYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 /*
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

/*const firebase= initializeApp({Creates and initializes a @firebase/app#FirebaseApp instance.

See

https://firebase.google.com/docs/web/setup#add_firebase_to_your_app * | Add Firebase to your app} and
https://firebase.google.com/docs/web/setup#multiple-projects * | Initialize multiple projects} for detailed documentation.
@example


// Initialize default app
// Retrieve your own options values by adding a web app on
// https://console.firebase.google.com

});

const app = initializeApp(firebaseConfig);
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
} 
*/