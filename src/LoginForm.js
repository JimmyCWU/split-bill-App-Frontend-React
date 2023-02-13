import axios from "axios";
import React from "react";
import { useState } from "react";

import "./LoginForm.css";

const LoginForm = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const api = `http://192.168.1.150/api/auth/login`;
  const [token, setToken] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(api, 
        {
        'username':username,
        'password':password 
      })
      .then((res) => {
        console.log(res);
        setToken(res.data.token);
        localStorage.setItem("token", JSON.stringify(token));
        console.log(JSON.stringify(token));
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div>
      <form>
        <div className="Login-area">
          <div>
            <label>UserName</label>
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <button onClick={handleSubmit}>login</button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
