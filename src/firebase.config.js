// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8SfKJkerPoJIPfpQeLMosKq2By7ABy54",
  authDomain: "jobnest-17d94.firebaseapp.com",
  projectId: "jobnest-17d94",
  storageBucket: "jobnest-17d94.firebasestorage.app",
  messagingSenderId: "374355683915",
  appId: "1:374355683915:web:d6c65ffb1d60634c0b7bce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};