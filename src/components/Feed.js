import { log } from "async";
import { logOut, crearPost, refPost, db, editRef, actualUser } from "../lib/autenticar";
import { onNavigate } from "../router/index";
import { onSnapshot, doc, deleteDoc } from "@firebase/firestore";


// CREAR ELEMENTOS DEL MURO
export const Feed = () => {
  //console.log("Esto debería funcionar", actualUser())
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
      
      /*buttonEditar.addEventListener("click", async () => {
        console.log(inputFeed.value);
        await editRef(post.id, {comentario: inputFeed.value});
      });*/
      const buttonEliminar = document.createElement("button");
      buttonEliminar.id = "eliminar";
      buttonEliminar.textContent = "Eliminar";
      buttonEliminar.addEventListener("click", async () => {
        await deleteDoc(doc(db, "post", post.id));
      });
      const inputEditable = document.createElement("input");
      inputEditable.id = "editable"
      inputEditable.value = post.data().comentario;
      //inputEditable.style.display = 'none';
      
      const buttonGuardar = document.createElement("button");
      buttonGuardar.id = "guardar"
      buttonGuardar.textContent = "Guardar";
      buttonGuardar.addEventListener("click", async () => {
        console.log(inputFeed.value);
        await editRef(post.id, {comentario: inputEditable.value})
        inputEditable.style.display = 'none'
      });
      const buttonEditar = document.createElement("button");
      buttonEditar.id = "editar";
      buttonEditar.textContent = "Editar";
      
      buttonEditar.addEventListener('click', () => {
        buttonEditar.style.display = 'none';
        p.style.display = 'none';
        inputEditable.style.display = 'block';
        buttonGuardar.style.display = 'block';
      })
      const emailUser = actualUser().email;
      if (emailUser === post.data().email){
        buttonEliminar.style.display = 'block';
        buttonEditar.style.display = 'block';
        buttonGuardar.style.display = 'none';
        inputEditable.style.display = 'none'
      }else{
        buttonEliminar.style.display = 'none';
        buttonEditar.style.display = 'none';
        buttonGuardar.style.display = 'none';
        inputEditable.style.display = 'none';
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
