// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALVJySM5OlLnVfCIzOIBd_L1LfZdMbNiM",
  authDomain: "netflixgpt4-bb8b0.firebaseapp.com",
  projectId: "netflixgpt4-bb8b0",
  storageBucket: "netflixgpt4-bb8b0.appspot.com",
  messagingSenderId: "10560682624",
  appId: "1:10560682624:web:a51e80ae6f5eb888600465",
  measurementId: "G-JRMSE24BFM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();