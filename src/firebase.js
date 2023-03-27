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

});*/

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