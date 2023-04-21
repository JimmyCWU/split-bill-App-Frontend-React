import axios from "axios";
import React from "react";
import { useState } from "react";
import '../../css/user-service/SignUp.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ip_address } from "../../env/env.js";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [name, setName] = useState("");
  const api = `http://${ip_address}/user-service/api/auth/register`;

  const handleSignUpForm = (event) => {
    axios
      .post(api, {
        'username': username,
        'password': password,
        'name': name
      })
      .then((res) => {
        console.log(res);


      })
      .catch((err) => {
        console.log(err);
        console.log()
      });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        SignUp
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up Now</Modal.Title>
        </Modal.Header>
        <form>
          <div className="input-box">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input-box"
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>
          <div className="input-box">
            <label>Username:</label>
            <input
              type="text"
              className="input-box"
              placeholder="Enter Username"
              onChange={(e) => setUserName(e.target.value)}
              required
            ></input>
          </div>
          <div className="input-box">
            <label>Password:</label>
            <input
              type="text"
              placeholder="Enter Password"
              className="input-box"
              onChange={(e) => setPassWord(e.target.value)}
              required
            ></input>
          </div>
        </form>
        <Modal.Footer>
          <button
            className="Sign-up-submit-button"
            onClick={handleSignUpForm}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );


}
export default SignUp;