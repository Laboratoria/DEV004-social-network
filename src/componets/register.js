export const register = () => {

//   const divHome = document.createElement('nav');
//   const img = document.createElement('img');
//   img.setAttribute('class', 'logo');
  const HomeDiv = document.createElement('div');
  HomeDiv.innerHTML = ('Registro de usuario');
  const divForm = document.createElement('div');
  HomeDiv.appendChild(divForm);
  
  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'nombre');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'text');
  inputPassword.setAttribute('placeholder', 'contraseña');

  const inputMail = document.createElement('input');
  inputMail.setAttribute('type', 'text');
  inputMail.setAttribute('placeholder', 'Correo Electrónico');

  const inputNationality = document.createElement('input');
  inputNationality.setAttribute('type', 'text');
  inputNationality.setAttribute('placeholder', 'Nacionalidad');

  const inputDateOfBirth = document.createElement('input');
  inputDateOfBirth.setAttribute('type', 'text');
  inputDateOfBirth.setAttribute('placeholder', 'Fecha de nacimiento');

  const inputOcupation = document.createElement('input');
  inputOcupation.setAttribute('type', 'text');
  inputOcupation.setAttribute('placeholder', 'Ocupación');
  
const selectRolReda = document.createElement("select");
const optionRol = document.createElement("option");
const optionEspecialist = document.createElement("option");
const optionCarer = document.createElement("option");

optionRol.value = " ";
optionRol.text = "--Elige tu Rol en Reda--";

optionEspecialist.value = "Especialist";
optionEspecialist.text = "Especialista";

optionCarer.value = "Carer";
optionCarer.text = "Cuidador";

selectRolReda.add(optionRol, null);
selectRolReda.add(optionEspecialist, null);
selectRolReda.add(optionCarer, null);

optionEspecialist.value = "Especialist";
optionEspecialist.text = "Especialista";

optionEspecialist.value = "Especialist";
optionEspecialist.text = "Especialista";

optionEspecialist.value = "Especialist";
optionEspecialist.text = "Especialista";

const selectEspecialist = document.createElement("select");
const optionPsichologyst = document.createElement("option");
const optionTeacher = document.createElement("option");
const optionDoctor = document.createElement("option");

  const buttonSend = document.createElement('button');
  buttonSend.textContent = 'enviar';

  divForm.appendChild(inputName);
  divForm.appendChild(inputPassword);
  divForm.appendChild(inputMail);
  divForm.appendChild(inputNationality);
  divForm.appendChild(inputDateOfBirth);
  divForm.appendChild(inputOcupation);
  divForm.appendChild(selectRolReda);
  divForm.appendChild(buttonSend);
  
  
  return HomeDiv;

};