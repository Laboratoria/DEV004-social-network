export const home = () =>{
   const divHome = document.createElement('div');
   const buttonRegister = document.createElement('button');
   const buttonLogin = document.createElement('button');
   buttonLogin.textContent ='Regístrate';
   buttonRegister.textContent = 'Iniciar Sesión';
   const img = document.createElement('img');
   img.setAttribute('logo');

   divHome.appendChild(img);
   divHome.appendChild(buttonLogin);
   divHome.appendChild(buttonRegister);
   return divHome;
};
