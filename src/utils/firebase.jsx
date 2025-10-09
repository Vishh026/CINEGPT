// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDz1juIo9tJ6NHqiE4nBfxa8Qk-mEYWpM",
  authDomain: "cinegpt-bd0bb.firebaseapp.com",
  projectId: "cinegpt-bd0bb",
  storageBucket: "cinegpt-bd0bb.firebasestorage.app",
  messagingSenderId: "272545127629",
  appId: "1:272545127629:web:b3ee33b5eecc89d4e59d84",
  measurementId: "G-BWK2M6S5WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);