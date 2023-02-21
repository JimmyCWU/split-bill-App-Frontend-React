import axios from "axios";
import React from "react";
import { useState } from "react";
import './SignUp.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SignUp = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const api = `http://192.168.1.150/api/auth/register`;

    const handleSignUpForm = (event) => {
        axios
          .post(api, {
            'username': username,
            'password': password,
            'email': email,
            'name':name
          })
          .then((res) => {
            console.log(res);
          
          })
          .catch((err) => {
            console.log(err);
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
            <Modal.Title>Sign Up Now!</Modal.Title>
          </Modal.Header>
          <form>
            <div>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label>UserName:</label>
              <input
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setUserName(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label>Password:</label>
              <input
                type="text"
                placeholder="Enter Password"
                onChange={(e) => setPassWord(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
          </form>
          <Modal.Footer>
            <Button onClick={handleSignUpForm}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );


}
export default SignUp;