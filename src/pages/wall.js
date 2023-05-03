import { getPost, deletePost, createPost } from '../firebaseConfig';

export const wall = () => {
  // crea contenedor principal
  const divForm = document.createElement('div');  
   //' o " no aceptan salto de linea
  divForm.innerHTML = `<input id="name" type="name" placeholder="Nombre de tu mascota aquí">
                      <input id="edad" type="number"  placeholder="Edad de tu mascota aquí">
                      <input id="raza" type="text" placeholder="Raza de tu mascota aquí">
                      <input id="urlphoto" type="text" placeholder="Ingresa la Url de tu foto aquí">
                      <input id="description" type="text" placeholder="Ingresa tu post aquí">
                      <button id="crear-btn">Enviar</button>`

  const button = divForm.querySelector('#crear-btn') //divForm.getElementBy() no se puede
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
                // console.log(tag, action);
                if (action === 'delete') {
                  deletePost(tag); // llama la función de firebaseconfig
                } else {
                  // accion modificar (crearla)
                }
              });
            });
        });
      }
    })
    .catch((error) => console.error(error));

  return article;
};
