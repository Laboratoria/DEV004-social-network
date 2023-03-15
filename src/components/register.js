/* eslint-disable arrow-parens */
/* eslint-disable quotes */
import { registerWithEmail } from "../lib/authentication.js";

// eslint-disable-next-line no-unused-vars
export const register = (onNavigate) => {
  //* Aqui estamos creando lo que va en HTML.
  const signInSection = document.createElement("section");
  const coverImg = document.createElement("img");
  const signInHeader = document.createElement("h1");
  const nameInput = document.createElement("input");
  const formRegister = document.createElement("form");
  const emailInput = document.createElement("input");
  const passwordLabel = document.createElement("label");
  const passwordInput = document.createElement("input");
  const SignInLabel = document.createElement("label");
  const SignInBtn = document.createElement("button");
  const BtnGoogle = document.createElement("img");
  const loginBtn = document.createElement("button"); //* Estamos asignandi atributos para todos los elementos creados.

  signInSection.setAttribute("id", "signInSeccion");
  signInHeader.innerHTML = "Crea una cuenta";
  // onNavigate('/home')

  coverImg.setAttribute("id", "LogoPetropolis");
  coverImg.setAttribute("src", "./Img/LogoPetropolisSF.png");
  coverImg.setAttribute("alt", "LogoPetropolis");

  formRegister.setAttribute("id", "form");

  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("placeholder", "Escribe tu nombre");

  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("placeholder", "mascota@petropolis.com");

  passwordLabel.setAttribute("id", "password");
  passwordLabel.setAttribute("name", "password");
  passwordLabel.innerHTML = "Contraseña:";

  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("id", "password");
  passwordInput.setAttribute("name", "password");

  SignInBtn.setAttribute("id", "SignInBtn");
  SignInBtn.textContent = "Registrarse";

  SignInLabel.setAttribute("id", "SignInLabel");
  SignInLabel.setAttribute("name", "SignInLabel");
  SignInLabel.innerHTML = "¿Ya tienes cuenta?";

  loginBtn.setAttribute("id", "loginBtn");
  loginBtn.textContent = "Iniciar Sesión";

  BtnGoogle.setAttribute("id", "BtnGoogle");
  BtnGoogle.setAttribute("src", "./Img/BtnGoogle.png");
  BtnGoogle.setAttribute("alt", "BtnGoogle");
  //* Aqui estamos agregando todo a la sección de SignInPage
  signInSection.appendChild(signInHeader);
  signInSection.appendChild(coverImg);
  formRegister.appendChild(nameInput);
  formRegister.appendChild(emailInput);
  formRegister.appendChild(passwordLabel);
  formRegister.appendChild(passwordInput);
  formRegister.appendChild(SignInBtn);
  formRegister.appendChild(SignInLabel);
  formRegister.appendChild(loginBtn);
  formRegister.appendChild(BtnGoogle);
  signInSection.appendChild(formRegister);

  // eslint-disable-next-line quotes
  loginBtn.addEventListener("click", () => onNavigate("/login"));
  // eslint-disable-next-line func-names

  // eslint-disable-next-line quotes
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    //const name = e.target.nameInput.value;
    const email = emailInput.value;
    console.log(email);
    const password = passwordInput.value;
    console.log(password);
    registerWithEmail(email, password)
      .then(() => {
        onNavigate('/home');
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  });

  //   // eslint-disable-next-line no-undef
  //   /*registerWithEmail(emailInput.value, passwordInput.value, nameInput.value)
  //   .then(() => {
  //       // eslint-disable-next-line quotes
  //   onNavigate("/home");
  //   })
  // .catch(error => {
  //     console.error(error);
  //     alert(error.message);
  // });
  // });*/

  return formRegister;
};
