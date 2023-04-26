export const register = () => {
  // crea contenedor principal
  const article = document.createElement('article');
  article.setAttribute('id', 'principal2');

  const body = document.createElement('body');
  body.setAttribute('id', 'container2');

  const img = document.createElement('img'); // icono para subir foto
  img.src = 'imagenes/imagenfoto.png';
  img.classList.add('foto');

  const inputFile = document.createElement('input'); // boton examinar
  inputFile.setAttribute('type', 'file');
  inputFile.onchange = (e) => {
    // subir foto
    if (inputFile.files[0]) img.src = URL.createObjectURL(inputFile.files[0]);
  };

  const Nombre = document.createElement('h1'); // modifica propiedades de los elemento
  Nombre.textContent = 'Ingresa el nombre de tu mascota'; // retorna el elemento

  const Raza = document.createElement('h1');
  Raza.textContent = 'Raza de tu mascota';

  const Edad = document.createElement('h1');
  Edad.textContent = 'Edad de tu mascota';

  const inputNombre = document.createElement('INPUT');
  inputNombre.classList.add('box');

  const inputRaza = document.createElement('INPUT');
  inputRaza.classList.add('raza');

  const inputEdad = document.createElement('INPUT');
  inputEdad.classList.add('edad');

  const ingresar = document.createElement('img'); // crea imagen foto
  ingresar.src = 'imagenes/pata1.png';
  ingresar.classList.add('ingresar');
  const link = document.createElement('a');
  link.href = '/wall';
  link.setAttribute('id','btnRegister')
  link.append(ingresar);

  body.append(
    img,
    inputFile,
    Nombre,
    inputNombre,
    Raza,
    inputRaza,
    Edad,
    inputEdad,
    link
  );
  article.append(body);


  link.addEventListener('click', registerPet);
  //let db = firebase.firestore();


function registerPet() {
  console.log('hola');
}

  return article;
};
