export const timeline = () => {
    const root = document.getElementById("pantallaMostrada")
    root.innerHTML = `
        <main class="PantallaInicio">
          <section class="cajaInicio">
            <img src="./img/img_libro_rojo.png" alt="Imagen de libro">
            <input type="text" placeholder=" Nombre o Nick" id="inputNick">
            <input type="text" placeholder=" E-mail" id="inputEmail">
            <input type="password" placeholder=" Password" id="inputEmail">
            <button id="botonInicio">Log in</button>
            <hr style="width:100%;text-align:center">
            <button id="botonInicioGoogle"><img src="./img/btn_google_signin.png" alt="boton de google" class="imgButton"></button>
            <p class="textoCrearCuenta">Esta es la pagina de timeline?
            <a id="botonRegistrar" href="#" onclick="console.log('hola mundo')"> Register</a></p>
          </section>
        </main>`
}