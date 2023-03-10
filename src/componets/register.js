export const register = () => {
  const divHome = document.createElement('div');
  const inputName = document.createElement('input');
  
    inputName.textContent = 'nombre';
    console.log(inputName.textContent);
  const img = document.createElement('img'); 
  img.setAttribute('logo');
  divHome.appendChild('img');
  divHome.appendChild('buttonLogin');
  divHome.appendChild('buttonRegister');
  return divHome;
};