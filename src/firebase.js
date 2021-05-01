import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3fPhswM9o2FZLkin9_GZ5xeE1qWSlgMA",
    authDomain: "disneyplus-clone-ce4fc.firebaseapp.com",
    projectId: "disneyplus-clone-ce4fc",
    storageBucket: "disneyplus-clone-ce4fc.appspot.com",
    messagingSenderId: "60061365049",
    appId: "1:60061365049:web:4d9fe5c1a4946f4dd16ee8",
    measurementId: "G-B1EGYY37B6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;