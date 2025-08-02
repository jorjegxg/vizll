// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "vizll-5fbc3.firebaseapp.com",
  projectId: "vizll-5fbc3",
  storageBucket: "vizll-5fbc3.firebasestorage.app",
  messagingSenderId: "516349079154",
  appId: "1:516349079154:web:644a9bb451c122bc991ceb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
