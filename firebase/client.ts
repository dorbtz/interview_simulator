// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKpjzSBpGOhM5bOK1JRY_UTh2_sJem4Hw",
  authDomain: "ai-simulator-101.firebaseapp.com",
  projectId: "ai-simulator-101",
  storageBucket: "ai-simulator-101.firebasestorage.app",
  messagingSenderId: "760593719822",
  appId: "1:760593719822:web:8b74f65553dd047a2f125f",
  measurementId: "G-16E37SMWTB"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);