import React from "react";

import { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  
  return (
    <div>
      <form>
        <div className="Login-area">
          <div>
            <label>UserName</label>
            <input type="text" placeholder="Enter Username" required></input>
          </div>
          <div>
            <label>UserName</label>
            <input type="text" placeholder="Enter Username" required></input>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
