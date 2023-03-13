import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA3k7Vss44vD0x4ynHhUD288WTXc6WTIIc',
  authDomain: 'social-network-sn8-d7612.firebaseapp.com',
  projectId: 'social-network-sn8-d7612',
  storageBucket: 'social-network-sn8-d7612.appspot.com',
  messagingSenderId: '409716892814',
  appId: '1:409716892814:web:5d3567a56c1ff718d255df',
  measurementId: 'G-9HY48VZDN0',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
