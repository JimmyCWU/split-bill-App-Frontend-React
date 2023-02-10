import React from "react";
import { useState } from "react";
import "./AddPartyPopup.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";


const AddPartyPopup = () =>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <Form.Label>Expense Item</Form.Label>
                <Form.Control type="Expense-Item" placeholder="Expense Item" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Total Cost</Form.Label>
                <Form.Control type="Total-Cost" placeholder="Total Cost" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Date</Form.Label>
                <Form.Control type="Date" placeholder="Date" />
              </Form.Group>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Member Name"
                  >
                    <Form.Control placeholder="Member Name" />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Member Cost"
                  >
                    <Form.Control placeholder="Member Cost" />
                  </FloatingLabel>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn" onClick={handleClose}>
              Add
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );

    
}
export default AddPartyPopup;