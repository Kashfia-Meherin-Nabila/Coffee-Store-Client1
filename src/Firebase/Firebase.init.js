// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcD-MsoArW3fePGpUk7x70_N77td_p6aU",
  authDomain: "coffee-store-f2b15.firebaseapp.com",
  projectId: "coffee-store-f2b15",
  storageBucket: "coffee-store-f2b15.firebasestorage.app",
  messagingSenderId: "375043734109",
  appId: "1:375043734109:web:1e1a39338c688eba8b2bb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);