import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./AddBill.css";

const AddBill = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [expense, setExpense] = useState('');
    const [income,setIncome] = useState('');
    const handldeSubmit = () => {
       const api = `http://192.168.1.150/bill-service/api/bill/add`;
       axios
         .post(api, {

         })
         .then((res) => {
           console.log(res);
         })
         .catch((err) => {
           console.log(err);
           console.log();
         });

    }
    return (
      <div>
        <button className="btn" onClick={handleShow}>
          Add A Bill
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add A Bill</Modal.Title>
          </Modal.Header>
          <form>
            <div>
              <div>
                <label>Bill Name :</label>
                <input></input>
              </div>
              <div>
                <label>Total Amount :</label>
                <input></input>
              </div>
              <div className="box">
                <label>Bill Type :</label>
                <div>
                  <label for="AA">AA</label>
                  <input type="radio" id="AA" value="1"></input>
                </div>
                <div>
                  <label for="Transfer">Transfer</label>
                  <input type="radio" id="Transfer" value="0"></input>
                </div>
                <div>
                  <label for="GoDutch">GoDutch</label>
                  <input type="radio" id="GoDutch" value="2"></input>
                </div>
              </div>
              <div className="box">
                <h3>who needs to pay</h3>
                <div>
                  <input placeholder="name"></input>
                  <input placeholder="cost"></input>
                </div>
              </div>
              <div className="box">
                <h3>who pay the bill</h3>
                <div>
                  <input placeholder="name"></input>
                  <input placeholder="cost"></input>
                </div>
              </div>
            </div>
          </form>
          <Modal.Footer>
            <button onClick={handldeSubmit}>Submit</button>
          </Modal.Footer>
        </Modal>
      </div>
    );

}
export default AddBill;