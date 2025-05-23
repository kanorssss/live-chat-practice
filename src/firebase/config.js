import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-7kY9Nu_GZR8VhHZ-7zLe8b6DaR4Uhpo",
  authDomain: "first-vue-js-firebase-project.firebaseapp.com",
  projectId: "first-vue-js-firebase-project",
  storageBucket: "first-vue-js-firebase-project.firebasestorage.app",
  messagingSenderId: "813237073249",
  appId: "1:813237073249:web:8506ddefe8fa3aa9278120",
};

//initialize app
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
