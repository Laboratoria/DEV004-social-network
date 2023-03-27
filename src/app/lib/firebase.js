import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCjLRggO4nm5RYFKjQKUjA7g69MfIEAxJ4",
    authDomain: "wanderlust-edc27.firebaseapp.com",
    projectId: "wanderlust-edc27",
    storageBucket: "wanderlust-edc27.appspot.com",
    messagingSenderId: "828427249355",
    appId: "1:828427249355:web:5284d5c1824c78086b5d4e",
    measurementId: "G-0RJ1R9SWL7"
  };

  // Initialize Firebase
 export const App = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(App);