// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { seedDatabase } from "../seed";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmgrCYExNTvrXqI1NFWpdH5i0bLHWBBs0",
  authDomain: "netflix-website-f9c64.firebaseapp.com",
  projectId: "netflix-website-f9c64",
  storageBucket: "netflix-website-f9c64.appspot.com",
  messagingSenderId: "1029113596955",
  appId: "1:1029113596955:web:f4a551f3e1085c4a25fcbe",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export { firebase };
