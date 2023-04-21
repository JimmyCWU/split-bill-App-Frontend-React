import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../css/bill-service/AA.css";
import { ip_address } from "../../env/env.js";

const AA = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [totalAmount, setTotalAmount] = useState("0");
  const [member, setMember] = useState([]);
  const api = `http://${ip_address}/bill-service/api/bill/add`;


  const submit = (event) => {
    event.preventDefault();
    axios
      .post(api, {
        'totalAmount': totalAmount,
        'memberIdMap': {

        }
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
      <button className="AA-button" onClick={handleShow}>
        AA
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>AA Sharing Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Total Expense:</label>
            <input
              type="text"
              placeholder="$"
              onChange={(e) => setTotalAmount(e.target.value)}
              required
            ></input>
          </div>
          <label>Add Members</label>
          <div>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setMember(e.target.value)}
              required
            ></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={submit}>Submit</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AA;
