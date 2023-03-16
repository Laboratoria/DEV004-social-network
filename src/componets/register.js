import { registerWithEmail } from '../lib/authentication.js';
import { navigateTo } from '../router.js';

export const register = () => {
  const div = document.createElement('div');
  div.innerHTML = `<form id="registerForm">
    <div class="container">
      <h1>Registro de Usuario</h1>

      <label for="name"><b>Nombre</b></label>
      <input type="text" placeholder="Escribe tu nombre" name="name" id="name" required>
      
      <label for="email"><b>Correo electrónico</b></label>
      <input type="text" placeholder="Correo electrónico" name="email" id="email" required>
     
      <label for="psw"><b>Contraseña</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

      <label for="nationality"><b>Nacionalidad</b></label>
      <input type="text" placeholder="Nacionalidad" name="nationality" id="nationality" required>

      <label for="Bdate"><b>Fecha de Nacimiento</b></label>
      <input type="date" placeholder="Fecha de nacimiento" name="Bdate" id="Bdate" required>

      <label for="ocupation"><b>Ocupación</b></label>
      <input type="text" placeholder="Ocupación" name="ocupation" id="ocupation" required>

      <label for="RedaRol"><b>Tu rol en Reda</b></label>
      <select name=RedaRol>
      <option value= "expert">Especialista</option>
      <option value= "carer">Cuidador</option>
      <input type="submit" id="btnregister" value="Register"/>
    </div>   
    <div class="bottom-container">
      </div>
    </div>
  </form>`;

  div.querySelector('#registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('hola', e.target);
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
};

//   const HomeDiv = document.createElement('div');
//   HomeDiv.innerHTML = ('Registro de usuario');
//   const divForm = document.createElement('form');
//   HomeDiv.appendChild(divForm);

//   const inputName = document.createElement('input');
//   inputName.setAttribute('type', 'text');
//   inputName.setAttribute('placeholder', 'nombre');

//   const inputPassword = document.createElement('input');
//   inputPassword.setAttribute('type', 'text');
//   inputPassword.setAttribute('placeholder', 'contraseña');

//   const inputMail = document.createElement('input');
//   inputMail.setAttribute('type', 'text');
//   inputMail.setAttribute('placeholder', 'Correo Electrónico');

//   const inputNationality = document.createElement('input');
//   inputNationality.setAttribute('type', 'text');
//   inputNationality.setAttribute('placeholder', 'Nacionalidad');

//   const inputDateOfBirth = document.createElement('input');
//   inputDateOfBirth.setAttribute('type', 'text');
//   inputDateOfBirth.setAttribute('placeholder', 'Fecha de nacimiento');

//   const inputOcupation = document.createElement('input');
//   inputOcupation.setAttribute('type', 'text');
//   inputOcupation.setAttribute('placeholder', 'Ocupación');

// const selectRolReda = document.createElement("select");
// const optionRol = document.createElement("option");
// const optionEspecialist = document.createElement("option");
// const optionCarer = document.createElement("option");

// optionRol.value = " ";
// optionRol.text = "--Elige tu Rol en Reda--";

// optionEspecialist.value = "Especialist";
// optionEspecialist.text = "Especialista";

// optionCarer.value = "Carer";
// optionCarer.text = "Cuidador";

// selectRolReda.add(optionRol, null);
// selectRolReda.add(optionEspecialist, null);
// selectRolReda.add(optionCarer, null);

// optionEspecialist.value = "Especialist";
// optionEspecialist.text = "Especialista";

// optionEspecialist.value = "Especialist";
// optionEspecialist.text = "Especialista";

// optionEspecialist.value = "Especialist";
// optionEspecialist.text = "Especialista";

// const selectEspecialist = document.createElement("select");
// const optionPsichologyst = document.createElement("option");
// const optionTeacher = document.createElement("option");
// const optionDoctor = document.createElement("option");

//   const buttonSend = document.createElement('button');
//   buttonSend.textContent = 'enviar';

//   divForm.appendChild(inputName);
//   divForm.appendChild(inputPassword);
//   divForm.appendChild(inputMail);
//   divForm.appendChild(inputNationality);
//   divForm.appendChild(inputDateOfBirth);
//   divForm.appendChild(inputOcupation);
//   divForm.appendChild(selectRolReda);
//   divForm.appendChild(buttonSend);

//   return HomeDiv;

// };
