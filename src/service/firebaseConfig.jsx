import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLtuliEkAqGXSe5RoZUFj1hJSkMI9U-CQ",
  authDomain: "ai-trip-planner-b16ba.firebaseapp.com",
  projectId: "ai-trip-planner-b16ba",
  storageBucket: "ai-trip-planner-b16ba.appspot.com",
  messagingSenderId: "654419959827",
  appId: "1:654419959827:web:ab457688f1e234fe0f1fe6",
  measurementId: "G-DS3935ZN33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// ✅ Auth setup
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
