// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBm9WARw6woqGqWHxiQfhpPFBnwkfLMNmQ",
  authDomain: "todo-app-f3bfc.firebaseapp.com",
  databaseURL: "https://todo-app-f3bfc.firebaseio.com",
  projectId: "todo-app-f3bfc",
  storageBucket: "todo-app-f3bfc.appspot.com",
  messagingSenderId: "458948377513",
  appId: "1:458948377513:web:609ace0b094c579253a2b8",
  measurementId: "G-MS4E3MXJ59"
});

const db = firebaseApp.firestore();

export default db;