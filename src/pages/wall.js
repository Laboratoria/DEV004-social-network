import { createPost } from "../firebaseConfig";

export const wall = () => {
  // crea contenedor principal
  const article = document.createElement("article");
  article.setAttribute("id", "cprincipal");

  //contenedor hijo
  const body = document.createElement("body");
  body.setAttribute("id", "contenedor");

  const divInfomation = document.createElement("div");
  divInfomation.setAttribute("id", "information");

  const divPerfil = document.createElement("div");
  divPerfil.classList.add("mitad");

  //foto de perfil
  const img = document.createElement("img");
  img.src = "imagenes/pelusa.jpg";

  divPerfil.append(img);

  const divText = document.createElement("div");
  divText.classList.add("perfil");

  //nombre de mascota
  const nameM = document.createElement("h1");
  nameM.textContent = "Mi nombre es : pelusa";

  //raza  mascota
  const raseM = document.createElement("h1");
  raseM.textContent = "Mi raza es : Yorkshire terrier";

  //edad  mascota
  const ageM = document.createElement("h1");
  ageM.textContent = "Tengo : 2 años";

  divText.append(nameM, raseM, ageM);

  divInfomation.append(divPerfil, divText);

  const divComment = document.createElement("div");
  const cuadro = document.createElement("textarea");
  cuadro.setAttribute("rows", "10");
  cuadro.setAttribute("cols", "100");
  cuadro.textContent = "Cuentanos sobre tu mascota";
  cuadro.setAttribute("id", "cuadro");

  const enviar = document.createElement("button");
  enviar.textContent = "Publicar";
  enviar.setAttribute("id", "publicar");

  divComment.append(cuadro, enviar);
  divComment.setAttribute("id", "comment");

  //post

  const divpost = document.createElement("div");
  divpost.setAttribute("id", "post");


  const photo = document.createElement("img");
  photo.src = "imagenes/perrito.jpg";
  photo.setAttribute("id", "photo");

  const nameP = document.createElement("h1");
  nameP.textContent = "Bingo";
  nameP.setAttribute("id", "nameP");


  const descripcion = document.createElement("h1");
  descripcion.textContent = "soy bingo y me gusta mucho salir a pasear";
  descripcion.setAttribute("id", "descripcion");


  const photoPost = document.createElement('img');
  photoPost.src = 'imagenes/perritopost.jpg';
  photoPost.setAttribute("id", "photoPost");
  

  divpost.append(photo, nameP, descripcion, photoPost);


  //like ,editar, eliminar
  const divBarra = document.createElement('div');
  divBarra.setAttribute('id', 'barra');
  

  const like = document.createElement('img');
  like.src = 'imagenes/like.png';
  like.setAttribute("id", "like");

  const editar = document.createElement("img");
  editar.src = "imagenes/editar.png";
  editar.setAttribute("id", "editar");


  const eliminar = document.createElement("img");
  eliminar.src = "imagenes/eliminar.png";
  eliminar.setAttribute("id", "eliminar");



  divBarra.append(like, editar, eliminar);

  body.append(divInfomation, divComment, divpost,divBarra);
  article.append(body);

  enviar.addEventListener("click", (event) => {
    createPost(cuadro.value);
  });

  // retorna el elemento
  return article;

  // Get a list of post from your database
  async function getPost() {
    const postCol = collection(db, "posts");
    const postSnapshot = await getDocs(postCol);
    const posts = postSnapshot.docs.map((doc) => doc.data());
    console.log(posts);
    return posts;
  }

  const p = getPost();
  console.log(p);
};
