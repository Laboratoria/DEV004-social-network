import { navigateTo } from "../router";

export const Login = () => {
  // Create a div element to hold the login component
  const div = document.createElement("div");
  div.innerHTML = `

  <img src="assets/logo.png" class="logoForm" alt="logo-Wanderlust">
  <form id="loginForm" class="loginForm">
  <div class="row">
  <div class="col">
  <input type="text" id="username" name="username" placeholder="Correo electrónico " required>
  <input type="password" id="password" name="contraseña" placeholder="Password" required>
  <input type="submit"  class="login" value="Iniciar sesión">
  </div>
  <p>o</p>
  <div class="contenedor-botones-GF">
  <button class="google-btn">
  <img class="icono-google" src="assets/google.png">
  Google
  </button>
  <button class="fb-btn">
  <img class="icono-fb" src="assets/facebook.png" >
  Facebook
  </button>
  </div>
  <div class="col">
  <a href="#" style="color:white" class="btn">¿Olvidaste tu contraseña ? <span><br>Recuperala</span></a>
  </div>
  <div class="col">
  <a href="#" style="color: white;" class="signup-btn">¿No tienes una cuenta? <span><br>Registrate</span></a>
  </div>
  </div>
  </form>
   <!--<div class="modal">
      <span class="close">&times;</span>
      <p>Some text in the Modal..</p>
    </div>-->
  </div>`;

  // Function to open modal
  /*const openModal = (message) => {
    div.querySelector(".modal").style.display = "block";
    div.querySelector(".modal-content > p:nth-child(2)").textContent = message;
  };*/

  // Add event listeners to the login component

  div.querySelector("#loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = div.querySelector("#username").value;
    const password = div.querySelector("#password").value;
    signInWithPassword(username, password).then(
      (useCredential) => {
        navigateTo("/home");
      },
      (error) => {
        openModal(error.message);
      }
    );
  });

  div.querySelector(".google-btn").addEventListener("click", (e) => {
    e.preventDefault();
    signInWithGoogle().then(
      (useCredential) => {
        navigateTo("/home");
      },
      (error) => {
        openModal(error.message);
      }
    );
  });

  div.querySelector(".signup-btn").addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("/register");
  });
  /*
  div.querySelector(".close").addEventListener("click", (e) => {
    e.preventDefault();
    div.querySelector(".modal").style.display = "none";
  });*/

  // Return the div element
  return div;
};
