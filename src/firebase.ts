import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseApp = {
  apiKey: 'AIzaSyD_C53VeQn0_QnW3rIdDR3GAEXZ4yXWtGo',
  authDomain: 'chat-6c978.firebaseapp.com',
  projectId: 'chat-6c978',
  storageBucket: 'chat-6c978.appspot.com',
  messagingSenderId: '945970133596',
  appId: '1:945970133596:web:144d7206b11d213d0b0499',
  measurementId: 'G-XNMDGPHJBG',
};
firebase.initializeApp(firebaseApp);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };
