import { registerWithEmail } from '../lib/authentication.js';
import { navigateTo } from '../router.js';

export const register = () => {
  const div = document.createElement('div');
  div.innerHTML = `<form id="registerForm">
    <div class="containerRegister">
      <h1>Registro de Usuario</h1>

      <label for="name"><b>Nombre</b></label>
      <input type="text" placeholder="Escribe tu nombre" name="name" id="name" >
      
      <label for="email"><b>Correo electrónico</b></label>
      <input type="text" placeholder="Correo electrónico" name="email" id="email" required>
     
      <label for="psw"><b>Contraseña</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

      <label for="nationality"><b>Nacionalidad</b></label>
      <input type="text" placeholder="Nacionalidad" name="nationality" id="nationality">

      <label for="Bdate"><b>Fecha de Nacimiento</b></label>
      <input type="date" placeholder="Fecha de nacimiento" name="Bdate" id="Bdate">

      <label for="ocupation"><b>Ocupación</b></label>
      <input type="text" placeholder="Ocupación" name="ocupation" id="ocupation">

      <label for="RedaRol"><b>Tu rol en Reda</b></label>
      <select name=RedaRol>
      <option value= "expert">Especialista</option>
      <option value= "carer">Cuidador</option>
      <input type="submit" id="btnregister" value="Register"/>
    </div>   
    <div class="bottom-container">
      </div>
    </div>
    <div id="divParaErrores"></div>
  </form>`;
  // aca metí el form en una constante para que sea mas claro
  const form = div.querySelector('#registerForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('hola', e.target);
    const email = e.target.email.value;
    const password = e.target.psw.value;
    registerWithEmail(email, password)
      .then((useCredential) => {
        navigateTo('/home');
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.code);
        // eslint-disable-next-line no-lone-blocks
        if (error.code === 'auth/invalid-email') {
          const divErr = document.getElementById('divParaErrores');
          divErr.innerHTML = ('&#10060 &#128064 el e-mail no es válido');
        } else if (error.code === 'auth/weak-password') {
          alert('password is too weak');
        } else if (error.code === 'auth/email-already-in-use') {
          alert('Email already in use');
        } else if (error.code) {
          alert('Something went wrong');
        }
      });
  });
  // pintar el formulario así en vez de "return div" es mas claro y funciona,
  return form;
  
};
