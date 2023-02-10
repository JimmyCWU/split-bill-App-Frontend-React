import React from "react";
import "./Login.css";
import { useState } from "react";

const LoginForm = (props) => {
  
  return props.setOpenModal ? (
    <div>
      <form>
        <label>User Name</label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        ></input>
        <label>Password</label>
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          required
        ></input>
      </form>
    </div>
  ) : (
    ""
  );
};
export default LoginForm;
