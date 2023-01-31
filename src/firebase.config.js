import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxlfYJ6VrZCCL8lsmAG7HkVxSWl9X8xEk",
  authDomain: "house-marketplace-app-b15e0.firebaseapp.com",
  projectId: "house-marketplace-app-b15e0",
  storageBucket: "house-marketplace-app-b15e0.appspot.com",
  messagingSenderId: "945872800413",
  appId: "1:945872800413:web:1f607dedeca948bc9d6274",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
