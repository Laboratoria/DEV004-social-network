import { navigateTo } from "../router";
// import { createpost, getpost, eliminatePost } from '../lib/firebase.js';
import { createpost, getpost, exitApp } from "../lib/firebase.js";

export const feed = () => {
  const squareF = document.createElement("div");
  squareF.setAttribute("class", "squareF");
  const squareHeaderF = document.createElement("header");
  squareHeaderF.setAttribute("class", "squareHeaderF");
  const logoF = document.createElement("img");
  logoF.setAttribute("src", "https://i.ibb.co/bWGQN64/REDA-1.png");
  logoF.setAttribute("class", "logoF");
  const userInfoF = document.createElement("div");
  const userAvatar = document.createElement("img");
  userAvatar.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
  );
  userAvatar.setAttribute("class", "userAvatar");
  const userExpertChecked = document.createElement("img");
  userExpertChecked.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/5610/5610944.png"
  );
  userExpertChecked.setAttribute("class", "userExpertChecked");
  userInfoF.setAttribute("class", "userInfoF");
  const postContainer = document.createElement("form");
  postContainer.setAttribute("class", "postContainer");
  const postTitle = document.createElement("textarea");

  postTitle.setAttribute("class", "postTitle");
  postTitle.setAttribute("rows", "2");
  postTitle.setAttribute("cols", "2");
  postTitle.setAttribute("placeholder", "Escribe el título de tu post.");
  const post = document.createElement("textarea");
  post.setAttribute("class", "post");
  post.setAttribute("rows", "10");
  post.setAttribute("cols", "1");
  post.setAttribute("placeholder", "Escribe tu post.");

  postTitle.setAttribute("id", "postTitle");
  post.setAttribute("id", "post");
  const subsquareF = document.createElement("div");
  subsquareF.setAttribute("class", "subsquareF");
  const btnHomeF = document.createElement("button");
  btnHomeF.setAttribute("class", "btnHomeF");
  const btnPubF = document.createElement("button");
  btnPubF.setAttribute("class", "btnPubF");
  btnPubF.textContent = "publicar";
  btnHomeF.textContent = "inicio";
  const likeIcon = document.createElement("img");
  // likeIcon.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png');
  likeIcon.setAttribute("class", "likeIcon");
  const commentIcon = document.createElement("img");
  // commentIcon.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png');
  commentIcon.setAttribute("class", "commentIcon");
  const squareFooterF = document.createElement("footer");
  squareFooterF.setAttribute("class", "squareFooterF");
  squareFooterF.textContent = "Reda©️";
  squareF.appendChild(squareHeaderF);
  squareHeaderF.appendChild(logoF);
  squareF.appendChild(userInfoF);
  userInfoF.appendChild(userAvatar);
  userInfoF.appendChild(userExpertChecked);
  squareF.appendChild(postContainer);
  postContainer.appendChild(postTitle);
  postContainer.appendChild(post);
  postContainer.appendChild(likeIcon);
  postContainer.appendChild(commentIcon);
  squareF.appendChild(subsquareF);
  postContainer.appendChild(btnPubF);
  subsquareF.appendChild(btnHomeF);
  btnHomeF.addEventListener("click", () => {
    navigateTo("/home");
  });
  postContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    const feedTitle = e.target.elements.postTitle.value;
    const feedPost = e.target.elements.post.value;
    console.log(feedTitle);
    console.log(feedPost);
    createpost(feedTitle, feedPost);
  });
  // funcion que contiene
  const miPromesa = getpost();
  miPromesa.then((showPost) => {
    // nos aseguramos que la data provenga de feed.js y no de
    // firebase.
    console.log('feed', showPost);
    showPost.forEach((post) => {
      const containerPost = document.createElement('form');
      const div = document.createElement('div');
      div.innerHTML = `<form id= "registerForm">
      
        <textarea id= 'mostrar!'>
        ${post.titulo}
        ${post.descripcion}
        </textarea> 
        <input type="submit" id="btnDeletePost" value="Borrar"/>
        <input type="submit" id="btnEditPost" value="Editar"/>
          </form>`;
      div.setAttribute('id', 'div1');
      squareF.appendChild(div);
      div.appendChild(containerPost);
    });
    const btnBox = document.createElement('div');
    squareF.appendChild(btnBox);
    const btnLogOut = document.createElement('button');
    btnLogOut.setAttribute('class', 'btnLogOut');
    btnLogOut.innerHTML = 'Cerrar sesion';
    btnBox.appendChild(btnLogOut);
    const exitBtn = document.querySelector('.btnLogOut');
    exitBtn.addEventListener('click', () => {
      return exitApp()
        .then (()=> {
          navigateTo("/home")
        });
    });
  });

  //delete
  //creo el evento
  
  const form = document.getElementById('registerForm');

  return squareF;
};
