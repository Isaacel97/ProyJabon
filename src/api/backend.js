// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQh5yDA24A8VGYhPYsqisQJNT0ollWc8Y",
  authDomain: "fabricajabon-f1d05.firebaseapp.com",
  projectId: "fabricajabon-f1d05",
  storageBucket: "fabricajabon-f1d05.appspot.com",
  messagingSenderId: "447082439914",
  appId: "1:447082439914:web:22ba5ac53854b9fe716393"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);