import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDYcI75S4SE6Qrk7-X-j1QCzJt92pt45BM",
  authDomain: "phonebook-01.firebaseapp.com",
  projectId: "phonebook-01",
  storageBucket: "phonebook-01.appspot.com",
  messagingSenderId: "959267110735",
  appId: "1:959267110735:web:76f47d46e3a1bdd2834f3a"
};

if(!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
else
    firebase.app();

const database = firebase.database();

export {database, firebase};