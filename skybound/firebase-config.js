// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI4wgEjagKT4snzQUGE3mc0K0-U08kWis",
  authDomain: "skybound-a6722.firebaseapp.com",
  projectId: "skybound-a6722",
  storageBucket: "skybound-a6722.appspot.com",
  messagingSenderId: "900931234811",
  appId: "1:900931234811:web:3c509c7fbf23c64e0f395e",
  measurementId: "G-TYCRTG6JC5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);