// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxbU1LnwRZXANkAgTU1ZKtOMvw9UvzHIQ",
    authDomain: "restaurant-firebase-75797.firebaseapp.com",
    projectId: "restaurant-firebase-75797",
    storageBucket: "restaurant-firebase-75797.appspot.com",
    messagingSenderId: "619952444224",
    appId: "1:619952444224:web:f9d5d93db0ccafd6eaa0a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app