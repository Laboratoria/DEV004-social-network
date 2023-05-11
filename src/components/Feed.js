import { log } from "async";
import {
  logOut,
  crearPost,
  refPost,
  db,
  editRef,
  actualUser,
} from "../lib/autenticar";
import { onNavigate } from "../router/index";
import { onSnapshot, doc, deleteDoc } from "@firebase/firestore";

// CREAR ELEMENTOS DEL MURO
export const Feed = () => {
  // console.log("Esto debería funcionar", actualUser())
  // Elementos header (mostrar logo)
  const HomeDiv = document.createElement("div");
  const header = document.createElement("header");
  header.id = "encabezadoFeed";
  const img = document.createElement("img");
  img.src = "./img/bannerM.png";
  img.setAttribute("alt", "Banner Mamá Genial");
  img.id = 'banner';
  header.appendChild(img);

  // Elementos muro (todo para publicar)
  const main = document.createElement("main");
  main.id = "muro";
  const inputFeed = document.createElement("input");
  inputFeed.id = "inputComentarios";
  inputFeed.placeholder = "¿Cómo te sientes hoy?";
  const buttonPublicar = document.createElement("button");
  buttonPublicar.id = "publicar";
  buttonPublicar.textContent = "Publicar";
  buttonPublicar.addEventListener("click", () => {
    crearPost(inputFeed.value);
    inputFeed.value = "";
  });
  main.append(inputFeed, buttonPublicar);

  // Pintar los comentarios realizados
  const articlePost = document.createElement("article");
  articlePost.id = "postRealizado";
  onSnapshot(refPost(), (querySnapshot) => {
    articlePost.innerHTML = "";
    querySnapshot.forEach((post) => {
      console.log(post.data().email, post.data().comentario, post.data().date);
      // Elementos para darle diseño a los comentarios realizados
      const p = document.createElement("p");
      p.textContent = post.data().comentario;
      const strong = document.createElement("strong");
      strong.textContent = post.data().email;
      const botonesPost = document.createElement("section");
      botonesPost.id = "btPost";
      // Elementos para editar y eliminar comentarios
      const buttonEliminar = document.createElement("button");
      buttonEliminar.id = "eliminar";
      buttonEliminar.textContent = "Eliminar";
      buttonEliminar.addEventListener("click", async () => {
        await deleteDoc(doc(db, "post", post.id));
      });
      const inputEditable = document.createElement("input");
      inputEditable.id = "editable";
      inputEditable.value = post.data().comentario;

      // Utilizar el editar para guardar los cambios realizados en el input
      const buttonGuardar = document.createElement("button");
      buttonGuardar.id = "guardar";
      buttonGuardar.textContent = "Guardar";
      buttonGuardar.addEventListener("click", async () => {
        console.log(inputFeed.value);
        await editRef(post.id, { comentario: inputEditable.value });
        inputEditable.style.display = "none";
      });
      const buttonEditar = document.createElement("button");
      buttonEditar.id = "editar";
      buttonEditar.textContent = "Editar";

      buttonEditar.addEventListener("click", () => {
        buttonEditar.style.display = "none";
        p.style.display = "none";
        inputEditable.style.display = "block";
        buttonGuardar.style.display = "block";
      });
      const emailUser = actualUser().email;
      if (emailUser === post.data().email) {
        buttonEliminar.style.display = "block";
        buttonEditar.style.display = "block";
        buttonGuardar.style.display = "none";
        inputEditable.style.display = "none";
      } else {
        buttonEliminar.style.display = "none";
        buttonEditar.style.display = "none";
        buttonGuardar.style.display = "none";
        inputEditable.style.display = "none";
      }
      botonesPost.append(buttonEditar, buttonEliminar, buttonGuardar);
      articlePost.append(strong, p, inputEditable, botonesPost);
      HomeDiv.appendChild(articlePost);
    });
  });
  const nav = document.createElement("nav");
  const buttonCerrarSesion = document.createElement("button");
  buttonCerrarSesion.id = "cerrarSesion";
  // BOTON CERRAR SESIÓN Y EVENTO (interacción)
  buttonCerrarSesion.textContent = "Cerrar Sesión";
  buttonCerrarSesion.addEventListener("click", () => {
    logOut().then((resp) => onNavigate("/"));
  });
  nav.appendChild(buttonCerrarSesion);
  HomeDiv.append(header, nav, main);

  //HomeDiv.append(img, inputFeed, buttonPublicar, buttonCerrarSesion); // este lo comentamos al final y pusimos el return h3

  // HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
