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
  
const sel = document.createElement("select");
const opt1 = document.createElement("option");
const opt2 = document.createElement("option");

opt1.value = "1";
opt1.text = "Option: Value 1";

opt2.value = "2";
opt2.text = "Option: Value 2";

sel.add(opt1, null);
sel.add(opt2, null);


  const buttonSend = document.createElement('button');
  buttonSend.textContent = 'enviar';

  divForm.appendChild(inputName);
  divForm.appendChild(inputPassword);
  divForm.appendChild(inputMail);
  divForm.appendChild(inputNationality);
  divForm.appendChild(inputDateOfBirth);
  divForm.appendChild(inputOcupation);
  divForm.appendChild(sel);
  divForm.appendChild(buttonSend);
  
  
  return HomeDiv;
};