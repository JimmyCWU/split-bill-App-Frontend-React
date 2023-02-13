import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import "./Login.css";
import SignUp from "./SignUp";

const Login = () => {
    
    return (
      <div className="menu">
          <LoginForm />
          <SignUp />
      </div>
    );
}
export default Login;