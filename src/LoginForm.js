import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./LoginForm.css";

const LoginForm = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const api = `http://192.168.1.150/api/auth/login`;
  const [token, setToken] = useState("");
  const navigate = useNavigate();

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
        console.log("login success");
        navigate("/HomePage");

        
      })
      .catch((err) => {
        console.log(err);
        console.log("login fail");
      });
  };
  
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        LogIn
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
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
          </div>
        </form>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default LoginForm;
