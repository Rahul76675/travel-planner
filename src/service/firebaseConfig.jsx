// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLtuliEkAqGXSe5RoZUFj1hJSkMI9U-CQ",
  authDomain: "ai-trip-planner-b16ba.firebaseapp.com",
  projectId: "ai-trip-planner-b16ba",
  storageBucket: "ai-trip-planner-b16ba.appspot.com",
  messagingSenderId: "654419959827",
  appId: "1:654419959827:web:ab457688f1e234fe0f1fe6",
  measurementId: "G-DS3935ZN33"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// ✅ Google login function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User logged in:", user);
    return user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    alert(error.message);
  }
};

// ✅ Logout function
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};
