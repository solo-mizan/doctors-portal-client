// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCE4OyYawhRA7i2CWi_sNKgt9bMlpuNQLs",
    authDomain: "doctors-portal-efa6e.firebaseapp.com",
    projectId: "doctors-portal-efa6e",
    storageBucket: "doctors-portal-efa6e.appspot.com",
    messagingSenderId: "452861450276",
    appId: "1:452861450276:web:b7b1f9b425a0185e0320b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 