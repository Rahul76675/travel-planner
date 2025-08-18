import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      alert(`Welcome ${result.user.displayName}`);
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>AI Trip Planner</h2>
      <button 
        onClick={handleLogin} 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
