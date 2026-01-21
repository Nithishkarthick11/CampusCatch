// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCybLViUB_fGsgMQqoYYp2Js60EF5CS-CM",
  authDomain: "campuscatch-d5232.firebaseapp.com",
  projectId: "campuscatch-d5232",
  storageBucket: "campuscatch-d5232.firebasestorage.app",
  messagingSenderId: "142210430980",
  appId: "1:142210430980:web:630ea3a4fe2b9676ba1d51",
  measurementId: "G-Y6NX4B89WZ"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
