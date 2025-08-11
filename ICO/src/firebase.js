// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ FALTABA ESTA IMPORTACIÓN
import { getFirestore } from "firebase/firestore"; // ✅ FALTABA ESTA IMPORTACIÓN






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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);