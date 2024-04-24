import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4PAt4M4xPKXvteGl-QroTnzs4jcn9Ivg",
    authDomain: "curso-c10ae.firebaseapp.com",
    projectId: "curso-c10ae",
    storageBucket: "curso-c10ae.appspot.com",
    messagingSenderId: "69509534883",
    appId: "1:69509534883:web:15596edad2569a2ae39b16",
    measurementId: "G-FN7Z0HXK1K"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };