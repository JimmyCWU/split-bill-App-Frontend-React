import React from "react";
import "./Login.css";
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";

const Login = () => {
    
    return (
      <div>
        <div className="menu">
          <svg className="logo-box">
            <text x="50%" y="50%" fill="white" className="logo">
              Hello My App
            </text>
          </svg>
          <div className="button-container">
            <LoginForm />
            <SignUp />
          </div>
        </div>
      </div>
    );
}
export default Login;