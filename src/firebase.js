import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGmHYCuIW2dLl2eozBK7kGjFZgEvc-bhE",
  authDomain: "slack-clone-59260.firebaseapp.com",
  projectId: "slack-clone-59260",
  storageBucket: "slack-clone-59260.appspot.com",
  messagingSenderId: "265342132421",
  appId: "1:265342132421:web:bbd8838f91701da6a5d0ac",
  measurementId: "G-YTDJMTZH9N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
