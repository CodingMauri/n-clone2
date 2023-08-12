// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDof9Dq_aY42X_NfN7ZF892xyA5bDJs_Wg",
  authDomain: "netflix-clone2-3aad4.firebaseapp.com",
  projectId: "netflix-clone2-3aad4",
  storageBucket: "netflix-clone2-3aad4.appspot.com",
  messagingSenderId: "1050434947454",
  appId: "1:1050434947454:web:4cf094a6a3178680034b2f",
  measurementId: "G-TTPY4S4G8X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)