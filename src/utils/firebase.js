// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZQZATndK1T3YqkjnWDAwT4PJ_qz4ImSk",
  authDomain: "netflixgpt-4k.firebaseapp.com",
  projectId: "netflixgpt-4k",
  storageBucket: "netflixgpt-4k.firebasestorage.app",
  messagingSenderId: "649841648128",
  appId: "1:649841648128:web:5c5fd74952b28cdc7e6ee5",
  measurementId: "G-8P9Z60D14Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()