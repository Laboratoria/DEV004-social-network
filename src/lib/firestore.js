import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);

const getTimestamp = () => serverTimestamp();

const savePublic = (publicacion, likes, usersLike, name, time) => addDoc(collection(db, 'publication'), {
  publicacion, likes, usersLike, name, time,
});
const postData = () => query(collection(db, 'publication'), orderBy('time', 'desc'));
export const deletePost = (id) => deleteDoc(doc(db, 'publication', id));
export const updatePost = (id, newDocument) => updateDoc(doc(db, 'publication', id), newDocument);

const like = (docum, auth) => {
  // Obtener la referencia al documento correspondiente en Firebase
  const docRef = doc(db, 'publication', docum.id);

  // Incrementar el contador de likes y actualizar en Firebase
  // const newLikes = docum.data().cantidaddelikes + 1;
  return updateDoc(docRef, { likes: arrayUnion(auth.currentUser.uid) })
};
    
export {
  db,
  savePublic,
  postData,
  getTimestamp,
  like,
};
