import firebase from "firebase"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC4Jzt5pOUqcBqv8a2YnA7YBEaokQR9qBg",
    authDomain: "todo-585c4.firebaseapp.com",
    projectId: "todo-585c4",
    storageBucket: "todo-585c4.appspot.com",
    messagingSenderId: "387558592334",
    appId: "1:387558592334:web:6711414563c7af7bcb181f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider}
