import { saveUsers } from '../lib/firebase.js';

import { registerWithEmail } from '../lib/authentication.js';
import { navigateTo, registerError } from '../router.js';

export const register = () => {
  const div = document.createElement('div');

  div.innerHTML = `<form id="registerForm">
 
  
 <div class= 'contLogoReg'>
  <img class='logoReg' src="https://i.ibb.co/bWGQN64/REDA-1.png" alt="REDA-1"'> 
  </div>   
  <div class= 'containerTitulo'> 
  <h1 class= 'tituloReg'>  Registro de Usuario</h1>
  </div>
    <div class="containerRegister">

    
      

      <label for="name" class='labelReg'> <b>Nombre</b></label>
      <input type="text" placeholder="Escribe tu nombre" name="name" id="name" class='inputReg'>
      
      <label for="email" class='labelReg' ><b>Correo electrónico</b></label>
      <input type="text" placeholder="Correo electrónico" name="email" id="email" required class='inputReg'>
     
      <label for="psw" class='labelReg'><b>Contraseña</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required class='inputReg'>

      <label for="nationality" class='labelReg'><b>Nacionalidad</b></label>
      <input type="text" placeholder="Nacionalidad" name="nationality" id="nationality" class='inputReg'>

      <label for="Bdate" class='labelReg'><b>Fecha de Nacimiento</b></label>
      <input type="date" placeholder="Fecha de nacimiento" name="Bdate" id="Bdate" class='inputReg'>

      <label for="ocupation" class='labelReg'><b>Ocupación</b></label>
      <input type="text" placeholder="Ocupación" name="ocupation" id="ocupation" class='inputReg'>

      <label for="RedaRol" class='labelReg'><b>Tu rol en Reda</b></label>
      <select name='RedaRol' id='redaRol'>
        <option value= "expert" class='optionReg'>Especialista</option>
        <option value= "carer" class='optionReg'>Cuidador</option>
      </select>
      <input type="submit" id="btnregister" value="Register"/>
    </div>   
    <div class="bottom-container">
      </div>
    </div>
    <div id="divParaErrores"></div>
    <div class='footerReg'<p>Reda©️</p> </div>
  </form>`;
  // aca metí el form en una constante para que sea mas claro
  const form = div.querySelector('#registerForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('hola', e.target);
    const name = e.target.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.psw.value;
    const nationality = e.target.elements.nationality.value;
    const Bdate = e.target.elements.Bdate.value;
    const ocupation = e.target.elements.ocupation.value;
    const redaRol = e.target.elements.RedaRol.value;
    registerWithEmail(email, password)
      .then((useCredential) =>
        saveUsers(name, email, password, nationality, Bdate, ocupation, redaRol))
      .then(() => {
        navigateTo('/home');
      })
      .catch((error) => {
        registerError(error.code);
      });
  });
  // pintar el formulario así en vez de "return div" es mas claro y funciona,
  return form;
};
