import React from "react";
import { useState } from "react";
import "./AddPartyPopup.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";


const AddPartyPopup = () =>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [partyName, setPartyName] = useState("");
  const api = "//192.168.1.150/party-service/api/party/add";

  const handleSubmit = (e) => {
    const getData = localStorage.getItem("token");
    const token = JSON.parse(getData);
    console.log(token);
    console.log(partyName);
    axios.post(api, {
      headers: {
          'Authorization': `Bearer ${token}`
        },
      'partyName': partyName,
    }).then((res) => {
      console.log("ok");
    }).catch((err) => {
      console.log(err);
    })
  }
    return (
      <div>
        <button className="btn" onClick={handleShow}>
          Add Party
        </button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Party</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Party Name</Form.Label>
                <Form.Control
                  type="Party Name"
                  placeholder="Party Name"
                  onChange={(e) => setPartyName(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn" onClick={handleSubmit}>
              Add
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );

    
}
export default AddPartyPopup;