import { getPost, deletePost } from '../firebaseConfig';

export const wall = () => {
  // crea contenedor principal
  const divForm = document.createElement('div');  
   //' o " no aceotan salto de linea
  divForm.innerHTML = `<input class="title" type="text">
                      <input type="text">
                      <button id="crear-btn">crear</button>`
  /*
  document.getElementById('crear-btn')
  document.querySelector('#crear-btn')
  */
 
  const button = divForm.querySelector('#crear-btn') //divForm.getElementBy() no se puede
  button.addEventListener('click', ()=> {
    //crear publicacion query selector 
  })

  /* linea 7 es equivalente a estas otras lineas
  const input = document.createElement(input)
  input.setAttribute('type', 'text')
  input.classList.add('title');
  divForm.append(input)

  const input2 =  document.createElement(input)
  input2.setAttribute('type', 'text')
  input2.classList.add('title');
  divForm.append(input2)

  const button  = documetn.createElemtn('button')
  button.addEventListenr
  */


  const article = document.createElement('article');
  article.setAttribute('id', 'cprincipal');
  article.append(divForm)
  getPost() // obtener post, viene de firebaseconfig
    .then((data) => { // resultado de la consulta
      console.log(data);
      if (data.length > 1) {
        data.forEach((post) => {
          // contenedor hijo
          // FOR por cada POST
          const postContainer = document.createElement('div');
          postContainer.setAttribute('class', 'post');
          const titlePost = document.createElement('h4');
          titlePost.textContent = `Mi nombre es: ${post.name}`;
          titlePost.setAttribute('class', 'postTitle');
          const photo = document.createElement('img');
          photo.src = post.photo; // agrega la url de la foto
          photo.setAttribute('class', 'postImg');
          const race = document.createElement('h5');
          race.textContent = post.rase;
          race.setAttribute('class', 'race');
          const description = document.createElement('h4');
          description.textContent = post.description;
          const buttonModificar = document.createElement('button');
          buttonModificar.setAttribute('id', 'editButton');
          buttonModificar.textContent = 'Modificar Post';
          const buttonEliminar = document.createElement('button');
          buttonEliminar.setAttribute('id', 'deleteButton');
          buttonEliminar.setAttribute('postId', post.id); // le agrega un atributo nuevo al post que sirve para saber cuál es el id del post
          buttonEliminar.setAttribute('action', 'delete'); // action, para saber cuál va a ser la acción del boton
          buttonEliminar.textContent = 'Eliminar Post';
          article.append(
            
            postContainer,
            titlePost,
            photo,
            race,
            description,
            buttonModificar,
            buttonEliminar,
          );
          document.querySelectorAll('button') // captura todos los botones del codigo
            .forEach((boton) => {
              boton.addEventListener('click', (event) => {
                const tag = event.target.getAttribute('postId'); // sirve para saber cuál es el id del post
                const action = event.target.getAttribute('action'); // cual es la acción del boton
                console.log(tag, action);
                if (action === 'delete') {
                  deletePost(tag); // llama la función de firebaseconfig
                } else {
                  // accion modificar (crearla)
                }
              });
              console.log(boton);
            });
        });
      }
    })
    .catch((error) => console.error(error));

  // codigo no funciona, botón no modificaba post, creaba nuevo coment como si fuera una mascota
  /* const body = document.createElement('body');
  body.setAttribute('id', 'contenedor');

  const divInfomation = document.createElement('div');
  divInfomation.setAttribute('id', 'information');

  const divPerfil = document.createElement('div');
  divPerfil.classList.add('mitad');

  // foto de perfil
  const img = document.createElement('img');
  img.src = 'imagenes/pelusa.jpg';

  divPerfil.append(img);

  const divText = document.createElement('div');
  divText.classList.add('perfil');

  // nombre de mascota
  const nameM = document.createElement('h1');
  nameM.textContent = 'Mi nombre es : pelusa';

  // raza  mascota
  const raseM = document.createElement('h1');
  raseM.textContent = 'Mi raza es : Yorkshire terrier';

  // edad  mascota
  const ageM = document.createElement('h1');
  ageM.textContent = 'Tengo : 2 años';

  divText.append(nameM, raseM, ageM);

  divInfomation.append(divPerfil, divText);

  const divComment = document.createElement('div');
  const cuadro = document.createElement('textarea');
  cuadro.setAttribute('rows', '10');
  cuadro.setAttribute('cols', '100');
  cuadro.textContent = 'Cuentanos sobre tu mascota';
  cuadro.setAttribute('id', 'cuadro');

  const enviar = document.createElement('button');
  enviar.textContent = 'Publicar';
  enviar.setAttribute('id', 'publicar');

  divComment.append(cuadro, enviar);
  divComment.setAttribute('id', 'comment');

  // post

  const divpost = document.createElement('div');
  divpost.setAttribute('id', 'post');

  const photo = document.createElement('img');
  photo.src = 'imagenes/perrito.jpg';
  photo.setAttribute('id', 'photo');

  const nameP = document.createElement('h1');
  nameP.textContent = 'Bingo';
  nameP.setAttribute('id', 'nameP');

  const descripcion = document.createElement('h1');
  descripcion.textContent = 'soy bingo y me gusta mucho salir a pasear';
  descripcion.setAttribute('id', 'descripcion');

  const photoPost = document.createElement('img');
  photoPost.src = 'imagenes/perritopost.jpg';
  photoPost.setAttribute('id', 'photoPost');

  divpost.append(photo, nameP, descripcion, photoPost);

  // like ,editar, eliminar
  const divBarra = document.createElement('div');
  divBarra.setAttribute('id', 'barra');

  const like = document.createElement('img');
  like.src = 'imagenes/like.png';
  like.setAttribute('id', 'like');

  const editar = document.createElement('img');
  editar.src = 'imagenes/editar.png';
  editar.setAttribute('id', 'editar');

  const eliminar = document.createElement('img');
  eliminar.src = 'imagenes/eliminar.png';
  eliminar.setAttribute('id', 'eliminar');

  divBarra.append(like, editar, eliminar);

  body.append(divInfomation, divComment, divpost, divBarra);
  // article.append(body); */
  return article;
};
