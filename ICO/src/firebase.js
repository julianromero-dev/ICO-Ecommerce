// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ✅ Importa el GoogleAuthProvider
import { getFirestore } from "firebase/firestore";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ7didRm6fPh6Gnf1kYGlcTm6nYciHhKM",
  authDomain: "ico-store.firebaseapp.com",
  projectId: "ico-store",
  storageBucket: "ico-store.firebasestorage.app",
  messagingSenderId: "350762088501",
  appId: "1:350762088501:web:9adb018d66c6fb3031597c"
};


// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa los servicios de Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(); // ✅ Proveedor de Google