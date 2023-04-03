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
} from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);

const getTimestamp = () => serverTimestamp();

const savePublic = (publicacion, likes, name, time) => addDoc(collection(db, 'publication'), {
  publicacion, likes, name, time,
});
const postData = () => query(collection(db, 'publication'), orderBy('time', 'desc'));
export const deletePost = (id) => deleteDoc(doc(db, 'publication', id));
export const updatePost = (id, newDocument) => updateDoc(doc(db, 'publication', id), newDocument);

export {
  db,
  savePublic,
  postData,
  getTimestamp,
};
