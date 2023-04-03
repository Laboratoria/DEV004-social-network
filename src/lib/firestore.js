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

const savePublic = (publicacion, likes, usersLikeArray, name, time) => addDoc(collection(db, 'publication'), {
  publicacion, likes, usersLikeArray, name, time,
});
const postData = () => query(collection(db, 'publication'), orderBy('time', 'desc'));
export const deletePost = (id) => deleteDoc(doc(db, 'publication', id));
export const updatePost = (id, newDocument) => updateDoc(doc(db, 'publication', id), newDocument);
const like = (id, likes, userLike) => updateDoc(doc(db, 'Publication', id), { likes, usersLikeArray: arrayUnion(userLike) });
export {
  db,
  savePublic,
  postData,
  getTimestamp,
  like,
};
