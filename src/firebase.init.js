// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBm_Gnyp7R0P-Kp6B7M_s0Vu-YyF0YpIcw",
    authDomain: "zara-fashion-house.firebaseapp.com",
    projectId: "zara-fashion-house",
    storageBucket: "zara-fashion-house.appspot.com",
    messagingSenderId: "688249898358",
    appId: "1:688249898358:web:f1544f854b492af227e657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;