import { logOut, crearPost, refPost, db, editRef } from "../lib/autenticar";
import { onNavigate } from "../router/index";
import { onSnapshot, doc, deleteDoc, updateDoc } from "@firebase/firestore";

// CREAR ELEMENTOS DEL MURO
export const Feed = () => {
  const HomeDiv = document.createElement("div");
  const header = document.createElement("header");
  header.id = "encabezadoFeed";
  const img = document.createElement("img");
  img.setAttribute("src", "./img/bannerM.png");
  img.setAttribute("alt", "Banner Mamá Genial");
  img.id = "banner";
  header.appendChild(img);
  //HomeDiv.appendChild(header);
  const main = document.createElement("main");
  main.id = "muro";
  const inputFeed = document.createElement("input");
  inputFeed.id = "inputComentarios";
  inputFeed.placeholder = "¿Cómo te sientes hoy?";
  const buttonPublicar = document.createElement("button");
  buttonPublicar.id = "publicar";
  buttonPublicar.textContent = "Publicar";
  //const mensaje = document.createElement("p")
  buttonPublicar.addEventListener("click", () => {
    crearPost(inputFeed.value);
  });
 // mensaje.textContent = "";
  main.append(inputFeed, buttonPublicar);
  const articlePost = document.createElement("article");
  articlePost.id = "postRealizado";
  onSnapshot(refPost(), (querySnapshot) => {
    articlePost.innerHTML = "";
    querySnapshot.forEach((post) => {
      console.log(post.data().email, post.data().comentario);
      const p = document.createElement("p");
      p.textContent = post.data().comentario;
      const strong = document.createElement("strong");
      strong.textContent = post.data().email;
      const botonesPost = document.createElement("section");
      botonesPost.id = "btPost";
      const buttonEditar = document.createElement("button");
      buttonEditar.id = "editar";
      buttonEditar.textContent = "Editar";
      buttonEditar.addEventListener("click", async () => {
        await editRef(post.id, {comentario: inputFeed.value});
      });
      const buttonEliminar = document.createElement("button");
      buttonEliminar.id = "eliminar";
      buttonEliminar.textContent = "Eliminar";
      buttonEliminar.addEventListener("click", async () => {
        await deleteDoc(doc(db, "post", post.id));
      });
      botonesPost.append(buttonEditar, buttonEliminar);
      articlePost.append(strong, p, botonesPost);
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
