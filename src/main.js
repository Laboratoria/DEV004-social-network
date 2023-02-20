// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

function iniciar(){
  const root = document.getElementById("root")
  root.innerHTML=`
  <main class="PantallaInicio">
    <section class="cajaInicio">
      <img src="./img/img_libro_rojo.png" alt="Imagen de libro">
      <input type="text" placeholder=" Nombre o Nick" id="inputNick">
      <input type="text" placeholder=" E-mail" id="inputEmail">
      <input type="password" placeholder=" Password" id="inputEmail">
      <button id="botonInicio">Log in</button>
      <hr style="width:100%;text-align:center">
      <button id="botonInicioGoogle"><img src="./img/btn_google_signin.png" alt="boton de google" class="imgButton"></button>
      <p class="textoCrearCuenta">Dont have an account?
      <a id="botonRegistrar" href="#"> Register</a></p>
    </section>
  </main> 
  `
}

iniciar()
