import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAaOnUpRY_n0Ka7y-Y8X40lyUsn2maFMao",
    authDomain: "instagram-clone-8f890.firebaseapp.com",
    databaseURL: "https://instagram-clone-8f890.firebaseio.com",
    projectId: "instagram-clone-8f890",
    storageBucket: "instagram-clone-8f890.appspot.com",
    messagingSenderId: "392598189556",
    appId: "1:392598189556:web:0a5b914cadc499508375a1",
    measurementId: "G-ZRKYS4G2LX"
  });


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};