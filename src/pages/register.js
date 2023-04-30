import { createUser } from '../firebaseConfig';

export const register = () => {
  // crea contenedor principal
  const article = document.createElement('article');
  article.setAttribute('id', 'registerScreen');

  const section = document.createElement('section'); // cambiar body por div o section
  section.setAttribute('id', 'container2');

  const formRegister = document.createElement('form'); // se crea el form
  formRegister.setAttribute('id', 'formRegister');

  const divUrl = document.createElement('div');
  divUrl.setAttribute('id', 'url');
  const url = document.createElement('h4'); // el usuario ingresa su foto con url
  url.textContent = 'Ingresa la URL de tu foto';
  const inputUrl = document.createElement('input'); // input para ingresar la url
  inputUrl.classList.add('inputTitle');
  divUrl.append(url, inputUrl);


  const inputPhoto = document.createElement('input');
  inputPhoto.setAttribute('type','file');
  inputPhoto.setAttribute('id','photo')
  divUrl.append(inputPhoto);

  const divNombre = document.createElement('div');
  divNombre.setAttribute('id', 'nombre');
  const nombre = document.createElement('h4'); // modifica propiedades de los elementos
  nombre.textContent = 'Nombre de tu mascota'; // retorna el elemento
  const inputNombre = document.createElement('input');
  inputNombre.setAttribute('name','name');
  inputNombre.classList.add('inputTitle');
  divNombre.append(nombre, inputNombre);

  const divRaza = document.createElement('div');
  divRaza.setAttribute('id', 'raza');
  const raza = document.createElement('h4');
  raza.textContent = 'Raza de tu mascota';
  const inputRaza = document.createElement('input');
  inputRaza.setAttribute('name','rase')
  inputRaza.classList.add('inputTitle');
  divRaza.append(raza, inputRaza);

  const divEdad = document.createElement('div');
  divEdad.setAttribute('id', 'edad');
  const edad = document.createElement('h4');
  edad.textContent = 'Edad de tu mascota';
  const inputEdad = document.createElement('input');
  inputEdad.setAttribute('name','age');
  inputEdad.classList.add('inputTitle');
  divEdad.append(edad, inputEdad);

  const ingresar = document.createElement('img');
  ingresar.src = 'imagenes/boton.jpg';
  ingresar.classList.add('ingresar');
  const link = document.createElement('a');

  //link.href = '/wall';
  link.setAttribute('id','btnRegister')

  link.append(ingresar);
  const enviarForm = document.createElement('type');
  // enviarForm.setAttribute('type', 'submit');
  enviarForm.classList.add('submit');

  formRegister.append(
    divUrl,
    divNombre,
    inputNombre,
    divRaza,
    inputRaza,
    divEdad,
    inputEdad,
    link,
    enviarForm,

    );
  section.append(
    formRegister,

  );

  article.append(section);
  // const form = document.getElementById('formRegister');

  formRegister.addEventListener('submit', (event) => {
    // escucha al evento submit del formulario
    event.preventDefault();
    // Obtener los valores de los campos del formulario
    const name = formRegister.name.value; // lo que el usuario escriba
    const rase = formRegister.rase.value;
    const age = formRegister.age.value;
    console.log(nombre, raza, edad);

    // Guarda los datos del formulario en Firebase
    const db = firebase.database().ref('registro');
    db.push().set({
      name,
      rase,
      age,
    });

    // Limpiar el formulario
    formRegister.reset();
  });
  section.append(formRegister);
  return article;
};
  

  link.addEventListener('click', (event) => { // escucha al evento submit del formulario

    createUser(formRegister.name.value, formRegister.rase.value, formRegister.age.value,inputPhoto.files[0])
})

return article;

}
;
