// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0-pf6Eo5dMuuVS0OVGLvADFp6xE-bNeE",
    authDomain: "twitter-app-4f007.firebaseapp.com",
    projectId: "twitter-app-4f007",
    storageBucket: "twitter-app-4f007.firebasestorage.app",
    messagingSenderId: "644317039761",
    appId: "1:644317039761:web:09da8a6b04a6a20bfa8330",
    measurementId: "G-G18EMDWR7V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)