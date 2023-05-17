import { getPost, deletePost, createPost, editPost } from '../firebaseConfig.js';

export const wall = () => {
  // crea contenedor principal
  const divForm = document.createElement('div');  
   //' o " no aceptan salto de linea
  divForm.innerHTML = `<div id="regresar">
                      <a href="/"> 
                      <img src="imagenes/regresar.png" width="100px" height="100px"></a></div>
                      <div id="portada">
                      <img src =imagenes/fotoportada2.jpg /style="max-width:100%;height:auto;"></div>
                      <div id="form">
                      <input class="input" id="name" type="name" placeholder="Nombre de tu mascota aquí" >
                      <input class="input" id="edad" type="number"  placeholder="Edad de tu mascota aquí">
                      <input class="input" id="raza" type="text" placeholder="Raza de tu mascota aquí">
                      <input class="input" id="urlphoto" type="text" placeholder="Ingresa la Url de tu foto aquí">
                      <input class="input" id="description" type="text" placeholder="Ingresa tu post aquí">
                      <button id="crear-btn">Enviar</button></div>`;
                      // inputs de formulario para ingresar datos

  const button = divForm.querySelector('#crear-btn') // boton enviar de publicaciones
  button.addEventListener('click', (e)=> {
 const name = divForm.querySelector('#name').value;
 const age = divForm.querySelector('#edad').value;
 const rase = divForm.querySelector('#raza').value;
 const photo = divForm.querySelector('#urlphoto').value;
 const description = divForm.querySelector('#description').value;
    const newPost = {
       age, 
      name, 
      photo, 
      rase,
      description,
    }
    createPost(newPost).then(()=>{
      alert('post creado con exito');
      location.reload();
    }).catch((error) => console.error(error));
  })
  
  const article = document.createElement('article');
  article.setAttribute('id', 'cprincipal');
  article.append(divForm)

  const allPost = document.createElement('div');
  allPost.setAttribute('id', 'principalPost');
  getPost() // obtener post, viene de firebaseconfig
    .then((data) => { // resultado de la consulta
      console.log(data);
      if (data.length > 1) {
        data.forEach((post) => {
          // contenedor hijo
          // FOR por cada POST
          const postContainer = document.createElement('div');
          postContainer.setAttribute('id', 'post');
          
          postContainer.innerHTML = `<div><h4 id="postTitle">Mi nombre es:${post.name}</h4></div>
          <div id="c-image"><img class="postImg" src=${post.photo}></div>
          <div><h5 class="race">${post.rase}</h5></div>
          <div id="c-description"><h4 id="description">${post.description}</h4></div>
          <div><input class="input2" id="${post.id}i" style="display: none;"></div>
          <div><button postId=${post.id} id="${post.id}b" class="b-edit"  style="display: none;" id="Confirmar">Confirmar Edición</button></div>
          <div id="c-button"><button class="action-button"  id="editButton" action="Edit">Modificar Post</button>
          <button class="action-button" id="deleteButton" action="delete" postId=${post.id}>Eliminar Post</button></div>`;
          /*const titlePost = document.createElement('h4');
          titlePost.textContent = `Mi nombre es: ${post.name}`;
          titlePost.setAttribute('id', 'postTitle');*/



         /* const photo = document.createElement('img');
          photo.src = post.photo; // agrega la url de la foto
          photo.setAttribute('class', 'postImg');*/

         /* const race = document.createElement('h5');
          race.textContent = post.rase;
          race.setAttribute('class', 'race');*/

         /* const description = document.createElement('h4');
          description.textContent = post.description;
          description.setAttribute("id","description")*/

         /* const inputEdit = document.createElement('input');
          inputEdit.style.display = 'none';
          inputEdit.setAttribute('id', 'editInput');*/

          /*const botonEdit = document.createElement('button');
          botonEdit.style.display = 'none';
          botonEdit.textContent = 'Confirmar edición';
          botonEdit.setAttribute('postId', post.id);*/

        /*  const buttonModificar = document.createElement('button');
          buttonModificar.setAttribute('id', 'editButton');
          buttonModificar.setAttribute('action', 'Edit');
          buttonModificar.textContent = 'Modificar Post';

          const buttonEliminar = document.createElement('button');
          buttonEliminar.setAttribute('id', 'deleteButton');
          buttonEliminar.setAttribute('postId', post.id); // le agrega un atributo nuevo al post que sirve para saber cuál es el id del post
          buttonEliminar.setAttribute('action', 'delete'); // action, para saber cuál va a ser la acción del boton
          buttonEliminar.textContent = 'Eliminar Post';*/

         // postContainer.append(titlePost,photo,race,description,inputEdit,botonEdit,buttonModificar,buttonEliminar);

          allPost.append(
            postContainer
          );

          document.querySelectorAll('button') // captura todos los botones del codigo
            .forEach((boton) => {
              boton.addEventListener('click', (event) => {
                const tag = event.target.getAttribute('postId'); // sirve para saber cuál es el id del post
                const action = event.target.getAttribute('action'); // cual es la acción del boton
                
                if (action === 'delete') {
                  deletePost(tag); // llama la función de firebaseconfig
                } else if(action === 'Edit') {
                  //importar la funcion de modificar y enviar los datos ej: modificarPost(tag, description);
                  const inputEdit = document.getElementById(post.id+'i');
                  const botonEdit = document.getElementById(post.id+'b');
                  inputEdit.style.display = 'inline';
                  botonEdit.style.display = 'inline';
                } else {
                  //capurar los input que se van a modificar
                  if(post.id==tag){
                    const textToEdit = document.getElementById(post.id+'i').value;
                  console.log('tag2'+tag)
                  editPost(tag, textToEdit);
                  }
                  
                }
              });
            });
        });
      }
    })
    .catch((error) => console.error(error));

    article.append(
      allPost
    );

  return article;
};
