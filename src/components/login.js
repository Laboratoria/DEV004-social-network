import { onNavigate } from '../lib/onNavigate.js'

export const login = () => {

    const root = document.getElementById("pantallaMostrada")
    root.innerHTML = `
        <main class="PantallaInicio">
          <section class="cajaInicio">
            <img src="./img/img_libro_rojo.png" alt="Imagen de libro">
            <input type="text" placeholder=" Correo Electronico" id="inputEmail">
            <input type="password" placeholder=" Contraseña" id="inputPassword">
            <button id="botonInicio">Ingresar</button>
            <hr style="width:100%;text-align:center">
            <button id="botonInicioGoogle"><img src="./img/btn_google_signin.png" alt="boton de google" class="imgButton"></button>
            <p class="textoCrearCuenta">¿No tienes una cuenta?
            <a id="botonRegistrar" href="#" onclick="console.log('hola mundo')"> Registrate</a></p>
          </section>
        </main>`

    botonRegistrar.addEventListener("click", () => onNavigate("/registro",root))

    
}



