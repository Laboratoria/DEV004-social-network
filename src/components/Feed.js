import { loginGoogle } from "../lib/autenticar";
import { onNavigate } from "../router/index";
//import { logOut } from '../lib/autenticar';

export const Feed = () => {
  const HomeDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = "Bienvenida al login";
  const buttonHome = document.createElement("button");
  const buttonLoginGoogle = document.createElement("button");
  const buttonCerrarSesion = document.createElement("button");

  buttonHome.textContent = "Regresar al Home";
  //buttonHome.addEventListener('click', () => onNavigate('/'));
  buttonCerrarSesion.textContent = "Cerrar Sesión";
  buttonLoginGoogle.addEventListener("click", () => onNavigate("/feed"));
  buttonLoginGoogle.addEventListener("click", () =>
    signInWithPopup(auth, provider)
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
        return error;
        // ...
      }));
  
  /* buttonCerrarSesion.addEventListener('click', () => {
    logOut().then((resp)=> console.log(resp)).catch((err)=> console.log(err))
    onNavigate('/')});*/
  HomeDiv.append(h3); //este lo comentamos al final y pusimos el return h3
  //HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
