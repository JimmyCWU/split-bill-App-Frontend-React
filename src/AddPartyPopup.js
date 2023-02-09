import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const AddPartyPopup = (props) =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return props.trigger ? (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <button onClick={() => props.setButtonPop(false)}>close</button>
          </Modal.Footer>
        </Modal>
      </div>
    ) : (
      ""
    );
}
export default AddPartyPopup;