/*export const ingreso=()=>{
  const formularioIngreso= document.createElement("form");
  formularioIngreso.className="form";
  formularioIngreso.innerHTML='<input type="text" placeholder="Email"> <input type="password" maxlength="8" placeholder="Password"> <button class="ingresar">Ingresar</button>';
return formularioIngreso;
};*/
import { navigateTo } from "../router";

export const Login = () => {
  // Create a div element to hold the login component
  const div = document.createElement('div');
  div.innerHTML = `<div class="container">
    <form id="loginForm">
    <picture>
      <img src="assets/logo.png" alt="logo-Wanderlust">
      </picture>
      <div class="row">
        <div class="col">
          <input type="text" id="username" name="username" placeholder="Username" required>
          <input type="password" id="password" name="password" placeholder="Password" required>
          <input type="submit"  class="login" value="Login">
        </div>
        <div class="vl">
        <span class="vl-innertext">or</span>
      </div>
      <div class="col">
        <a href="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Continuar con Facebook
        </a>
        <a href="#" class="google btn"><i class="fa fa-google fa-fw">
          </i> Continuar con Google
        </a>
      </div>
      <div class="col">
        <a href="#" style="color:white" class="btn">¿Olvidaste tu contraseña ?</a>
      </div>
      </div>
    </form>
    <div class="row">
      <div class="col">
        <a href="#" style="color:black" class="signup btn">¿No tienes una cuenta? Registrate</a> 
      </div>
    </div>

  <div class="modal">
      <span class="close">&times;</span>
      <p>Some text in the Modal..</p>
    </div>

  </div>`;

  // Function to open modal
  const openModal = (message) => {
    div.querySelector('.modal').style.display = "block";
    div.querySelector('.modal-content > p:nth-child(2)').textContent = message;
  };

  // Add event listeners to the login component

  div.querySelector('#loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = div.querySelector("#username").value;
    const password = div.querySelector("#password").value;
    signInWithPassword(username, password)
      .then(
        (useCredential) => {
          navigateTo('/home');
        },
        (error) => {
          openModal(error.message);
        })
  });

  div.querySelector('.google').addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then(
        (useCredential) => {
          navigateTo('/home');
        },
        (error) => {
          openModal(error.message);
        });
  });

  div.querySelector('.signup').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/register');
  });

  div.querySelector('.close').addEventListener('click', (e) => {
    e.preventDefault();
    div.querySelector('.modal').style.display = "none";
  });

  // Return the div element
  return div;
}