export const Register = () => {

    const div = document.createElement('div');
    div.innerHTML = `
     <picture>
     <img src="assets/logoPrincipal.png" alt="Icono-Wanderlust">
     </picture>
     <p>Únete a nuestra comunidad de viajeros y comparte tus aventuras con el mundo. ¡Viaja sin límites!</p>
    <form id="registerForm">
      <div class="container">
        <h1>Registro</h1>
       
        <input type="text" placeholder="Enter Email" name="email" id="email" required>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
        <input type="submit" class="login" value="Crear"/>
        <p>Al crear una cuenta, acepta nuestros <a href="#">terminos & privacidad</a>.</p>
       
      </div>   
      <div class="bottom-container">
      <div class="row">
        <div class="col">
          <a href="#" style="color:black" class="btn">¿ Ya tienes una cuenta?
          ingresa</a>
        </div>
        </div>
      </div>
    </form>`;
  
    div.querySelector('#registerForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.psw.value;
      registerWithEmail(email, password)
        .then((useCredential) => {
          navigateTo('/home');
        })
        .catch(error => {
          console.error(error);
          alert(error.message);
        });
    });
  
    return div;
  }