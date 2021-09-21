// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
import { seedDatabase } from "../movieData.js";

/*
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmgrCYExNTvrXqI1NFWpdH5i0bLHWBBs0",
  authDomain: "netflix-website-f9c64.firebaseapp.com",
  projectId: "netflix-website-f9c64",
  storageBucket: "netflix-website-f9c64.appspot.com",
  messagingSenderId: "1029113596955",
  appId: "1:1029113596955:web:f4a551f3e1085c4a25fcbe",
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyA1u-ao7HmFzDNY9TxNzmTbZRxYWJ-mMuA",
  authDomain: "clone-2982e.firebaseapp.com",
  projectId: "clone-2982e",
  storageBucket: "clone-2982e.appspot.com",
  messagingSenderId: "751807198382",
  appId: "1:751807198382:web:7a77f1b5a31fe9b2b6293f",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(firebase);

// Add data to firestore
// seedDatabase only runs one time, then you have to comment it out. Otherwise, the data keeps duplicating :D
//seedDatabase(db);

export { firebase };
export default db;
