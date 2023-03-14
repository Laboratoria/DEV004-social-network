import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const login =() => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida al login';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);
  return HomeDiv;
};
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });