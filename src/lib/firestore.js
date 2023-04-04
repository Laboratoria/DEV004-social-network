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
  arrayRemove,
} from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);

const getTimestamp = () => serverTimestamp();

const savePublic = (publicacion, likes, name, time) => addDoc(collection(db, 'publication'), {
  publicacion, likes, name, time,
});

const postData = () => query(collection(db, 'publication'), orderBy('time', 'desc'));

const deletePost = (id) => deleteDoc(doc(db, 'publication', id));

const updatePost = (id, newDocument) => updateDoc(doc(db, 'publication', id), newDocument);

const like = (docum, auth) => {
  const docRef = doc(db, 'publication', docum.id);
  return updateDoc(docRef, { likes: arrayUnion(auth.currentUser.uid) });
};

const dislike = (docum, auth) => {
  const docRef = doc(db, 'publication', docum.id);
  return updateDoc(docRef, { likes: arrayRemove(auth.currentUser.uid) });
};

export {
  db,
  savePublic,
  postData,
  deletePost,
  updatePost,
  getTimestamp,
  like,
  dislike,
};
